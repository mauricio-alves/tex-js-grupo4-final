<template>
  <HeaderComponent />

  <main>
    <section class="container">
      <article>
        <div>
          <h2 class="container__subtitle">Nosso Hotel</h2>
          <span class="container__detalhe"></span>
        </div>
        <div class="container__content">
          <div class="container__content__foto-hotel">
            <img
              src="../assets/images/hotel-externo.jpg"
              alt="imagem do hotel"
              title="imagem do hotel"
              width="400"
            />
          </div>
          <div class="container__content__text">
            <p>
              Nós do Atlantic Hotel oferecemos quartos confortáveis e elegantes
              que são perfeitos para qualquer tipo de viajante. Os nossos
              quartos estão equipados com todas as comodidades de que necessita
              para uma estadia relaxante e agradável, incluindo uma cama
              confortável, acesso Wi-Fi de alta velocidade, uma televisão com
              todos os canais, um mini-frigorífico e uma suíte privativa.
            </p>
            <p>
              O nosso hotel está convenientemente localizado no coração da
              cidade, com fácil acesso a todas as atrações locais e
              restaurantes. Se você está aqui para negócios ou lazer, temos algo
              para todos. Nossa equipe simpática e profissional está sempre à
              disposição para garantir que sua estadia seja o mais confortável e
              agradável possível.
            </p>
            <p>
              Também oferecemos uma variedade de serviços adicionais, como
              academia completa, piscina, bar e restaurante, para que você possa
              aproveitar ao máximo seu tempo conosco.
            </p>
          </div>
        </div>
      </article>
      <article class="quartos">
        <div>
          <h2 class="quartos__subtitle">Nossas principais acomodações</h2>
          <span class="quartos__detalhev2"></span>
        </div>
        <div class="quartos__images">
          <div
            v-for="item in dbAccommodations"
            :key="item.id"
            class="quartos__images__card"
          >
            <div v-if="item.id < 3">
              <div :id="`imagem${item.id + 1}`">
                <router-link :to="`/reservations/${item.id}`">
                  <img
                    src=""
                    :alt="item.accommodation"
                    :title="item.accommodation"
                  />
                </router-link>
              </div>
              <div class="quartos__images__card__info">
                <h3>{{ item.accommodation }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="experiencia">
        <div>
          <h2 class="experiencia__subtitle">Experiência</h2>
          <span class="experiencia__detalhe"></span>
        </div>
        <div>
          <div class="experiencia__content">
            <div>
              <img
                src="../assets/images/piscina_hotel.jpg"
                alt="piscina do hotel"
                title="piscina do hotel"
              />
            </div>
            <div
              class="experiencia__content__text experiencia__content__servicos"
            >
              <p>
                Nossa piscina proporciona um lugar relaxante e agradável para
                passar o tempo e aproveitar o sol. Com uma ótima vista para o
                mar e shows ao vivo no fim de tarde, é o ambiente perfeito para
                trazer sua família e se divertirem juntos.
              </p>
            </div>
          </div>
          <div class="experiencia__content">
            <div
              class="experiencia__content__text experiencia__content__servicos experiencia__content__academia"
            >
              <p>
                Aproveite nossa academia que conta com equipamentos de última
                geração, além de oferecer aulas de ginástica em grupo,
                treinamento pessoal e outros serviços para ajudar você a manter
                a sua saúde em dia.
              </p>
            </div>
            <div>
              <img
                src="../assets/images/academia_hotel.jpg"
                alt="academia do hotel"
                title="academia do hotel"
              />
            </div>
          </div>
          <div class="experiencia__content">
            <div>
              <img
                src="../assets/images/bar_hotel.jpg"
                alt="bar do hotel"
                title="bar do hotel"
              />
            </div>
            <div
              class="experiencia__content__text experiencia__content__servicos"
            >
              <p>
                Desfrute de um ambiente agradável e acolhedor para socializar,
                descontrair e relaxar após um longo dia. Com shows de comédia e
                música ao vivo, nosso bar possui uma variedade de bebidas e um
                menu completo para suas refeições.
              </p>
            </div>
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
  name: "AboutView.vue",
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
@import "@/assets/css/sobre.css";
</style>
