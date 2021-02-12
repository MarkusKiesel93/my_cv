<template>
<div >
  <v-btn
    v-for="item in items" :item="item" :key="item.id"
      :href="item.link" target="_blank"
      :width="width"
      rounded
      class='ma-1'
  >
    {{ item.text }}
    <v-icon> {{ item.icon }} </v-icon>
  </v-btn>
</div>
</template>

<script>
export default {
  name: 'CVButtons',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    width () {
      if (this.$vuetify.breakpoint.xsOnly) {
        return 120
      }
      else {
        return 150
      }
    }
  },
}
</script>