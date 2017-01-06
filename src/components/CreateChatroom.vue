<template>
    <div id="ngdialog" class="ngdialog default create_chatroom_dlg" v-bind:style="{'padding-top': m_top + 'px'}">
        <div class="ngdialog-overlay"></div>
        <div class="ngdialog-content" ref="content">
            <div class="dialog_hd">
                <h3 class="title">发起聊天</h3>
            </div>
            <div class="dialog_bd" id="createChatRoomContainer">
                <ul class="nav_tabs">
                    <li class="nav_tab selected">选择联系人</li>
                    <li class="nav_tab">选择群聊</li>
                </ul>
                <div class="">
                    <div class="selector">
                        <div class="input_box">
                            <i class="addchat_searchicon"></i>
                            <input type="text" class="input" placeholder="搜索" autofocus>
                        </div>
                    </div>
                    <div class="chooser">
                        <div class="scroll-wrapper contacts scrollbar-dynamic">
                            <div v-for="item of contacts" v-on:click="clickUser(item)">
                                <div class="contact_item">
                                    <div class="opt">
                                        <i v-bind:class="isCheck(item) ? 'web_wechat_choose_green' : 'web_wechat_choose_wireframe'"></i>
                                    </div>
                                    <div class="avatar">
                                        <img class="img lazy" :src="item.avatar" />
                                    </div>
                                    <div class="info">
                                        <h4 class="nickname">{{ item.remark || item.username }}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog_ft">
                <a href="javascript:;" class="button_default">确定</a>
            </div>
            <div class="ngdialog-close" v-on:click="hiddenChatroom"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'createChatroom',
        data() {
            return {
                m_top: 0,
                contacts: [],
                chatChoose: []
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
        mounted: function() {
            window.onresize = this.adjust;
            this.m_top = (document.body.scrollHeight - this.$refs.content.clientHeight - 32) / 2
        },
        methods: {
            adjust() {
                this.m_top = (document.body.scrollHeight - this.$refs.content.clientHeight - 32) / 2
            },
            hiddenChatroom() {
                this.$emit('hcr')
            },
            copyContacts(item) {
                this.contacts = item
            },
            clickUser(item) {
                let user = item.remark || item.username
                let len = this.chatChoose.length
                if (len == 0) {
                    this.chatChoose.push(user)
                    this.isCheck(item)
                } else {
                    this.chatChoose.forEach(function (value, index, array) {
                        if (value === user) {
                            array.splice(index, 1)
                        }
                        else {
                            if (index == (len -1)) {
                                array.push(user)
                            }
                        }
                    })
                }
            },
            isCheck(item) {
                let user = item.remark || item.username
                console.log(user)
                this.chatChoose.forEach(function (value) {
                    if (value == user) {
                        return true
                    }
                })
                return false
            }
        }
    }
</script>

<style>
    .chooser .contact_item {
        overflow: hidden;
        padding: 7px 20px;
        cursor: pointer;
        border-bottom: 1px solid #f2f2f2;
    }

    .chooser .opt {
        float: left;
        margin-right: 10px;
        line-height: 40px;
    }

    .web_wechat_choose_wireframe {
        background: url(../images/sprite31e225.png) 0 -561px;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        display: inline-block;
    }

    .chooser .avatar {
        float: left;
        margin-right: 10px;
    }

    .chooser .avatar .img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 2px;
    }

    .chooser .info {
        overflow: hidden;
        height: 40px;
        line-height: 40px;
    }

    .chooser .info .nickname {
        font-weight: 400;
        font-size: 13px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }

    .web_wechat_choose_green {
        background: url(../images/sprite31e225.png) 0 -521px;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        display: inline-block;
    }
</style>