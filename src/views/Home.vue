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
                <li class="nav-list"> <router-link to="/image" >image</router-link></li>

            </ul>
        </div>

    </div>
</template>

<script>


    export default {
        name: "Home",
        data(){
            return{
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                urls: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ]
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
