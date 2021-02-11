<template>
<v-card tile>
  <!-- background image -->
  <v-img
    :src="base.backgroundImage"
    max-height="20em"
  >
     <v-row>
      <v-col cols="12" md="9">
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
      <v-col fluid align-self="end">
        <v-row justify="end">
          <CVLinkList :items="base.links"/>
        </v-row>
      </v-col>
     </v-row>
  </v-img>
</v-card>
</template>

<script>

import CVLinkList from './CVLinkList'

export default {
  name: 'CVHeader',
  components: {
    CVLinkList,
  },
  props: {
    base: {
      type: Object,
      required: true,
    },
  },
}
</script>