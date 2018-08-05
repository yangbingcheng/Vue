<template>
  <div class="main">
    <el-main>
      <p>请输入查询条件:</p>
      <el-form :model="formData"  ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="投保单号码" prop="policyNumber" size="small" :required="false">
                <el-input v-model="formData.policyNumber" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-button type="primary" @click="submitForm('formData')">查询</el-button>
        </el-row>
      </el-form>
    </el-main>
    <el-main>
          <p><span @click="isShow" >{{ shape }}</span>保单信息</p>
          <el-table
              :data="datas"
              style="width: 100%"
              :highlight-current-row="true"
              border
              @current-change="tableHandleCurrentChange"
              v-if="flag"
            >
              <el-table-column
                label="序号"
                width=100
                align="center" header-align="center"
              >
                <template slot-scope="scope">
                  <el-radio v-model="myResult" :label="scope.$index+1"></el-radio>
                </template>
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
          <el-button type="primary" @click="submitForm('formData')" >保单状态明细</el-button>
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shape: '-',
      flag: true,
      pages: 5,
      currentPage: 2,
      myResult: '',
      formData: {
        policyNumber: '',
        allNumber: '',
        management: '',
        agentcode: '',
        policyholders: ''
      },
      datas: [
        {
          policyNumber: 'A5110210000',
          allNumber: 'D35464664646',
          management: '5464788432',
          agentcode: '0556679',
          policyholders: '张三'
        },
        {
          policyNumber: 'A5110210000',
          allNumber: 'D35464664646',
          management: '5464788432',
          agentcode: '0556679',
          policyholders: '张三'
        },
        {
          policyNumber: 'A5110210000',
          allNumber: 'D35464664646',
          management: '5464788432',
          agentcode: '0556679',
          policyholders: '张三'
        }
      ],
      columns: [
        {
          content: 'policyNumber',
          label: '投保单号码',
          width: ''
        },
        {
          content: 'allNumber',
          label: '总单投保单号码',
          width: ''
        },
        {
          content: 'management',
          label: '管理机构',
          width: ''
        },
        {
          content: 'agentcode',
          label: '代理人编码',
          width: ''
        },
        {
          content: 'policyholders',
          label: '投保人',
          width: ''
        }
      ]
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
