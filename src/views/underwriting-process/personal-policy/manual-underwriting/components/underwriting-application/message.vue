<template>
    <div class="main">
         <el-main>
            <p><span @click="isFormShow">{{ formShape }}</span>合同信息</p>
            <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right" v-if="formFlag">
              <el-row type="flex" class="row-bg">
                  <el-col :span="8">
                      <el-form-item label="投保单号码" prop="policyNumber" size="small" :required="false">
                          <el-input v-model="formData.policyNumber" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="管理机构" prop="management" size="small" :required="false">
                          <el-input v-model="formData.management" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="销售渠道" prop="distributionChannel" size="small" :required="false">
                          <el-input v-model="formData.distributionChannel" style=""></el-input>
                      </el-form-item>
                  </el-col>
              </el-row>
              <el-row type="flex" class="row-bg">
                  <el-col :span="8">
                      <el-form-item label="业务员编码" prop="salesmanCode" size="small" :required="false">
                          <el-input v-model="formData.salesmanCode" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="业务员姓名" prop="salesmanName" size="small" :required="false">
                          <el-input v-model="formData.salesmanName" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="应交保费(本币)" prop="pre" size="small" :required="false">
                          <el-input v-model="formData.pay" style=""></el-input>
                      </el-form-item>
                  </el-col>
              </el-row>
              <el-row type="flex" class="row-bg">
                  <el-col :span="8">
                      <el-form-item label="预交保费金额" prop="prepayAmount" size="small" :required="false">
                          <el-input v-model="formData.prepayAmount" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="预交保费期数" prop="prepayPeriods" size="small" :required="false">
                          <el-input v-model="formData.prepayPeriods" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="实交保费(本币)" prop="payAmount" size="small" :required="false">
                          <el-input v-model="formData.payAmount" style=""></el-input>
                      </el-form-item>
                  </el-col>
              </el-row>
              <el-row type="flex" class="row-bg">
                  <el-col :span="8">
                      <el-form-item label="高额件标识" prop="target" size="small" :required="false">
                          <el-input v-model="formData.target" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="备注信息" prop="message" size="small" :required="false">
                          <el-input v-model="formData.message" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="关联投保单号" prop="connectPolicy" size="small" :required="false">
                          <el-input v-model="formData.connectPolicy" style=""></el-input>
                      </el-form-item>
                  </el-col>
              </el-row>
              <el-row type="flex" class="row-bg">
                  <el-col :span="8">
                      <el-form-item label="双录保单" prop="dblPolicy" size="small" :required="false">
                          <el-input v-model="formData.dblPolicy" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item  label="是否已双录" :required="false" prop="isDblPolicy" size="small">
                               <el-select v-model="formData.isDblPolicy" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
                  <el-col :span="4" :offset="1">
                      <el-form-item>
                          <el-button type="primary" @click="jumpRouter('policyDetailed')">投保单明细查询</el-button>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4" :offset="1">
                      <el-form-item>
                          <el-button type="primary" @click="jumpRouter('videoInformation')">影像资料查询</el-button>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4" :offset="1">
                      <el-form-item>
                          <el-button type="primary" @click="submitForm('formData')">财务交费信息查询</el-button>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4" :offset="1">
                      <el-form-item>
                          <el-button type="primary" @click="toUnderwritingQuery()">核保结论查询</el-button>
                      </el-form-item>
                  </el-col>
              </el-row>
              <el-row type="flex" class="row-bg">
                  <el-col :span="4" :offset="1">
                      <el-form-item>
                          <el-button type="primary" @click="toOperationHistoryQuery()">投保操作履历查询</el-button>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4" :offset="1">
                      <el-form-item>
                          <el-button type="primary" @click="submitForm('formData')">强制人工核保原因</el-button>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4" :offset="1">
                    <el-form-item>
                        <el-button type="primary" @click="toVaDownload()">录音录像资料查询</el-button>
                    </el-form-item>
                  </el-col>
              </el-row>
            </el-form>
          </el-main>
          <el-main>
                <p><span @click="isShow">{{ shape }}</span>自动核保提示信息</p>
                <el-table
                    :data="datas"
                    style="width: 100%"
                    :highlight-current-row="true"
                    border
                    @current-change="tableHandleCurrentChange"
                    @select="checkboxChange"
                    v-if="flag"
                  >
                    <el-table-column
                      label=""
                      align="center" header-align="center"
                      type="selection"
                      width="80">
                    </el-table-column>
                    <el-table-column
                      label="序号"
                      align="center" header-align="center"
                      type="index"
                      width="80">
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
          <el-button type="primary" @click="submitForm('formData')" style="margin:0 20px;">审阅完毕</el-button>
    </div>
</template>
<script>
export default {
  name: 'uwApplication',
  components: { },
  data() {
    return {
      formShape: '-',
      formFlag: true,
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
        management: '',
        distributionChannel: '',
        salesmanCode: '',
        salesmanName: '',
        payable: '',
        prepayAmount: '',
        prepayPeriods: '',
        payAmount: '',
        target: '',
        message: '',
        connectPolicy: '',
        dblPolicy: '',
        isDblPolicy: ''
      },
      rules: {
        underwritingTaskStatus: [
          { required: true, message: '请输入核保任务状态', trigger: 'blur' }
        ]
      },
      datas: [
        {
          recognizee: '张0000201769',
          type: '合同核保信息',
          reason: '有近6个月内已完成的体检项目',
          date: '2018-06-28 19:30:30',
          status: '已审阅'
        },
        {
          recognizee: '张0000201769',
          type: '合同核保信息',
          reason: '有近6个月内已完成的体检项目',
          date: '2018-06-28 19:30:30',
          status: '已审阅'
        },
        {
          recognizee: '张0000201769',
          type: '合同核保信息',
          reason: '有近6个月内已完成的体检项目',
          date: '2018-06-28 19:30:30',
          status: '已审阅'
        }
      ],
      columns: [
        {
          content: 'recognizee',
          label: '被保险人',
          width: '200%'
        },
        {
          content: 'type',
          label: '自核类型',
          width: '200%'
        },
        {
          content: 'reason',
          label: '自核未通过原因',
          width: '250%'
        },
        {
          content: 'date',
          label: '核保日期',
          width: '200%'
        },
        {
          content: 'status',
          label: '审阅状态',
          width: '200%'
        }
      ]
    }
  },
  methods: {
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
      // console.log(o)
    },
    handleSizeChange(val) {
      // 需要传参数，可以获取到数据
      this.pages = val
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      // 需要传参数，可以获取到数据
      this.currentPage = val
      // console.log(`当前页: ${val}`)
    },
    isShow() {
      if (this.flag) {
        this.flag = !this.flag
        this.shape = '+'
      } else {
        this.flag = !this.flag
        this.shape = '-'
      }
    },
    isFormShow() {
      if (this.formFlag) {
        this.formFlag = !this.formFlag
        this.formShape = '+'
      } else {
        this.formFlag = !this.formFlag
        this.formShape = '-'
      }
    },
    checkboxChange(selection, row) {
      // this.$emit('checkbox',selection);
      console.log(selection)
      console.log(row)
    },
    toOperationHistoryQuery() {
      this.$router.push('operation-history-query')
    },
    toVaDownload() {
      this.$router.push('v-a-download')
    },
    toUnderwritingQuery() {
      this.$router.push('underwriting-query')
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
