<template>
  <div class="card">
    <div v-if="disponible == 1" class="flotante disponible">Disponible</div>
    <div v-else class="flotante no-disponible">No Disponible</div>
    
    <img class="imagen-pokemon" :src="imagen" alt="" />
    <h3 class="titulo-pokemon">{{ nombre }}</h3>
    <span
      :style="{
        'background-color': color,
      }"
      class="tipo-pokemon"
      >{{ tipo }}</span
    >
  </div>
</template>

<script>
export default {
  name: "PokemonComponent",
  props: {
    id: Number,
    imagen: String,
    nombre: String,
    tipo: String,
    color: String,
    disponible: Number,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.flotante {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  border-radius: 10px;
}

.disponible {
  background-color: green;
  color: white;
}

.no-disponible {
  background-color: red;
  color: white;
}

.card {
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 100%;
  justify-content: space-between;
  position: relative;
}

.imagen-pokemon {
  width: 100%;
  height: auto;
}

.tipo-pokemon {
  background-color: gray;
}
</style>
