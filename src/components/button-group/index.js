import TyButtonGroup from './button-group.vue';

TyButtonGroup.install = function(Vue) {
    Vue.component(TyButtonGroup.name, TyButtonGroup);
};
//默认输出名字为default
export default TyButtonGroup;