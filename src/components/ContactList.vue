<template>
    <div class="contact_list" v-nicebar="{theme: 'dark'}">
        <div>
            <h4 class="contact_title">A</h4>
        </div>
        <div>
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" src="">
                    </div>
                    <div class="info">
                        <h4 class="nickname">陈航飞</h4>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h4 class="contact_title">A</h4>
        </div>
        <div>
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" src="">
                    </div>
                    <div class="info">
                        <h4 class="nickname">陈航飞</h4>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h4 class="contact_title">A</h4>
        </div>
        <div>
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" src="">
                    </div>
                    <div class="info">
                        <h4 class="nickname">陈航飞</h4>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h4 class="contact_title">A</h4>
        </div>
        <div>
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" src="">
                    </div>
                    <div class="info">
                        <h4 class="nickname">陈航飞</h4>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div class="contact_item">
                    <div class="avatar">
                        <img class="img lazy" src="">
                    </div>
                    <div class="info">
                        <h4 class="nickname">陈航飞</h4>
                    </div>
                </div>
            </div>
        </div>



    </div>

</template>

<script>
    import nb from 'nice-bar'

    export default {
        name: 'contactList',
        directives: {
            nicebar: {
                inserted: function (el, binding) {
                    if (binding.value.theme == 'dark') {
                        nb.init(el, {theme: 'dark'})
                    } else {
                        nb.init(el, {theme: 'light'})
                    }
                }
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
    }

    /*scrollbar*/
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    .nice-bar-rail-y {
        position: absolute;
        top: 0;
        right: 0;
        width: 6px;
        height: 100%;
        z-index: 100000;
    }
    .nice-bar-slider-y {
        position: absolute;
        top: 0;
        right: 0;
        width: 6px;
        z-index: 100001;
        opacity: 0;
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    .nice-bar-slider-y.fade-in {
        animation-name: fadeIn;
    }
    .nice-bar-slider-y.fade-out {
        animation-name: fadeOut;
    }
    .theme-light .nice-bar-slider-y {
        background: #aaa;
    }
    .theme-dark .nice-bar-slider-y {
        background: #6c6e71;
    }
</style>