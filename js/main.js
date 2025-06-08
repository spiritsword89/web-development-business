const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      iconColor: '#f8ae1f',
      workflowIcon: '#893dff'
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')