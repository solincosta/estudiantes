<template>
  
  <div  v-if="disponible == 1" class="card card-si">    
    <div class="flotante disponible">Disponible</div>
    <img class="imagen-pokemon" :src="imagen" alt="" />
    <h3 class="titulo-pokemon">{{ nombre }}</h3>
    <span
      :style="{
        'background-color': color,
      }"
      class="tipo-pokemon"
      >{{ tipo }}</span
    >
    <ButtonPrime label="Ver" severity="info" />
    
  </div>

  <div v-else class="card card-no">
    <div class="flotante no-disponible">No Disponible</div>
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

.card-si:hover{
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    scale: 1.02;
}

.card-no{
    background-color:  rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
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
