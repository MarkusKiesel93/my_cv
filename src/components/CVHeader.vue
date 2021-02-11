<template>
<v-card tile>
  <!-- background image -->
  <v-img
    :src="base.backgroundImage"
    height="20em"
  >
    <!-- profile picture -->
    <v-img
      :src="base.profileImage"
      position="left"
      height=13em
      contain
      class="ml-5 mt-3"
    />

    <v-card-title class="text-md-h3 text-sm-h4 text-h5 white--text"> {{ base.name }} </v-card-title>
    
    <v-card-subtitle class="text-md-h6 text-subtitle-1 white--text"> {{ base.occupation }} </v-card-subtitle>
    
  </v-img>
</v-card>
</template>

<script>
export default {
  name: 'CVHeader',
  props: {
    base: {
      type: Object,
      required: true,
    },
  },
}
</script>