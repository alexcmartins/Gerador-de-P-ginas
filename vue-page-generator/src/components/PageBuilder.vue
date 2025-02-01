<!--
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
  </style>-->

  <template>
    <div class="page-builder">
      <!-- Lado esquerdo: Editor + Preview -->
      <div class="left-container">
        <Editor @add-element="addElement" />
  
        <div class="preview">
          <!-- Para cada item, renderizamos um componente Vue Draggable Resizable -->
          <vue-draggable-resizable
            v-for="(item, index) in elements"
            :key="index"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :parent="true"
            @dragging="onDragging($event, index)"
            @resizing="onResizing($event, index)"
            @activated="selectElement(index)"
          >
            <!-- Aqui o componente Vuetify é renderizado dinamicamente -->
            <component
              :is="item.component"
              v-bind="item.props"
              v-html="item.props.children"
            >
            </component>
          </vue-draggable-resizable>
        </div>
      </div>
  
      <!-- Lado direito: Propriedades -->
      <div class="right-container" v-if="selectedElement !== null">
        <div class="style-editor">
          <h3>Edição de Propriedades (Vuetify)</h3>
  
          <!-- Exemplo de mudar a cor do v-btn, se for um v-btn -->
          <div v-if="isButton">
            <v-text-field
              label="Cor do Botão"
              v-model="elements[selectedElement].props.color"
            ></v-text-field>
            <v-text-field
              label="Texto do Botão"
              v-model="elements[selectedElement].props.children"
            ></v-text-field>
          </div>
  
          <!-- Exemplo de edição do card (v-card) -->
          <div v-else-if="isCard">
            <v-text-field
              label="Cor do Card"
              v-model="elements[selectedElement].props.color"
            ></v-text-field>
            <v-textarea
              label="Conteúdo do Card (HTML)"
              v-model="elements[selectedElement].props.children"
              rows="5"
            ></v-textarea>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Editor from "./Editor.vue";
  import VueDraggableResizable from "vue-draggable-resizable";
  import "vue-draggable-resizable/style.css";
  
  export default {
    components: { Editor, VueDraggableResizable },
    data() {
      return {
        elements: [],
        selectedElement: null,
      };
    },
    computed: {
      isButton() {
        if (this.selectedElement === null) return false;
        return this.elements[this.selectedElement].component === "v-btn";
      },
      isCard() {
        if (this.selectedElement === null) return false;
        return this.elements[this.selectedElement].component === "v-card";
      },
    },
    methods: {
      addElement(element) {
        // Posiciona em (50, 50) com tamanho 200x100, por exemplo
        element.x = 50;
        element.y = 50;
        element.w = 200;
        element.h = 100;
        this.elements.push(element);
      },
      onDragging(pos, index) {
        this.elements[index].x = pos.left;
        this.elements[index].y = pos.top;
      },
      onResizing(newSize, index) {
        this.elements[index].x = newSize.left;
        this.elements[index].y = newSize.top;
        this.elements[index].w = newSize.width;
        this.elements[index].h = newSize.height;
      },
      selectElement(index) {
        this.selectedElement = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .page-builder {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  
  .left-container {
    flex: 1;
  }
  
  .preview {
    border: 1px solid #ccc;
    position: relative; /* Necessário para parent=true no vue-draggable-resizable */
    min-height: 600px;
    margin-top: 20px;
  }
  
  .right-container {
    width: 300px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .style-editor {
    margin-top: 20px;
  }
  </style>
  
  