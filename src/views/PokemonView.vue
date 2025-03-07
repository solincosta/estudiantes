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
</template>
<script>
import PokemonComponent from "@/components/PokemonComponent.vue";
export default {
  name: "PokemonView",

  data() {
    return {
      pokemones: [],
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
