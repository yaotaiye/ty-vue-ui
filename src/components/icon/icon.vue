<template>
    <i :class="'iconfont ' + name"></i>
</template>

<script>
    export default {
        name: 'TyIcon',

        props: {
            name: String
        }
    };
</script>
