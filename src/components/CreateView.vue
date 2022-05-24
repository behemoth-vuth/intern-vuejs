<template>
<div>
    <h3>Create Data</h3>
  <div class="add">
      <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="add Data...">
      <input type="submit" value="Submit">
      <i @click="deleteDatas(Data.id)" class='bx bx-trash'></i>
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
    ...mapActions(['createDatas', 'deleteDatas']),
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
  flex: 3;
  background: #33B8FF;
  border: 1px solid #33B8FF;
  cursor: pointer;
}
i{
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
