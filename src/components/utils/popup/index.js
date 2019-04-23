import Vue from 'vue';
import merge from '../merge';
import PopupManager from './popup-manager';

let idSeed=1;
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        openDelay: {},
        closeDelay: {},
        zIndex: {},
        modal: {
            type: Boolean,
            default: false
        },
        modalFade: {
            type: Boolean,
            default: true
        },
        modalClass: {},
        modalAppendToBody: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return{
            opened:false,
            rendered: false
        }
    },
    beforeMount() {
        this._popupId = 'popup-' + idSeed++;
        PopupManager.register(this._popupId, this);
    },
    methods: {
        open(options){
            if (!this.rendered) {
                this.rendered = true;
            }
            const props = merge({}, this.$props || this, options);
            this.doOpen(props);
        }
        ,doOpen(props){
            if (this.$isServer) return;
            if (this.opened) return;
            const dom = this.$el;
            const modal = props.modal;
            const zIndex = props.zIndex;
            if (zIndex) {
                PopupManager.zIndex = zIndex;
            }
            if (modal) {
                PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);
            }
            dom.style.zIndex = PopupManager.nextZIndex();
            this.opened = true;
        }
        ,close() {
           this.doClose()
        }
        ,doClose(){
            this.opened = false;
            this.beforeDestroy();
        }
        ,beforeDestroy() {
            PopupManager.deregister(this._popupId);
            PopupManager.closeModal(this._popupId);
        },

    },
    watch: {
        visible(val) {
            if (val) {
                if (!this.rendered) {
                    this.rendered = true;
                    Vue.nextTick(() => {
                        this.open();
                    });
                } else {
                    this.open();
                }
            } else {
                this.close();
            }
        }
    },

}
export {
    PopupManager
};