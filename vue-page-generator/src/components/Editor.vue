<!--
<template>
  <div>
    <h3>Adicionar Elementos</h3>
    <button
      v-for="type in elementTypes"
      :key="type"
      @click="addElement(type)"
    >
      {{ type }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elementTypes: ["title", "subtitle", "text", "image", "button", "card", "container"],
    };
  },
  methods: {
    addElement(type) {
      const element = this.getElementByType(type);
      this.$emit("addElement", element);
    },
  };
  </script>-->

<template>
  <div>
    <h3>Adicionar Componentes</h3>
    <v-btn @click="addComponent('btn')">Botão (v-btn)</v-btn>
    <v-btn @click="addComponent('card')">Card (v-card)</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    addComponent(type) {
      // Cria o objeto que descreve qual componente Vuetify utilizar e suas props iniciais
      let newEl = {};
      switch (type) {
        case 'btn':
          newEl = {
            component: 'v-btn',
            props: { color: 'primary', variant: 'contained', children: 'Meu Botão' },
          };
          break;
        case 'card':
          newEl = {
            component: 'v-card',
            props: {
              color: 'secondary',
              children: `
                <v-card-title>Meu Título</v-card-title>
                <v-card-text>Texto interno do card</v-card-text>
              `,
            },
          };
          break;
      }
      this.$emit('add-element', newEl);
    },
  },
};
</script>
