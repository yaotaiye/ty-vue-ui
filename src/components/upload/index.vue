<template>
    <div>
        <upload ref="upload-inner" :action="action" :headers="headers" :type="type" :name="name" :multiple="multiple"
        :accept="accept" :file-list="uploadFiles" :auto-upload="autoUpload" :list-type="listType"
        :disabled="uploadDisabled"  :limit="limit" :onStart="handleStart" :on-progress="handleProgress" :on-success="handleSuccess"
         :on-error="handleError" :onPreview="onPreview" :on-remove="handleRemove" :httpRequest="httpRequest"
        >
            <slot></slot>
        </upload>
    </div>
</template>

<script>
    function noop() {

    }
    import upload from './upload';
    export default {
        name: "TyUpload",
        components:{
            upload
        },
        provide(){
            return{
                uploader:this
            }
        },
        inject:{
            elForm:{
                default:''
            }
        },
        props: {
            action: {
                type: String,
                required: true
            },
            headers: {
                type: Object,
                default() {
                    return {}
                }
            },
            data: Object,
            multiple: Boolean,
            name: {
                type: String,
                default: 'file'
            },
            drag: Boolean,
            dragger: Boolean,
            showFileList: {
                type: Boolean,
                default: true
            },
            accept: String,
            type: {
                type: String,
                default: 'select'
            },
            beforeUpload: Function,
            beforeRemove: Function,
            onRemove: {
                type: Function,
                default: noop
            },
            onChange: {
                type: Function,
                default: noop
            },
            onPreview: {
                type: Function
            },
            onSuccess: {
                type: Function,
                default: noop
            },
            onError: {
                type: Function,
                default: noop
            },
            onProgress: {
                type: Function,
                default: noop
            },
            fileList: {
                type: Array,
                default() {
                    return []
                }
            },
            autoUpload: {
                type: Boolean,
                default: true
            },
            listType: {
                type: String,
                default: 'text'
            },
            httpRequest: Function,
            disabled: Boolean,
            limit: Number,
            onExceed:{
                type:Function,
                default:noop
            }
        }
        ,data(){
            return{
                uploadFiles:[],
                dragOver:false,
                draging:false,
                tempIndex:1
            }
        },
        computed:{
            uploadDisabled(){
                return this.disabled || (this.elForm || {}).display;
            }
        },
        watch:{
            fileList:{
                immediate:true,
                handler(fileList){
                    this.uploadFiles=fileList.map(item=>{
                        item.uid=item.uid||(Date.now()+this.tempIndex++);
                        item.status=item.status||'success';
                        return item;
                    })
                }

            }
        },
        methods:{
            handleStart(rawFile){
                rawFile.uid=Date.now()+this.tempIndex++;
                let file={
                    status:'ready',
                    name:rawFile.name,
                    size:rawFile.size,
                    percentage:0,
                    uid:rawFile.uid,
                    raw:rawFile
                };
                if(this.listType==='picture-card'||this.listType==='picture'){
                    try{
                        file.url=URL.createObjectURL(rawFile);
                    }
                    catch (e) {
                        console.error('[Error][Upload]',e);
                        return ;
                    }
                }
                this.uploadFiles.push(file);
                this.onChange(file,this.uploadFiles);
            },
            handleProgress(ev,rawFile){
                const file=this.getFile(rawFile);
                this.onProgress(ev,file,this.uploadFiles);
                file.status='uploading';
                file.percentage=ev.percent||0;
            },
            handleSuccess(res, rawFile) {
                const file = this.getFile(rawFile);
                if (file) {
                    file.status = 'success';
                    file.response = res;
                    this.onSuccess(res, file, this.uploadFiles);
                    this.onChange(file, this.uploadFiles);
                }
            },
            getFile(rawFile){
                let fileList=this.uploadFiles;
                let target;
                //要求每一项条件返回true，结果才为真
                fileList.every(item=>{
                    target=rawFile.uid===item.uid?item:null;
                    return !target;
                });

                return target;
            },
            clearFiles(){
                this.uploadFiles=[];
            },
            submit(){
                this.uploadFiles.filter(file=>file.status==='ready')
                    .forEach(file=>{
                        this.$refs['upload-inner'].upload(file.raw);
                    });
            },

            handleRemove(file, raw) {

            },
            handleError(err, rawFile) {
                const file = this.getFile(rawFile);
                const fileList = this.uploadFiles;

                file.status = 'fail';

                fileList.splice(fileList.indexOf(file), 1);

                this.onError(err, file, this.uploadFiles);
                this.onChange(file, this.uploadFiles);
            },
        },
        beforeDestroy(){
            this.uploadFiles.forEach(file=>{
                if(file.url&&file.url.indexOf('blob:')===0){
                    URL.revokeObjectURL(file.url)
                }
            });
        },
        mounted(){


            const uploadData={
                props:{
                    type:this.type,
                    drag:this.drag,
                    action:this.action,
                    multiple:this.multiple,
                    'before-upload':this.beforeUpload,
                    headers:this.headers,
                    name:this.name,
                    data:this.data,
                    accept:this.accept,
                    fileList:this.fileList,
                    autoUpload:this.autoUpload,
                    listType: this.listType,
                    disabled:this.disabled,
                    limit:this.limit,
                    'on-start':this.handleStart,
                    'on-progress':this.handleProgress,
                    'on-success':this.handleSuccess,
                    'on-error':this.handleError,
                    'on-preview':this.onPreview,
                    'on-remove':this.handleRemove,
                    'http-request':this.httpRequest

                }
            }


        }



    }
</script>

<style scoped>

</style>