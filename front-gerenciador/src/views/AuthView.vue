<template>
  <div class="home">
    <LoginComp></LoginComp> 
    <CadastroComp></CadastroComp>

  </div>
</template>''

<script>
import CadastroComp from '../components/CadastroComp.vue'
import LoginComp from '@/components/LoginComp.vue';

export default {
  name: 'AuthView',
  components: {
    CadastroComp,
    LoginComp
  }
}
</script>
