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

            </ul>
        </div>
  <!-- <ty-select></ty-select>-->


    </div>
</template>

<script>


    export default {
        name: "Home",
        data(){
            return{
                text:'asdas'
                ,dialogVisible: false
                ,modal:false
                ,fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
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
            change(e){console.log('change：'+e)},

        }
    }
</script>
