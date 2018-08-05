<template>
    <div class="main">
         <el-main>
            <p><span @click="isFormShow">{{ formShape }}</span>体检基本信息</p>
            <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right" v-if="formFlag">
              <el-row type="flex" class="row-bg">
                  <el-col :span="8">
                      <el-form-item label="投保单号码" prop="policyNumber" size="small" :required="false">
                          <el-input v-model="formData.policyNumber" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="打印状态" prop="management" size="small" :required="false">
                          <el-input v-model="formData.management" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="体检人" prop="distributionChannel" size="small" :required="false">
                          <el-input v-model="formData.distributionChannel" style=""></el-input>
                      </el-form-item>
                  </el-col>
              </el-row>
              <el-row type="flex" class="row-bg">
                  <el-col :span="8">
                      <el-form-item label="体检截止日期" prop="salesmanCode" size="small" :required="false">
                          <el-input v-model="formData.salesmanCode" style=""></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="8">
                      <el-form-item label="是否空腹" prop="salesmanName" size="small" :required="false">
                          <el-input v-model="formData.salesmanName" style=""></el-input>
                      </el-form-item>
                  </el-col>
              </el-row>
              <el-row type="flex" class="row-bg">
                  <el-col :span="8">
                      <el-form-item label="体检原因" prop="prepayAmount" size="small" :required="false">
                          <el-input v-model="formData.prepayAmount" style=""></el-input>
                      </el-form-item>
                  </el-col>             
              </el-row>
            </el-form>
          </el-main>
          <el-main>
                <p><span @click="isShow">{{ shape }}</span>已保存基本信息</p>
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
          label: '体检人',
          width: '150%'
        },
        {
          content: 'type',
          label: '体检人类型',
          width: '120%'
        },
        {
          content: 'reason',
          label: '状态',
          width: '150%'
        },
        {
          content: 'date',
          label: '录入人员',
          width: '130%'
        },
        {
          content: 'status',
          label: '体检项目',
          width: '150%'
        },
        {
          content: 'date',
          label: '录入日期',
          width: '130%'
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
