<template>
    <div id="chatArea" class="box chat">
        <div class="box_hd">
            <div id="chatRoomMembersWrap"></div>
            <div class="title_wrap">
                <div class="title poi" v-if="currentContact.members">
                    <a class="title_name" >{{ currentContact.members.remark || currentContact.members.username }}</a>
                    <span class="title_count"></span>
                    <i class="web_wechat_down_icon" v-if="currentContact.members"></i>
                </div>
            </div>
        </div>
        <div class="box_bd chat_bd">
            <div v-if="currentContact.members">
                <div v-if="chatContents.length < 1" class="message_empty">
                    <i class="web_wechat_nomes_icon" v-if="!currentContact"></i>
                    <p v-if="currentContact.members">暂时没有消息</p>
                    <p v-if="!currentContact.members">未选择聊天</p>
                </div>
                <div v-else>
                    <div v-for="chatContent in chatContents">
                        <div class="message" v-bind:class="{ 'me': chatContent.from == 0, 'you': chatContent.from == 1 }">
                            <p class="message_system">
                                <span class="content">{{ chatContent.time }}</span>
                            </p>
                            <img class="avatar" v-bind:src="chatContent.avatar" v-bind:title="chatContent.username">
                            <div class="content">
                                <div class="bubble" v-bind:class="{ 'bubble_primary': chatContent.from == 0, 'bubble_default': chatContent.from == 1, 'left': chatContent.from == 1, 'right': chatContent.from == 0 }">
                                    <div class="bubble_cont">
                                        <div class="plain">
                                            <pre>{{ chatContent.message }}</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box_ft" v-if="currentContact.members">
            <div class="toolbar" id="tool_bar">
                <a class="web_wechat_face" href="javascript:;" title="表情" v-on:click="showExpression"></a>
                <a class="web_wechat_screen" href="javascript:;" title="截屏"></a>
                <a class="web_wechat_pic js_fileupload" href="javascript:;" title="图片和文件"></a>
                <expression v-if="showExp"></expression>
            </div>
            <div class="content">
                <pre id="editArea" class="flex edit_area" contenteditable="true"></pre>
                <span class="caret_pos_helper" id="caretPosHelper"></span>
            </div>
            <div class="action">
                <span class="desc">按下Ctrl+Enter换行</span>
                <a class="btn btn_send" href="javascript:;">发送</a>
            </div>
        </div>
    </div>
</template>

<script>
    import expression from './expression.vue'

    export default {
        name: 'contentChat',
        data() {
            return {
                showExp: false
            }
        },
        computed: {
            chatContents() {
                return this.$store.state.chatContents
            },
            currentContact() {
                return this.$store.state.currentContact
            },
            contact() {
                return this.$store.state.contact
            }
        },
        components: {
            expression
        },
        methods: {
            showExpression() {
                this.showExp = !this.showExp
            },
            getEmoticonByText(e) {
                let t;
                if (e.indexOf('<') > -1) {
                    t = this.QQFaceMap[e]
                    //return this.genEmoticonHTML("emoji emoji" + t, this.EmojiCodeMap[t])
                } else {
                    t = this.QQFaceMap[e.replace(/\[|\]/g, "")]
                    return this.genEmoticonHTML("qqemoji qqemoji" + t, e)
                }
            },
            genEmoticonHTML(e, t) {
                return '<img class="' + e + '" text="' + t + (t.indexOf(this.MM_EMOTICON_WEB) > -1 ? "" : this.MM_EMOTICON_WEB) + '" src="' + this.RES_IMG_PLACEHOLDER + '" />'
            },
            insertToEditArea(e, o) {

            }
        }
    }
</script>

