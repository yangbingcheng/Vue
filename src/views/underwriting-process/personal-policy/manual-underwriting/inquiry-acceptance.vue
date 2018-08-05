<template>
  <div class="main">
    <p><span @click="change1">{{ shape1 }}</span>保全受理信息</p>
    <div class="infoTable" v-show="isShow1">
      <!--  -->
      <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item  label="保全受理号" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="客户申请日期" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item  label="客户/保单号" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="号码类型" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="批改状态" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item  label="申请资格人" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="申请方式" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="系统操作日期" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item  label="申请资格人联系电话" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="申请资格人联系地址" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="邮编" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item  label="开户银行" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="银行账户" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="户名" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item  label="补退费领取人" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="身份证号" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="开户行所在省" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <p><span @click="change2">{{ shape2 }}</span>客户详细信息</p>
    <div class="infoTable" v-show="isShow2">
      <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <el-form-item  label="客户号码" :required="false" prop="" size="small">
            <el-input style=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item  label="客户姓名" :required="false" prop="" size="small">
            <el-input style=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item  label="客户性别" :required="false" prop="" size="small">
            <el-input style=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <el-form-item  label="客户出生日期" :required="false" prop="" size="small">
            <el-input style=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item  label="证件类型" :required="false" prop="" size="small">
            <el-input style=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item  label="证件号码" :required="false" prop="" size="small">
            <el-input style=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <el-form-item  label="证件有效期止期" :required="false" prop="" size="small">
            <el-input style=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item  label="单位名称" :required="false" prop="" size="small">
            <el-input style=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      </el-form>
    </div>
    <p><span @click="change3">{{ shape3 }}</span>保全项目信息</p>
    <div class="infoTable" v-show="isShow3">
      <el-table
        :data="tableData"
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
          label="批改类型"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="保单号码"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="客户号码"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="保单险种号码"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="柜面受理日期"
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
          label="申请原因"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="处理状态"
          prop=""
          align="center" header-align="center"
          width="120">
        </el-table-column>
      </el-table>
      <el-row class="tableFooter">
        <el-button type="primary" class="footer_btn">保全明细查询</el-button>
        <el-button type="primary" class="footer_btn" @click="jumpRouter('rescueVideoInformation')">保全影像查询</el-button>
        <el-button type="primary" class="footer_btn">保全批单查询</el-button>
        <el-button type="primary" class="footer_btn" @click="toOperateRoute()">保全操作轨迹</el-button>
        <el-button type="primary" class="footer_btn">核保查询</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inquiryAcceptance',
  data() {
    return {
      isShow1: true,
      isShow2: true,
      isShow3: true,
      shape1: '-',
      shape2: '-',
      shape3: '-'
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
    },
    toOperateRoute() {
      this.$router.push('operate-route')
    },
    jumpRouter(routerName) {
      this.$router.push({ name: routerName })
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
  .infoTable {
    margin-top: 20px;
    margin-bottom: 50px;
    margin-left: 20px;
  }
  .tableFooter {
    margin-left: 20px;
  }
</style>
