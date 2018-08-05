<template>
  <div id="main" v-if="isShowPages">
    <el-main>
      <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="客户号码" prop="coding" size="small" :required="false">
                <el-input v-model="formData.coding" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名" prop="name" size="small" :required="false">
                <el-input v-model="formData.name" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="性别" :required="false" prop="sex" size="small">
              <el-select v-model="formData.sex" filterable placeholder="请选择" @change="selectChange" :disabled="false" style="">
                <el-option
                  v-for="item in sexData"
                  :key="item.value"
                  :label="item.value+'-'+item.label"
                  :value="item.value+'-'+item.label">
                  <span>{{ item.value }}</span>-
                  <span>{{ item.label}}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="出生日期" :required="false" prop="birth" size="small">
              <el-date-picker
                v-model="formData.birth"
                type="date"
                placeholder="选择日期"
                :format="'yyyy-MM-dd'"
                :value-format="'yyyy-MM-dd'"
                @change="dateChange"
                style="">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="证件类型" :required="false" prop="type" size="small">
              <el-select v-model="formData.type" filterable placeholder="请选择" @change="selectChange" :disabled="false" style="">
                <el-option
                  v-for="item in getData"
                  :key="item.value"
                  :label="item.value+'-'+item.label"
                  :value="item.value+'-'+item.label">
                  <span>{{ item.value }}</span>-
                  <span>{{ item.label}}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="证件号码" prop="number" size="small" :required="false">
                <el-input v-model="formData.number" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="保单号" prop="amount" size="small" :required="false">
                <el-input v-model="formData.amount" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">查询</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-main>
          <p><span @click="isShowSingle">{{ shapeSingle }}</span>客户信息</p>
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
              <el-table-column
                label="性别"
                width="200%"
                align="center" header-align="center"
              >
                <template slot-scope="scope">
                  <el-select v-model="scope.row.sex" filterable placeholder="" :disabled="false" style=""
                  @change="sexChange"
                  >
                    <el-option
                      v-for="item in sexData"
                      :key="item.value"
                      :label="item.value"
                      :value="item.value">
                      <span>{{ item.value }}</span>-
                      <span>{{ item.label}}</span>
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column
                label="证件类型"
                width="200%"
                align="center" header-align="center"
              >
                <template slot-scope="scope">
                  <el-select v-model="scope.row.type" filterable placeholder="" :disabled="false" style=""
                  @change="typeChange"
                  >
                    <el-option
                      v-for="item in getData"
                      :key="item.value"
                      :label="item.value"
                      :value="item.value">
                      <span>{{ item.value }}</span>-
                      <span>{{ item.label}}</span>
                    </el-option>
                  </el-select>
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
  name: 'showPagePolicy',
  components: { },
  props: {
    isShowPage: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      isShowPages: this.isShowPage,
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
      sexData: [
        {
          value: '0',
          label: '男'
        }, {
          value: '1',
          label: '女'
        }, {
          value: '2',
          label: '不详'
        }
      ],
      formData: {
        coding: '',
        name: '',
        sex: '',
        birth: '',
        type: '',
        number: '',
        amount: ''
      },
      rules: { },
      datasSingle: [
        {
          coding: '',
          name: '',
          sex: '',
          birth: '',
          type: '',
          number: ''
        },
        {
          coding: '',
          name: '',
          sex: '',
          birth: '',
          type: '',
          number: ''
        },
        {
          coding: '',
          name: '',
          sex: '',
          birth: '',
          type: '',
          number: ''
        }
      ],
      columnsSingle: [
        {
          content: 'coding',
          label: '客户号码',
          width: ''
        },
        {
          content: 'name',
          label: '姓名',
          width: ''
        },
        // {
        //   content: 'sex',
        //   label: '性别',
        //   width: ''
        // },
        {
          content: 'birth',
          label: '出生日期',
          width: ''
        },
        // {
        //   content: 'type',
        //   label: '证件类型',
        //   width: ''
        // },
        {
          content: 'number',
          label: '证件号码',
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
    sexChange(val) {
      // console.log(val)
    },
    typeChange(val) {
      // console.log(val)
    },
    back() {
      this.isShowPages = false
      this.$emit('back', this.isShowPage)
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
  },
  watch: {
    isShowPage(val) {
      this.isShowPages = val
    },
    isShowPages(val) {
      this.$emit('back', val)
    }
  }
}
</script>
<style scoped>
.demo-ruleForm >>> .el-form-item__label {
 color:white !important;
}
.block >>> .el-pagination__total {
  color: white !important;
}
.block >>> .el-pagination__jump {
  color: white !important;
}
p {
  font-size: 16px;
  color: white;
  border-bottom: 2px solid white;
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
#main {
  width: 900px;
  height: 700px;
  background: rgba(0,0,0,0.6);
  color: white;
  position: fixed;
  left: 230px;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
}
</style>
