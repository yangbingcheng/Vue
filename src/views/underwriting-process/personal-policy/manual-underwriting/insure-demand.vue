<template>
  <div class="container">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
      <el-row type="flex" class="row-bg">
        <el-col :span="8">
          <el-form-item label="客户号" prop="number" size="small" :required="false">
            <el-input v-model="formData.number" style=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="客户姓名" prop="name" size="small" :required="false">
              <el-input v-model="formData.name" style=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p><span @click="isShowPolicyMessage">{{ shapePolicyMessage }}</span>已承保保单险种信息</p>
    <div class="table" v-if="flagPolicyMessage">
      <el-table
          :data="policyDataMessage"
          style="width: 100%"
          :highlight-current-row="true"
          border
          @current-change="tableHandleCurrentChangePolicyMessage">
          <el-table-column
            label="序号"
            width=""
            align="center" header-align="center">
            <template slot-scope="scope">
              <el-radio v-model="radioResultMessage" :label="scope.$index+1"></el-radio>
            </template>
          </el-table-column>
          <el-table-column
            v-for="(v,i) in policyTableColumnsMessage"
            :key="i"
            :prop="v.content"
            :label="v.label"
            :width="v.width"
            align="center" header-align="center">
              <template slot-scope="scope">
                {{ scope.row[v.content] }}
              </template>
          </el-table-column>
      </el-table>
      <div class="block" style="margin:20px 0;">
        <el-pagination
          @size-change="handleSizeChangePolicyMessage"
          @current-change="handleCurrentChangePolicyMessage"
          :current-page="currentPagePolicyMessage"
          :page-sizes="[4, 5, 10]"
          :page-size="pagesPolicyMessage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="policyDataMessage.length">
        </el-pagination>
      </div>
    </div>
    <p><span @click="isShowPolicy">{{ shapePolicy }}</span>未承保保单险种信息</p>
    <div class="table" v-if="flagPolicy">
      <el-table
          :data="policyData"
          style="width: 100%"
          :highlight-current-row="true"
          border
          @current-change="tableHandleCurrentChangePolicy">
          <el-table-column
            label="序号"
            width=""
            align="center" header-align="center">
            <template slot-scope="scope">
              <el-radio v-model="radioResult" :label="scope.$index+1"></el-radio>
            </template>
          </el-table-column>
          <el-table-column
            v-for="(v,i) in policyTableColumns"
            :key="i"
            :prop="v.content"
            :label="v.label"
            :width="v.width"
            align="center" header-align="center">
              <template slot-scope="scope">
                {{ scope.row[v.content] }}
              </template>
          </el-table-column>
      </el-table>
      <div class="block" style="margin:20px 0;">
        <el-pagination
          @size-change="handleSizeChangePolicy"
          @current-change="handleCurrentChangePolicy"
          :current-page="currentPagePolicy"
          :page-sizes="[4, 5, 10]"
          :page-size="pagesPolicy"
          layout="total, sizes, prev, pager, next, jumper"
          :total="policyData.length">
        </el-pagination>
      </div>
    </div>
    <p><span @click="isShowPolicyTeam">{{ shapePolicyTeam }}</span>团险信息</p>
    <div class="table" v-if="flagPolicyTeam">
      <el-table
          :data="policyDataTeam"
          style="width: 100%"
          :highlight-current-row="true"
          border
          @current-change="tableHandleCurrentChangePolicyTeam">
          <el-table-column
            label="序号"
            width=""
            align="center" header-align="center">
            <template slot-scope="scope">
              <el-radio v-model="radioResultTeam" :label="scope.$index+1"></el-radio>
            </template>
          </el-table-column>
          <el-table-column
            v-for="(v,i) in policyTableColumnsTeam"
            :key="i"
            :prop="v.content"
            :label="v.label"
            :width="v.width"
            align="center" header-align="center">
              <template slot-scope="scope">
                {{ scope.row[v.content] }}
              </template>
          </el-table-column>
      </el-table>
      <div class="block" style="margin:20px 0;">
        <el-pagination
          @size-change="handleSizeChangePolicyTeam"
          @current-change="handleCurrentChangePolicyTeam"
          :current-page="currentPagePolicyTeam"
          :page-sizes="[4, 5, 10]"
          :page-size="pagesPolicyTeam"
          layout="total, sizes, prev, pager, next, jumper"
          :total="policyDataTeam.length">
        </el-pagination>
      </div>
    </div>
    <el-row type="flex" class="row-bg" style="margin:20px 0;">
      <el-col :span="4">
        <el-button type="primary" @click="jumpRouter('inquirePolicyDetailed')" style="margin:0 20px;">保单详细信息查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="jumpRouter('videoInformation')">影像资料查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">核保分析报告查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">操作履历查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">核保等待查询</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" style="margin:20px 0;">
      <el-col :span="4">
        <el-button type="primary" @click="submitForm" style="margin:0 20px;">既往体检资料查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">既往生调资料查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">既往核保审核通知函查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">既往问题件查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">再保查询</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" style="margin:20px 0;">
      <el-col :span="4">
        <el-button type="primary" @click="submitForm" style="margin:0 20px;">既往理赔资料查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">既往保全资料查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">保单交费查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">客户既往理赔资料查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="submitForm">客户既往保全资料查询</el-button>
      </el-col>
    </el-row>
    <el-button type="primary" @click="back" style="margin:20px 0;">返回</el-button>
  </div>
