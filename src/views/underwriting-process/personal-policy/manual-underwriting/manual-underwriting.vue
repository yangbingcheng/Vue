<template>
    <div class="container">
        <query-top></query-top>
        <query-bottom></query-bottom>
    </div>
</template>
<script>
import queryTop from './components/manual-underwriting/query-top'
import queryBottom from './components/manual-underwriting/query-bottom'
export default {
  name: 'manualUnderwriting',
  components: { queryTop, queryBottom },
  data() {
    return { }
  },
  mounted() {
    // this.$axios({
    //       method: 'get',
    //       // params:{
    //       //   type:'station',
    //       //   constraint:1
    //       // },
    //       url: '/api/UWApplyController/uwapplyshare'
    //     }).then((res) => {
    //       console.log(res);
    //       console.log(res.data);
    //     }).catch((res) => {
    //       console.log(res);
    //     })

  },
  methods: { }
}
</script>
<style scoped>

</style>
