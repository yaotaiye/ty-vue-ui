import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        api:process.env.NODE_ENV === 'production'?'':'DAILI/',
        domain:process.env.NODE_ENV === 'production'?'http://10.252.31.168:8080':'',
        loading:false

    },
    mutations: {
        hideLoad(state){
            state.loading = false;
        },
        showLoad(state){
            state.loading = true;
        },
    },
    actions: {
        hideLoadAct({commit}){
            commit("hideLoad");
        },
        showLoadAct({commit}){
            commit("showLoad");
        },
    },
    getters:{
        getLoad(state){
            return  state.loading;
        }
    }
})