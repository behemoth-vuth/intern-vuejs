<template>
<div>
    <h3>Create Data</h3>
  <div class="add">
      <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="add Data...">
      <input type="submit" value="Submit">
      </form>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CreateView',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['createDatas']),
    onSubmit (e) {
      e.preventDefault()
      this.createDatas(this.title)
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  padding: 10px;
}
input[type="text"] {
  flex: 10;
  padding: 15px;
  border: 1px solid #33B8FF;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #33B8FF;
  border: 1px solid #33B8FF;
  cursor: pointer;
}

</style>
