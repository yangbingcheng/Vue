<template>
  <div class="main">
    <el-main>
      <p>请输入查询条件:</p>
      <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="投保单号码" prop="policyNumber" size="small" :required="false">
                <el-input v-model="formData.policyNumber" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="扫描日期" :required="false" prop="scanDate" size="small">
              <el-date-picker
                v-model="formData.scanDate"
                type="date"
                placeholder="选择日期"
                :format="'yyyy-MM-dd'"
                :value-format="'yyyy-MM-dd'"
                @change="dateChange1"
                style="">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="销售渠道" :required="false" prop="distributionChannel" size="small">
              <el-select v-model="formData.distributionChannel" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                <el-option
                  v-for="item in getData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label">
                  <span>{{ item.value }}</span>-
                  <span>{{ item.label}}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="险种编码" :required="false" prop="coding" size="small">
               <el-select v-model="formData.coding" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                <el-option
                  v-for="item in getData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label">
                  <span>{{ item.value }}</span>-
                  <span>{{ item.label}}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="管理机构" :required="false" prop="management" size="small">
               <el-select v-model="formData.management" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                <el-option
                  v-for="item in getData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label">
                  <span>{{ item.value }}</span>-
                  <span>{{ item.label}}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="业务员代码" prop="salesmanCode" size="small" :required="false">
                <el-input v-model="formData.salesmanCode" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="星级业务员" :required="false" prop="salesmanStar" size="small">
              <el-select v-model="formData.salesmanStar" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                <el-option
                  v-for="item in getData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label">
                  <span>{{ item.value }}</span>-
                  <span>{{ item.label}}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="VIP客户" :required="false" prop="vipClient" size="small">
             <el-select v-model="formData.vipClient" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
              <el-option
                v-for="item in getData"
                :key="item.value"
                :label="item.label"
                :value="item.label">
                <span>{{ item.value }}</span>-
                <span>{{ item.label}}</span>
              </el-option>
            </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="核保级别" :required="false" prop="underwritingRank" size="small">
               <el-select v-model="formData.underwritingRank" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                <el-option
                  v-for="item in getData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label">
                  <span>{{ item.value }}</span>-
                  <span>{{ item.label }}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="投保人" prop="policyHolder" size="small" :required="false">
                <el-input v-model="formData.policyHolder" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="被保人" prop="recognizee" size="small" :required="false">
                <el-input v-model="formData.recognizee" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="核保任务状态" :required="true" prop="underwritingTaskStatus" size="small">
             <el-select v-model="formData.underwritingTaskStatus" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
              <el-option
                v-for="item in getData"
                :key="item.value"
                :label="item.label"
                :value="item.label">
                <span>{{ item.value }}</span>-
                <span>{{ item.label}}</span>
              </el-option>
            </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="核保员代码" prop="underwritingMemberCode" size="small" :required="false">
                <el-input v-model="formData.underwritingMemberCode" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="是否到账" :required="false" prop="isBill" size="small">
              <el-select v-model="formData.isBill" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                <el-option
                  v-for="item in getData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label">
                  <span>{{ item.value }}</span>-
                  <span>{{ item.label}}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="是否员工单" :required="false" prop="isEmployeeBill" size="small">
              <el-select v-model="formData.isEmployeeBill" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                <el-option
                  v-for="item in getData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label">
                  <span>{{ item.value }}</span>-
                  <span>{{ item.label}}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="业务员等级" :required="false" prop="salesRank" size="small">
                     <el-select v-model="formData.salesRank" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                        <el-option
                          v-for="item in getData"
                          :key="item.value"
                          :label="item.label"
                          :value="item.label">
                          <span>{{ item.value }}</span>-
                          <span>{{ item.label}}</span>
                        </el-option>
                    </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="百团机构投保单" :required="false" prop="insuranceSlip" size="small">
                     <el-select v-model="formData.insuranceSlip" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                        <el-option
                          v-for="item in getData"
                          :key="item.value"
                          :label="item.label"
                          :value="item.label">
                          <span>{{ item.value }}</span>-
                          <span>{{ item.label}}</span>
                        </el-option>
                    </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="总单数" prop="total" size="small" :required="false">
              <el-input v-model="formData.total" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="queryBtn">查询</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-main>
          <p><span @click="isShow">{{ shape }}</span>共享工作池</p>
          <el-table
              :data="datas"
              style="width: 100%"
              :highlight-current-row="false"
              border
              @current-change="tableHandleCurrentChange"
              v-if="flag"
              class="tableName"
            >
              <el-table-column
                label="序号"
                width=""
                align="center" header-align="center"
              >
                <template slot-scope="scope">
                  <el-radio v-model="myResult" :label="scope.$index+1"></el-radio>
                </template>
              </el-table-column>
              <el-table-column
                v-for="(v,i) in columns"
                :key="i"
                :prop="v.content"
                :label="v.label"
                :width="v.width"
                align="center" header-align="center"

              >
                  <template slot-scope="scope">
                    {{ scope.row[v.content] }}
                  </template>
              </el-table-column>
          </el-table>
          <div class="block" style="margin:20px 0;">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[2, 5, 10]"
              :page-size="pages"
              layout="total, sizes, prev, pager, next, jumper"
              :total="datas.length">
            </el-pagination>
          </div>
    </el-main>
  </div>
