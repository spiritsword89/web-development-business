const { createApp } = Vue;

const app = createApp({
    data: function() {
        return {
            starter: {
                mobile: false,
                design: false,
                seo: false,
                maintenance: false,
                delivery: false,
                base: 499
            },
            startTotal: 0,

            business: {
                design: false,
                maintenance: false,
                delivery: false,
                base: 999
            },
            businessTotal: 0,

            premium: {
                maintenance: false,
                delivery: false,
                base: 1999
            },

            premiumTotal: 0
        }
    },

    methods: {
        handleStarterChange: function() {
            this.startTotal = this.starter.base
            if(this.starter.mobile) {
                this.startTotal += 150
            }

            if(this.starter.design) {
                this.startTotal += 200
            }

            if(this.starter.seo) {
                this.startTotal += 100
            }

            if(this.starter.maintenance) {
                this.startTotal += 50
            }

            if(this.starter.delivery) {
                this.startTotal += 100
            }
            
        },

        handleBusinessChange: function() {
            this.businessTotal = this.business.base
            
            if(this.business.design) {
                this.businessTotal += 500
            }

            if(this.business.maintenance) {
                this.businessTotal += 100
            }

            if(this.business.delivery) {
                this.businessTotal += 100
            }
        },

        handlePremiumChange: function() {
            this.premiumTotal = this.premium.base

            if(this.premium.maintenance) {
                this.premiumTotal += 100
            }

            if(this.premium.delivery) {
                this.premiumTotal += 400
            }
        }
    }
})

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')