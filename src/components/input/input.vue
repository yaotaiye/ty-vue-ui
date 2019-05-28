<template>
    <div :class="[
    type === 'textarea' ? 'ty-textarea' : 'ty-input',
    inputSize ? 'ty-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'ty-input--prefix': prefixIcon,
      'ty-input--suffix': suffixIcon ||  clearable
    }
    ]">
        <span class="ty-input__prefix" v-if="$slots.prefix||prefixIcon">
             <span class="ty-input__suffix-inner">
                <i class="ty-input__icon iconfont" v-if="!$slots.prefix" :class="prefixIcon"></i>
                 <slot name="prefix"></slot>
            </span>
        </span>
        <input v-bind="$attrs"
               ref="input"
               class="ty-input__inner"
               :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
               :disabled="inputDisabled"
               :readonly="readonly"
               :autocomplete="autocomplete"
               @input="handleInput"
               @focus="handleFocus"
               @blur="handleBlur"
               @change="handleChange"
               @mouseenter="hovering = true"
               @mouseleave="hovering = false"
               :name="name"
        >
        <span class="ty-input__suffix" v-if="$slots.suffix||suffixIcon || showClear || showPassword">
            <span class="ty-input__suffix-inner">
                <i class="ty-input__icon iconfont" v-if="!showClear && !$slots.suffix" :class="suffixIcon"></i>
                <i class="ty-input__icon iconfont icon-browse" v-if="showPwdVisible"  @click.stop="handlePasswordVisible"  ></i>
                <i class="ty-input__icon iconfont icon-close" v-if="showClear" @click.stop="clearText"  ></i>
                <template v-if="!showClear && !showPwdVisible">
                    <slot name="suffix"></slot>
                </template>
            </span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "TyInput",
        data(){
            return{
                passwordVisible: false,
                hovering: false,
                focused: false,
                inputValue:''

            }
        },
        props:{
            name:String,
            value:[String,Number],
            suffixIcon: String,
            prefixIcon: String,
            size:String,
            resize:String,
            form:String,
            disabled:Boolean,
            readonly:Boolean,
            type:{
                type:String,
                default:'text'
            },
            autosize:{
                type:[Boolean,Object],
                default:false
            },
            clearable:{
                type:Boolean,
                default:false
            },
            showPassword: {
                type: Boolean,
                default: false
            },
            autocomplete: {
                type: String,
                default: 'off'
            },

        },
        computed:{
            inputSize() {
                return this.size
            },
            inputDisabled() {
                return this.disabled
            },
            nativeInputValue() {
                return this.inputValue === null || this.inputValue === undefined ? '' : String(this.inputValue);
            },
            showClear() {
                return this.clearable &&
                    !this.inputDisabled &&
                    !this.readonly &&
                    this.nativeInputValue
                    //&& this.hovering
            },
            showPwdVisible() {
                return this.showPassword &&
                    !this.inputDisabled &&
                    !this.readonly &&
                    (!!this.nativeInputValue || this.focused);
            }
        },
        methods:{
            focus() {
                this.getInput().focus();
            },
            blur() {
                this.getInput().blur();
            },
            getInput() {
                return this.$refs.input
            },
            setNativeInputValue() {
              const input = this.getInput();
                if (!input) return;
                if(input.value ===this.inputValue){ return;}
                 input.value= this.inputValue;
            },
            handleInput(event) { //正在输入
                if (event.target.value === this.nativeInputValue) return;
                this.$emit('input', event.target.value);
                this.inputValue=event.target.value;
                this.$nextTick(this.setNativeInputValue);
            },
            handleChange(event) {  //文本发生变化
                this.$emit('change', event.target.value);
            },
            handleFocus(event) { //点击框内
                this.focused = true;
                this.$emit('focus', event);
            },
            handleBlur(event) { //点击框外
                this.focused = false;
                this.$emit('blur', event);

            },
            clearText() {
                this.getInput().value='';
                this.inputValue='';
                this.$emit('change', '');

            },
            handlePasswordVisible() {
                this.passwordVisible = !this.passwordVisible;
                this.focus();
            },
        },
        watch:{
            type(){
                this.$nextTick(()=>{

                })
            },
            nativeInputValue() {
                this.setNativeInputValue();
            },
            value(val){
                this.inputValue=val;
            }
        },
        mounted(){
            this.inputValue=this.value;
            this.setNativeInputValue();
        }
    }
</script>

<style scoped>

</style>