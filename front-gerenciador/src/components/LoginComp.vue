<template>
    <div>
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3"><!-- <h2 class="text-center text-dark mt-5">Login</h2> -->
                        <div class="card my-3">
                            <form @submit.prevent="login" class="card-body cardbody-color p-lg-5">
                                <div class="text-center"><img
                                        src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                                        class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="0"
                                        alt="profile"></div>
                                <div class="mb-3"><input type="email" class="form-control" id="Username"
                                        aria-describedby="emailHelp" v-model="data.email" required placeholder="Email"></div>
                                <div class="mb-3"><input type="password" class="form-control" required id="password"
                                        placeholder="Senha" v-model="data.password">
                                </div>
                                <div class="text-center"><button type="submit"
                                        class="btn btn-color px-5 mb-5 w-100">Login</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Auth from "../services/auth.js";
import { validate_login } from "@/services/validacao/validate_login.js";
export default {
    name:'LoginComp',
    data() {
        return {
            data:{
                email:'',
                password:''
            }
        }
    },

    methods: {
        login() {
            if(validate_login(this.data)){
                Auth.login(this.data)
                this.data=''
            }
        },
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