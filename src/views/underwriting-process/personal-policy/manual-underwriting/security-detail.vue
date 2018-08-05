<template>
 <div class="main">
   <div class="header">
     个人保单号：<el-input class="input"></el-input>
   </div>
   <p><span @click="change">{{ shape }}</span>保全历史</p>
   <div class="infoTable" v-show="isShow">
     <el-table
       :data="tableData"
       style="width: 100%"
     >
       <el-table-column
         label="序号"
         prop=""
         align="center" header-align="center"
         width="55">
         <template slot-scope="scope">
           <el-radio v-model="radioResult" :label="scope.$index+1"></el-radio>
         </template>
       </el-table-column>
       <el-table-column
         label="保全受理号"
         prop="2"
         align="center" header-align="center"
         width="120">
       </el-table-column>
       <el-table-column
         label="批单号码"
         prop=""
         align="center" header-align="center"
         width="120">
       </el-table-column>
       <el-table-column
         label="批改类型"
         prop=""
         align="center" header-align="center"
         width="120">
       </el-table-column>
       <el-table-column
         label="申请日期"
         prop=""
         align="center" header-align="center"
         width="120">
       </el-table-column>
       <el-table-column
         label="生效日期"
         prop=""
         align="center" header-align="center"
         width="120">
       </el-table-column>
       <el-table-column
         label="批改状态"
         prop=""
         align="center" header-align="center"
         width="120">
       </el-table-column>
       <el-table-column
         label="操作员"
         prop=""
         align="center" header-align="center"
         width="120">
       </el-table-column>
     </el-table>
     <el-row class="tableFooter">
       <el-button type="primary" class="footer_btn">首页</el-button>
       <el-button type="primary" class="footer_btn">上一页</el-button>
       <el-button type="primary" class="footer_btn">下一页</el-button>
       <el-button type="primary" class="footer_btn">尾页</el-button>
     </el-row>
   </div>
   <div class="footer">
     <el-button type="primary" @click="toInquiryAcceptance()">保全明细</el-button>
     <el-button type="primary" >返回</el-button>
   </div>
 </div>
</template>

<script>
export default {
  name: 'securityDetail',
  data() {
    return {
      isShow: true,
      shape: '-',
      tableData: [
        {}
      ]
    }
  },
  methods: {
    change() {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.shape = '+'
      } else {
        this.shape = '-'
      }
    },
    toInquiryAcceptance() {
      this.$router.push('inquiry-acceptance')
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 16px;
    color: blue;
    border-bottom: 2px solid blue;
    margin: 15px;
    line-height: 30px;
  }
  p span {
    display: inline-block;
    width: 15px;
    height: 15px;
    font-size: 14px;
    line-height: 13px;
    text-align: center;
    border: 1px solid #ccc;
    margin: 5px;
  }
  .input {
    width: 200px;
  }
  .header {
    margin: 20px;
  }
  .tableFooter {
    margin-left: 300px;
    margin-top: 20px;
    margin-bottom: 20px
  }
  .footer {
    margin-left: 20px;
  }
  .infoTable {
    margin-left: 20px;
  }
</style>
