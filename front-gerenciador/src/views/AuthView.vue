<template>
  <div class="home">

    <div class="text-center mt-5"><span id="auth-controls">
        <button @click="loginShow" id="login-button" class="btn btn-color px-5 mx-1 w-5">Login</button>
        <button @click="cadastroShow" id="register-button" class="btn btn-color mx-1 px-5 w-5">Cadastro</button></span>
    </div>

    <LoginComp v-show="login_show"></LoginComp>
    <CadastroComp v-show="cadastro_show"></CadastroComp>

  </div>
</template>

<script>
import CadastroComp from '../components/CadastroComp.vue'
import LoginComp from '@/components/LoginComp.vue';

export default {
  name: 'AuthView',
  components: {
    CadastroComp,
    LoginComp,
  },

  data() {
    return {
      login_show: '',
      cadastro_show: '',
    }
  },

  mounted() {
    this.login_show = true
    this.cadastro_show = false
  },

  methods: {
    loginShow() {
      this.login_show = true
      this.cadastro_show = false
    },

    cadastroShow() {
      this.cadastro_show = true
      this.login_show = false
    }
  },
}
</script>
