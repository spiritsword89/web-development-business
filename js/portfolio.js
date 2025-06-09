const { createApp } = Vue;

const app = createApp({
    data: function() {
        return {

        }
    },

    methods: {

    }
})

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')