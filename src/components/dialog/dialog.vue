<template>
    <transition  name="dialog-fade"   @after-enter="afterEnter" @after-leave="afterLeave">
        <div class="ty-dialog__wrapper" v-show="visible" @click.self="handleWrapperClick">
            <div
                role="dialog"
                aria-modal="true"
                :aria-label="title || 'dialog'"
                class="ty-dialog"
                :class="[{ 'is-fullscreen': fullscreen, 'ty-dialog--center': center }, customClass]"
                ref="dialog"
                :style="style">
                <div class="ty-dialog__header">
                    <slot name="title">
                        <span class="ty-dialog__title">{{ title }}</span>
                    </slot>
                    <button
                            type="button"
                            class="ty-dialog__headerbtn"
                            aria-label="Close"
                            v-if="showClose"
                            @click="handleClose">
                        <i class="ty-dialog__close iconfont icon-close"></i>
                    </button>
                </div>
                <div class="ty-dialog__body" v-if="rendered"><slot></slot></div>
                <div class="ty-dialog__footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
           </div>
        </div>
    </transition>

</template>

<script>
    import Popup from '../utils/popup/index';
    export default {
        name: "TyDialog",
       mixins: [Popup,],
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },

            modal: {
                type: Boolean,
                default: true
            },

            modalAppendToBody: {
                type: Boolean,
                default: true
            },

            appendToBody: {
                type: Boolean,
                default: false
            },

            lockScroll: {
                type: Boolean,
                default: true
            },

            closeOnClickModal: {
                type: Boolean,
                default: true
            },

            closeOnPressEscape: {
                type: Boolean,
                default: true
            },

            showClose: {
                type: Boolean,
                default: true
            },

            width: String,

            fullscreen: Boolean,

            customClass: {
                type: String,
                default: ''
            },

            top: {
                type: String,
                default: '15vh'
            },
            beforeClose: Function,
            center: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                closed: false
                ,rendered: false

            }
        },
        computed: {
            style() {
                let style = {};
                if (!this.fullscreen) {
                    style.marginTop = this.top;
                    if (this.width) {
                        style.width = this.width;
                    }
                }
                return style;
            }
        },
        methods:{
            handleWrapperClick(){

            }
            ,afterEnter(){
                this.$emit('opened');
            }
            ,afterLeave(){
                this.$emit('closed');
            }
            ,hide(){
                this.$emit('update:visible', false);
                this.$emit('close');
                this.closed = true;
            }
            , updatePopper() {

            }
            ,handleClose() {
                    this.hide();
            },
        },

        mounted() {
            if (this.visible) {
                this.open();
            }
        },
    }
</script>

