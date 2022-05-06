<script>
import UserLogin from './components/login/UserLogin.vue'
import UserRegister from './components/register/UserRegister.vue'
import NotFound from './components/notFound/NotFound.vue'

const routes = {
  '/login': UserLogin,
  '/register': UserRegister
}

export default {
  components: { UserLogin, UserRegister, NotFound },
  
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
       this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <div>
    <a href="#/">Home</a> |
    <a href="#/login">User Login</a> |
    <a href="#/register">User Register</a> |
    <component :is="currentView" />  
  </div>
</template>