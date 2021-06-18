<template>
  <q-page class="flex flex-center column">
    <ch2>
      {{ name }}
    </ch2>

    <q-img
      :src="url"
      style="max-width: 300px; width: 250px"
    />
    <br>
      <container>
        <q-input filled v-model="search" label="Nome do Pokemon" />
        <q-btn color="purple" label="Procurar" @click="getPokemon"/>
      </container>

      <div class="row justify-between full-width absolute container-arrows">

        <!-- * o comando na classe=q-ml-sm é de margin-left small -->
        <q-icon
          name="far fa-arrow-alt-circle-left"
          color="primary"
          class="q-ml-sm cursor-pointer"
          size="40px"
          @click="getPokemon(id - 1)"
        >
          <q-tooltip>
            Anterior
          </q-tooltip>
        </q-icon>

        <q-icon
          name="far fa-arrow-alt-circle-right"
          color="primary"
          class="q-mr-sm cursor-pointer"
          size="40px"
          @click="getPokemon(id + 1)"
        >
          <q-tooltip>
            Próximo
          </q-tooltip>
        </q-icon>
      </div>

  </q-page>
</template>

<script>
import api from '../../services/api'
import { Ch2, Container } from './styles'

export default {
  name: 'PageIndex',
  components: {
    Ch2,
    Container
  },

  data() {
    return {
      name: '',
      url: '',
      search: 'ditto',
      id: null
    }
  },

  async beforeMount() {
    await this.getPokemon()
  },

  methods: {
    getPokemon(id) {
      api
        .get(id > 0 ? `/pokemon/${id}` : `/pokemon/${this.search}`)
        .then( (response) => {
          console.log(response);
          this.id = response.data.id;
          this.name = response.data.name;
          this.search = response.data.name;
          this.url = response.data.sprites.other.dream_world.front_default;
        })
        .catch( (error) =>{
          console.log(error);
          this.triggerNegative();
        })
        .then( () => {
          // always executed
        });
        },

    triggerPositive () {
      this.$q.notify({
        type: 'positive',
        position: 'top',
        message: `O Pokemon ${this.name} foi Encontrado`
      })
    },

    triggerNegative () {
      this.$q.notify({
        type: 'negative',
        position: 'top',
        message: `O Pokemon não foi Encontrado.`
      })
    },

    retorna () {
      return this.id ++;
    }
    }
  }

</script>





