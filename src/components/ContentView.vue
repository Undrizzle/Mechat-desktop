<template>
    <div class="content_view">
       <!-- <contentContact></contentContact> -->
        <contentChat></contentChat>
    </div>
</template>

<script>
    import contentContact from './ContentContact.vue'
    import contentChat from './ContentChat.vue'

    export default {
        name: 'contentView',
        components: {
            contentContact,
            contentChat
        }
    }
</script>

<style>
    .content_view {
        height: 100%;
    }
</style>