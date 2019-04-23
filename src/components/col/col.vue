<template>
    <div :class="[col ? 'col-' + col : 'col']">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TyCol",
        props: {
            col:String
        }
    }
</script>