</template>
<script>
export default {
  name: 'insure-demand',
  components: { },
  data() {
    return {
      formData: {
        number: '00002222',
        name: '安000000000'
      },
      rules: { },
      flagPolicy: true,
      shapePolicy: '-',
      pagesPolicy: 5,
      currentPagePolicy: 2,
      radioResult: '',
      flagPolicyMessage: true,
      shapePolicyMessage: '-',
      flagPolicyTeam: true,
      shapePolicyTeam: '-',
      pagesPolicyMessage: 5,
      currentPagePolicyMessage: 2,
      radioResultMessage: '',
      pagesPolicyTeam: 5,
      currentPagePolicyTeam: 2,
      radioResultTeam: '',
      policyTableColumns: [
        {
          label: '印刷号',
          content: 'digit',
          width: 150
        },
        {
          label: '险种名称',
          content: 'name',
          width: 200
        },
        {
          label: '投保人',
          content: 'policyHolder',
          width: 150
        },
        {
          label: '被保险人',
          content: 'recognizee',
          width: 150
        },
        {
          label: '保额',
          content: 'amount',
          width: ''
        },
        {
          label: '份数',
          content: 'copies',
          width: ''
        },
        {
          label: '保费',
          content: 'money',
          width: ''
        },
        {
          label: '投保申请日期',
          content: 'date',
          width: 150
        },
        {
          label: '投保单状态',
          content: 'status',
          width: 150
        },
        {
          label: '体检',
          content: 'examination',
          width: ''
        },
        {
          label: '生调',
          content: 'birth',
          width: ''
        },
        {
          label: '再保',
          content: 'insureAgain',
          width: ''
        },
        {
          label: '结论变更',
          content: 'conclusion',
          width: ''
        },
        {
          label: '问题件',
          content: 'problem',
          width: ''
        },
        {
          label: '健康告知',
          content: 'healthTell',
          width: ''
        }
      ],
      policyData: [
        {
          digit: 'A11135100011977',
          name: '横琴尊享人生医疗保险',
          policyHolder: 'A11135100011977',
          recognizee: 'A11135100011977',
          amount: 300000,
          copies: 1,
          money: 654,
          date: '2018-06-05',
          status: '人工核保 疑难问题',
          examination: 0,
          birth: 0,
          insureAgain: 'N',
          conclusion: 'N',
          problem: 'Y',
          healthTell: 'Y'
        },
        {
          digit: 'A11135100011977',
          name: '横琴尊享人生医疗保险',
          policyHolder: 'A11135100011977',
          recognizee: 'A11135100011977',
          amount: 300000,
          copies: 1,
          money: 654,
          date: '2018-06-05',
          status: '人工核保 疑难问题',
          examination: 0,
          birth: 0,
          insureAgain: 'N',
          conclusion: 'N',
          problem: 'Y',
          healthTell: 'Y'
        },
        {
          digit: 'A11135100011977',
          name: '横琴尊享人生医疗保险',
          policyHolder: 'A11135100011977',
          recognizee: 'A11135100011977',
          amount: 300000,
          copies: 1,
          money: 654,
          date: '2018-06-05',
          status: '人工核保 疑难问题',
          examination: 0,
          birth: 0,
          insureAgain: 'N',
          conclusion: 'N',
          problem: 'Y',
          healthTell: 'Y'
        }
      ],
      policyTableColumnsMessage: [
        {
          label: '印刷号',
          content: 'digit',
          width: 150
        },
        {
          label: '险种名称',
          content: 'name',
          width: 200
        },
        {
          label: '投保人',
          content: 'policyHolder',
          width: 150
        },
        {
          label: '被保险人',
          content: 'recognizee',
          width: 150
        },
        {
          label: '既往职业类别',
          content: 'job',
          width: 150
        },
        {
          label: '保额',
          content: 'amount',
          width: ''
        },
        {
          label: '份数',
          content: 'copies',
          width: ''
        },
        {
          label: '保费',
          content: 'money',
          width: ''
        },
        {
          label: '保单生效日期',
          content: 'date',
          width: 150
        },
        {
          label: '保单状态',
          content: 'status',
          width: 150
        },
        {
          label: '体检',
          content: 'examination',
          width: ''
        },
        {
          label: '生调',
          content: 'birth',
          width: ''
        },
        {
          label: '核保结论',
          content: 'conclusion',
          width: ''
        },
        {
          label: '理赔',
          content: 'claim',
          width: ''
        },
        {
          label: '保全',
          content: 'save',
          width: ''
        }
      ],
      policyDataMessage: [
        // {
        //   digit: '',
        //   name: '',
        //   policyHolder: '',
        //   recognizee: '',
        //   job: '',
        //   amount: '',
        //   copies: '',
        //   money: '',
        //   date: '',
        //   status: '',
        //   examination: '',
        //   birth: '',
        //   conclusion: '',
        //   claim: '',
        //   save: ''
        // }
      ],
      policyTableColumnsTeam: [
        {
          label: '印刷号',
          content: 'digit',
          width: 150
        },
        {
          label: '险种名称',
          content: 'name',
          width: 200
        },
        {
          label: '被保险人',
          content: 'recognizee',
          width: 150
        },
        {
          label: '保额',
          content: 'amount',
          width: ''
        },
        {
          label: '份数',
          content: 'copies',
          width: ''
        },
        {
          label: '保单生效日期',
          content: 'date',
          width: 150
        },
        {
          label: '保单状态',
          content: 'status',
          width: 150
        },
        {
          label: '理赔',
          content: 'claim',
          width: ''
        },
        {
          label: '保全',
          content: 'save',
          width: ''
        },
        {
          label: '职业类别',
          content: 'job',
          width: ''
        }
      ],
      policyDataTeam: [
        // {
        //   digit: '',
        //   name: '',
        //   recognizee: '',
        //   amount: '',
        //   copies: '',
        //   date: '',
        //   status: '',
        //   claim: '',
        //   save: '',
        //   job: ''
        // }
      ]
    }
  },
  mounted() { },
  methods: {
    submitForm() { },
    tableHandleCurrentChangePolicy(n, o) {
      console.log(n)
    },
    handleSizeChangePolicy(val) {
      // 需要传参数，可以获取到数据
      this.pagesPolicy = val
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChangePolicy(val) {
      // 需要传参数，可以获取到数据
      this.currentPagePolicy = val
      // console.log(`当前页: ${val}`);
    },
    tableHandleCurrentChangePolicyTeam(n, o) {
      console.log(n)
    },
    handleSizeChangePolicyTeam(val) {
      // 需要传参数，可以获取到数据
      this.pagesPolicyTeam = val
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChangePolicyTeam(val) {
      // 需要传参数，可以获取到数据
      this.currentPagePolicyTeam = val
      // console.log(`当前页: ${val}`);
    },
    tableHandleCurrentChangePolicyMessage(n, o) {
      console.log(n)
    },
    handleSizeChangePolicyMessage(val) {
      // 需要传参数，可以获取到数据
      this.pagesPolicyMessage = val
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChangePolicyMessage(val) {
      // 需要传参数，可以获取到数据
      this.currentPagePolicyMessage = val
      // console.log(`当前页: ${val}`);
    },
    isShowPolicy() {
      if (this.flagPolicy) {
        this.flagPolicy = !this.flagPolicy
        this.shapePolicy = '+'
      } else {
        this.flagPolicy = !this.flagPolicy
        this.shapePolicy = '-'
      }
    },
    isShowPolicyMessage() {
      if (this.flagPolicyMessage) {
        this.flagPolicyMessage = !this.flagPolicyMessage
        this.shapePolicyMessage = '+'
      } else {
        this.flagPolicyMessage = !this.flagPolicyMessage
        this.shapePolicyMessage = '-'
      }
    },
    isShowPolicyTeam() {
      if (this.flagPolicyTeam) {
        this.flagPolicyTeam = !this.flagPolicyTeam
        this.shapePolicyTeam = '+'
      } else {
        this.flagPolicyTeam = !this.flagPolicyTeam
        this.shapePolicyTeam = '-'
      }
    },
    back() {
      this.$router.back(-1)
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
</style>
