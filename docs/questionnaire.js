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
    email: ''
  },
  
  /* step configurations ---------------------------------------------- */
  steps: [
    {
      /* header copy for step 1 --------------------------------------- */
      header: 'Please rate on a scale of 1 – 6:',
      subheader: '(Where 1 is not like you at all and 6 is extremely like you)',
      type: 'questions',
      
      /* questions for step 1 ----------------------------------------- */
      questions: [
        'I tend to feel embarrassed if I am praised or receive recognition in public.',
        'I become bored easily and require lots of variety and excitement',
        'I am patient and understanding when dealing with difficult people'
      ]
    },
    {
      /* header copy for step 2 --------------------------------------- */
      header: 'Please continue rating on a scale of 1 – 6:',
      subheader: '(Where 1 is not like you at all and 6 is extremely like you)',
      type: 'questions',
      
      /* questions for step 2 ----------------------------------------- */
      questions: [
        'I am talkative and outgoing and good at making friends with strangers',
        'I enjoy doing tasks that require accuracy and attention to small detail'
      ]
    },
    {
      /* header copy for contact form step ---------------------------- */
      header: 'Your Contact Information',
      subheader: 'Please enter your details below',
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
  submit() {
    // Combine answers with contact info
    const submissionData = {
      answers: this.answers,
      contactInfo: this.contactInfo
    }
    console.table(this.answers)
    console.log('Contact Information:', this.contactInfo)
    alert('Thanks! Check the console for captured values.')
  }
}).mount('#questionnaire')
