<template>
  <div class="main">
    <screenage></screenage>
    <form-message></form-message>
    <tell-message></tell-message>
    <tell></tell>
  </div>
</template>
<script>
import screenage from './components/no-scan-entry-change/screenage'
import formMessage from './components/no-scan-entry-change/form-message'
import tellMessage from './components/no-scan-entry-change/tell-message'
import tell from './components/no-scan-entry-change/tell'
export default {
  name: 'noScanEntryChange',
  components: { screenage, formMessage, tellMessage, tell },
  data() {
    return { }
  },
  mounted() { },
  methods: { }
}
</script>
<style scoped>

</style>
