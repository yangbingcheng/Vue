<template>
  <div class="main">
    <el-main style="height:300px;background: skyblue;border-bottom: 1px solid #ccc;"></el-main>
    <el-main>
      <el-form :model="formData" :rules="rules" ref="formData" label-width="150px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="投保单号/保险合同号" prop="number" size="small" :required="false">
                <el-input v-model="formData.number" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="影像类别" :required="false" prop="type" size="small">
              <el-select v-model="formData.type" filterable placeholder="请选择" @change="selectChange" :disabled="false" style="">
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
            <el-form-item label="扫描批次号" prop="scan" size="small" :required="false">
                <el-input v-model="formData.scan" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">查询</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-main>
          <p><span @click="isShowSingle">{{ shapeSingle }}</span>影像资料信息</p>
          <el-table
              :data="datasSingle"
              style="width: 100%"
              :highlight-current-row="true"
              border
              @current-change="tableHandleCurrentChangeSingle"
              v-if="flagSingle"
            >
              <el-table-column
                label="序号"
                width=""
                align="center" header-align="center"
              >
                <template slot-scope="scope">
                  <el-radio v-model="myResult" :label="scope.$index+1" @change="radioChange"></el-radio>
                </template>
              </el-table-column>
              <el-table-column
                v-for="(v,i) in columnsSingle"
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
              @size-change="handleSizeChangeSingle"
              @current-change="handleCurrentChangeSingle"
              :current-page="currentPageSingle"
              :page-sizes="[2, 5, 10]"
              :page-size="pagesSingle"
              layout="total, sizes, prev, pager, next, jumper"
              :total="datasSingle.length">
            </el-pagination>
          </div>
    </el-main>
  </div>
</template>
<script>
export default {
  name: 'photoQuery',
  components: { },
  data() {
    return {
      shapeSingle: '-',
      flagSingle: true,
      pagesSingle: 5,
      currentPageSingle: 2,
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
        number: '',
        type: '',
        scan: ''
      },
      rules: { },
      datasSingle: [
        {
          number: '',
          type: '',
          name: '',
          scanNumber: '',
          pages: '',
          scanDate: '',
          scanTime: '',
          scanPerson: '',
          jnumber: ''
        },
        {
          number: '',
          type: '',
          name: '',
          scanNumber: '',
          pages: '',
          scanDate: '',
          scanTime: '',
          scanPerson: '',
          jnumber: ''
        },
        {
          number: '',
          type: '',
          name: '',
          scanNumber: '',
          pages: '',
          scanDate: '',
          scanTime: '',
          scanPerson: '',
          jnumber: ''
        }
      ],
      columnsSingle: [
        {
          content: 'number',
          label: '单证号',
          width: '100%'
        },
        {
          content: 'type',
          label: '影像类别',
          width: '100%'
        },
        {
          content: 'name',
          label: '影像名称',
          width: '100%'
        },
        {
          content: 'scanNumber',
          label: '扫描批次号',
          width: '150%'
        },
        {
          content: 'pages',
          label: '页数',
          width: '100%'
        },
        {
          content: 'scanDate',
          label: '扫描日期',
          width: '100%'
        },
        {
          content: 'scanTime',
          label: '扫描时间',
          width: '100%'
        },
        {
          content: 'scanPerson',
          label: '扫描员工号',
          width: '150%'
        },
        {
          content: 'jnumber',
          label: '件号',
          width: '100%'
        }
      ]
    }
  },
  mounted() {
    // let jsonValue = {
    //   'ContNo': '110440000000001',
    //   'ScanDate': '2018-07-03',
    //   'SaleChnl': '01',
    //   'RiskCode': '00000',
    //   'ManageCom': '86',
    //   'AgentCode': '1200000001',
    //   'StarAgent': '',
    //   'VIPCustomer': 'A',
    //   'UWAuthority': 'A',
    //   'AppntName': '鹿晗',
    //   'InsuredName': '关晓彤',
    //   'UWState': '1',
    //   'UserCode': '001',
    //   'EnteraccState': '0',
    //   'OperatorState': '0',
    //   'UWLevel': 'A',
    //   'BaiTuanCom': '0'
    // }
    // this.$axios({
    //   method: 'post',
    //   data: jsonValue,
    //   headers: {
    //     'Content-Type': 'application/json; charset=UTF-8'
    //   },
    //   url: '/api/uw/policy/query/share'
    // }).then((res) => {
    //   console.log(res)
    //   console.log(res.data)
    // }).catch((res) => {
    //   console.log(res)
    // })
  },
  methods: {
    entry() {
      if (this.myResult) {
        this.$router.push('/underwriting-process/personal-policy/no-scan-entry-change')
      }
    },
    radioChange(value) {
      // console.log(value)
      // this.$router.push('/underwritingProcess/personal/no-scan-entry-change')
    },
    handleSelectionChange(val) {
      console.log(val)
    },
    selectChange(value) {
      console.log(value)
    },
    selectChangeNumber(value) {
      console.log(value)
    },
    dateChange(value) {
      console.log(value)
      this.scanDate = value
    },
    dateChangePay(value) {
      console.log(value)
      this.payDate = value
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
    apply() { },
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
    },
    tableHandleCurrentChangeSingle(n, o) {
      console.log(n)
      // console.log(o);
    },
    handleSizeChangeSingle(val) {
      // 需要传参数，可以获取到数据
      this.pagesSingle = val
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChangeSingle(val) {
      // 需要传参数，可以获取到数据
      this.currentPageSingle = val
      // console.log(`当前页: ${val}`);
    },
    isShowSingle() {
      if (this.flagSingle) {
        this.flagSingle = !this.flagSingle
        this.shapeSingle = '+'
      } else {
        this.flagSingle = !this.flagSingle
        this.shapeSingle = '-'
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
