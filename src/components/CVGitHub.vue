<template>
<v-card tile class="pt-3 pb-5 mb-5">
  <v-card-title class="text-md-h4 text-h5"> GitHub </v-card-title>
  <v-list>
    <v-list-item>
      <a href="https://github.com/MarkusKiesel93" target="_blank">
        <v-list-item-avatar tile>
            <v-img :src="image" />
        </v-list-item-avatar>
      </a>
      <v-list-item-content>
        <v-card>
          <v-card-text> Weitere Projekte finden Sie unter meinem <a href="https://github.com/MarkusKiesel93" target="_blank">GitHub Profil</a>.</v-card-text>
        </v-card>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-card>
</template>

<script>
export default {
  name: 'CVGitHub',
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  
}
</script>