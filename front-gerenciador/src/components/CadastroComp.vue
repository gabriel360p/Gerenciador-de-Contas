<template>
    <div>
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3"><!-- <h2 class="text-center text-dark mt-5">Cadastrar</h2> -->
                        <div class="card my-3">
                            <form @submit.prevent="cadastro" class="card-body cardbody-color p-lg-5">
                                <div class="text-center"><img
                                        src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                                        class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="0"
                                        alt="profile"></div>
                                <div class="mb-3"><input type="text" class="form-control" id="Username" required
                                        aria-describedby="emailHelp" v-model="data.nome" placeholder="Nome Completo"></div>
                                <div class="mb-3"><input type="text" class="form-control" id="Username" required v-model="data.email"
                                        aria-describedby="emailHelp" placeholder="Email"></div>
                                <div class="mb-3"><input type="password" class="form-control" id="password" required v-model="data.password"
                                        placeholder="Criar Senha"></div>
                                <div class="mb-3"><input type="password" class="form-control"  required id="password" v-model="data.password_confirmation"
                                        placeholder="Confirmar Senha"></div>
                                <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Criar
                                        Conta</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Auth from '../services/auth'
import {validate_cadastro} from '../services/validacao/validate_cadastro.js'

export default {
    name:'CadastroComp',
    data() {
        return {
            data:{
                nome:'',
                email:'',
                password:'',
                password_confirmation:'',
            }
        }
    },
    
    methods: {

        cadastro() {
            if(validate_cadastro(this.data)){
                Auth.cadastro(this.data)
                this.data=''
            }
        }   
    },
}
</script>

<style >
.btn-color {
    background-color: #0e1c36;
    color: #fff;

}

.profile-image-pic {
    height: 200px;
    width: 200px;
    object-fit: cover;
}



.cardbody-color {
    background-color: #ebf2fa;
}

a {
    text-decoration: none;
}
</style>