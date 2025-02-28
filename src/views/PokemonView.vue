<template>
  <div class="pokemon-container">
    <div v-for="pok in pokemones" :key="pok.id">
        <PokemonComponent
            :id="pok.id"
            :nombre="pok.nombre"
            :tipo="pok.type_name"
            :imagen="pok.imagen"
            :color="pok.type_color"
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
