<template>
    <div class="container">
        <stateTop></stateTop>
        <stateBottom></stateBottom>
    </div>
</template>
<script>
import stateTop from './components/state-top'
import stateBottom from './components/state-bottom'
export default {
  name: 'stateQuery',
  data() {
    return { }
  },
  components: { stateTop, stateBottom },
  mounted() {
  },
  methods: { }
}
</script>
<style scoped>

</style>
