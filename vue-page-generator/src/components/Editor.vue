<template>
    <div>
      <h3>Adicionar Elementos</h3>
      <button @click="add('title')">Título</button>
      <button @click="add('subtitle')">Subtítulo</button>
      <button @click="add('text')">Texto</button>
      <button @click="add('image')">Imagem</button>
      <button @click="add('button')">Botão</button>
      <button @click="add('card')">Card</button>
      <button @click="add('container')">Container</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      add(type) {
        let element;
        switch (type) {
          case "title":
            element = { content: "<h1>Título</h1>", style: {} };
            break;
          case "subtitle":
            element = { content: "<h2>Subtítulo</h2>", style: {} };
            break;
          case "text":
            element = { content: "<p>Texto simples</p>", style: {} };
            break;
          case "image":
            element = { content: '<img src="placeholder.jpg" />', style: {} };
            break;
          case "button":
            element = { content: '<button>Botão</button>', style: {} };
            break;
          case "card":
            element = { content: '<div class="card">Card</div>', style: {} };
            break;
          case "container":
            element = { content: '<div class="container">Container</div>', style: {} };
            break;
        }
        this.$emit("addElement", element);
      },
    },
  };
  </script>
  