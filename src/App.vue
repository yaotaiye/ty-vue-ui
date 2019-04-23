<template>
    <div class="pd-10">
        <router-view/>
    </div>
</template>
<script>

    //import Loading from "@/components/Loading.vue";
    //import Crumbs from "@/components/Crumbs.vue";
    export default {
        name: "App",
        components: {

        },
        mounted() {
            //console.log('加载APP');
            this.$router.push({
                name: 'home'
            });
        }
    };
</script>