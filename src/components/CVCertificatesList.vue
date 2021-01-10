<template>
<v-card tile>
  <v-card-title> Zertifikate </v-card-title>
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
        <div class="text-body-2"> {{ item.description }} </div>
    </v-list-item-content>
    </v-list-item>
  </v-list>
</v-card>
</template>

<script>

export default {
  name: 'CVCertificatesList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}

</script>