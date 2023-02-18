<template>
  <footer>
    <div>
      <div class="rodape">
        <div class="rodape__links">
          <div class="rodape__links__navegacao">
            <h3>Navegação</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">O Hotel</router-link></li>
              <li><router-link to="/accommodations">Quartos</router-link></li>
              <li><router-link to="/reservations">Reservas</router-link></li>
              <li><router-link to="/contact">Contato</router-link></li>
              <li><router-link to="/login">Login</router-link></li>
            </ul>
          </div>
          <div class="rodape__links__sobre-nos">
            <h3>Sobre nós</h3>
            <ul>
              <li><a href="#">Fale com a gente</a></li>
              <li><a href="#">Onde estamos</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
              <li>
                <p>Siga-nos:</p>
              </li>
              <li id="redes-sociais">
                <a href="#"
                  ><img src="../assets/images/facebook.png" alt="facebook logo"
                /></a>
                <a href="#">
                  <img
                    src="../assets/images/instagram.png"
                    alt="instagram logo"
                /></a>
                <a href="#">
                  <img src="../assets/images/whatsapp.png" alt="whatsapp logo"
                /></a>
              </li>
            </ul>
          </div>
          <div class="rodape__links__termos">
            <h3>Termos e Condições</h3>
            <ul>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Política de privacidade</a></li>
            </ul>
          </div>
        </div>
        <div class="rodape__seta">
          <div class="rodape__seta__top-btn">
            <a>
              <img
                class="seta"
                src="../assets/images/up-arrow-png-27160.png"
                alt="seta pra cima"
              />
            </a>
          </div>
          <div class="rodape__seta__idioma">
            <label for="idioma">Idioma:</label>
            <select name="idioma" id="idioma">
              <option value="portugues">Português</option>
              <option value="ingles">Inglês</option>
              <option value="espanhol">Espanhol</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  mounted() {
    const seta = document.querySelector(".seta");

    seta.addEventListener("click", function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  },
};
</script>

<style>
  /* import */
</style>