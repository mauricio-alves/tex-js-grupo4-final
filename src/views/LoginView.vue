<template>
  <HeaderComponent />

  <main>
    <div class="main">
      <h1>Login</h1>

      <article class="main__login">
        <form>
          <label for="email">Email:</label>
          <input
            v-model="login.email"
            type="text"
            placeholder="Digite seu email"
            id="email"
            name="email"
          />

          <label for="password">Senha:</label>
          <input
            v-model="login.password"
            type="password"
            placeholder="Digite sua senha"
            id="password"
            name="password"
          />

          <a class="main__login__esqueceu-senha" href="#"
            >Esqueceu sua senha?</a
          >
          <button @click="confirm" type="button" id="login">Confirmar</button>
          <!-- <button @click.native="handleClick('#login', 'login'), event => event.preventDefault()" type="button" id="login">Confirmar</button> -->
        </form>
      </article>
    </div>
  </main>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
// import login from "@/store/login";

export default {
  name: "LoginView",
  components: {
    HeaderComponent,
    FooterComponent,
  },

  computed: {
    dbLogin() {
      return this.$store.getters.dbLogin
    },

    login() {
      return this.$store.state.login
    }
  },

  methods: {
    removeQuotesSpaces(str) {
      return str.replaceAll('\'', '').replaceAll('\"', '').trim();
    },

    confirm() {
      // check blank    
      if (this.login.email === '' || this.login.password === '')
        return alert('Atenção! Os campos usuário e senha devem ser preenchidos.');

      const filteredEmail = this.removeQuotesSpaces(this.login.email);
      const result = this.dbLogin.find(item => (item.email === filteredEmail) && (item.password === this.login.password));

      if (!result)
        return alert('Atenção! Email ou senha inválidos.');

      // send to localStorage
      this.dbLogin.user = result.user;
      localStorage.setItem('login', JSON.stringify({ user: result.user, email: result.email }));
      
      // redirect to home
      window.location.href = '/';
    },
  }
};
</script>

<style scoped>
@import "@/assets/css/login.css";
</style>
