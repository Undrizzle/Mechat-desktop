<template>
  <div class="ngdialog default" v-bind:style="{'padding-top': m_top + 'px'}">
    <div class="ngdialog-overlay"></div>
    <div class="ngdialog-content" ref="content">
      <div class="dialog_hd">
        <h3 class="title">意见反馈</h3>
      </div>
      <div class="dialog_bd">
        <textarea cols="30" rows="10" autofocus class="frm_feedback" v-model="suggests"></textarea>
      </div>
      <div class="dialog_ft">
        <a href="javascript:;" class="btn btn_primary" v-on:click="send"  v-if="suggests != ''">发送</a>
        <a href="javascript:;" class="btn btn_primary" disabled="disabled" v-else>发送</a>
      </div>
      <div class="ngdialog-close" v-on:click="hiddenFeedback"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'feedback',
    data() {
      return {
        m_top: 0,
        suggests: ''
      }
    },
    mounted: function() {
      window.onresize = this.adjust;
      this.m_top = (document.body.scrollHeight - this.$refs.content.clientHeight - 32) / 2
    },
    methods: {
      hiddenFeedback() {
        this.$emit('hfb')
      },
      adjust() {
        this.m_top = (document.body.scrollHeight - this.$refs.content.clientHeight - 32) / 2
      },
      send() {
        let formData = this.suggests
        axios.post('http://127.0.0.1:3000/suggest', {
          username: 'undrizzle',
          advise: this.suggests
        }).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })
        this.hiddenFeedback()
      }
    }
  }
</script>

<style>
  .frm_feedback {
    display: block;
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #dedede;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
    resize: none;
  }

  .dialog_ft .btn {
    margin-left: 16px;
    margin-top: 10px;
  }

  a.btn {
    text-decoration: none;
  }

  .btn {
    display: inline-block;
    border: 1px solid #c1c1c1;
    border-radius: 4px;
    padding: 3px 20px;
    font-size: 14px;
  }

  .btn_primary {
    background-color: #3caf36;
    color: #fff;
    border: 0 none;
    padding-left: 70px;
    padding-right: 70px;
  }

   .dialog_ft a:hover {
    color: #fff;
  }

   ::-webkit-scrollbar {
     width: 6px;
     height: 6px;
   }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #c3c3c3;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .dialog_ft a[disabled] {
    opacity: .5!important;
    cursor: not-allowed!important;
  }
</style>
