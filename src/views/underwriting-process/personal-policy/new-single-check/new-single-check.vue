<template>
  <div class="main">
    <el-main>
      <p>请输入查询条件:</p>
     <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="投保单号码" :required="false" prop="organization" size="small">
              <el-select v-model="formData.organization" filterable placeholder="请选择" @change="selectChange" :disabled="false" style="">
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
            <el-form-item  label="管理机构" :required="false" prop="number" size="small">
              <el-select v-model="formData.number" filterable placeholder="请选择" @change="selectChangeNumber" :disabled="false" style="">
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
            <el-form-item label="录单日期" :required="false" prop="scanDate" size="small">
              <el-date-picker
                v-model="formData.scanDate"
                type="date"
                placeholder="选择日期"
                :format="'yyyy-MM-dd'"
                :value-format="'yyyy-MM-dd'"
                @change="dateChange"
                style="">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="业务员编码" :required="false" prop="payDate" size="small">
              <el-date-picker
                v-model="formData.payDate"
                type="date"
                placeholder="选择日期"
                :format="'yyyy-MM-dd'"
                :value-format="'yyyy-MM-dd'"
                @change="dateChangePay"
                style="">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
       <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">查询</el-button>
        </el-form-item>
      </el-form>
        
       
    </el-main>
    <el-main>
          <p><span @click="isShow">{{ shape }}</span>共享工作池</p>
          <el-table
              :data="datas"
              style="width: 100%"
              :highlight-current-row="true"
              border
              @current-change="tableHandleCurrentChange"
              @selection-change="handleSelectionChange"
              v-if="flag"
            >
              <el-table-column
                type="selection"
                align="center" header-align="center"
                width="55">
              </el-table-column>
              <el-table-column
                type="index"
                label="序号"
                align="center" header-align="center"
                width="55">
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
          <el-button type="primary" @click="apply">申请</el-button>
          <p><span @click="isShowSingle">{{ shapeSingle }}</span>个人工作池</p>
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
  name: 'newEntry',
  components: { },
  data() {
    return {
      shape: '-',
      flag: true,
      pages: 5,
      currentPage: 2,
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
        organization: '',
        number: '',
        scanDate: '',
        payDate: ''
      },
      rules: { },
      datas: [
        {
          number: '',
          organization: '',
          scanDate: '',
          reason: ''
        }
      ],
      columns: [
        {
          content: 'number',
          label: '投保单号码',
          width: ''
        },
        {
          content: 'organization',
          label: '投保人',
          width: ''
        },
        {
          content: 'scanDate',
          label: '上一操作员',
          width: ''
        },
        {
          content: 'reason',
          label: '上一操作时间',
          width: ''
        },
        {
          content: 'scanDate',
          label: '管理机构',
          width: ''
        },
        {
          content: 'scanDate',
          label: '业务员编码',
          width: ''
        },
        {
          content: 'scanDate',
          label: '复合状态',
          width: ''
        }
      ],
      datasSingle: [
        {
          number: 'A11101207777002',
          organization: 864401,
          scanDate: '2018-07-18'
        },
        {
          number: 'A11101207777002',
          organization: 864401,
          scanDate: '2018-07-18'
        },
        {
          number: 'A11101207777002',
          organization: 864401,
          scanDate: '2018-07-18'
        }
      ],
      columnsSingle: [
        {
          content: 'number',
          label: '投保单号码',
          width: ''
        },
        {
          content: 'organization',
          label: '投保人',
          width: ''
        },
        {
          content: 'scanDate',
          label: '上一操作员',
          width: ''
        },
        {
          content: 'organization',
          label: '上一操作时间',
          width: ''
        },
        {
          content: 'organization',
          label: '管理机构',
          width: ''
        },
        {
          content: 'organization',
          label: '业务员编码',
          width: ''
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
