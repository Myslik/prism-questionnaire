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
    resultAgree : false,
    gdprAgree: false,
    marketingAgree: false
  },

  /* step configurations ---------------------------------------------- */
  steps: [
    {
      /* header copy for intro step ----------------------------------- */
      header: 'Malá ochutnávka, ale váš velký první krok k lepšímu pochopení sebe sama.',
      subheader: '',
      type: 'intro',
      
      /* custom button text for intro step --------------------------- */
      buttonText: 'Pojďme začít'
    },
    {
      /* header copy for step 1 --------------------------------------- */
      header: 'Ohodnoťte každé tvrzení na škále od 1 do 6:',
      subheader: '(Kde 1 znamená „vůbec mě to nevystihuje" a 6 „zcela mě to vystihuje")',
      type: 'questions',

      /* questions for step 1 ----------------------------------------- */
      questions: [
        'Cítím se trapně, když mě někdo chválí nebo oceňuje na veřejnosti.',
        'Rychle se začnu nudit a potřebuji hodně rozmanitosti a vzrušení.',
        'Jsem trpělivý/á a chápavý/á, když jednám s obtížnými lidmi.',
        'Jsem upovídaný/á, společenský/á a snadno si dělám přátele mezi cizími lidmi.',
        'Rád/a vykonávám úkoly, které vyžadují přesnost a smysl pro detail.'
      ]
    },
    {
      /* header copy for step 2 --------------------------------------- */
      header: 'Ohodnoťte každé tvrzení na škále od 1 do 6:',
      subheader: '(Kde 1 znamená „vůbec mě to nevystihuje" a 6 „zcela mě to vystihuje")',
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
      subheader: '(Kde 1 znamená „vůbec mě to nevystihuje" a 6 „zcela mě to vystihuje")',
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
      subheader: '(Kde 1 znamená „vůbec mě to nevystihuje" a 6 „zcela mě to vystihuje")',
      type: 'questions',

      /* questions for step 4 ----------------------------------------- */
      questions: [
        'Preferuji pracovat samostatně a raději se zabývám informacemi a daty než lidmi.',
        'Vnímám se jako člověk, který má silnou vůli, je rázný a rozhodný.',
        'Vnímám se jako citlivý/á a chápavý/á vůči ostatním.',
        'Vnímám se jako člověk, který činí bystrá rozhodnutí založená na logice a faktech.',
        'Vnímám sám sebe jako veselého člověka, který má rád zábavu.'
      ]
    },
    {
      /* header copy for contact form step ---------------------------- */
      header: 'Už jste skoro u cíle!',
      subheader: 'Stačí jen doplnit vaše jméno a e-mail – a my vám hned pošleme vaši úvodní zprávu, která představí váš dominující preferovaný styl chování podle <i>PRISM</i>.',
      type: 'contact'
    }
  ],

  /* answers stored across all steps ---------------------------------- */
  answers: {
    Q1: 1,
    Q2: 1,
    Q3: 1,
    Q4: 1,
    Q5: 1,
    Q6: 1,
    Q7: 1,
    Q8: 1,
    Q9: 1,
    Q10: 1,
    Q11: 1,
    Q12: 1,
    Q13: 1,
    Q14: 1,
    Q15: 1,
    Q16: 1,
    Q17: 1,
    Q18: 1,
    Q19: 1,
    Q20: 1
  },

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

  // check if all questions in the current step have been answered
  get areCurrentQuestionsAnswered() {
    // Only applicable for question-type steps
    if (this.currentStepData.type !== 'questions' || !this.currentStepData.questions) {
      return true
    }

    // Check if every question has been answered with a value between 1 and 6
    return this.currentStepData.questions.every((_, i) => {
      const questionNumber = this.questionOffset + i + 1
      const answerValue = this.answers['Q' + questionNumber]
      return typeof answerValue === 'number' && answerValue >= 1 && answerValue <= 6
    })
  },
  
  // check if contact form is valid (all required fields are filled and resultAgree is checked)
  get isContactFormValid() {
    if (this.currentStepData.type !== 'contact') {
      return true
    }
    
    return (
      !!this.contactInfo.firstName &&
      !!this.contactInfo.lastName &&
      !!this.contactInfo.email &&
      !!this.contactInfo.resultAgree
    )
  },
  
  // determine if the next/submit button should be enabled
  get isNextButtonEnabled() {
    if (this.currentStepData.type === 'questions') {
      return this.areCurrentQuestionsAnswered
    } else if (this.currentStepData.type === 'contact' && this.isLastStep) {
      return this.isContactFormValid
    }
    return true
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
      goal:             this.contactInfo.goal,
      gdpr_agree:       !!this.contactInfo.gdprAgree,
      marketing_option: !!this.contactInfo.marketingAgree,
      ...this.answers   // spreads Q1 … Q20
    }

    /* 2.  Fire-and-forget POST – Make.com triggers immediately        */
    try {
      const response = await fetch(
        'https://hook.eu2.make.com/90wenhblip6vptya99fd1nejf6ruof7q',
        {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(payload)
          // If you develop locally and hit CORS errors,
          // add  mode:'no-cors' (you won't get a response back).
        }
      )

      /* Check if response status is not in the 200-299 range */
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      /* 3.  Success UX ------------------------------------------------ */
      alert('🟢 Díky! Vaše odpovědi byly odeslány.')
      // optional: redirect or reset form here

    } catch (err) {
      console.error('Webhook POST failed:', err)
      alert('🔴 Omlouváme se, odeslání se nezdařilo. Zkuste to prosím znovu.')
    }
  }
}).mount('#questionnaire')