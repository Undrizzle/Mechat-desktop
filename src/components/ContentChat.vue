<template>
    <div id="chatArea" class="box chat">
        <div class="box_hd">
            <div id="chatRoomMembersWrap"></div>
            <div class="title_wrap">
                <div class="title poi">
                    <a class="title_name">生活不止眼前的苟且,不觉细雨,微微浅冬</a>
                    <span class="title_count">(3)</span>
                    <i class="web_wechat_down_icon"></i>
                </div>
            </div>
        </div>
        <div class="box_bd chat_bd">

        </div>
        <div class="box_ft">
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
        components: {
            expression
        },
        methods: {
            showExpression() {
                this.showExp = !this.showExp
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
</style>