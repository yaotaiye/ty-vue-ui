<template>
    <div>
        <table class="ty-table">
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>action</td>
                <td>必选参数，上传的地址	</td>
                <td>String</td>
                <td>--</td>
            </tr>
            <tr>
                <td>headers</td>
                <td>设置上传头部</td>
                <td>String</td>
                <td>--</td>
            </tr>
            <tr>
                <td>multiple</td>
                <td>是否支持多文件上传</td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>data</td>
                <td>上传时附带的额外参数	</td>
                <td>Object</td>
                <td>--</td>
            </tr>
            <tr>
                <td>name</td>
                <td>上传的文件字段名	</td>
                <td>String</td>
                <td>--</td>
            </tr>
            <tr>
                <td>accept</td>
                <td>接受上传的文件类型（thumbnail-mode 模式下此参数无效）</td>
                <td>String</td>
                <td>--</td>
            </tr>
            <tr>
                <td>on-preview</td>
                <td>点击文件列表中已上传的文件时的钩子</td>
                <td>function(file)</td>
                <td>--</td>
            </tr>

            <tr>
                <td>on-remove</td>
                <td>文件列表移除文件时的钩子</td>
                <td>function(file, fileList)</td>
                <td>--</td>
            </tr>
            <tr>
                <td>on-success</td>
                <td>文件上传成功时的钩子	</td>
                <td>function(response, file, fileList)</td>
                <td>--</td>
            </tr>
            <tr>
                <td>on-error</td>
                <td>文件上传失败时的钩子	</td>
                <td>function(err, file, fileList)</td>
                <td>--</td>
            </tr>
            <tr>
                <td>on-progress</td>
                <td>文件上传时的钩子	</td>
                <td>function(event, file, fileList)</td>
                <td>--</td>
            </tr>
            <tr>
                <td>on-remove</td>
                <td>文件列表移除文件时的钩子</td>
                <td>function(file, fileList)</td>
                <td>--</td>
            </tr>
            <tr>
                <td>on-change</td>
                <td>文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用</td>
                <td>function(file, fileList)</td>
                <td>--</td>
            </tr>
            <tr>
                <td>before-upload</td>
                <td>上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。</td>
                <td>function(file)</td>
                <td>--</td>
            </tr>
            <tr>
                <td>before-remove</td>
                <td>删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。</td>
                <td>function(file, fileList)</td>
                <td>--</td>
            </tr>
            <tr>
                <td>limit</td>
                <td>最大允许上传个数	</td>
                <td>number</td>
                <td>--</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>file-list</td>
                <td>上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]</td>
                <td>array</td>
                <td>[]</td>
            </tr>
            <tr>
                <td>http-request</td>
                <td>覆盖默认的上传行为，可以自定义上传的实现</td>
                <td>function</td>
                <td>--</td>
            </tr>

            </tbody>
        </table>
        <TyUpload    ref="upload" action="https://jsonplaceholder.typicode.com/posts/" name="file"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     :file-list="fileList"
                      multiple
                     :limit="3"
                     :on-change="handleChange">
            <ty-button type="success" >上传</ty-button>
        </TyUpload>
    </div>
</template>

<script>
    export default {
        name: "Upload",
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
            },
            handleSuccess(res,file){
                console.log(res)
            }


        }
    }
</script>

<style scoped>

</style>