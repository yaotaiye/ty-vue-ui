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
                  <td>type</td>
                  <td>类型</td>
                  <td>String</td>
                  <td>text</td>
                  <td>text</td>
              </tr>
              <tr>
                  <td>value/v-model</td>
                  <td>绑定值</td>
                  <td>String/number</td>
                  <td>--</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>placeholder</td>
                  <td>输入框占位文本</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>show-password</td>
                  <td>是否显示切换密码图标</td>
                  <td>boolean</td>
                  <td>--</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>size</td>
                  <td>输入框尺寸</td>
                  <td>string</td>
                  <td>medium / small / mini</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>autocomplete</td>
                  <td>原生属性，自动补全</td>
                  <td>string</td>
                  <td>on, off</td>
                  <td>off</td>
              </tr>
              <tr>
                  <td>prefix-icon</td>
                  <td>输入框头部图标</td>
                  <td>string</td>
                  <td>--</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>suffix-icon</td>
                  <td>输入框尾部图标</td>
                  <td>string</td>
                  <td>--</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>blur</td>
                  <td>在 Input 失去焦点时触发</td>
                  <td>function</td>
                  <td>(event: Event)</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>focus</td>
                  <td>在 Input 获得焦点时触发</td>
                  <td>function</td>
                  <td>(event: Event)</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>change</td>
                  <td>在 Input 值改变时触发</td>
                  <td>function</td>
                  <td>(value: string | number)</td>
                  <td>--</td>
              </tr>
              <tr>
                  <td>input</td>
                  <td>在 Input 输入时触发</td>
                  <td>function</td>
                  <td>(value: string | number)</td>
                  <td>--</td>
              </tr>
            </tbody>
        </table>
        <ty-input v-model="text" autocomplete="on" placeholder="请输入内容" clearable @input="input" @blur="blur" @focus="focus" @change="change" size="small" prefixIcon="icon-calendar" suffixIcon="icon-calendar"></ty-input>
    </div>
</template>

<script>
    export default {
        name: "Input",
        data(){
            return{
                text:'输入框使用案例'
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

<style scoped>

</style>