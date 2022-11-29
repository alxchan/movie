<script setup>
import { ref } from "vue"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/index.js"
import router from "../router";
const email = ref("");
const username = ref("");
const password = ref("");

let login = () => {
    router.push("/")
}

let register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.push("./home")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

};

</script>

<template>
<body>
    <div class="color-background">
        <img src="https://cdn.discordapp.com/avatars/317827037027106816/ea9c657259f78c1b96ec0ec378cec17c.webp"
        style="padding:2rem">
        <div class="register">
            <form @submit.prevent="register()">
                <input type="text" placeholder="Enter a username" v-model="username" class="login-input" />
                <input type="email" placeholder="Enter a email" v-model="email" class="login-input" />
                <input type="password" placeholder="Enter a password" v-model="password" class="login-input" />
                <input type="submit" value="Register" class="submitLog" />
            </form>
        </div>
        <p id = "login">Already Have an Account?</p>
        <p id = "login" @click = "login">Login</p>
    </div>
</body>
</template>

<style scoped>

body{
  background-color: rgb(4,10,24);
  margin: 0;
  display:flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw; 
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}

#login{
    text-align: center;
    color:red;
    font-size: 15px;
}
.submitLog{
    color: red;
    margin: 5px;
    border-radius: 5%;
    background-color: rgb(4, 10, 24);
}

.submitLog:hover {
    box-shadow: 0px 1px 5px rgb(255, 0, 0);
}

::placeholder {
    color: rgba(255, 0, 0, 0.75);
}

.login-input {
    color: red;
    border-radius: 5%;
    border: none;
    margin: 5px;
    background-color: rgb(4, 10, 24);
}

.login-input:hover{
    box-shadow: 0px 1px 5px rgb(255, 0, 0);
}

.login-input:focus{
    outline:none;
}

.color-background {
    background-color: rgba(37, 40, 43, 0.5);
    padding: 0px 25px 40px 25px;
}

h1 {
    color: white;
    font-size: 50px;
}

.register {
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>