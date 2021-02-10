<template>
<v-card tile class="pt-5">
  <v-card-title class="text-md-h4 text-h5"> {{ title }} </v-card-title>
  <v-timeline dense>
    <v-timeline-item 
      v-for="item in items" :item="item" :key="item.id" 
      right
      class="mb-5"
      >
      <!-- icon on timeline -->
      <template v-slot:icon>
        <v-avatar tile> <v-img :src="item.image" /> </v-avatar>
      </template>
      <!-- content -->
      <v-card tile class="mr-3 pl-3">
        <!-- titel -->
        <div class="text-h6">{{ item.title }}</div>
        <!-- subtitle -->
        <div class="text-subtitle-2 mb-3">{{ item.institution }}</div>

        <!-- row with 2 columns -->
        <v-row>
          <v-col cols="3">
            <!-- time from to -->
            <v-icon>mdi-calendar-range</v-icon>
            <div v-if="item.to">
              <div class="text-body-2"> von {{ item.from }} <br> bis {{ item.to }} </div>
            </div>
            <div v-else>
              <div class="text-body-2"> seit {{ item.from }} </div>
            </div>
          </v-col>
          <v-col>
            <!-- description -->
            <v-icon>mdi-information-outline</v-icon>
            <div
              class="text-body-2"
              v-for="description in item.description"
              :key="description"
            >
              {{ description }}
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</v-card>
</template>

<script>

export default {
  name: 'CVTimeline',
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>