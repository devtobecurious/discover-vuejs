<template>
  <h1>Star wars people</h1>

  <ul>
    <li v-for="item in getPeople" :key="item.id">
      {{ item.id }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PeopleList',
  props: {
  },
  computed: {
    getPeople: function () {
      return [
        { id: 1, name: 'coucou' }
      ]
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
