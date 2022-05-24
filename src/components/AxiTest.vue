<template>
  <div class="Datas">
      <div v-for="Data in Datas" :key="Data.id" class="Data">{{Data.title}}
       <br/> {{Data.completed}}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'AxiTest',
  methods: {
    ...mapActions(['fetchDatas'])
  },
  computed: mapState(['Datas']),
  created () {
    this.fetchDatas()
  }
}
</script>

<style>
.Datas {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
}
.Data{
    padding: 1rem;
    border: 1px solid #fff;
    background: #33B8FF;
    color: #fff;
    font-weight: 700;
    text-align: center;
    position: relative;
    cursor: pointer;
}
</style>
