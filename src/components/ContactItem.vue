<template>
    <div class="contact_list" v-nicebar id="contact_list">
        <div v-for="item of allContacts" v-on:click="clickUser(item)">
            <div v-bind:class="{active: currentChoose.username == item.username }">
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy"  v-bind:src="item.avatar" />
                    </div>
                    <div class="info">
                        <h4 class="nickname">{{ item.remark || item.username }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import axios from 'axios'

    export default {
        name: 'contactItem',
        data() {
            return {
                allContacts: []
            }
        },
        computed: {
          currentChoose() {
              return this.$store.state.currentChoose
          }
        },
        directives: {
            nicebar: {
                componentUpdated: function (el, binding) {
                }
            }
        },
        created: function() {
            let self = this
            axios.post('http://127.0.0.1:3000/contact', {
                id: 'undrizzle'
            }).then(function (response) {
                self.copyContacts(response.data)
            }).catch(function (error) {
                console.log(error)
            })
        },
        beforeDestroy: function() {
          this.allContatcs = []
        },
        methods: {
            copyContacts(item) {
                this.allContacts = item
            },
            clickUser(item) {
                this.$store.commit('CHOOSE_CONTACT', item)
            }
        }
    }
</script>

<style>
    .contact_list .contact_title {
        padding: 1px 18px;
        font-weight: 400;
        color: #787b87;
        background: #292d32;
        font-size: 14px;
    }

    .contact_list .contact_item {
        overflow: hidden;
        padding: 10px 18px 9px;
        border-bottom: 1px solid #292c33;
        cursor: pointer;
    }

    .contact_list .avatar {
        float: left;
        margin-right: 10px;
    }

    .contact_list .avatar .img {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 2px;
    }

    .contact_list .info {
        overflow: hidden;
        line-height: 30px;
    }

    .contact_list .info .nickname {
        color: #fff;
        font-weight: 400;
        font-size: 13px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis; /*文本溢出时显示省略号来代表被修剪的文本*/
        white-space: nowrap;
        word-wrap: normal;
    }

    .contact_list .active {
        background: #3b4047;
    }

    .contact_list {
        height: 100%;
        overflow: auto;
    }

    /*scrollbar*/

</style>