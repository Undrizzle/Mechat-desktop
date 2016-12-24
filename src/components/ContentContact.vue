<template>
    <div class="box">
        <div class="box_hd with_border">
            <div class="title_wrap">
                <div class="title">详细信息</div>
            </div>
        </div>
        <div class="box_bd">
            <div v-if="isEmptyObject(currentChoose)" class="empty">
                <i class="web_wechat_no_contect"></i>
            </div>
            <div v-else>
                <div class="profile">
                    <div class="avatar">
                        <img class="img" :src="currentChoose.avatar">
                    </div>
                    <div class="nickname_area">
                        <h4 class="nickname">{{ currentChoose.username }}</h4>
                        <i v-bind:class="{web_wechat_women: currentChoose.sex == 'female', web_wechat_men: currentChoose.sex == 'male'}"></i>
                    </div>
                    <p class="signature">{{ currentChoose.signature }}</p>
                    <div class="meta_area">
                        <div class="meta_item">
                            <label class="label">备注：</label>
                            <p class="value">{{ currentChoose.remark }}</p>
                        </div>
                        <div class="meta_item">
                            <label class="label">地区：</label>
                            <p class="value">{{ currentChoose.region }}</p>
                        </div>
                    </div>
                    <div class="action_area">
                        <a class="button" href="javascript:;">发消息</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'contentContact',
        computed: {
            currentChoose() {
                return this.$store.state.currentChoose
            }
        },
        methods: {
            isEmptyObject(obj) {
                for (let key in obj) {
                    return false
                }
                return true
            }
        }
    }
</script>

<style>
    .box {
        position: relative;
        background-color: #eee;
        height: 100%;
        overflow: hidden;
    }

    .box_hd {
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        line-height: 30px;
    }

    .box_hd .title_wrap {
        position: relative;
        padding: 10px 0;
        margin: 0 19px;
        border-bottom: 1px solid #d6d6d6;
        background-color: #eee;
        z-index: 1024;
    }

    .box_hd .title {
        font-weight: 400;
        height: 25px;
        display: inline-block;
        font-size: 14px;
    }

    .box_bd {
        position: absolute;
        top: 51px;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .profile {
        padding: 80px 0;
        text-align: center;
    }

    .profile .avatar {
        margin-bottom: 22px;
    }

    .profile .avatar .img {
        display: block;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border-radius: 4px;
    }

    .profile .nickname {
        font-weight: 400;
        font-size: 24px;
        margin-bottom: 10px;
        display: inline-block;
    }

    .web_wechat_women {
        background: url(../images/sprite31e225.png) 0 -2473px;
        width: 16px;
        height: 16px;
        vertical-align: middle;
        display: inline-block;
    }

    .web_wechat_men {
        background: url(../images/sprite31e225.png) 0 -1254px;
        width: 16px;
        height: 16px;
        vertical-align: middle;
        display: inline-block;
    }

    .profile .signature {
        font-size: 14px;
        color: #888;
    }

    .profile .meta_area {
        width: 250px;
        padding-left: 160px;
        text-align: left;
        margin: 30px auto 40px;
    }

    .profile .meta_item {
        overflow: hidden;
    }

    .profile .meta_item .label {
        float: left;
        font-size: 12px;
        color: #888;
        margin-right: 10px;
    }

    .profile .meta_item .value {
        font-size: 12px;
        color: #888;
        width: 134px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }

    .profile .button {
        display: inline-block;
        width: 200px;
        text-align: center;
        color: #fff;
        line-height: 40px;
        background-color: #42ac3e;
        font-size: 14px;
        text-decoration: none;
        border-radius: 4px;
    }

    .box_bd .empty {
        margin: 50px;
        text-align: center;
        color: #888;
        font-size: 14px;
    }

    .web_wechat_no_contect {
        background: url(../images/sprite31e225.png) 0 -1433px;
        width: 150px;
        height: 150px;
        vertical-align: middle;
        display: inline-block;
    }
</style>