<template>
  <q-page class="container flex flex-center">
     <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="livro.titulo"
        label="Título*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor insira o título do livro']"
      />
      <q-input
        filled
        v-model="livro.descricao"
        label="Descrição*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor descricao']"
      />

      <q-input
        filled
        type="number"
        v-model="livro.qt"
        label="Quantidade *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'quantidades de livros desse exemplar'
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
  </q-page>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      livro: {
        titulo: null,
        qt: null,
        descricao: null,
        autor: 'artur'
      }
    }
  },

  methods: {
    onSubmit () {
      const livro = this.livro
      console.log(this.livro.titulo)
      axios.post('http://localhost:3000/livros', {
        titulo: livro.titulo,
        descricao: livro.descricao
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    onReset () {
      console.log(this.livro)
      this.livro.titulo = null
    }
  }
}
</script>
