<template>
  <HeaderComponent />

  <h1>Minhas Reservas</h1>

  <!-- <div v-if="myReservations"> -->
  <div v-for="item in myReservations" :id="item.idReservation" class="my-reservations">
    <p>ID Reserva: {{ item.idReservation }}</p>
    <p>Quarto: {{ item.accommodation }}</p>
    <p>Check in: {{ item.checkin }}</p>
    <p>Check out: {{ item.checkout }}</p>

    <div v-if="item.services.length">
      <br>
      <ul>Serviços adicionais: <li v-for="service in item.services" :key="service.id">{{ service.service }}</li></ul>
      <br>
    </div>

    <p v-if="item.coupon">Cupom: {{ item.coupon }}</p>
    <p>Descontos aplicados: R$ {{ item.discount.toFixed(2) }}</p>
    <p>Total: R$ {{ item.total.toFixed(2) }}</p>
  </div>
  <!-- </div> -->

  <FooterComponent />
</template>

<script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  
  export default {
    name: 'MyReservationsView',

    components: {
      HeaderComponent,
      FooterComponent
    },

    data() {
      return {

      }
    },

    computed: {
      myReservations() {
        const login = JSON.parse(localStorage.getItem('login'));
        const reservations = JSON.parse(localStorage.getItem('reservations'));

        if (reservations) {
          const myReservations = reservations.filter(item => item.email === login.email);
          return myReservations
        } else {
         return false
        }
      }
    },
  }
</script>

<style>
  .my-reservations {
    margin: 0 2rem 2rem;
  }
</style>
