<template>
    <div class="content_view">
        <contentChat v-if="contentIndex == 0"></contentChat>
        <contentContact v-if="contentIndex == 2"></contentContact>
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
        },
        computed: {
            contentIndex() {
                return this.$store.state.contentIndex
            }
        }
    }
</script>

<style>
    .content_view {
        height: 100%;
    }
</style>