<template lang="html">
  <h2>List</h2>
  <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }}
      </li>
  </ul>

</template>

<script lang="js">

export default {
  name: 'people-ul',
  props: {
    list: []
  },
  mounted () {

  },
  created () {
    console.info('created::people ul', this.list)
  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
  ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
