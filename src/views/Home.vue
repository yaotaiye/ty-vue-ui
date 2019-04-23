<template>
    <div>

        <h1 class="mt-20">组件列表</h1>
        <div class="pd-10">
            <ul class="mt-10">
                <li class="nav-list"> <router-link to="/button" >按钮</router-link></li>
                <li class="nav-list"> <router-link to="/grid" >网格系统</router-link></li>
                <li class="nav-list"> <router-link to="/date" >时间控件</router-link></li>
                <li class="nav-list"> <router-link to="/icon" >图标</router-link></li>
                <li class="nav-list"> <router-link to="/dialog" >dialog 弹框</router-link></li>
            </ul>
        </div>






    </div>
</template>

<script>


    export default {
        name: "Home",
        data(){
            return{
                dialogVisible: false
                ,modal:false
            }
        },
        mounted:function () {
          //  this.test();

        },
        methods:{
            open () {
                 console.log('open');
             },
            close () {
                console.log('close');
            },
            opened(){
                console.log('opened');
            }
            ,closed(){
                console.log('closed')
            }
        }
    }
</script>
