const { createApp } = Vue

createApp({
  data() {
    return {
      emails: [],
      email: '',
    }
  },

  methods: {
    getEmail() {

      for (let i = 0; i < 10; i++) {

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((param) => {

          const emailAddress = param.data.response;

          this.email = emailAddress;

          this.emails.push(emailAddress);

          })
      }
    }
  },

  created() {

    this.getEmail();

  }
}).mount('#app')


