<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <div>
      <label >Rechercher</label>
      <input type="text" @keyup.enter="filter($event)">
    </div>

    <PeopleUl :list="peopleFiltered"></PeopleUl>

    <i>
      {{ counter }}
    </i>

    <button @click="increment()">Increment</button>
  </div>
</template>

<script>
import PeopleUl from './PeopleUlLi.vue'

const peopleStore = {
  async fetch () {
    const result = await fetch('https://swapi.dev/api/people')
    const data = await result.json()

    return data
  }
}

export default {
  name: 'PeopleList',
  components: {
    PeopleUl
  },
  props: {},
  data () {
    return {
      title: 'Star wars people',
      subTitle: 'Amazing',
      counter: 0,
      people: [],
      peopleFiltered: []
    }
  },
  created () {
    console.info('created::people list 1')
    this.fetchData()
    console.info('created::people list 2')
  },
  methods: {
    filter (event) {
      this.peopleFiltered = this.people.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()))
    },

    increment () {
      console.info('increment')
      this.counter++
    },
    fetchData () {
      peopleStore.fetch().then(data => {
        this.people = data.results
        this.peopleFiltered = this.people
      })
    }
  },
  mounted () {

  },
  computed: {
    getPeople: function () {
      return [{ id: 1, name: 'coucou' }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
