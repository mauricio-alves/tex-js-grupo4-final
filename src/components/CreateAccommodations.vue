<template>
  <article class="cards">
    <div>
      <h3>Escolha o quarto:</h3>
      <span class="cards__detalhe"></span>
    </div>

    <div
      v-for="item in accommodations()"
      :key="item.id"
      class="cards__images"
      id="cards"
    >
      <div class="cards__images__card">
        <img
          src=""
          :id="`image${item.id + 1}`"
          :alt="item.accommodation"
          :title="item.accommodation"
        />

        <div class="cards__images__card__info">
          <h3>{{ item.accommodation }}</h3>
          <p>{{ item.description }}</p>
          <p>R$ {{ item.price.toFixed(2) }}</p>

          <div>
            <input
              v-model="reservation.id"
              :id="item.idLabel"
              type="radio"
              name="quarto"
              :value="item.id"
              :checked="item.checked"
            />
            <label :for="item.idLabel"
              >Selecionar {{ item.accommodation }}</label
            >
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "CreateAccommodations",

  props: ["id"],

  data() {
    return {
      // dbAccommodations
    };
  },

  computed: {
    reservation() {
      return this.$store.state.reservation;
    },

    dbAccommodations() {
      return this.$store.getters.dbAccommodations;
    },
  },

  methods: {
    accommodations() {
      const accommodations = [];
      let limit = 3;

      if (this.id) {
        accommodations.push(
          this.dbAccommodations.find((item) => item.id == this.id)
        );
        accommodations[0].checked = true;
        limit--;
      }

      for (let i = 0; i < limit; i++)
        if (this.id != i) accommodations.push(this.dbAccommodations[i]);

      return accommodations;
    },
  },
};
</script>
