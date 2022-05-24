<template>
  <div id="container">
    <CreateView/>
    <AxiTest/>
  </div>
</template>

<script>
import AxiTest from './components/AxiTest.vue'
import CreateView from './components/CreateView.vue'
export default {
  name: 'App',
  components: {
    AxiTest,
    CreateView
  }
}
</script>

<style>

</style>
