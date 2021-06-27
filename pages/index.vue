<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        gtm-gtag-nuxtjs
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>

        <button @click="buy">
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buy() {
      this.$gtag('event', 'purchase', {
        "transaction_id": "1234",
        "affiliation": "Google online store",
        "value": 23.07,
        "currency": "USD",
        "shipping": 0,
        "tax": 1.24,
        "items": [
          {
            "id": "P12345", // Note that this is the SKU, not the transaction ID
            "name": "Android Warhol T-Shirt",
            "category": "Apparel/T-Shirts",
            "quantity": 2,
            "price": '2.0'
          },
          {
            "id": "P67890", // Note that this is the SKU, not the transaction ID
            "name": "Flame challenge TShirt",
            "category": "Apparel/T-Shirts",
            "quantity": 1,
            "price": '3.0'
          }
        ]
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
