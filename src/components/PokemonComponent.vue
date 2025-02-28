<template>
  <div class="card">
    <img class="imagen-pokemon" :src="imagen" alt="">
    <h3 class="titulo-pokemon">{{ nombre }}</h3>
    <span :style="{
        'background-color': color
    }" class="tipo-pokemon">{{ tipo }}</span>
  </div>
</template>

<script>
export default {
    name: "PokemonComponent",
    props:{
        id: Number,
        imagen: String,
        nombre: String,
        tipo: String,
        color: String
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.card{
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 100%;
    justify-content: space-between;
}

.imagen-pokemon{
    width: 100%;
    height: auto;
}

.tipo-pokemon{
    background-color: gray;
}
</style>