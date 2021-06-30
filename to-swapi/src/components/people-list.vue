<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    {{ testCalling() }}
    <p v-html="htmlContent"></p>
    <ul>
      <li v-for="item in displayPeople" :key="item.id">
        {{ item.name }}
        <a v-bind:href="item.homeworld">Home world</a>
      </li>
    </ul>

    <h3>Search people</h3>
    <input v-on:input="search($event, 'Result')" type="text" v-on:keyup.enter="entering()">

    <i>
      {{ counter }}
    </i>

    <p v-once>
      Once:
      {{ counter }}
    </p>

    <h3>Add</h3>
    <form v-on:submit.prevent="saveOne()">
      <input type="text">
      <button>New one</button>
    </form>

    <button @click.="increment(12)">Increment</button>
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
      htmlContent: '<b><i>Pretty !</i></b>',
      people: [],
      displayPeople: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    entering () {
      alert(event.target.value)
    },
    saveOne () {
    },
    search (event, text) {
      this.displayPeople = this.people.filter(item => item.name.includes(event.target.value))
    },
    testCalling () {
      console.warn('Call here')
    },
    increment (number = 1) {
      console.info('increment')
      console.warn('increment', this)
      this.counter = this.counter + number
    },
    fetchData () {
      peopleStore.fetch().then(data => {
        this.people = data.results
        this.displayPeople = this.people
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
