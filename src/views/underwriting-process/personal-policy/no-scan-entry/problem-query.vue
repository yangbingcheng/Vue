<template>
  <div class="main">
    <el-main>
          <p><span @click="isShowSingle">{{ shapeSingle }}</span>问题件列表:</p>
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
    <el-main>
      <el-form :model="formData" :rules="rules" ref="formData" label-width="130px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="20">
            <el-form-item label="问题件内容" prop="content" size="small" :required="false">
                <el-input v-model="formData.content" style="" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="20">
            <el-form-item label="问题件回复(提示：输入长度不得超过200字)" prop="response" size="small" :required="false">
                <el-input v-model="formData.response" style="" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="query">问题件影像查询</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>
<script>
export default {
  name: 'problemQuerys',
  components: { },
  data() {
    return {
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
        content: '',
        response: ''
      },
      rules: { },
      datasSingle: [
        {
          number: '',
          coding: '',
          content: '',
          person: '',
          date: '',
          handle: '',
          send: '',
          isSend: '',
          sendDate: '',
          responseDate: '',
          isAdd: ''
        },
        {
          number: '',
          coding: '',
          content: '',
          person: '',
          date: '',
          handle: '',
          send: '',
          isSend: '',
          sendDate: '',
          responseDate: '',
          isAdd: ''
        },
        {
          number: '',
          coding: '',
          content: '',
          person: '',
          date: '',
          handle: '',
          send: '',
          isSend: '',
          sendDate: '',
          responseDate: '',
          isAdd: ''
        }
      ],
      columnsSingle: [
        {
          content: 'number',
          label: '投保单号码',
          width: ''
        },
        {
          content: 'coding',
          label: '问题代码',
          width: ''
        },
        {
          content: 'content',
          label: '问题内容',
          width: ''
        },
        {
          content: 'person',
          label: '录入人',
          width: ''
        },
        {
          content: 'date',
          label: '录入日期',
          width: ''
        },
        {
          content: 'handle',
          label: '操作位置',
          width: ''
        },
        {
          content: 'send',
          label: '发送对象',
          width: ''
        },
        {
          content: 'isSend',
          label: '是否下发',
          width: ''
        },
        {
          content: 'sendDate',
          label: '发送日期',
          width: ''
        },
        {
          content: 'responseDate',
          label: '回复日期',
          width: ''
        },
        {
          content: 'isAdd',
          label: '是否计入初审差错',
          width: 150
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
    query() {
      this.$router.push('/underwriting-process/personal-policy/photo-querys')
    },
    back() {
      this.$router.back(-1)
    },
    radioChange() {
      this.$router.push('/underwriting-process/personal-policy/new-entry-change')
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
