<template>
<v-card tile class="pt-3 pb-5 mb-5">
  <v-card-title class="text-h5"> Sprachkenntnisse </v-card-title>
  
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
        <v-list-item-title v-text="item.title"></v-list-item-title>
        <v-list-item-subtitle v-text="item.level"></v-list-item-subtitle>
    </v-list-item-content>
    </v-list-item>
  </v-list>
</v-card>
</template>

<script>

export default {
  name: 'CvLanguageList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}

</script>