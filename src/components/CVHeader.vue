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
    />

    <v-card-title class="text-h4"> {{ base.name }} </v-card-title>
    
    <v-card-subtitle class="text-h6"> {{ base.occupation }} </v-card-subtitle>
    
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