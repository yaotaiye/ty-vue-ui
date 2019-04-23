import TyButton from './button.vue';

TyButton.install = function(Vue) {
    Vue.component(TyButton.name, TyButton);
};
//默认输出名字为default
export default TyButton;