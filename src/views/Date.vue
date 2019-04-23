<template>
    <div>
        <div class="title">时间控件使用</div>
        <p class="describe">
           设置TyPicker组件的属性 tyDate="2019-07-12" 初始化日期，设置placeholder="请选择日期" ，设置提示语。
        </p>
        <TyPicker tyDate="2019-07-12"  placeholder="请选择日期"></TyPicker>
        <TyPicker placeholder="请点选日期"></TyPicker>
    </div>
</template>

<script>
    export default {
        name: "Date"
    }
</script>

<style scoped>

</style>