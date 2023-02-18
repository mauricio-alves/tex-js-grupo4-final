<template>
  <!-- <HeaderComponent /> -->

  <main>
    <div class="main">
      <h1>{{ accommodation.accommodation }}</h1>

      <img :src="accommodation.image" :alt="accommodation.accommodation">
      <br>
      <span>{{ accommodation.description }}</span>

      <br>

      <article class="main__login">
        <!-- <form action="/public" method="get"> -->
          <label for="name">Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            id="name"
            name="name"
            required
          />

          <label for="message">Mensagem:</label>
          <textarea
            placeholder="Digite sua mensagem"
            name="message"
            id="message"
            cols="30"
            rows="10"
            v-model="comment"
          ></textarea>

          <button @click="confirmComment">Confirmar</button>
        <!-- </form> -->
      </article>
    </div>

    <vue3-star-ratings v-model="rating" />

      <div v-for="item in accommodationComments" :key="item.accommodationId">
        <p>Usuário: {{ item.user }}</p>
        <p>Comentário: {{ item.comment }}</p>
        <p>Nota: {{ item.rating }}</p>
        <hr>
      </div>
  </main>

  <!-- <footer-component></footer-component> -->
</template>

<script>
  import Comments from '@/components/Comments.js';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';

  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  import vue3StarRatings from "vue3-star-ratings";

  export default {
    name: 'AccommodationView',

    props: ['id'],

    data() {
      return {
        comment: '',
        rating: 0,
        accommodationComments: [],
        comments: new Comments
      }
    },

    computed: {
      message() {
        const teste = new Teste;
        return teste.message('testando')
      },

      accommodation() {
        return this.$store.getters.dbAccommodations[this.id];
      },

      login() {
        return this.$store.state.login;
      }
    },

    methods: {
      confirmComment() {

        // class
        this.comments.checkLogin(this.login);
        
        const newComment = { accommodationId: this.accommodation.id,
                                user: this.login.user,
                                comment: this.comment,
                                rating: this.rating
                              };

        this.comments.insertComment(newComment);

        this.comments.getComments(this.id);

        this.notify();
      },

      notify() {
        toast('comentário adicionado!', {
          autoClose: 3000,
        }); // ToastOptions
      }
    },

    mounted() {
      this.accommodationComments = this.comments.getComments(this.id)
    },

    components: {
      vue3StarRatings,
      HeaderComponent,
      FooterComponent
    },
  }
</script>

<style>
  img {
    width: 50%;
  }
</style>
