<template>
    <div>

        <h1 class="mt-20">组件列表</h1>
        <div class="pd-10">
            <ul class="mt-10">
                <li class="nav-list"> <router-link to="/input" >文本框input</router-link></li>
                <li class="nav-list"> <router-link to="/button" >按钮</router-link></li>
                <li class="nav-list"> <router-link to="/grid" >网格系统</router-link></li>
                <li class="nav-list"> <router-link to="/date" >时间控件</router-link></li>
                <li class="nav-list"> <router-link to="/icon" >图标</router-link></li>
                <li class="nav-list"> <router-link to="/dialog" >dialog 弹框</router-link></li>
                <li class="nav-list"> <router-link to="/upload" >文件上传</router-link></li>
                <li class="nav-list"> <router-link to="/pagination" >分页</router-link></li>
                <li class="nav-list"> <router-link to="/select" >下拉框</router-link></li>

            </ul>
        </div>



    </div>
</template>

<script>


    export default {
        name: "Home",
        data(){
            return{
                options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                },
                {
                    value: '选项6',
                    label: '黄金糕'
                }, {
                    value: '选项7',
                    label: '双皮奶'
                }, {
                    value: '选项8',
                    label: '蚵仔煎'
                }, {
                    value: '选项9',
                    label: '龙须面'
                }, {
                    value: '选项10',
                    label: '北京烤鸭'
                },

                ],
            }
        },
        mounted:function () {
          //  this.test();

        },
        methods:{
            input(e){
              console.log('input：'+e)
            },
            blur(e){console.log('blur：'+e)},
            focus(e){console.log('focus：'+e)},
            change(e){
                console.log('change：'+e);
                this.text=e;

            },

        }
    }
</script>
