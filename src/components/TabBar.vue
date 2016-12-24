<template>
  <div class="tab">
    <div class="tab_item">
      <a class="chat" title="聊天" href="javascript:;" v-on:click="showChatList">
        <i class="web_wechat_tab_chat" v-bind:class="showChats ? 'web_wechat_tab_chat_hl' : ''"></i>
      </a>
    </div>
    <div class="tab_item">
      <a class="chat" title="阅读" href="javascript:;" v-on:click="showReadList">
        <i class="web_wechat_tab_public" v-bind:class="showReads ? 'web_wechat_tab_public_hl' : ''"></i>
      </a>
    </div>
    <div class="tab_item no_extra">
      <a class="chat" title="通讯录" href="javascript:;" v-on:click="showContactList">
        <i class="web_wechat_tab_friends" v-bind:class="showContacts ? 'web_wechat_tab_friends_hl' : ''"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  props: {
    showChats: {
      type: Boolean,
      default: true
    },
    showReads: {
      type: Boolean,
      default: false
    },
    showContacts: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showChatList() {
      this.$emit('scl')
      this.$store.commit('CLICK_CONTACT', 0)
    },
    showReadList() {
      this.$emit('srl')
      this.$store.commit('CLICK_CONTACT', 1)
    },
    showContactList() {
      this.$emit('sctl')
      this.$store.commit('CLICK_CONTACT', 2)
    }
  }
}
</script>

<style>
  .tab {
    overflow: hidden;
    position: relative;
    padding-bottom: 4px;
  }

  .tab .tab_item {
    float: left;
    width: 33.33333333%;
    position: relative;
  }

  .tab .tab_item:after {
    content: '';
    position: absolute;
    top: 7px;
    right: 0;
    width: 0;
    height: 20px;
    border-right: 1px solid #24272c;
  }

  .tab .tab_item a {
    display: block;
    text-align: center;
  }

  .web_wechat_tab_chat {
    background: url(../images/sprite31e225.png) 0 -2048px;
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
  }

  .web_wechat_tab_chat_hl {
    background: url(../images/sprite31e225.png) 0 -2083px;
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
  }

  .web_wechat_tab_public {
    background: url(../images/sprite31e225.png) 0 -2232px;
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
  }

  .web_wechat_tab_public_hl {
    background: url(../images/sprite31e225.png) 0 -2267px;
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
  }

  .tab .tab_item.no_extra:after {
    border-right: 0;
  }

  .web_wechat_tab_friends {
    background: url(../images/sprite31e225.png) 0 -2140px;
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
  }

  .web_wechat_tab_friends_hl {
    background: url(../images/sprite31e225.png) 0 -2175px;
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
  }
</style>