</template>
<script>
export default {
  name: 'queryTop',
  components: { },
  props: [],
  data() {
    return {
      shape: '-',
      flag: true,
      pages: 5,
      currentPage: 2,
      myResult: '',
      getData: [
        {
          value: 'A',
          label: '意外伤害保险'
        }, {
          value: 'H',
          label: '健康险'
        }, {
          value: 'L',
          label: '人寿保险'
        }, {
          value: 'R',
          label: '年金保险'
        }, {
          value: 'S',
          label: '重疾保险'
        }, {
          value: 'U',
          label: '万能保险'
        }, {
          value: 'V',
          label: '投连保险'
        }
      ],
      formData: {
        policyNumber: '',
        scanDate: '',
        distributionChannel: '',
        coding: '',
        management: '',
        salesmanCode: '',
        salesmanStar: '',
        vipClient: '',
        underwritingRank: '',
        policyHolder: '',
        recognizee: '',
        underwritingTaskStatus: '',
        underwritingMemberCode: '',
        isBill: '',
        isEmployeeBill: '',
        salesRank: '',
        insuranceSlip: '',
        reportType: '',
        total: ''
      },
      rules: {
        underwritingTaskStatus: [
          { required: true, message: '请输入核保任务状态', trigger: 'blur' }
        ]
      },
      datas: [
        {
          underwritingRank: 'A',
          recentDealing: 'chenruizhang',
          vipClient: '',
          salesmanStar: '星级业务员',
          policyTime: '2017-10-27',
          responseTime: '2017-10-27 11:03:30',
          underwritingTaskStatus: '核保未回复',
          management: 864498,
          coding: 14030,
          policyNumber: 'A21101100005906',
          recognizee: '张0000201769',
          setTime: 9,
          remainTime: 0,
          dangerIndex: 8,
          reportType: '新契约核保',
          scanDate: '2018-06-04 12:16:10'
        },
        {
          underwritingRank: 'A',
          recentDealing: 'chenruizhang',
          vipClient: '',
          salesmanStar: '星级业务员',
          policyTime: '2017-10-27',
          responseTime: '2017-10-27 11:03:30',
          underwritingTaskStatus: '核保未回复',
          management: 864498,
          coding: 14030,
          policyNumber: 'A21101100005906',
          recognizee: '张0000201769',
          setTime: 9,
          remainTime: 0,
          dangerIndex: 8,
          reportType: '新契约核保',
          scanDate: '2018-06-04 12:16:10'
        },
        {
          underwritingRank: 'A',
          recentDealing: 'chenruizhang',
          vipClient: '',
          salesmanStar: '星级业务员',
          policyTime: '2017-10-27',
          responseTime: '2017-10-27 11:03:30',
          underwritingTaskStatus: '核保未回复',
          management: 864498,
          coding: 14030,
          policyNumber: 'A21101100005906',
          recognizee: '张0000201769',
          setTime: 9,
          remainTime: 0,
          dangerIndex: 18,
          reportType: '新契约核保',
          scanDate: '2018-06-04 12:16:10'
        },
        {
          underwritingRank: 'A',
          recentDealing: 'chenruizhang',
          vipClient: '',
          salesmanStar: '星级业务员',
          policyTime: '2017-10-27',
          responseTime: '2017-10-27 11:03:30',
          underwritingTaskStatus: '核保未回复',
          management: 864498,
          coding: 14030,
          policyNumber: 'A21101100005906',
          recognizee: '张0000201769',
          setTime: 9,
          remainTime: 0,
          dangerIndex: 18,
          reportType: '新契约核保',
          scanDate: '2018-06-04 12:16:10'
        },
        {
          underwritingRank: 'A',
          recentDealing: 'chenruizhang',
          vipClient: '',
          salesmanStar: '星级业务员',
          policyTime: '2017-10-27',
          responseTime: '2017-10-27 11:03:30',
          underwritingTaskStatus: '核保未回复',
          management: 864498,
          coding: 14030,
          policyNumber: 'A21101100005906',
          recognizee: '张0000201769',
          setTime: 9,
          remainTime: 0,
          dangerIndex: 10,
          reportType: '新契约核保',
          scanDate: '2018-06-04 12:16:10'
        }
      ],
      columns: [
        {
          content: 'underwritingRank',
          label: '核保级别',
          width: ''
        },
        {
          content: 'recentDealing',
          label: '最近处理人',
          width: 120
        },
        {
          content: 'vipClient',
          label: 'VIP客户',
          width: ''
        },
        {
          content: 'salesmanStar',
          label: '星级业务员',
          width: 100
        },
        {
          content: 'policyTime',
          label: '投保时间',
          width: 100
        },
        {
          content: 'responseTime',
          label: '最后回复时间',
          width: 150
        },
        {
          content: 'underwritingTaskStatus',
          label: '核保任务状态',
          width: 110
        },
        {
          content: 'management',
          label: '管理机构',
          width: ''
        },
        {
          content: 'coding',
          label: '险种编码',
          width: ''
        },
        {
          content: 'policyNumber',
          label: '投保单号码',
          width: 150
        },
        {
          content: 'recognizee',
          label: '被保险人',
          width: 150
        },
        {
          content: 'setTime',
          label: '规定作业用时',
          width: 110
        },
        {
          content: 'remainTime',
          label: '剩余作业时间',
          width: 110
        },
        {
          content: 'dangerIndex',
          label: '紧急度指数',
          width: 100
        }
      ]
    }
  },
  created() { },
  mounted() { },
  activated() { },
  updated() { },
  beforeRouteUpdate(to, from, next) {
    // console.log('beforeRouteUpdate')
    // next()
  },
  methods: {
    getQueryData() {
      const jsonValue = {
        'ContNo': '110440000000001',
        'ScanDate': '2018-07-03',
        'SaleChnl': '01',
        'RiskCode': '00000',
        'ManageCom': '86',
        'AgentCode': '1200000001',
        'StarAgent': '',
        'VIPCustomer': 'A',
        'UWAuthority': 'A',
        'AppntName': '鹿晗',
        'InsuredName': '关晓彤',
        'UWState': '1',
        'UserCode': '001',
        'EnteraccState': '0',
        'OperatorState': '0',
        'UWLevel': 'A',
        'BaiTuanCom': '0'
      }
      this.$axios({
        method: 'post',
        data: jsonValue,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        url: '/api/uw/policy/query/share'
      }).then((res) => {
        console.log(res)
        console.log(res.data)
      }).catch((res) => {
        console.log(res)
      })
    },
    queryBtn() {
      this.getQueryData()
    },
    selectChange1(value) {
      console.log(value)
    },
    dateChange1(value) {
      console.log(value)
      this.date1 = value
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        console.log(this.formData)
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    tableHandleCurrentChange(n, o) {
      console.log(n)
      // console.log(o);
    },
    handleSizeChange(val) {
      // 需要传参数，可以获取到数据
      this.pages = val
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // 需要传参数，可以获取到数据
      this.currentPage = val
      // console.log(`当前页: ${val}`);
    },
    isShow() {
      if (this.flag) {
        this.flag = !this.flag
        this.shape = '+'
      } else {
        this.flag = !this.flag
        this.shape = '-'
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
</style>
