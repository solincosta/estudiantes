<template>
  <div class="pokemon-container">
    <div
      v-for="pokemon in pokemones"
      :key="pokemon.id"
      @click="openPokemon(pokemon)"
    >
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
    header="Información del Pokemon"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <div>
      <ButtonPrime @click="closeModal" label="Atras" />
      <img class="imagen-pokemon" :src="pokemon.imagen" alt="" />
      <h3 class="titulo-pokemon">{{ pokemon.nombre }}</h3>
      <span
        :style="{
          'background-color': pokemon.color,
        }"
        class="tipo-pokemon"
        >{{ tipo }}</span
      >
    </div>
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
      pokemon: {
        id: 0,
        imagen: "",
        nombre: "",
        tipo: "",
        color: "",
        disponible: false,
      },
    };
  },
  methods: {
    openPokemon: function (pokemon) {
      this.pokemon = pokemon;
      this.modalPokemonVisible = true;
    },

    closeModal: function () {
      this.modalPokemonVisible = false;
    },

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
