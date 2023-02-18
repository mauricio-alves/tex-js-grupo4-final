<template>
  <HeaderComponent />

  <main>
    <section class="container">
      <article>
        <div>
          <h2 class="container__subtitle">Nossas Acomodações</h2>
          <span class="container__detalhe"></span>
        </div>
        <div class="container__text">
          <p>
            Nós do Atlantic Hotel oferecemos quartos confortáveis e elegantes
            que são perfeitos para qualquer tipo de viajante. Os nossos quartos
            estão equipados com todas as comodidades de que necessita para uma
            estadia relaxante e agradável, incluindo uma cama confortável,
            acesso Wi-Fi de alta velocidade, uma televisão com todos os canais,
            um mini-frigorífico e uma suíte privativa. A seguir apresentamos
            nosso catálogo de quartos, escolha o que mais te agrada e reserve
            já!
          </p>
        </div>
      </article>
      <article class="products-container">
        <div
          v-for="item in dbAccommodations"
          :key="item.id"
          class="products-container__card"
        >
        <router-link :to="`/accommodation/${item.id}`">
          <div
            class="products-container__card__product-image"
            :id="`img-${item.id + 1}`"
            :alt="item.accommodation"
            :title="item.accommodation"
          ></div>
        </router-link>

          <h3>{{ item.accommodation }}</h3>
          <router-link class="products-container__card__btn" :to="`/reservations/${item.id}`"
            >Reservar</router-link
          >
        </div>
      </article>
      <article>
        <div>
          <h2 class="container__subtitle">Queridinho dos hóspedes</h2>
          <span class="container__detalhe"></span>
        </div>
        <div class="container__content">
          <div class="container__content__text">
            <p>
              Nossa principal acomodação, o quarto Presidencial Luxo possui
              1.132 metros quadrados, design intimista com cores sóbrias e duas
              suítes com banheira de hidromassagem para a sua inteira
              disposição. Não deixe de conferir!
            </p>
          </div>
          <div class="container__content__image">
            <img
              src="@/assets/images/SuítePresidencial.jpg"
              alt="academia do hotel"
              title="Suíte Presidencial"
              width="600"
            />
          </div>
        </div>
      </article>
    </section>
  </main>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import dbAccommodations from "@/store/db/dbAccommodations";
export default {
  name: "AccommodationsView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      dbAccommodations,
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/quartos.css";
</style>