<style>
    .box_hd .title.poi {
        cursor: pointer;
    }

    .box_hd .title .title_name {
        display: inline-block;
        vertical-align: middle;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        text-decoration: none;
        color: #000;
        font-weight: 400;
    }

    .web_wechat_down_icon {
        background: url(../images/sprite31e225.png) 0 -795px;
        width: 10px;
        height: 10px;
        vertical-align: middle;
        display: inline-block;
        margin-left: 5px;
    }

    .chat .box_bd {
        bottom: 180px;
        padding: 0 19px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .chat .box_ft {
        height: 180px;
        margin-right: 19px;
        border-top: 1px solid #d6d6d6;
    }

    .box_ft {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .chat .box_ft .toolbar {
        height: 30px;
        padding: 5px 17px;
    }

    .web_wechat_face {
        background: url(../images/sprite31e225.png) 0 -805px;
        width: 30px;
        height: 30px;
        vertical-align: middle;
        display: inline-block;
    }

    .web_wechat_screen {
        background: url(../images/sprite31e225.png) 0 -1916px;
        width: 30px;
        height: 30px;
        vertical-align: middle;
        display: inline-block;
    }

    .web_wechat_pic {
        background: url(../images/sprite31e225.png) 0 -1638px;
        width: 30px;
        height: 30px;
        vertical-align: middle;
        display: inline-block;
    }

    .chat .box_ft .content .flex {
        height: 6em;
        overflow-y: auto;
        overflow-x: hidden;
        padding-left: 20px;
        outline: 0;
        border: 0;
        font-size: 14px;
    }

    pre {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        white-space: pre-wrap;
        word-break: initial;
    }

    .chat .box_ft .action {
        text-align: right;
        margin-top: 5px;
    }

    .chat .box_ft .desc {
        color: #888;
        font-size: 12px;
        margin-left: 10px;
        margin-right: 7px;
    }

    .btn_send {
        background-color: #fff;
        color: #222;
        padding-left: 30px;
        padding-right: 30px;
    }

    .btn_send:hover {
        background-color: #f8f8f8;
    }

    .message_empty {
        text-align: center;
        margin-top: 130px;
        color: #ccc;
        font-size: 13px;
    }

    .web_wechat_nomes_icon {
        background: url(../images/sprite31e225.png) 0 -1332px;
        width: 100px;
        height: 90px;
        vertical-align: middle;
        display: inline-block;
    }

    .message {
        margin-bottom: 16px;
        float: left;
        width: 100%;
    }

    .message.me {
        float: right;
        text-align: right;
        clear: right;
    }

    .message_system {
        text-align: center;
        margin: 10px auto;
        max-width: 50%;
    }

    .message_system .content {
        display: inline-block;
        background-color: #dcdcdc;
        font-size: 12px;
        padding: 1px 18px;
        color: #fff;
        border-radius: 2px;
    }

    .message.me .content {
        overflow: hidden;
    }

    .message .content {
        overflow: hidden;
    }

    .message.me .avatar {
        float: right
    }

    .message .avatar {
        width: 40px;
        height: 40px;
        border-radius: 2px;
        float: left;
        cursor: pointer;
    }

    .bubble {
        max-width: 500px;
        min-height: 1em;
        display: inline-block;
        vertical-align: top;
        position: relative;
        text-align: left;
        font-size: 14px;
        border-radius: 3px;
        margin: 0 10px;
    }

    .bubble.bubble_primary {
        background-color: #b2e281;
    }

    .bubble.bubble_primary.right.arrow_primary:before, .bubble.bubble_primary.right:after {
        border-left-color: #b2e281;
        border-left-width: 4px;
    }

    .bubble.right:after, .bubble.right:before {
        left: 100%;
    }

    .bubble.left:after {
        border-right-color: #fff;
        border-right-width: 4px;
    }

    .bubble.left:after, .bubble.left:before {
        right: 100%;
    }

    .bubble:after, .bubble:before {
        position: absolute;
        top: 14px;
        border: 6px solid transparent;
        content: '';
    }

    .bubble_cont {
        word-wrap: break-word;
        word-break: break-all;
        min-height: 25px;
    }

    .bubble_cont .plain {
        padding: 9px 13px;
    }

    .bubble.bubble_default {
        background-color: #fff;
    }
</style>