<template>
<v-card tile class="pt-3 pb-5 mb-5">
  <v-card-title class="text-md-h4 text-h5"> Projekte </v-card-title>
  
  <v-list>
    <v-list-item
      v-for="item in items"
        :item="item"
        :key="item.id"
    >
      <v-list-item-avatar tile>
        <v-img :src="item.image" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-card tile>
          <v-card-title> {{ item.title }} </v-card-title>
          <v-card-text> {{ item.text }} </v-card-text>
        </v-card>
      </v-list-item-content>
    </v-list-item>
  </v-list>
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