import { h } from 'vue'
import Home from '../components/Home.vue'
import PeopleList from '../components/people-list.vue'

const routes = {
  '/': Home,
  '/people': PeopleList
}

export default {
  data: () => ({
    currentRoute: window.location.pathname
  }),
  computed: {
    CurrentComponent () {
      return routes[this.currentRoute] || null
    }
  },
  render () {
    return h(this.CurrentComponent)
  }
}
