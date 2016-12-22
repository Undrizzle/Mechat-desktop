<template>
    <!-- 系统消息 -->
    <div ng-switch-when="10000" ng-init="messageHandle(message);">
        <p class="message_system"><span class="content" ng-bind-html="message.MMActualContent"></span></p>
    </div>
    <div ng-switch-default class="message" ng-class='{"you": !message.MMIsSend,"me": message.MMIsSend}'>
        <p ng-if="message.MMTime" class="message_system"><span class="content">{{message.MMTime}}</span></p>
        <img class="avatar" src="" mm-src="{{getUserContact(message.MMActualSender,message.MMPeerUserName).HeadImgUrl}}"
             data-cm='{"type": "avatar", "username": "{{message.MMActualSender}}", "isFriend": "{{}}'
    </div>
</template>