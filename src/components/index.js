//将输出名字为default的组件更改 TyButton
import {default as TyInput } from './input/index';
import {default as TyButton } from './button/index';
import {default as TyButtonGroup } from './button-group/index';
import {default as TyRow } from './row/index';
import {default as TyCol } from './col/index';
import {default as TyPicker } from './date-picker/index';
import {default as TyDialog } from './dialog/index';
import {default as TyIcon } from './icon/index';
import {default as TyUpload } from './upload/index.js';
import {default as TyPagination } from './pagination/index.js';
import {default as TySelect } from './select/index.js';

const components = [
     TyInput
    ,TyButton
    ,TyButtonGroup
    ,TyRow
    ,TyCol
    ,TyPicker
    ,TyDialog
    ,TyIcon
    ,TyUpload
    ,TyPagination
    ,TySelect
];
const install = function(Vue, opts = {}) {

    components.forEach(component => {
        Vue.component(component.name, component);
    });
  /*
    Vue.use(Loading.directive);

    Vue.prototype.$ELEMENT = {
        size: opts.size || '',
        zIndex: opts.zIndex || 2000
    };

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;
   */
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    TyInput
    ,TyButton
    ,TyButtonGroup
    ,TyRow
    ,TyCol
    ,TyPicker
    ,TyDialog
    ,TyIcon
    ,TyUpload
    ,TyPagination
    ,TySelect
}
export default {
    version: '1.0.0',
    install
}