<template>
<div id="modalServices" class="escolha__modal">
    <!-- Modal content -->
    <div class="escolha__modal__modal-content">
    <span @click="closeModal" id="closeModalServices" class="escolha__modal__modal-content__close">&times;</span>
    <p>Serviços Adicionais</p>

        <div v-for="item in dbServices" :key="item.id" id="services-content">
        <p><input type="checkbox" :id="item.id" :checked="reservation.services.find(service => service.id == item.id) ? true : false"> {{ item.service }} -> R$ {{ item.price.toFixed(2) }}</p>
        </div>

        <button @click="clearServices" id="clearServices">Limpar Seleção</button>
        <button @click="confirmServices" id="confirmServices">Confirmar</button>
    </div>
</div>
</template>

<script>
  export default {    
    name: 'ModalServices',

    computed: {
      reservation() {
        return this.$store.state.reservation
      },

      modal() {
        return this.$store.state.modal
      },

      dbServices() {
        return this.$store.getters.dbServices
      },

      checkServices() {
        return document.querySelectorAll('input[type="checkbox"]')
      }
    },

  mounted() {
    document.addEventListener('click', this.onClick)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.onClick)
  },

  methods: {
    closeModal() {
        this.modal.showServices = 'none'
    },

    clearServices() {
        this.checkServices.forEach(item => item.checked = false);
    },

    confirmServices() {
      this.reservation.services = [];

      this.checkServices.forEach(item => {
        if (item.checked) {
          this.reservation.services.push({
          id: item.id,
          service: this.dbServices[item.id].service,
          price: this.dbServices[item.id].price })
        };
      });

      this.closeModal();
    },

    onClick(e) {
      const modal = document.getElementById('modalServices');

      if (e.target === modal)
        this.closeModal();
    }
  }
}
</script>

<style scoped>
  .escolha__modal {
    display: v-bind('modal.showServices');
  }
</style>
