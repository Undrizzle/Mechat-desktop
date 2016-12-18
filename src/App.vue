<template>
  <div id="app" class="ht100">
    <div v-if="isLogin" class="ht100">
      <Comm></Comm>
    </div>

  </div>
</template>

<script>
  //import Signin from './components/Signin.vue'
  import Comm from './components/Comm.vue'

  export default {
    components: {
      Comm
    },
    data() {
      return {
        isLogin: true
      }
    }
  }
</script>

<style>
  html {
    font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    height: 100%;
  }

  body {
    background-color: white;
    color: #27364e;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
    height: 100%;
  }

  .sign {
    background: linear-gradient(to bottom, #feefee 0%, #fff 30%, #fff 100%) repeat-x;
  }

  a {
    color: rgba(39,54,78,0.6);
    text-decoration: none;
    outline: none;
  }

  a:hover {
    color: #27364e
  }

  a:active {
    color: rgba(39,54,78,0.6)
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }


  body, button, form, input, li, p {
    margin: 0;
    padding: 0;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    outline: none;
  }

  body, h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, fieldset, textarea {
    margin: 0;
  }

  .ht100 {
    height: 100%
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #c3c3c3;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
</style>
