<template>
  <div id="app">
    <div v-if="isLogin">
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
  }

  body {
    background-color: white;
    color: #27364e;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
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

  *,*::before,*::after {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, fieldset, textarea {
    margin: 0;
  }

</style>
