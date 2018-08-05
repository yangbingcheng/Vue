<template>
    <div class="container">
        <message></message>
        <hmessage></hmessage>
        <rmessage></rmessage>
        <table-total></table-total>
        <plan></plan>
        <conclusion></conclusion>
    </div>
</template>
<script>
import message from './components/underwriting-application/message'
import hmessage from './components/underwriting-application/policy-holder-message'
import rmessage from './components/underwriting-application/recognizee-message'
import tableTotal from './components/underwriting-application/table-total'
import conclusion from './components/underwriting-application/conclusion'
import plan from './components/underwriting-application/plan'
export default {
  name: 'underwritingApplication',
  components: { message, hmessage, rmessage, tableTotal, conclusion, plan },
  data() {
    return { }
  },
  methods: { }
}
</script>
<style scoped>

</style>
