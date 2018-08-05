<template>
  <div class="main">
    <el-main>
      <p>业务员品质管理:</p>
      <el-form :model="formData"  ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="请选择业务员" prop="choiceSaleman" size="small" :required="false">
                <el-input v-model="formData.choiceSaleman" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名" prop="saleName" size="small" :required="false">
                <el-input v-model="formData.saleName" value="徐1440003208" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="签约日期" :required="false" prop="signDate" size="small">
              <el-date-picker
                v-model="formData.signDate"
                type="date"
                placeholder="选择日期"
                :format="'yyyy-MM-dd'"
                :value-format="'yyyy-MM-dd'"
                @change="dateChange1"
                style="">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="性别" :required="false" prop="sex" size="small">
               <el-input v-model="formData.sex" value="男" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="证件类型" :required="false" prop="identificationType" size="small">
               <el-input v-model="formData.identificationType" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="证件号码" :required="false" prop="identificationNumber" size="small">
               <el-input v-model="formData.identificationNumber" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item  label="品质记录" :required="false" prop="qualityRecord" size="small">
              <el-select v-model="formData.qualityRecord" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="异常品质类别" :required="false" prop="abnormalQuality" size="small">
              <el-select v-model="formData.abnormalQuality" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
        <el-row>
        </el-row>
        <p>备注信息:</p>
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
        <el-row style="margin-top:20px;">
          <el-button type="primary" @click="submitForm('formData')">确定</el-button>
          <el-button type="primary" @:click="back">返回</el-button>
        </el-row>
      </el-form>
    </el-main>
  </div>
</template>
<script>
export default {
  name: 'qualityQuery',
  data() {
    return {
      getData: [
        {
          value: '0',
          label: '正常'
        }, {
          value: '1',
          label: '异常'
        }
      ],
      formData: {
        choiceSaleman: '徐1440003208',
        saleName: '徐1440003208',
        signDate: '2018-05-15',
        sex: '男',
        identificationType: '身份证',
        identificationNumber: '123456789546123698',
        qualityRecord: '',
        abnormalQuality: ''
      }
    }
  },
  components: { },
  methods: {
    selectChange1(value) {
      console.log(value)
    },
    dateChange1(value) {
      console.log(value)
      this.date1 = value
    },
    back() {
      this.$router.go(-1)
      // 返回上一层
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
  color: #409EFF;
  border-bottom: 2px solid #409EFF;
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
