<template>
    <div class="main">
           <p><span @click="isShow">{{ shape }}</span>投保人信息</p>
           <el-main v-if="flag">
               <el-table
                    :data="datas"
                    style="width: 100%"
                    :highlight-current-row="true"
                    border
                    @current-change="tableHandleCurrentChange"
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
                      v-for="(v,i) in column"
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
                <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
                    <el-row type="flex" class="row-bg">
                        <el-col :span="8">
                            <el-form-item label="姓名" prop="name" size="small" :required="false">
                                <el-input v-model="formData.name" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="性别" prop="sex" size="small" :required="false">
                                <el-input v-model="formData.sex" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="年龄" prop="age" size="small" :required="false">
                                <el-input v-model="formData.age" style=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg">
                        <el-col :span="8">
                            <el-form-item label="职业" prop="work" size="small" :required="false">
                                <el-input v-model="formData.work" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="寿险职业类别" prop="sxtype" size="small" :required="false">
                                <el-input v-model="formData.sxtype" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="住院险职业类别" prop="zytype" size="small" :required="false">
                                <el-input v-model="formData.zytype" style=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg">
                        <el-col :span="8">
                            <el-form-item label="身高" prop="height" size="small" :required="false">
                                <el-input v-model="formData.height" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="体重" prop="weight" size="small" :required="false">
                                <el-input v-model="formData.weight" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="BMI值" prop="BMI" size="small" :required="false">
                                <el-input v-model="formData.BMI" style=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg">
                        <el-col :span="8">
                            <el-form-item label="年收入" prop="earn" size="small" :required="false">
                                <el-input v-model="formData.earn" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="累计年交保费" prop="pay" size="small" :required="false">
                                <el-input v-model="formData.pay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="累计寿险保额" prop="sxpay" size="small" :required="false">
                                <el-input v-model="formData.sxpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg">
                        <el-col :span="8">
                            <el-form-item label="累计意外险保额" prop="ywpay" size="small" :required="false">
                                <el-input v-model="formData.ywpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="累计重大疾病保额" prop="jbpay" size="small" :required="false">
                                <el-input v-model="formData.jbpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="累计人身险保额" prop="rsxpay" size="small" :required="false">
                                <el-input v-model="formData.rsxpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg">
                        <el-col :span="8">
                            <el-form-item label="公共交通意外风险保额" prop="jtywpay" size="small" :required="false">
                                <el-input v-model="formData.jtywpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="累计航空意外保额" prop="hkpay" size="small" :required="false">
                                <el-input v-model="formData.hkpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="累计医疗险保额" prop="ylpay" size="small" :required="false">
                                <el-input v-model="formData.ylpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg">
                        <el-col :span="8">
                            <el-form-item label="自驾车意外风险保额" prop="jcpay" size="small" :required="false">
                                <el-input v-model="formData.jcpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="累计癌症保额" prop="azpay" size="small" :required="false">
                                <el-input v-model="formData.azpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="残疾风险保额" prop="cjpay" size="small" :required="false">
                                <el-input v-model="formData.cjpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg">
                        <el-col :span="8">
                            <el-form-item label="寿险体检保额" prop="tjpay" size="small" :required="false">
                                <el-input v-model="formData.tjpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="重疾体检保额" prop="zjpay" size="small" :required="false">
                                <el-input v-model="formData.zjpay" style=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="黑名单标记" prop="target" size="small" :required="false">
                                <el-input v-model="formData.target" style=""></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg">
                      <el-col :span="4">
                        <el-form-item>
                          <el-button type="primary" @click="tellTheQuery" style="margin:0 20px;">投保人告知查询</el-button>
                        </el-form-item>
                      </el-col>
                      <el-col :span="4" :offset="1">
                        <el-form-item>
                          <el-button type="primary" @click="insureDemand">投保人既往投保资料查询</el-button>
                        </el-form-item>
                      </el-col>
                      <el-col :span="4" :offset="1">
                        <el-form-item>
                          <el-button type="primary" @click="submitForm('formData')">投保人既往理赔资料查询</el-button>
                        </el-form-item>
                      </el-col>
                      <el-col :span="4" :offset="1">
                        <el-form-item>
                          <el-button type="primary" @click="saveQuery">投保人既往保全资料查询</el-button>
                        </el-form-item>
                      </el-col>
                    </el-row>
              </el-form>
          </el-main>
    </div>
</template>
<script>
export default {
  name: 'policyHolderMessage',
  components: { },
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
        name: '',
        sex: '',
        age: '',
        work: '',
        sxtype: '',
        zytype: '',
        height: '',
        weight: '',
        BMI: '',
        earn: '',
        pay: '',
        sxpay: '',
        ywpay: '',
        jbpay: '',
        rsxpay: '',
        jtywpay: '',
        hkpay: '',
        ylpay: '',
        jcpay: '',
        azpay: '',
        cjpay: '',
        tjpay: '',
        zjpay: '',
        target: ''
      },
      rules: {
        underwritingTaskStatus: [
          { required: true, message: '请输入核保任务状态', trigger: 'blur' }
        ]
      },
      datas: [
        {
          clientNumber: '0000178430',
          name: '张0000201769',
          sex: '男',
          age: 32,
          relationship: '配偶',
          nationality: '中国'
        }
      ],
      column: [
        {
          content: 'clientNumber',
          label: '客户号码',
          width: '200%'
        },
        {
          content: 'name',
          label: '姓名',
          width: '200%'
        },
        {
          content: 'sex',
          label: '性别',
          width: '100%'
        },
        {
          content: 'age',
          label: '年龄',
          width: '100%'
        },
        {
          content: 'relationship',
          label: '与被保险人关系',
          width: '300%'
        },
        {
          content: 'nationality',
          label: '国籍',
          width: '100%'
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
    radioChange() { },
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
    },
    tellTheQuery() {
      this.$router.push('/underwriting-process/personal-policy/tell-query')
    },
    insureDemand() {
      this.$router.push('/underwriting-process/personal-policy/insure-demand')
    },
    saveQuery() {
      this.$router.push('/underwriting-process/personal-policy/save-query')
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
