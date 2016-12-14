<template>
    <div class="box">
        <div class="box_hd with_border">
            <div class="title_wrap">
                <div class="title">详细信息</div>
            </div>
        </div>
        <div class="box_bd">
            <div>
                <div class="profile">
                    <div class="avatar">
                        <img class="img" src="../images/user/jue.jpg">
                    </div>
                    <div class="nickname_area">
                        <h4 class="nickname">单丹蕾</h4>
                        <i class="web_wechat_women"></i>
                    </div>
                    <p class="signature">?!...。</p>
                    <div class="meta_area">
                        <div class="meta_item">
                            <label class="label">备注：</label>
                            <p class="value">单丹蕾</p>
                        </div>
                        <div class="meta_item">
                            <label class="label">地区：</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contentContact'
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
</style>