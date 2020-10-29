<template>
  <div class="login">
    <form class="login-form">
      <input type="text" :value="name" @input="checking($event.target.value, 'name')" placeholder="Имя">
      <input type="password" :value="password" @input="checking($event.target.value, 'password')" placeholder="Пароль">
      <input type="submit" :class="{'btn-active': isActive}" @click.prevent="login" value="Login"> 
    </form>
    <em> Любой логин и пароль </em>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data()
  {
    return {
      password:'',
      name:'',
      isActive: false
    }
  },
  computed:{
    authToken()
    {
      return this.$store.state.auth.accessUserToken
    }
  },
  methods:
  {
    login()
    {
      this.isActive && this.$store.dispatch('auth/setAccessToken')
    },
    checking(event, name)
    {
      this[name] = event;
      this.isActive = this.name && this.password;
    }
  },
  watch:{
    authToken()
    {
      this.$router.push( {
        path:'/'
      } )
    }
  }
}
</script>
