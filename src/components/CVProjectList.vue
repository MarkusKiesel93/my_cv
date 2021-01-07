<template>
<v-card>
  <v-card-title> Projekte </v-card-title>
  <v-card
    v-for="item in items"
      :item="item"
      :key="item.id"
  >
    <v-card-title> {{ item.title }} </v-card-title>
    <v-card-text> {{ item.text }} </v-card-text>
  </v-card>
</v-card>
</template>

<script>
export default {
  name: 'CVProjectList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>