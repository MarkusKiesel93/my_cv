import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    base: {
      name: 'Markus Kiesel BSc.',
      occupation: 'Zukünftiger Data Scientist',
      profileImage: require('@/assets/images/profile.jpg'),
      backgroundImage: require('@/assets/images/background.jpg'),
      gitImage: require('@/assets/images/github.png'),
    },
    education: [
      {
        id: 1,
        title: 'Masterstudium Data Science',
        from: '2019',
        institution: 'Technische Universität Wien',
        image: require('@/assets/images/study/tu.png'),
        description: [
          'derzeit laufendes Studium'
        ],
      },
      {
        id: 2,
        title: 'Bachelorstudium Wirtschaftsinformatik',
        from: '2013',
        to: '2018',
        institution: 'Wirtschaftsuniversität Wien',
        image: require('@/assets/images/study/wu.png'),
        description: [
          'Abschluss: Bachelor of Science (WU)',
          'Spezialisierung 1: Information Management and Control',
          'Spezialisierung 2: Information Business',
          'Bachelorarbeit: Evaluating RDF Stores for Evolving Linked Data (written in English)'
        ],
      },
      {
        id: 3,
        title: 'Bachelorstudium Software Engeneering',
        from: '2013',
        to: '2016',
        institution: 'Technische Universität Wien',
        description: [
          'als Zweitstudium geführt aber nicht abgeschlossen',
        ],
        image: require('@/assets/images/study/tu.png'),
      },
      {
        id: 4,
        title: 'Handelsakademie',
        from: '2007',
        to: '2012',
        institution: 'Bundeshandelsakademie Horn',
        description: [
          'Abschluss: Reife- und Diplomprüfung mit gutem Erfolg',
          'Spezialisierung: Information ..',
        ],
        image: require('@/assets/images/study/hak.png'),
      },
    ],
    work: [
      {
        id: 1,
        title: 'Softwareentwickler Tarifmathematik (20h/Woche)',
        from: '2019',
        to: '2021',
        institution: 'Donau Versicherungs AG',
        image: require('@/assets/images/work/donau.png'),
        description: [
          'Implementierung eines Rechenkernes für die Tarifmathematik (Java)',
          'Unterstützung bei der Entwicklung einer Testumgebung (Java, VBA)',
          'Unterstützung bei Fachtests',
        ],
      },
      {
        id: 2,
        title: 'Werkstudent Lebensversicherung (10-20h/Woche)',
        from: '2013',
        to: '2019',
        institution: 'Donau Versicherungs AG',
        image: require('@/assets/images/work/donau.png'),
        description: [
          'Automatisierung von Berechnungen und Datenerfassung (VBA, PowerShell)',
          'Antragserfassung: Erfassen von vertragsspezifischen Daten in SAP',
          'Antragserstellung: Bearbeiten und Berechnen von Versicherungsverträgen',
        ],
      },
    ],
    language: [
      {
        id: 1,
        title: 'Deutsch',
        level: 'Muttersprache',
        image: require('@/assets/images/language/german.png'),
      },
      {
        id: 2,
        title: 'Englisch',
        level: 'Sehr gut in Wort und Schrift (C1)',
        image: require('@/assets/images/language/english.png'),
      },
    ],
    skills: [
      {
        id: 1,
        title: 'Python',
        level: 90,
        image: require('@/assets/images/skill/python.png'),
      },
      {
        id: 2,
        title: 'Java',
        level: 70,
        image: require('@/assets/images/skill/java.png'),
      },
      {
        id: 3,
        title: 'JavaScript',
        level: 40,
        image: require('@/assets/images/skill/js.png'),
      },
      {
        id: 4,
        title: 'R',
        level: 60,
        image: require('@/assets/images/skill/r.png'),
      },
      {
        id: 5,
        title: 'VBA',
        level: 70,
        image: require('@/assets/images/skill/vba.png'),
      },
      {
        id: 6,
        title: 'SQL',
        level: 75,
        image: require('@/assets/images/skill/sql.png'),
      },
      {
        id: 7,
        title: 'Bash script',
        level: 30,
        image: require('@/assets/images/skill/bash.png'),
      },
      {
        id: 8,
        title: 'PowerShell',
        level: 30,
        image: require('@/assets/images/skill/powershell.png'),
      },
    ],
    projects: [
      {
        id: 1,
        title: 'Semantic System',
        text: 'Programmieren einer Messungsumgebung zur Auswertung verschiedener Triplestores (RDF Datenbanken) in Java und Auswerten der Messdaten im Zuge meiner Bachelorarbeit.'
      },
      {
        id: 2,
        title: 'Machine learning',
        text: 'Analyse von Datensätzen, Anwenden von Klassifikations- und Regressionmodellen an verschiedenen Datensätzen und Klassifizierung von Bildern in Python (NumPy, Pandas, scikit-learn, Keras, TensorFlow) im Zuge eines Machine Learning Projektes.'
      },
      {
        id: 3,
        title: 'Webentwicklung',
        text: 'Entwerfen und Entwickeln einer Webpage. Im Frontend JavaScript mit dem Framework Vue.js, im Backend Python mit dem Framework Django und als Datenbank PostgreSQL.',
      },
    ],
    knowledge: [
      {
        id: 1,
        category: 'Betriebssysteme',
        entries: [
          'Linux (Debian, Ubuntu)',
          'Windows',
        ]
      },
      {
        id: 2,
        category: 'Programme',
        entries: [
          'MS Office (Excel, Word, Power Point)',
          'Git, Git Extansions',
          'Docker',
          'Jupyter Notebooks',
          'JIRA',
          'SAP',
        ]
      },
      {
        id: 3,
        category: 'Frameworks',
        entries: [
          'Django',
          'Vue.js'
        ]
      },
      {
        id: 4,
        category: 'Formate',
        entries: [
          'XML, CSV',
          'HTML, CSS',
          'JSON, YAML',
          'RDF, RDFS, OWL',
        ]
      },
    ],
    certificates: [
      {
        id: 1,
        title: 'Process Analyst',
        description: 'Prüfung zum "Process Anlayst" am 31.01.2017 ausgestellt von der Gesellschaft für Prozessmanagement in Kooperation mit der WU Wien.',
        image:  require('@/assets/images/certificates/processmanagement.png'),
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
