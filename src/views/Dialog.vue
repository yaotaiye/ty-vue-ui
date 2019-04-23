<template>
    <div>
        <div class="title">TyDialog弹框组件使用</div>
        <div class="describe">
            <table>
             <tbody>
                 <tr>
                     <td>@open</td>
                     <td>弹框打开回调函数</td>
                 </tr>
                 <tr>
                     <td>@close</td>
                     <td>弹框关闭回调函数</td>
                 </tr>
                 <tr>
                     <td>@opened</td>
                     <td>弹框打开动画开始回调函数</td>
                 </tr>
                 <tr>
                     <td>@closed</td>
                     <td>弹框关闭动画结束回调函数</td>
                 </tr>
                 <tr>
                     <td>modal</td>
                     <td>布尔类型，是否开启遮罩层</td>
                 </tr>
                 <tr>
                     <td>center</td>
                     <td>布尔类型，是否标题按钮居中显示</td>
                 </tr>
                 <tr>
                     <td>title</td>
                     <td>标题</td>
                 </tr>
                 <tr>
                     <td>width</td>
                     <td>弹框宽度</td>
                 </tr>
                 <tr>
                     <td>visible</td>
                     <td>布尔类型，控制弹框显示</td>
                 </tr>


             </tbody>
           </table>
        </div>
        <ty-button type="primary" @click="dialogVisible = true" >显示弹框</ty-button>
        <TyDialog  title="提示"  width="30%" :visible.sync="dialogVisible" @open="open" @close="close" @opened="opened" @closed="closed" modal center>

            <span>爱神的箭卡时间</span>

            <span slot="footer" class="dialog-footer">
                <ty-button @click="dialogVisible = false">取 消</ty-button>
                <ty-button type="primary" @click="dialogVisible = false">确 定</ty-button>
           </span>

        </TyDialog>
    </div>

</template>

<script>
    export default {
        name: "Dialog",
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

<style scoped>

</style>