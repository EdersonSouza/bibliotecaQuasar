<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/logo_braz.jpg"
    >
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  methods: {
    ...mapActions('Livro', ['setLivros'])
  }
}
</script>
