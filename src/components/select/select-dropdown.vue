<template>
    <div
            class="ty-select-dropdown ty-popper"
            :class="[{ 'is-multiple': $parent.multiple }, popperClass]"
            :style="{ minWidth: minWidth }">
        <slot></slot>
    </div>
</template>

<script>
    import Popper from '../utils/vue-popper';
    export default {
        name: "TySelectDropdown",
        mixins: [Popper],
        props: {
            placement: {
                default: 'bottom-start'
            },
            boundariesPadding: {
                default: 0
            },

            popperOptions: {
                default() {
                    return {
                        gpuAcceleration: false
                    };
                }
            },

            visibleArrow: {
                default: true
            },

            appendToBody: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                minWidth: '',

            };
        },
        computed: {
            popperClass() {
                return this.$parent.popperClass;
            }
        },
        watch: {
            '$parent.inputWidth'() {
                this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
            }
        },
        methods:{

        },
        mounted() {
            //this.minWidth=this.$parent.$el.getBoundingClientRect().width + 'px';

            this.referenceElm = this.$parent.$refs.reference.$el;
            this.$parent.popperElm = this.popperElm = this.$el;
            this.$on('updatePopper', () => {
                if (this.$parent.visible) this.updatePopper();

            });
            this.$on('destroyPopper', this.destroyPopper);
            this.updatePopper()
        }
    }
</script>

<style scoped>

</style>