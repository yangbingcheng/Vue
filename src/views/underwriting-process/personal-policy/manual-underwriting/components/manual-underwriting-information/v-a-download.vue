<template>
 <div>
   <el-table
     :data="tableData"
     style="width: 100%">
     <el-table-column
       prop=""
       label="查看录音录像资料"
       align="center" header-align="center"
       width="1000">
     </el-table-column>
   </el-table>
 </div>
</template>

<script>
export default {
  name: 'vaDownload'
}

</script>

<style scoped>
el-table {
  margin: 0 auto;
}
</style>
