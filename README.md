# ty-design-vue
仿造饿了么UI，基于vue框架，构建一套UI插件。
# 插件安装
 npm install ty-design-vue --save。
# vue项目引用插件
在vue项目的main.js,引用插件。
# 完整引用方式
import TyDesignVue from 'ty-design-vue';
Vue.use(TyDesignVue);
import 'ty-design-vue/lib/style.css';
# 部分引入方式
import {TyButton,TyButtonGroup,TyRow,TyCol,TyPicker,TyDialog,TyIcon} from './components/index.js';  
import './components/button/style.css';  
Vue.use(TyButton);  
import './components/button-group/style.css';  
Vue.use(TyButtonGroup);  
import './components/row/style.css';  
Vue.use(TyRow);  
Vue.use(TyCol);  
import './components/date-picker/style.css';  
Vue.use(TyPicker);  
import './components/dialog/style.css';  
import './components/utils/popup/style.css';  
Vue.use(TyDialog);  
import './components/icon/font/iconfont.css';  
Vue.use(TyIcon);  
# 使用示例
在views文件中，有各个组件详细的使用方法。https://github.com/yaotaiye/ty-vue-ui/tree/master/src/views
# 组件预览地址
https://yaotaiye.github.io/ty-vue-ui/dist/index.html#/

