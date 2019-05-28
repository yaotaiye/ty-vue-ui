<template>
    <div class="ty-select"
         :class="[selectSize ? 'ty-select--' + selectSize : '']"
         @click.stop="toggleMenu"
         :style="{ 'max-width': SelectWidth + 'px', width: '100%' }"
         v-clickoutside="handleClose"
    >
        <ty-input :size="size" :name="name"   ref="reference"     :readonly="readonly"  v-model="selectedLabel" :placeholder="placeholder">
            <i slot="suffix" class="ty-input__icon iconfont icon-moreunfold" :class="[{'is-reverse':visible}]"></i>
        </ty-input>
        <transition name="ty-zoom-in-top">
            <ty-select-dropdown
                    ref="popper"
                    :append-to-body="popperAppendToBody"
                    v-show="visible "
            >
                <div class="ty-scrollbar">
                    <div class="ty-select-dropdown__wrap ty-scrollbar__wrap"
                         style="margin-bottom: -21px; margin-right: -21px;">
                        <ul class="ty-scrollbar__view ty-select-dropdown__list" @click.stop="setSelected">
                            <li v-for="item in data" :key="item.value" class="ty-select-dropdown__item" :class="[{'selected':item.value==selectedLabel}]"><span>{{item.value}}</span></li>
                        </ul>
                    </div>
                </div>
            </ty-select-dropdown>
        </transition>

    </div>
</template>

<script>
    import TyInput from '../input/index';
    import TySelectDropdown from "./select-dropdown";
    import Clickoutside from '../utils/clickoutside';

    export default {
        name: "TySelect",
        directives: { Clickoutside },//自定义指令
        data(){
            return{
                visible: false,
                inputWidth:0,
                softFocus: false,
                menuVisibleOnFocus: false,
                selectedLabel: '',
            }
        },
        components: {
            TySelectDropdown,
            TyInput
        },
        props: {
            size: String,
            popperAppendToBody: {
                type: Boolean,
                default: true
            },
            automaticDropdown: Boolean,
            filterable: Boolean,
            multiple: Boolean,
            data:Array,
            SelectWidth:String,
            value:[String,Number],
            name:String,
            size:String,
            placeholder:{
                type:String,
                default:'请选择'
            }

        },
        methods: {
            toggleMenu() {
                if (!this.selectDisabled) {
                    if (this.menuVisibleOnFocus) {
                        this.menuVisibleOnFocus = false;
                    } else {
                        this.visible = !this.visible;
                    }
                    if (this.visible) {
                        (this.$refs.input || this.$refs.reference).focus();
                    }
                }
            },
            handleFocus(event) {
                if (!this.softFocus) {
                    if (this.automaticDropdown || this.filterable) {
                        this.visible = true;
                        this.menuVisibleOnFocus = true;
                    }
                    this.$emit('focus', event);
                } else {
                    this.softFocus = false;
                }
            },
            setSelected(e){
                this.selectedLabel=e.target.firstChild.innerHTML;
                this.toggleMenu();
                this.$emit('select',  this.selectedLabel);
            },
            handleClose() {
                this.visible = false;
            },
        },
        computed: {
            selectSize() {
                return this.size;
            },
            selectDisabled() {
                return this.disabled ;
            },
            readonly() {
                return !this.filterable || this.multiple ;
            },
        },
        mounted(){
            this.selectedLabel=this.value;
            const reference=this.$refs.reference;
            this.$nextTick(()=>{
                if(reference&&reference.$el){
                    this.inputWidth=reference.$el.getBoundingClientRect().width;
                }
            });


        },
        watch:{
            selectedLabel(val){
                this.$emit('change', val);
            }
        }

    }
</script>

<style scoped>

</style>