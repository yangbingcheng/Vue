<template>
    <div class="container">
        <workPool></workPool>
        <proposalForm></proposalForm>
    </div>
</template>
<script>
import workPool from './components/work-pool'
import proposalForm from './components/proposal-form'
export default {
  name: 'modifyProblem',
  data() {
    return { }
  },
  components: { workPool, proposalForm },
  mounted() {
  },
  methods: { }
}
</script>
<style scoped>

</style>
