<template>
  <div class="main">
    <p><span @click="isShow">{{ shape }}</span>核保结论</p>
    <el-main v-if="flag">
      <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="核保结论" :required="false" prop="conclusion" size="small">
              <el-select v-model="formData.conclusion" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="核保流向" :required="false" prop="flow" size="small">
              <el-select v-model="formData.flow" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
          <el-col :span="16">
            <el-form-item label="核保意见" prop="opinion" size="small" :required="false">
              <el-input v-model="formData.opinion" style="" type="textarea" autosize></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
    <el-row style="margin:20px 0;">
      <el-button type="primary" @click="submitForm('formData')" style="margin:0 20px;">确定</el-button>
      <el-button type="primary" @click="submitForm('formData')">取消</el-button>
      <el-button type="primary" @click="submitForm('formData')">返回</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'conclusion',
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
        conclusion: '',
        flow: '',
        opinion: ''
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
          imprelationship: '本人',
          nationality: '中国'
        }
      ],
      column: [
        {
          content: 'clientNumber',
          label: '客户号码',
          width: ''
        },
        {
          content: 'name',
          label: '姓名',
          width: ''
        },
        {
          content: 'sex',
          label: '性别',
          width: ''
        },
        {
          content: 'age',
          label: '年龄',
          width: ''
        },
        {
          content: 'relationship',
          label: '与被保险人关系',
          width: ''
        },
        {
          content: 'imprelationship',
          label: '与主被保人关系',
          width: ''
        },
        {
          content: 'nationality',
          label: '国籍',
          width: ''
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
