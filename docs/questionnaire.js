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
      
      /* content for intro step -------------------------------------- */
      content: [
        'Tento krátký dotazník je velmi zjednodušená verze nástroje PRISM Brain Mapping, která vám nabídne první pohled na to, jaký styl chování u vás v tuto chvíli nejvíce dominuje. Na rozdíl od kompletního PRISM profilu, který pracuje se 4 kvadranty a 8 dimenzemi chování a zachycuje rozdíly mezi vaším přirozeným a přizpůsobeným chováním, vám tato ochutnávka ukáže jen jeden z těchto kvadrantů – ten, který u sebe vnímáte jako nejpreferovanější.',
        'Pojďme na to:',
        'Čeká vás celkem 20 tvrzení. U každého z nich prosím zvolte na škále od 1 do 6, jak moc podle vás vystihuje vaše chování a to, jak se obvykle projevujete.',
        ' • 6 = přesně takhle se většinou chovám',
        ' • 1 = tohle chování na mě vůbec nesedí',
        'Nemusíte nad tím dlouze přemýšlet. Každý z nás přistupuje k různým situacím jinak – a přesně to tento nástroj zohledňuje. Vaše instinktivní reakce bývají nejpřesnější, tak jim klidně důvěřujte.',
        'Za pár minut bude hotovo – po vyplnění stačí kliknout na „Vytvořit zprávu" a během chvilky vám dorazí e-mailem krátká ochutnávka toho, jak vás PRISM vidí. Nejde o celý profil, ale o první náhled, který vám může otevřít dveře k hlubšímu pochopení sebe sama.',
        'Berte to jako pozvánku. Pokud vás výstup zaujme, můžete si kdykoli doplnit celý profil a podívat se na sebe komplexně – včetně rozdílů mezi tím, jak se projevujete přirozeně, jak máte tendenci se přizpůsobovat očekávání druhých a nárokům pracovního prostředí, nebo jak vás pravděpodobně vnímají ostatní.'
      ],
      
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
        'Jsem hovorný/á, společenský/á a snadno si dělám přátele mezi cizími lidmi.',
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
      subheader: 'Stačí jen doplnit vaše jméno a e-mail – a my vám hned pošleme vaši úvodní zprávu, která představí váš dominující preferovaný styl chování podle PRISM.',
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
      goal:             this.contactInfo.goal,
      gdpr_agree:       !!this.contactInfo.gdprAgree,
      marketing_option: !!this.contactInfo.marketingAgree,
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
          // add  mode:'no-cors' (you won't get a response back).
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