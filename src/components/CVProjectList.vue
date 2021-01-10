<template>
<v-card tile class="pt-5">
  <v-card-title class="text-h4"> Projekte </v-card-title>
  
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

  <!-- <v-card>

    <v-card-title> Github </v-card-title>

    <v-card-text>
    <a href="https://github.com/MarkusKiesel93" target="_blank">
        <v-img
        :src="base.gitImage"
        position="right"
        height=3em
        contain
      />
    </a>
     </v-card-text>
  </v-card> -->
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