<template>
  <div>
    <p><span @click="change1">{{ shape1 }}</span>合同信息</p>
    <div class="infoTable" v-show="isShow1">
      <!-- todo:布局 -->
      <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item  label="投保单号码" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="管理机构" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="营销渠道" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item  label="业务员编码" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="其他渠道" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-button type="primary" class="btn">保单核保结论查询</el-button>
    </div>

    <p><span @click="change2">{{ shape2 }}</span>被保人信息</p>
    <div class="infoTable" v-show="isShow2">
      <el-table
        :data="tableData1"
        style="width: 100%"
      >
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          label="序号"
          prop=""
          align="center" header-align="center"
          width="55">
        </el-table-column>
        <el-table-column
          label="客户号码"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="姓名"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="证件类型"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="证件号码"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
      </el-table>
    </div>

    <p><span @click="change3">{{ shape3 }}</span>险种信息</p>
    <div class="infoTable" v-show="isShow3">
      <el-table
        :data="tableData2"
        style="width: 100%"
      >
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          label="序号"
          prop=""
          align="center" header-align="center"
          width="55">
        </el-table-column>
        <el-table-column
          label="险种编码"
          prop=""
          align="center" header-align="center"
          width="150">
        </el-table-column>
        <el-table-column
          label="险种名称"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="保费"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="保额"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="保险起期"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="保险止期"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="交费间隔（月）"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="交费年期"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="币种"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'underwritingQuery',
   data() {
     return {
       isShow2: true,
       isShow3: true,
       shape3: '-',
       shape2: '-',
       isShow1: true,
       shape1: '-'
     }
   },
   methods: {
     change1() {
       this.isShow1 = !this.isShow1
       if (this.isShow1) {
         this.shape1 = '+'
       } else {
         this.shape1 = '-'
       }
     },
     change2() {
       this.isShow2 = !this.isShow2
       if (this.isShow2) {
         this.shape2 = '+'
       } else {
         this.shape2 = '-'
       }
     },
     change3() {
       this.isShow3 = !this.isShow3
       if (this.isShow3) {
         this.shape3 = '+'
       } else {
         this.shape3 = '-'
       }
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
  .btn {
    margin-left: 30px;
  }
</style>
