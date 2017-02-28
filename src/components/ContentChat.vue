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
            <div v-if="chatContent.length < 1" class="message_empty">
                <i class="web_wechat_nomes_icon" v-if="!currentContact"></i>
                <p v-if="currentContact.members">暂时没有消息</p>
                <p v-if="!currentContact.members">未选择聊天</p>
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
            chatContent() {
                return this.$store.state.chatContent
            },
            currentContact() {
                return this.$store.state.currentContact
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
</style>