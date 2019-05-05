<template>
    <div @click="handleClick" @keydown="handleKeydown" style="display: inline-block">
        <slot></slot>
        <input style="display: none;" class="el-upload__input" type="file" ref="input" :name="name" @change="handleChange" :multiple="multiple" :accept="accept"></input>
    </div>
</template>

<script>
    import ajax from './ajax';
    export default {
        name: "upload",
        props: {
            type: String,
            action: {  //上传地址
                type: String,
                required: true
            },
            name: { //上传文件字段
                type: String,
                default: 'file'
            },
            data: Object, //上传额外附带参数
            headers: Object,//设置上传请求头部
            withCredentials: Boolean,
            multiple: Boolean, //是否允许上传多个文件
            accept: String, //接受文件上传类型
            onStart: Function,//开始钩子
            onProgress: Function,//上传中钩子
            onSuccess: Function,//成功钩子
            onError: Function,//上传失败钩子
            beforeUpload: Function,//上传之前钩子
            drag: Boolean, //是否拖拽上传
            onPreview: { //上传预览钩子
                type: Function,
                default: function() {}
            },
            onRemove: {
                type: Function,
                default: function() {}
            },
            fileList: Array,//额外添加上传文件
            autoUpload: Boolean,//是否在选取文件后立即上传
            listType: String,//文件列表类型
            httpRequest: { //上传行为ajax，可自定义实现
                type: Function,
                default: ajax
            },
            disabled: Boolean,//是否禁用
            limit: Number,//上传数量限制
            onExceed: Function //文件超出限制钩子
        },
        data(){
            return{
                mouseover:false,
                reqs:{}
            }
        },
        methods:{
            isImage(str){
                return str.indexOf('image')!==-1;
            },
            handleChange(ev){

                const files=ev.target.files;
                if(!files) return;
                this.uploadFiles(files)

            },
            uploadFiles(files){
                if(this.limit&&this.fileList.length+files.length>this.limit){
                    this.onExceed && this.onExceed(files, this.fileList);
                    return ;
                }
                let postFiles= Array.prototype.slice.call(files);
                if(!this.multiple){postFiles=postFiles.slice(0,1)}
                if(postFiles.length===0){return ;}
                postFiles.forEach(rawFile=>{
                    this.onStart(rawFile);
                    if(this.autoUpload){
                        this.upload(rawFile)
                    }
                });
            },
            upload(rawFile){
                console.log(rawFile)
                this.$refs.input.value=null;
               /* if(!this.beforeUpload){
                    return this.post(rawFile)
                }*/

                this.post(rawFile);

            },
            post(rawFile){
                const {uid}=rawFile;
                const options={
                    headers:this.headers,
                    file:rawFile,
                    data:this.data,
                    filename:this.name,
                    action:this.action,
                    onProgress:e=>{
                        this.onProgress(e,rawFile)
                    },
                    onSuccess:res=>{
                        this.onSuccess(res,rawFile);
                        delete this.reqs[uid];
                    },
                    onError:err=>{
                        this.onError(err,rawFile);
                        delete this.reqs[uid];
                    }
                };
                const req=this.httpRequest(options);
                this.reqs[uid]=req;
                if(req&&req.then){
                    req.then(options.onSuccess,options.onError)
                }
            },
            handleClick(){
                if(!this.disabled){
                    this.$refs.input.value=null;
                    this.$refs.input.click();
                }
            },
            handleKeydown(e) {
                if (e.target !== e.currentTarget) return;
                if (e.keyCode === 13 || e.keyCode === 32) {
                    this.handleClick();
                }
            }

        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>