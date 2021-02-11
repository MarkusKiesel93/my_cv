<template>
<v-container fluid width="100">
  <v-btn
    v-for="item in items" :item="item" :key="item.id"
      :href="item.link" target="_blank"
      class='my-border my-1'
  >
    <v-icon color="white"> {{ item.icon }} </v-icon>
    {{ item.text }}
  </v-btn>
</v-container>
</template>

<script>
export default {
  name: 'CVLinkList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>

a {
  text-decoration: none;
}

.my-border {
  border: 2px solid white;
  border-radius: 25px;
}

</style>