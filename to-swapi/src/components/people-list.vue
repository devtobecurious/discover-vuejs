<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    <ul>
      <li v-for="item in people" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <i>
      {{ counter }}
    </i>

    <button @click="increment">Increment</button>
  </div>
</template>

<script>
const peopleStore = {
  async fetch () {
    const result = await fetch('https://swapi.dev/api/people')
    const data = await result.json()

    return data
  }
}

export default {
  name: 'PeopleList',
  props: {},
  data () {
    return {
      title: 'Star wars people',
      subTitle: 'Amazing',
      counter: 0,
      people: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    increment () {
      console.info('increment')
      this.counter++
    },
    fetchData () {
      peopleStore.fetch().then(data => {
        this.people = data.results
      })
    }
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
