import {
  createApp
} from 'https://unpkg.com/petite-vue@0.4.1/dist/petite-vue.es.js'

createApp({
  /* current step index ----------------------------------------------- */
  currentStepIndex: 0,

  /* contact information ---------------------------------------------- */
  contactInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    goal: '',
    gdprAgree: false,   //  ← NEW
    marketing: false    //  ← NEW
  },

  /* step configurations ---------------------------------------------- */
  steps: [
    {
      /* header copy for step 1 --------------------------------------- */
      header: 'Ohodnoťte každé tvrzení na škále od 1 do 6:',
      subheader: '(Kde 1 znamená „vůbec mě to nevystihuje“ a 6 „zcela mě to vystihuje“)',
      type: 'questions',

      /* questions for step 1 ----------------------------------------- */
      questions: [
        'Cítím se trapně, když mě někdo chválí nebo oceňuje na veřejnosti.',
        'Rychle se začnu nudit a potřebuji hodně rozmanitosti a vzrušení.',
        'Jsem trpělivý/á a chápavý/á, když jednám s obtížnými lidmi.',
        'Jsem hovorný/á, společenský/á a snadno si dělám přátele mezi cizími lidmi.',
        'Rád/a vykonávám úkoly, které vyžadují přesnost a smysl pro detail.'
      ]
    },
    {
      /* header copy for step 2 --------------------------------------- */
      header: 'Ohodnoťte každé tvrzení na škále od 1 do 6:',
      subheader: '(Kde 1 znamená „vůbec mě to nevystihuje“ a 6 „zcela mě to vystihuje“)',
      type: 'questions',

      /* questions for step 2 ----------------------------------------- */
      questions: [
        'Snažím se vyhýbat konfliktům za každou cenu, i když s ostatními silně nesouhlasím.',
        'Jsem velmi netrpělivý/á vůči pomalým pracovníkům nebo postupům, které mi překážejí.',
        'Jsem laskavý/á a starostlivý/á, rád/a pomáhám ostatním, i když mě o to nepožádají.',
        'Plním úkoly přesně a systematicky, abych zajistil/a vysokou kvalitu.',
        'Jsem velmi soutěživý/á a rád/a věci řídím.'
      ]
    },
    {
      /* header copy for step 3 --------------------------------------- */
      header: 'Ohodnoťte každé tvrzení na škále od 1 do 6:',
      subheader: '(Kde 1 znamená „vůbec mě to nevystihuje“ a 6 „zcela mě to vystihuje“)',
      type: 'questions',

      /* questions for step 3 ----------------------------------------- */
      questions: [
        'Nemám rád/a, když musím dodržovat mnoho striktních pravidel a předpisů.',
        'Nebojím se vyjádřit své názory, i když nejsou populární.',
        'Jsem inovativní a kreativní myslitel/ka, který/á přichází s mnoha novými nápady.',
        'Jsem přesný/á, logicky uvažující a svědomitý/á, a nemám rád/a nepořádek nebo chyby.',
        'Jsem ambiciózní a chci v práci dosáhnout vedoucích pozic nebo rozhodovacích pravomocí.'
      ]
    },
    {
      /* header copy for step 4 --------------------------------------- */
      header: 'Ohodnoťte každé tvrzení na škále od 1 do 6:',
      subheader: '(Kde 1 znamená „vůbec mě to nevystihuje“ a 6 „zcela mě to vystihuje“)',
      type: 'questions',

      /* questions for step 4 ----------------------------------------- */
      questions: [
        'Raději pracuji sám/sama a zpracovávám informace, než abych jednal/a s lidmi.',
        'Vnímám se jako člověk, který má silnou vůli, je rázný a rozhodný.',
        'Vnímám se jako citlivý/á a chápavý/á vůči ostatním.',
        'Vnímám se jako člověk, který činí bystrá rozhodnutí založená na logice a faktech.',
        'Vnímám se jako bezstarostný/á a veselý/á člověk.'
      ]
    },
    {
      /* header copy for contact form step ---------------------------- */
      header: 'Už jste skoro u cíle!',
      subheader: 'Stačí jen doplnit vaše jméno a e-mail, a my vám hned pošleme vaši úvodní zprávu, která představí váš dominující preferovaný styl chování podle PRISM.',
      type: 'contact'
    }
  ],

  /* answers stored across all steps ---------------------------------- */
  answers: {},

  /* Computed properties --------------------------------------------- */
  get currentStep() {
    return this.currentStepIndex + 1
  },

  get currentStepData() {
    return this.steps[this.currentStepIndex]
  },

  get header() {
    return this.currentStepData.header
  },

  get subheader() {
    return this.currentStepData.subheader
  },

  get questions() {
    return this.currentStepData.questions
  },

  get isFirstStep() {
    return this.currentStepIndex === 0
  },

  get isLastStep() {
    return this.currentStepIndex === this.steps.length - 1
  },

  // compute total number of questions from previous steps
  get questionOffset() {
    return this.steps
      .slice(0, this.currentStepIndex)
      .reduce((sum, step) => sum + (step.questions ? step.questions.length : 0), 0)
  },

  /* navigation methods ---------------------------------------------- */
  previousStep() {
    if (!this.isFirstStep) {
      this.currentStepIndex--
    }
  },

  nextStep() {
    if (!this.isLastStep) {
      this.currentStepIndex++
    } else {
      this.submit()
    }
  },

  /* submit all answers on final step -------------------------------- */
  async submit () {
    /* 1.  Flatten → structure exactly as required by the webhook */
    const payload = {
      first_name:       this.contactInfo.firstName,
      last_name:        this.contactInfo.lastName,
      email:            this.contactInfo.email,
      phone:            this.contactInfo.phone,
      gdpr_agree:       !!this.contactInfo.gdprAgree,
      marketing_option: !!this.contactInfo.marketing,
      ...this.answers   // spreads Q1 … Q20
    }

    /* 2.  Fire-and-forget POST – Make.com triggers immediately        */
    try {
      await fetch(
        'https://hook.eu2.make.com/90wenhblip6vptya99fd1nejf6ruof7q',
        {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(payload)
          // If you develop locally and hit CORS errors,
          // add  mode:'no-cors' (you won’t get a response back).
        }
      )

      /* 3.  Success UX ------------------------------------------------ */
      alert('🟢 Díky! Vaše odpovědi byly odeslány.')
      // optional: redirect or reset form here

    } catch (err) {
      console.error('Webhook POST failed:', err)
      alert('🔴 Omlouváme se, odeslání se nezdařilo. Zkuste to prosím znovu.')
    }
  }
}).mount('#questionnaire')
