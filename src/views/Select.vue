<template>
    <div>
        <table class="ty-table">
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>value</td>
                <td>绑定值</td>
                <td>string / number</td>
                <td>--</td>
                <td>--</td>
            </tr>
            <tr>
                <td>name</td>
                <td>select input 的 name 属性</td>
                <td>string </td>
                <td>--</td>
                <td>--</td>
            </tr>
            <tr>
                <td>size</td>
                <td>输入框尺寸</td>
                <td>string </td>
                <td>medium/small/mini</td>
                <td>--</td>
            </tr>
            <tr>
                <td>placeholder</td>
                <td>占位符</td>
                <td>string </td>
                <td>--</td>
                <td>请选择</td>
            </tr>
            <tr>
                <td>SelectWidth</td>
                <td>输入框具体宽度</td>
                <td>string </td>
                <td>--</td>
                <td>--</td>
            </tr>
            <tr>
                <td>data</td>
                <td>下拉框数据</td>
                <td>array </td>
                <td>--</td>
                <td>--</td>
            </tr>
            <tr>
                <td>select</td>
                <td>选项点击钩子</td>
                <td>event(val) </td>
                <td>--</td>
                <td>--</td>
            </tr>
            <tr>
                <td>change</td>
                <td>选择框值change钩子</td>
                <td>event(val) </td>
                <td>--</td>
                <td>--</td>
            </tr>

            </tbody>
        </table>
        <ty-select SelectWidth="300" @change="change" @select="select" :data="options" value="选项3" placeholder="特殊活动的"  size="small" name="selectInput"></ty-select>
    </div>
</template>

<script>
    export default {
        name: "Select",
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
        methods:{
            change(e){
                console.log('change回调:'+e)
            },
            select(e){
                console.log('选择回调:'+e)
            }

        }
    }
</script>

<style scoped>

</style>