<template>
    <div>
      <h2>Criação de Página</h2>
      <Editor @addElement="addElement" />
      <div class="preview">
        <div
          v-for="(item, index) in elements"
          :key="index"
          :style="item.style"
          v-html="item.content"
        ></div>
      </div>
    </div>
  </template>
  
  <script>
  import Editor from "./Editor.vue";
  
  export default {
    data() {
      return {
        elements: [],
      };
    },
    methods: {
      addElement(element) {
        this.elements.push(element);
      },
    },
  };
  </script>
  
  <style scoped>
  .preview {
    border: 1px solid #ddd;
    padding: 10px;
    margin-top: 20px;
  }
  </style>
  