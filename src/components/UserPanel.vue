<template>
  <div v-if="login.user" class="home__painel-usuario" id="painel">
      <div id="user">Olá, {{ login.user }}!</div>
      <div id="email">email: {{ login.email }}</div>
      <div class="home__painel-usuario__painel-sair">
        <button @click="logout" id="clearStorage">Sair</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'UserPanel',

    methods: {
    logout() {
      this.$store.commit('initLogin')
    },
  },

  data() {
    return {
      loginStorage: JSON.parse(localStorage.getItem('login')),
      reservationsStorage: JSON.parse(localStorage.getItem('reservations'))
    }
  },

  computed: {
    login() {
      return this.$store.state.login
    }
  },

  mounted() {
    if (this.loginStorage) {
      this.login.user = this.loginStorage.user;
      this.login.email = this.loginStorage.email;
    };
  }
}
</script>