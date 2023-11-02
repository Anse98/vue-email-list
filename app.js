const { createApp } = Vue

createApp({
  data() {
    return {
      emails: [],
      email: '',
      title: 'Email List',
      max: 10,
    }
  },

  methods: {
    fillEmails(max) {

      for (let i = 0; i < max; i++) {

        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((param) => {

            const emailAddress = param.data.response;

            this.email = emailAddress;

            this.emails.push(emailAddress);

          })
      
       }
    },
  },

  created() {

    this.fillEmails(this.max);

  }
}).mount('#app')


