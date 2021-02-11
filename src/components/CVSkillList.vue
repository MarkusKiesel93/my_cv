<template>
<v-card tile class="pt-3 pb-5 mb-5"> 
  <v-card-title class="text-md-h4 text-h5"> Programmiersprachen </v-card-title>
  
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

  <div class="pl-3 text-caption"> *) von 0 keine Kenntnisse bis 10 Experte </div>
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
}
</script>