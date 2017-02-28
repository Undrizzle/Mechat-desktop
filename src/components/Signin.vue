<template>
  <div class="sign">
    <div id="web">
      <div class="login-box">
        <div class="login-header">
          <a>
            <img class="logo" src="../images/logo.png">
          </a>
          <ul class="rtab">
            <li v-bind:class="{ 'active': show_signin }" id="signin" @click="show_login">
              <a class="btns btn-link">登录</a>
            </li>
            <li v-bind:class="{ 'active': show_signup }" id="signup" @click="show_register">
              <a class="btns btn-link">注册</a>
            </li>
            <li id="wechat-signin">
              <a class="btns btn-link">微信登录</a>
            </li>
          </ul>
        </div>
        <div class="boxs" id="signin-box" v-if="show_signin">
          <div class="login-body">
            <form novalidate>
              <div class="form-group form-group-icon">
                <input class="input-lg form-input email" name="email" placeholder="Email 地址">
                <div class="form-icon">
                  <i class="fa fa-envelope-o"></i>
                </div>
              </div>
              <div class="form-group form-group-icon">
                <input class="input-lg form-input password" name="password" placeholder="密码" type="password">
                <div class="form-icon">
                  <i class="fa fa-lock"></i>
                </div>
              </div>
              <div class="form-group">
                <button class="btns btns-primary btns-block btns-lg submit">登入</button>
              </div>
            </form>
          </div>
          <div class="login-footer">
            <p class="forgot-password">
              <a href="/forgot">忘记密码？</a>
            </p>
          </div>
        </div>
        <div class="boxs" id="signup-box" v-if="show_signup">
          <div class="login-body">
            <form class="new_user" id="new_user" novalidate @submit.prevent="regSubmit">
              <div class="form-group form-group-icon">
                <input class="input-lg form-input name" name="user[name]" type="text" placeholder="用户名" v-model="username">
                <div class="form-icon">
                  <i class="fa fa-user"></i>
                </div>
              </div>
              <div class="help-block" v-if="errors.username">{{ errors.username }}</div>
              <div class="help-block" v-if="mongoErrs.rId">{{ mongoErrs.rId.message }}</div>
              <div class="form-group form-group-icon">
                <input class="input-lg form-input email" name="user[email]" type="email" placeholder="Email 地址" v-model="rEmail">
                <div class="form-icon">
                  <i class="fa fa-envelope-o"></i>
                </div>
              </div>
              <div class="help-block" v-if="errors.rEmail">{{ errors.rEmail }}</div>
              <div class="help-block" v-if="mongoErrs.rEmail">{{ mongoErrs.rEmail.message }}</div>
              <div class="form-group form-group-icon">
                <input class="input-lg form-input password" name="user[password]" placeholder="密码" type="password" v-model="rPassword">
                <div class="form-icon">
                  <i class="fa fa-lock"></i>
                </div>
              </div>
              <div class="help-block" v-if="errors.rPassword">{{ errors.rPassword }}</div>
              <div class="form-group">
                <button class="btns btns-primary btns-block btns-lg submit" type="submit">免费注册</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        show_signin: true,
        show_signup: false,
        show_wechat: false,
        username: '',
        rEmail: '',
        rPassword: '',
        mongoErrs: {}
      }
    },
    computed: {
      errors() {
        return this.$vuerify.$errors
      }
    },
    vuerify: {
      username: {
        test: /\w{4,}/,
        message: '用户名至少4个字符'
      },
      rEmail: 'email',
      rPassword: {
        test: /\w{4,}/,
        message: '密码至少4个字符'
      }
    },
    methods: {
      show_login() {
        this.show_signin = true
        this.show_signup = false
      },
      show_register() {
        this.show_signin = false
        this.show_signup = true
      },
      regSubmit() {
        let self = this
        if (this.$vuerify.check()) {
          let regData = {
            id: this.username,
            email: this.rEmail,
            password: this.rPassword
          }
          axios.post('http://127.0.0.1:3000/register', regData)
                  .then(function (response){
                    let item = response.data
                    self.regSuccess(item)
                  })
                  .catch(function (err) {
                    console.log(err)
                  })
        }
      },
      regSuccess(item) {
        this.$store.commit('REGISTER_SUCCESS', item)
      }
    }
  }
</script>

<style>
  #web {
    flex: 1;
  }

  .login-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }

  .login-header {
    margin: 0 auto;
    width: 100%;
  }

  .logo {
    height: 70px;
    width: 70px
  }

  ul.rtab {
   /* margin-top: 30px;*/
    border-bottom: 0;
    text-align: center;
  }

  ul.rtab li {
    position: relative;
    display: inline-block;
    line-height: 30px;
  }

  ul.rtab li a {
    display: inline-block;
  }

  ul.rtab li::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    bottom: calc(50% - 1em);
    width: calc(100% - 30px);
    border-bottom: 1px solid #f55d54;
    transition: all 0.2s ease-out;
  }

  ul.rtab li.active::after {
    transform: translateX(-50%) scaleX(1)
  }

  .rtab a {
    margin: 20px;
  }

  .btns.btn-link {
    color: rgba(39,54,78,0.6);
  }

  .btns {
    cursor: pointer;
    user-select: none;
    outline: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    color: #f55d54;
    line-height: 24px;
    margin: 0 5px;
    background: none;
    border: none;
  }

  .btns.btn-link {
    color: rgba(39,54,78,0.6);
  }

  .btns.btn-link:hover {
    color: #27364e;
  }

  .btns.btn-link.lang {
    color: rgba(39,54,78,0.6);
  }

  .btns.btn-link.active {
    color: #f55d54;
  }

 /*.login-box .box {
    min-height: 450px;
  }*/

  .login-box .login-body {
    margin: 0 auto;
    width: 80%;
    max-width: 260px;
  }

  .form-group {
    position: relative;
    width: 100%;
    height: 45px;
  }

  .form-group:not(:last-child) {
    margin-bottom: 10px;
  }

  .form-group .form-input {
    padding-left: 10px;
    line-height: 16px;
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
  }

  .form-group .form-input:focus {
    border: 1px solid #f55d54;
  }

  .form-group.form-group-icon .form-input {
    padding-left: 45px;
  }

  .form-group.form-group-icon .form-input:focus+.form-icon i {
    color: #f55d54;
  }

  .form-group.form-group-icon .form-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 100%;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    color: #c5c5c5;
  }

  .form-group.form-group-icon .form-icon i {
    margin-top: 13px;
  }

  .btns.btns-lg {
    padding: 0;
    margin: 0 10px;
    width: 166px;
    height: 50px;
    font-size: 1.6rem;
    line-height: 48px;
  }

  .btns.submit {
    width: 100%;
    height: 100%;
    margin: 5px 0;
  }

  .btns.btns-primary {
    color: white;
    border: 1px solid transparent;
    background: #f55d54;
    box-shadow: 0px 6px 20px 0px rgba(245,92,84,0.16)
  }

  .btns.btns-primary:hover {
    background: #ff7c75
  }

  .login-box .login-footer {
    margin: 20px 0;
  }

  .help-block {
    margin: 10px 0;
    color: #6b6b6b;
    text-align: left;
  }

  .help-block:before {
    content: 'x_x';
    color: #e6352c;
    margin-right: 5px;
  }
</style>
