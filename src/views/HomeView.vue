<template>
  <header id="topo" class="home">

    <UserPanel />

    <div class="home__background">
      <img
        id="imagem-fundo"
        class="imagem-header"
        :src="getSorteio.image"
        alt="imagem aleatória de capa"
      />
    </div>

    <div class="home__slogan">
      <p id="texto">{{ getSorteio.slogan }}</p>
    </div>

    <div class="home__title">
      <div class="home__title__logo">
        <img src="@/assets/images/beach-svgrepo-com.svg" />
      </div>
      <div class="home__title__logo-name">
        <h1>Atlantic Hotel</h1>
      </div>
    </div>
    <div class="home__menu-hb">
      <img src="@/assets/images/hamburger-menu-24.png" alt="menu hamburguer" />
    </div>
  </header>

  <nav class="nav_home">
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

  <main>
    <section class="container">
      <article class="container__white-bg">
        <div>
          <h2 class="container__white-bg__subtitle">
            Atlantic Hotel - Uma Experiência Única
          </h2>
        </div>
        <div class="container__white-bg__about">
          <div>
            <p>
              Um dos mais tradicionais Hotéis do Rio de Janeiro, o Atlantic
              Hotel é uma ótima opção para hospedagem com diversão garantida
              para casais e toda família. Será uma experiência única!
            </p>
            <p>
              Nossos quartos são os de maior avaliação em todo o país. Temos uma
              estrutura completa de spa com massoterapeutas altamente
              especializados.
            </p>
            <p>
              Oferecemos em nosso restaurante uma tradicional e saborosa
              gastronomia em estilo comfort food para você relembrar os melhores
              momentos da vida. Aproveite ainda as diversas experiências de
              contato com a natureza!
            </p>
          </div>
          <div class="container__white-bg__about__recepcao">
            <img
              src="@/assets/images/recepcao_hotel.jpg"
              alt="recepção do hotel"
            />
          </div>
        </div>
      </article>
      <article class="container__section2">
        <div>
          <h2 class="container__section2__subtitle">
            Conheça mais sobre nossos serviços
          </h2>
        </div>
        <div class="container__section2__cards">
          <div class="container__section2__cards__card">
            <router-link to="/">
              <h3>Spa Wellness</h3>
              <img src="@/assets/images/SPA.jpg" alt="spa" />
            </router-link>
          </div>
          <div class="container__section2__cards__card">
            <router-link to="/reservations">
              <h3>Quartos</h3>
              <img src="@/assets/images/quarto.jpg" alt="quarto" />
            </router-link>
          </div>
          <div class="container__section2__cards__card">
            <router-link to="/">
              <h3>Gastronomia</h3>
              <img src="@/assets/images/gastronomia.jpg" alt="gastronomia" />
            </router-link>
          </div>
          <div class="container__section2__cards__card">
            <router-link to="/">
              <h3>Experiências</h3>
              <img src="@/assets/images/experiencias.jpg" alt="experiencia" />
            </router-link>
          </div>
        </div>
      </article>
      <article class="container__local">
        <h2 class="container__local__subtitle">Faça-nos uma visita!</h2>
        <p>
          Alameda Santos, 960 Cerqueira César / São Paulo/SP – CEP: 01.418-002
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.5149392792719!2d-46.65210740406213!3d-23.56618503265032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c774633b79%3A0x37756ae8550c9ba5!2sAlameda%20Santos%2C%20960%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001418-100!5e1!3m2!1sen!2sbr!4v1674522070308!5m2!1sen!2sbr"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="container__local__links">
          <ul>
            <li>
              <a href="#"
                ><i class="fa fa-envelope fa-3x mx-1 text-white"></i>
                reservas@atlantichotel.com.br</a
              >
            </li>
            <li>
              <a href="#"
                ><i
                  class="footer__socialMedia__icon fa fa-phone fa-3x mx-1 text-white"
                ></i>
                +55 11 998210023</a
              >
            </li>
            <li>
              <a href="#"
                ><i
                  class="footer__socialMedia__icon fa fa-phone fa-3x mx-1 text-white"
                ></i>
                +55 11 998201293</a
              >
            </li>
          </ul>
        </div>
        <div class="container__local__button">
          <a href="/public/reservas.html"
            ><button class="container__local__button__btn">
              Reserve agora mesmo!
            </button></a
          >
        </div>
      </article>
    </section>
  </main>

  <FooterComponent />
</template>

<script>
import UserPanel from "@/components/UserPanel.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    UserPanel,
    FooterComponent
  },

  data() {
    return {
      loginStorage: JSON.parse(localStorage.getItem('login')),
      reservationsStorage: JSON.parse(localStorage.getItem('reservations')),
    }
  },

  computed: {
    login() {
      return this.$store.state.login
    },

    dbBanners() {
      return this.$store.getters.dbBanners
    },

    getSorteio() {
      return this.$store.state.sorteio
    }
  },

  methods: {
    // ================= aula dia 12/01/2023 =================
    sorteio() {
      // gerar número aleatório entre 0 e 4
      const position = parseInt(Math.random() * 5);

      this.getSorteio.image = this.dbBanners[position].image;
      this.getSorteio.slogan = this.dbBanners[position].slogan;
    },
  },
  
  mounted() {
    this.sorteio();

    // Toggle display navbar ao rolar a página home
    const navMenu = document.querySelector(".nav_home");
    window.addEventListener("scroll", function (event) {
      event.preventDefault();
      if (window.scrollY > 880) {
        navMenu.classList.add("nav-colorida");
      } else {
        navMenu.classList.remove("nav-colorida");
      }
    });

    // Toggle display menu hambúrguer
    const hbMenu = document.querySelector(".home__menu-hb");
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

<style scoped>
  @import "@/assets/css/home.css";
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css";
</style>
