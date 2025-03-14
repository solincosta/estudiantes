<template>
  <div class="pokemon-container">
    <div v-for="pokemon in pokemones" :key="pokemon.id">
      <PokemonComponent
        :id="pokemon.id"
        :nombre="pokemon.nombre"
        :tipo="pokemon.type_name"
        :imagen="pokemon.imagen"
        :color="pokemon.type_color"
        :disponible="pokemon.disponible"
      ></PokemonComponent>
    </div>
  </div>

  <DialogPrime
    :visible="modalPokemonVisible"
    maximizable
    modal
    header="Header"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <p class="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </DialogPrime>
</template>
<script>
import PokemonComponent from "@/components/PokemonComponent.vue";
export default {
  name: "PokemonView",

  data() {
    return {
      pokemones: [],
      modalPokemonVisible: false,
    };
  },
  methods: {
    getAllPokemon: async function () {
      let url =
        "https://cobuses.com.co/APIV2/model/pokemon.php?dato=getallpokemon";
      let vue = this;
      await this.axios
        .get(url)
        .then(function (response) {
          vue.pokemones = response.data;
          console.log(response.status);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
    },
  },

  created: function () {
    this.getAllPokemon();
  },

  components: {
    PokemonComponent,
  },
};
</script>

<style scoped>
.pokemon-container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 80%;
  margin: 0 auto;
}
</style>
