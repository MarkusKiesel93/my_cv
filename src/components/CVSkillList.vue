<template>
<v-card tile> 
  <v-card-title> Programmiersprachen </v-card-title>
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

        <v-list-item-subtitle>
          <v-progress-linear
            :value="item.level"
            height="30"
            style="text-left"
            class="my-3"
          >
          </v-progress-linear>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-card>
</template>

<script>

export default {
  name: 'CVSkillList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  created: function() {
    console.log(this.items);
  }
}
</script>