<template>
    <div class="main">
           <el-main>
                <p><span @click="isShow">{{ shape }}</span>待发送核保审核通知信息</p>
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
           <el-main>
                <p><span @click="isShow7">{{ shape }}</span>待发送核保审核通知信息</p>
                <el-table
                    :data="datas"
                    style="width: 100%"
                    :highlight-current-row="true"
                    border
                    @current-change="tableHandleCurrentChange"
                    @select="checkboxChange"
                    v-if="flag7"
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
          核保员说明
             <el-input
             type="textarea"
             :rows="12"
             placeholder="请输入内容"
             v-model="textarea">
            </el-input>
            <el-button type="primary" @click="submitForm('formData')" style="margin:0 10px;">确认</el-button>
             <el-button type="primary" @click="submitForm('formData')" style="margin:0 10px;">返回</el-button>
    </div>
</template>
<script>
export default {
  name: 'uwApplication',
  components: { },
  data() {
    return {
      textarea: '',
      checked: false,
      formShape: '-',
      formShape1: '-',
      formShape2: '-',
      formShape3: '-',
      formShape4: '-',
      formFlag: true,
      formFlag1: true,
      formFlag2: true,
      formFlag3: true,
      formFlag4: true,
      shape: '-',
      flag: true,
      flag7: true,
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
          label: '客户号码',
          width: '130%'
        },
        {
          content: 'date',
          label: '问题内容',
          width: '130%'
        },
        {
          content: 'recognizee',
          label: '录入人',
          width: '100%'
        },
        {
          content: 'recognizee',
          label: '录入日期',
          width: '100%'
        },
        {
          content: 'recognizee',
          label: '操作位置',
          width: '100%'
        },
        {
          content: 'recognizee',
          label: '发送对象',
          width: '120%'
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
    isShow7() {
      if (this.flag7) {
        this.flag7 = !this.flag7
        this.shape = '+'
      } else {
        this.flag7 = !this.flag7
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
    isFormShow1() {
      if (this.formFlag1) {
        this.formFlag1 = !this.formFlag1
        this.formShape1 = '+'
      } else {
        this.formFlag1 = !this.formFlag1
        this.formShape1 = '-'
      }
    },
    isFormShow2() {
      if (this.formFlag2) {
        this.formFlag2 = !this.formFlag2
        this.formShape2 = '+'
      } else {
        this.formFlag2 = !this.formFlag2
        this.formShape2 = '-'
      }
    },
    isFormShow3() {
      if (this.formFlag3) {
        this.formFlag3 = !this.formFlag3
        this.formShape3 = '+'
      } else {
        this.formFlag3 = !this.formFlag3
        this.formShape3 = '-'
      }
    },
    isFormShow4() {
      if (this.formFlag4) {
        this.formFlag4 = !this.formFlag4
        this.formShape4 = '+'
      } else {
        this.formFlag4 = !this.formFlag4
        this.formShape4 = '-'
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
p{
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
