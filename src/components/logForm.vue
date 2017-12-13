<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin" @keyup.13="onLogin">登陆</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return{
        usernameModel: '',
        passwordModel: '',
      }
    },
    methods:{
      onLogin(){
        if(!this.userErrors.status || !this.passwordErrors.status){
          alert('请输入正确的用户名和密码')
        }
        else{
          this.$http.get('api/login')
            .then((data) => {
              this.$emit('has-log', data)
            }, (error) => {
              console.log(error)
            })
        }
      }
    },
    computed:{
      userErrors(){
        let errorText, status;
        if(!/@/g.test(this.usernameModel)) {
         status = false;
         errorText = '不包含@'
        }
        else{
         status = true;
         errorText = ''
        }
        if (!this.userFlag) {
          errorText = '';
          this.userFlag = true
        }
        return{
         status,
         errorText
       }
      },
      passwordErrors(){
        let errorText, status;
        if (!/^\w{6,12}$/g.test(this.passwordModel)) {
          status = false;
          errorText = '密码不是6-12位'
        }
        else {
          status = true;
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = '';
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    }
  }
</script>

<style>

</style>
