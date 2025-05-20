import {
  createApp
} from 'https://unpkg.com/petite-vue@0.4.1/dist/petite-vue.es.js'

createApp({
  /* step badge -------------------------------------------------------- */
  step: 1,

  /* header copy ------------------------------------------------------- */
  header: 'Please rate on a scale of 1 – 6:',
  subheader: '(Where 1 is not like you at all and 6 is extremely like you)',

  /* questions --------------------------------------------------------- */
  questions: [
    'I tend to feel embarrassed if I am praised or receive recognition in public.',
    'I become bored easily and require lots of variety and excitement',
    'I am patient and understanding when dealing with difficult people',
    'I am talkative and outgoing and good at making friends with strangers',
    'I enjoy doing tasks that require accuracy and attention to small detail'
  ],

  /* answers keyed by index ------------------------------------------- */
  answers: {},

  /* simple placeholder submit ---------------------------------------- */
  submit () {
    console.table(this.answers)
    alert('Thanks! Check the console for captured values.')
  }
}).mount('#questionnaire')
