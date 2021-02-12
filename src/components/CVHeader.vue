<template>
<v-card tile>
  <!-- background image -->
  <v-img
    :src="base.backgroundImage"
    :height="height"
  >
     <v-row>
      <v-col cols="12" sm="6">
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
      </v-col>
      <v-col align-self="end">
        <v-row justify="end" class="mb-4 mr-1">
          <CVButtons :items="base.links"/>
        </v-row>
      </v-col>
     </v-row>
  </v-img>
</v-card>
</template>

<script>

import CVButtons from './CVButtons'

export default {
  name: 'CVHeader',
  components: {
    CVButtons,
  },
  props: {
    base: {
      type: Object,
      required: true,
    },
  },
  computed: {
    height () {
      if (this.$vuetify.breakpoint.xsOnly) {
        return 370
      }
      else {
        return 320
      }
    }
  },
}
</script>