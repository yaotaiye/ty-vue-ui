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
                <li class="nav-list"> <router-link to="/upload" >文件上传</router-link></li>
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
                ,fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            }
        },
        mounted:function () {
          //  this.test();

        },
        methods:{
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                console.log(`${files.length + fileList.length} 个文件`)
            },
            beforeRemove(file, fileList) {
                console.log(`确定移除 ${ file.name }？`)
               // return this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleChange(file, fileList) {
               // console.log(file)
            }


        }
    }
</script>
