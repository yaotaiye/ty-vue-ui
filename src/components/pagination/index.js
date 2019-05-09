import TyPagination from './pagination.vue';

/* istanbul ignore next */
TyPagination.install = function(Vue) {
    Vue.component(TyPagination.name, TyPagination);
};

export default TyPagination;
