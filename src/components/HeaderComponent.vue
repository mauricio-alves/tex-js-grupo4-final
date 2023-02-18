<template>
  <UserPanel />

  <header id="topo" class="topo">
    <div class="topo__logo">
      <img src="../assets/images/beach-svgrepo-com.svg" />
    </div>
    <div class="topo__logo-name">
      <h1>Atlantic Hotel</h1>
    </div>
    <div class="topo__menu-hb">
      <img src="../assets/images/hamburger-menu-24.png" alt="menu hamburguer" />
    </div>
  </header>

  <nav class="nav_menu">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">O Hotel</router-link></li>
      <li><router-link to="/accommodations">Quartos</router-link></li>
      <li><router-link to="/reservations">Reservas</router-link></li>
      <li v-if="login.user && reservationsStorage"><router-link to="/my-reservations">Minhas Reservas</router-link></li>
      <li><router-link to="/contact">Contato</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
import UserPanel from './UserPanel.vue';

export default {
  name: "HeaderComponent",

  components: {
    UserPanel
  },

  data() {
    return {
      reservationsStorage: localStorage.getItem('reservations')
    }
  },

  computed: {
    login() {
      return this.$store.state.login
    }
  },

  mounted() {
    // Toggle display menu hamburguer
    const hbMenu = document.querySelector(".topo__menu-hb");
    const navMenu = document.querySelector(".nav_menu");

    hbMenu.addEventListener("click", function () {
      if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "block";
      }
    });
  },
};
</script>

<style>
   header {
  background-color: #f1eab9;
}

h1 {
  font-weight: 700;
  font-size: 4rem;
}

.topo {
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 13rem;
  gap: 3rem;
}
.topo__logo {
  display: flex;
}
.topo__logo img {
  width: 5rem;
  justify-content: center;
}
.topo__logo-name h1::first-letter {
  font-size: 6rem;
  font-weight: bold;
}
.topo__menu-hb {
  display: none;
}

/* --------------  NAVBAR ----------------  */
.nav_menu {
  z-index: 1;
  width: 100vw;
  background-color: rgb(233, 223, 223);
  position: sticky;
  top: 0;
}
.nav_menu ul {
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding: 0.5rem;
}
.nav_menu ul li a {
  display: block;
  color: #000;
  font-size: 1.4rem;
  padding: 0 1.5rem;
  border-radius: 0.2rem;
  font-weight: 700;
}
.nav_menu ul li a:hover {
  background-color: rgba(24, 33, 89, 0.5725490196);
  color: #fff;
  border-radius: 5px;
}
.nav_menu:hover {
  opacity: 0.9;
}
</style>