<template>
  <HeaderComponent />

  <main>
    <div class="main">
      <h1>Contato</h1>

      <article class="main__login">
        <form action="/public" method="get">
          <label for="name">Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            id="name"
            name="name"
            required
          />

          <label for="email">Email:</label>
          <input
            type="email"
            placeholder="Digite seu melhor email"
            id="email"
            name="email"
            required
          />

          <label for="phone">Telefone:</label>
          <input
            type="tel"
            placeholder="Digite seu telefone"
            id="phone"
            name="phone"
            required
          />

          <label for="subject">Assunto:</label>
          <select name="subject" id="subject">
            <option value="CancelamentoDeReserva">
              Cancelamento de Reserva
            </option>
            <option value="Ouvidoria">Ouvidoria</option>
            <option value="DepartamentoFinanceiro">
              Departamento Financeiro
            </option>
          </select>

          <label for="message">Mensagem:</label>
          <textarea
            placeholder="Digite sua mensagem"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>

          <button>Confirmar</button>
        </form>
      </article>
    </div>
  </main>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "ContactView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
@import "@/assets/css/contato.css";
</style>
