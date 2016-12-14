<template>
    <div class="content_view">
        <contentContact></contentContact>
    </div>
</template>

<script>
    import contentContact from './ContentContact.vue'

    export default {
        name: 'contentView',
        components: {
            contentContact
        }
    }
</script>

<style>
    .content_view {
        height: 100%;
    }
</style>