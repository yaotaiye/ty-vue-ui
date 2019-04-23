<template>
    <div>
        <div class="title">基础用法</div>
        <p class="describe">基础的按钮用法。设置ty-button组件属性type="primary"、type="success" 、type="warning"、 type="danger"、type="info"、 type="danger"</p>
        <ty-button type="primary">一般状态</ty-button>
        <ty-button type="primary" plain>一般状态</ty-button>
        <ty-button type="success">成功</ty-button>
        <ty-button type="success" plain>成功</ty-button>
        <ty-button type="warning">警告</ty-button>
        <ty-button type="warning" plain>警告</ty-button>
        <ty-button type="danger">危险</ty-button>
        <ty-button type="danger" plain>危险</ty-button>
        <ty-button type="info">信息</ty-button>
        <ty-button type="info" plain>信息</ty-button>
        <ty-button type="info" round>信息圆角</ty-button>
        <ty-button type="danger" round>危险圆角</ty-button>

        <div class="title">按钮禁用</div>
        <p class="describe">按钮不可用状态。设置ty-button组件属性 disabled 为true</p>
        <ty-button disabled>默认按钮</ty-button>
        <ty-button type="primary" disabled>主要按钮</ty-button>
        <ty-button type="success" disabled>成功按钮</ty-button>
        <ty-button type="info" disabled>信息按钮</ty-button>
        <ty-button type="warning" disabled>警告按钮</ty-button>
        <ty-button type="danger" disabled>危险按钮</ty-button>

        <div class="title">文字按钮</div>
        <p class="describe">没有边框和背景色的按钮。设置属性为type="text"</p>
        <ty-button type="text">文字按钮</ty-button>
        <ty-button type="text" disabled>文字按钮</ty-button>
        <div class="title">按钮组</div>
        <p class="describe">以按钮组的方式出现，常用于多项类似操作。 使用 ty-button-group > ty-button 结构</p>
        <ty-button-group class="clearfix">
            <ty-button type="primary" >主要按钮</ty-button>
            <ty-button type="primary" >成功按钮</ty-button>
        </ty-button-group>
        <div style="margin-top: 20px;">
            <ty-button-group class="clearfix">
                <ty-button type="primary" >主要按钮</ty-button>
                <ty-button type="primary" >成功按钮</ty-button>
                <ty-button type="primary" >成功按钮</ty-button>
            </ty-button-group>
        </div>
        <div class="title">按钮尺寸</div>
        <p class="describe">Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。设置ty-button组件 size="medium"、size="small" 、size="mini"</p>
        <ty-button>默认按钮</ty-button>
        <ty-button size="medium">中等按钮</ty-button>
        <ty-button size="small">小型按钮</ty-button>
        <ty-button size="mini">超小按钮</ty-button>
    </div>

</template>

<script>
    export default {
        name: "Button"
    }
</script>

<style scoped>

</style>