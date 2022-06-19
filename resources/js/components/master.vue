<template>
    <div>
        <login v-if="!authInfo"></login>
        <router-view v-if="authInfo"></router-view>
    </div>
</template>

<script>
import login from './login.vue'
export default {
    components: { login },
    data(){
        return{
            test: "hello world",
        }
    },
    created(){
        this.$store.commit('setAuthuser', window.authUser);
        if(!this.authInfo) {
            try {
                // if(this.$route.path != '/login') this.$router.push('/login');
            }
            catch(error) {
                console.log(error)
            }
        }
    }
}
</script>
