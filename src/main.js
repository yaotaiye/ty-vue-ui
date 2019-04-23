import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assects/css/demo.css';

//完整引入
import TyVueUI from './components/index.js';
import './components/style.css';
Vue.use(TyVueUI);


//部分引入
/*
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
*/



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')