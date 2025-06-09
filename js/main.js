const { createApp } = Vue;

function mobileValidator(rule, value, callback) {
  const pattern = /^(\+?61|0)4\d{8}$/;
  if(!value) {
    return callback(new Error('Please input your mobile number.'))
  }

  const result =  pattern.test(value);

  if(result) {
    callback()
  } else {
    callback(new Error('Invalid Australian mobile number'))
  }
}

function emailValidator(rule, value, callback) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!value) {
    return callback(new Error('Please input your Email.'))
  }

  const result =  pattern.test(value);

  if(result) {
    callback()
  } else {
    callback(new Error('Invalid Email'))
  }
}

const app = createApp({
  data() {
    return {
      emailTemplateId: 'template_urmrkr7',
      emailServiceId: 'web-development-business',
      iconColor: '#f8ae1f',
      workflowIcon: '#893dff',
      contactFormDisplay: false,
      contactDetailDisplay: false,

      projects: [
        {url: "image/portfolio/changgou.png", alt: "Web Development E-commerce online shopping"},
        {url: "image/portfolio/infinitus_m1.png", alt: "Web Development Online Education Tutoring"},
        {url: "image/portfolio/infinitus_m2.png", alt: "Web Development Online Education Tutoring"},
        {url: "image/portfolio/resource_page2.png", alt: "Web Development Online Education HSC Resource"},
        {url: "image/portfolio/attendit_1.png", alt: "Web Development Social network"},
        {url: "image/portfolio/attendit_2.png", alt: "Web Development Social network"}
      ],

      projectPhotoList: [
        "image/portfolio/changgou.png",
        "image/portfolio/infinitus_m1.png",
        "image/portfolio/infinitus_m2.png",
        "image/portfolio/resource_page2.png",
        "image/portfolio/attendit_1.png",
        "image/portfolio/attendit_2.png"
      ],

      formRules: {
        name: [
          {required: true, message: 'Please fill in your full name.', trigger: 'blur'},
          {min: 2, max: 50, message: 'Length shall be 2 to 50.', trigger: 'blur'}
        ],

        mobile: [
          {validator: mobileValidator, trigger: 'blur'}
        ],

        email: [
          {validator: emailValidator, trigger: 'blur'}
        ],

        message: [
          {required: true, message: 'Please write down what you need.', trigger: 'blur'},
          {min: 10, max: 1000, message: 'Length shall be 10 to 1000.', trigger: 'blur'}
        ]
      },

      form: {
        name: '',
        mobile: '',
        email: '',
        message: ''
      }
    };
  },

  mounted() {
     emailjs.init("5MeBJXO_EtD3TTN09");
  },

  methods: {
    openContactDetail: function() {
      this.contactDetailDisplay = true
    },

    startContactForm: function() {
      this.contactFormDisplay = true
    },

    submitContactForm: function() {

      const ref = this.$refs.contactFormRef
      
      ref.validate().then(()=> {
        
        emailjs.send(this.emailServiceId, this.emailTemplateId, this.form)
        .then(() => {
          this.form = {
            name: '',
            mobile: '',
            email: '',
            message: ''
          }
          this.contactFormDisplay = false
          ElementPlus.ElMessage({
              message: 'Your message has been sent successfully. We will contact you soon.',
              type: 'success'
          });
        }).catch(error => {
          
        })

      }).catch(error => {
        console.log(error)
      })
    }
  }
});

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')