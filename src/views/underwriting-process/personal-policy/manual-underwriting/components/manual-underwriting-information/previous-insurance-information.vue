<template>
  <div class="main">
    <div class="header">
     <span>
          客户号：<el-input class="input1"></el-input>
      </span>
      <span>
          客户姓名：<el-input class="input1"></el-input>
       </span>
    </div>

    <p><span @click="change1">{{ shape1 }}</span>个险信息</p>
    <div class="infoTable" v-show="isShow1">
      <!-- 两个二层 -->
      <p><span @click="change11">{{ shape11 }}</span>已承保保单险种信息</p>
      <div class="infoTable" v-show="isShow11">
        <el-table
          :data="tableData1"
          style="width: 100%"
        >
          <el-table-column
            label=""
            prop=""
            align="center" header-align="center"
            width="55">
          </el-table-column>
          <el-table-column
            label="序号"
            prop=""
            align="center" header-align="center"
            width="55">
          </el-table-column>
          <el-table-column
            label="印刷号"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="险种名称"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="投保人"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="被保险人"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="既往职业类别"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="保额"
            prop=""
            align="center" header-align="center"
            width="80">
          </el-table-column>
          <el-table-column
            label="份数"
            prop=""
            align="center" header-align="center"
            width="80">
          </el-table-column>
          <el-table-column
            label="保类"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="保单生效日期"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="保单状态"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
        </el-table>
        <el-row class="tableFooter">
          <el-button type="primary" >首页</el-button>
          <el-button type="primary" >上一页</el-button>
          <el-button type="primary" >下一页</el-button>
          <el-button type="primary" >尾页</el-button>
        </el-row>
      </div>
      <p><span @click="change12">{{ shape12 }}</span>未承保保单险种信息</p>
      <div class="infoTable" v-show="isShow12">
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
            label="印刷号"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="险种名称"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="投保人"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="被保险人"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="保额"
            prop=""
            align="center" header-align="center"
            width="80">
          </el-table-column>
          <el-table-column
            label="份数"
            prop=""
            align="center" header-align="center"
            width="80">
          </el-table-column>
          <el-table-column
            label="保费"
            prop=""
            align="center" header-align="center"
            width="80">
          </el-table-column>
          <el-table-column
            label="投保申请日期"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="投保单状态"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="体检"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="生调"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="在保"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
          <el-table-column
            label="结论变更"
            prop=""
            align="center" header-align="center"
            width="120">
          </el-table-column>
        </el-table>
        <el-row class="tableFooter">
          <el-button type="primary" >首页</el-button>
          <el-button type="primary" >上一页</el-button>
          <el-button type="primary" >下一页</el-button>
          <el-button type="primary" >尾页</el-button>
        </el-row>
      </div>
    </div>

    <p><span @click="change2">{{ shape2 }}</span>团险信息</p>
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
          label="印刷号"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="险种名称"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="投保日期"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="保单状态"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
      </el-table>
      <el-row class="tableFooter">
        <el-button type="primary" >首页</el-button>
        <el-button type="primary" >上一页</el-button>
        <el-button type="primary" >下一页</el-button>
        <el-button type="primary" >尾页</el-button>
      </el-row>
    </div>
    <div class="footer_btn">
      <el-button type="primary" class="btn2">保单详细信息查询</el-button>
      <el-button type="primary" class="btn2">影像资料查询</el-button>
      <el-button type="primary" class="btn2">核保分析报告查询</el-button>
      <el-button type="primary" class="btn2">操作履历查询</el-button>
      <el-button type="primary" class="btn2" >核保等待查询</el-button>
      <el-button type="primary" class="btn2">既往体检资料查询</el-button>
      <el-button type="primary" class="btn2">既往生调资料查询</el-button>
      <el-button type="primary" class="btn2">既往核保审核通知函查询</el-button>
      <el-button type="primary" class="btn2">既往问题件查询</el-button>
      <el-button type="primary" class="btn2">再保查询</el-button>
      <el-button type="primary" class="btn2">既往理赔资料查询</el-button>
      <el-button type="primary" class="btn2">既往保全资料查询</el-button>
      <el-button type="primary" class="btn2">保单交费查询</el-button>
      <el-button type="primary" class="btn2">客户既往理赔资料查询</el-button>
      <el-button type="primary" class="btn2">客户既往保全资料查询</el-button>
    </div>
    <el-button type="primary" class="btn3" @click="to()">返回</el-button>
  </div>
</template>

<script>
export default {
  name: 'previousInsuranceInformation',
  data() {
    return {
      isShow1: true,
      shape1: '-',
      isShow2: true,
      shape2: '-',
      isShow12: true,
      shape12: '-',
      isShow11: true,
      shape11: '-'
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
    change11() {
      this.isShow11 = !this.isShow11
      if (this.isShow11) {
        this.shape11 = '+'
      } else {
        this.shape11 = '-'
      }
    },
    change12() {
      this.isShow12 = !this.isShow12
      if (this.isShow12) {
        this.shape1 = '+'
      } else {
        this.shape12 = '-'
      }
    },
    to() {}
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
  .header {
    margin-top: 10px;
    margin-left: 20px;
  }
  .header span {
    margin-left: 50px;
  }
  .input1 {
    width:200px;
  }
  .tableFooter {
    margin-left: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
.footer_btn {
  margin-top: 50px;
  margin-left: 20px;
}
.btn2 {
  margin: 10px;
}
.btn3 {
  margin-left: 20px;
}
</style>
