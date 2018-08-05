<template>
  <div class="main">
    <el-container>
      <el-header style="height: 300px;overflow: auto;">
        <div style="height: 800px;background: black;color:white;">影像</div>
      </el-header>
      <el-main style="height: 400px;overflow: auto;">
        <screenage></screenage>
        <form-message></form-message>
        <tell-message></tell-message>
        <tell></tell>
      </el-main>
	</el-container>
  </div>
</template>
<script>
  import screenage from './components/policy-detailed/screenage'
  import formMessage from './components/policy-detailed/form-message'
  import tellMessage from './components/policy-detailed/tell-message'
  import tell from './components/policy-detailed/tell'

  export default {
    name: 'policyDetailed',
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