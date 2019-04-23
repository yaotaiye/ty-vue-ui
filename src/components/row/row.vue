<template>
    <div class="ty-flex-row" :class="[
      alignIitems ? 'align-items-' + alignIitems : '',
      justifyContent ? 'justify-content-' + justifyContent : '',
      gridSpace ? 'grid-space-' + gridSpace : '',
    ]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TyRow",
        props: {
             alignIitems:String
            ,justifyContent:String
            ,gridSpace:String

        }
    }
</script>

<style scoped>

</style>