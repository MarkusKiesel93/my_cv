<template>
<v-card tile class="pt-3 pb-5 mb-5"> 
  <v-card-title class="text-h5"> Sonstige Kenntnisse </v-card-title>
  <v-container>
    <v-row
      v-for="item in items"
        :item="item"
        :key="item.id"
    >
      <v-col>
        {{ item.category }}
      </v-col>
      <v-col>
        <div
          v-for="entry in item.entries"
            :key="entry"
        >
          {{ entry }}
      </div>
      </v-col>
    </v-row>
  </v-container>
</v-card>
</template>

<script>
export default {
  name: 'CVKnowledgeList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>