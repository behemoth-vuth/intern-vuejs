<template>
 <h1>
   <div class="button" @click="toggleMenu">Apps</div>
   <ul v-show="showMenu" class="content">
      <li>Users</li>
      <li>Users 2</li>
   </ul>
 </h1>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
