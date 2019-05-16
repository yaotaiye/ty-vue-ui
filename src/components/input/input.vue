<template>
    <div :class="[
    type === 'textarea' ? 'ty-textarea' : 'ty-input',
    inputSize ? 'ty-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'ty-input--prefix': prefixIcon,
      'ty-input--suffix': suffixIcon
    }
    ]">
        <span class="ty-input__prefix" v-if="prefixIcon">
             <span class="ty-input__suffix-inner">
                <i class="ty-input__icon iconfont" :class="prefixIcon"></i>
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
        >
        <span class="ty-input__suffix" v-if="suffixIcon">
            <span class="ty-input__suffix-inner">
                <i class="ty-input__icon iconfont" :class="suffixIcon"></i>
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
            }
        },
        props:{
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
                return this.value === null || this.value === undefined ? '' : String(this.value);
            },
        },
        methods:{
            getInput() {
                return this.$refs.input
            },
            setNativeInputValue() {
                const input = this.getInput();
                if (!input) return;
                if (input.value === this.nativeInputValue) return;
                input.value = this.nativeInputValue;
            },
            handleInput(event) {
                if (event.target.value === this.nativeInputValue) return;
                this.$emit('input', event.target.value);
                this.$nextTick(this.setNativeInputValue);
            },
            handleChange(event) {
                this.$emit('change', event.target.value);
            },
            handleFocus(event) {
                this.focused = true;
                this.$emit('focus', event);
            },
            handleBlur(event) {
                this.focused = false;
                this.$emit('blur', event);

            },
            clear() {
                this.$emit('input', '');
                this.$emit('change', '');
                this.$emit('clear');
            },
        },
        watch:{
            type(){
                this.$nextTick(()=>{

                })
            }
        },
        mounted(){
            this.setNativeInputValue();
        }
    }
</script>

<style scoped>

</style>