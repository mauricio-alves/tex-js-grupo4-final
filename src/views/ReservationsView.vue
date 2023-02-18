<template>
  <HeaderComponent />

  <main>
    <section class="container">
      <article>
        <h2>Minha Reserva</h2>
        <p>Forneça a data de entrada, saída e quantidade de pessoas:</p>
        <form class="container__form">
          <div>
            <label for="checkin">Check-in:</label>
            <input v-model="reservation.checkin" id="checkin" type="date" />
          </div>
          <div>
            <label for="checkout">Check-out:</label>
            <input
              v-model="reservation.checkout"
              @change="checkDate"
              id="checkout"
              type="date"
            />
          </div>
          <div>
            <label for="qtd_adultos">Número de hóspedes:</label>
            <input
              v-model="reservation.qty"
              id="qtd_adultos"
              type="number"
              min="1"
              max="4"
              placeholder="limite de 4 pessoas"
            />
          </div>
        </form>
      </article>

      <CreateAccommodations v-bind:id="id" />

      <Booking />

    </section>
  </main>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CreateAccommodations from "@/components/CreateAccommodations.vue";
import Booking from "@/components/Booking.vue";
import { addDays } from '@/store/getDate.js';

export default {
  name: "ReservationsView",

  props: ['id'],

  components: {
    HeaderComponent,
    FooterComponent,
    CreateAccommodations,
    Booking
  },

  computed: {
    reservation() {
      return this.$store.state.reservation;
    },

    dbAccommodations() {
      return this.$store.getters.dbAccommodations
    }
  },

  watch: {
    reservation: {
      handler() {
        // validate date
        if (this.reservation.checkout <= this.reservation.checkin) {
          alert('Atenção! A data de Check out não pode ser menor ou igual à data de Check in.');
          this.reservation.checkout = addDays(new Date(this.reservation.checkout), 1, true);
        };

        this.reservation.accommodation = this.dbAccommodations[this.reservation.id].accommodation;

        let sumServices = 0;
        this.reservation.services.map(service => sumServices += service.price);

        this.reservation.rates = (new Date(this.reservation.checkout) - new Date(this.reservation.checkin)) / 86400000;    
        this.reservation.total = (sumServices + (this.reservation.rates * this.reservation.qty * this.dbAccommodations[this.reservation.id].price)) - this.reservation.discount;
      
        // set to localStorage
        localStorage.setItem('booking', JSON.stringify(this.reservation));
      },

      deep: true
    } 
  },

  methods: {
    init() {
      this.$store.commit('initReservation')
    }
  },

  mounted() {
    const bookingStorage = JSON.parse(localStorage.getItem('booking'));
 
    if (!bookingStorage) {
      this.init();
    } else {
      this.reservation.id = bookingStorage.id;
      this.reservation.checkin = bookingStorage.checkin;
      this.reservation.checkout = bookingStorage.checkout;
      this.reservation.qty = bookingStorage.qty;
      this.reservation.services = bookingStorage.services;
    };
  }
};
</script>

<style scoped>
  @import "@/assets/css/reservas.css";
</style>
