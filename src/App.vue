<template>
<!-- main container -->
<v-app>
  <!-- header -->
  <CVHeader :base="base"/>

  <v-row no-gutters>
    <v-col cols="12" md="9">
      <!-- eductaion timeline -->
      <CVTimeline 
        title="Bildungsweg"
        :items="education"
      />

      <!-- work timeline -->
      <CVTimeline 
        title="Berufslaufbahn"
        :items="work"
      />

      <!-- projects -->
      <CVProjectList :items="projects"/>

      <v-card tile class="pt-5">
        <v-card-title class="text-h4"> GitHub </v-card-title>
        <v-list>
          <v-list-item>
            <a href="https://github.com/MarkusKiesel93" target="_blank">
              <v-list-item-avatar tile>
                  <v-img :src="base.gitImage" />
              </v-list-item-avatar>
            </a>
            <v-list-item-content>
              <v-card>
                <v-card-text> Weitere Projekte finden Sie unter meinem <a href="https://github.com/MarkusKiesel93" target="_blank">GitHub Profil</a> </v-card-text>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

    </v-col>

    <v-col cols="12" md="3">
      <!-- languages -->
      <CVLanguageList :items="language"/>
      
      <!-- programming skills -->
      <CVSkillList :items="skills"/>

      <!-- certificates -->
      <CVCertificatesList :items="certificates"/>

      <!-- other knowledge -->
      <CVKnowledgeList :items="knowledge"/>

    </v-col>
  </v-row>

  <v-footer>
      <strong> &copy; {{ this.ccName }} </strong> - {{ this.year }}
  </v-footer>
</v-app>
</template>

<script>
import CVHeader from './components/CVHeader'
import CVTimeline from './components/CVTimeline'
import CVSkillList from './components/CVSkillList'
import CVLanguageList from './components/CVLanguageList'
import CVCertificatesList from './components/CVCertificatesList'
import CVProjectList from './components/CVProjectList'
import CVKnowledgeList from './components/CVKnowledgeList'

import { mapState } from 'vuex'

export default {
  name: 'CV',
  components: {
    CVHeader,
    CVTimeline,
    CVSkillList,
    CVLanguageList,
    CVProjectList,
    CVCertificatesList,
    CVKnowledgeList,
  },
  computed: {
    ...mapState({
      base: state => state.base,
      contact: state => state.contact,
      education: state => state.education,
      work: state => state.work,
      language: state => state.language,
      skills: state => state.skills,
      projects: state => state.projects,
      certificates: state => state.certificates,
      knowledge: state => state.knowledge,
    })
  },
  data: () => ({
    ccName: 'Markus Kiesel',
    year: new Date().getFullYear(),
  }),
}
</script>

<style>

</style>
