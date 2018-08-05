<template>
  <div class="main">
    <el-main>
          <p><span @click="isShow" >{{ shape }}</span>核保分析报告信息</p>
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
    </el-main>
    <el-main>
      <el-form :model="formData"  ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
      <div class="report-title-left">核保分析报告内容（800字以内,回车符占一个汉字）</div>
      <div class="report-title-right"><template><el-checkbox v-model="checked">商业因素标准体承保</el-checkbox></template></div>
      <div class="textmargin">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>
        <div class="btn-div">
          <el-button type="success" icon="el-icon-circle-plus-outline" @click="submitForm('formData')" >新增</el-button>
          <el-button type="primary" icon="el-icon-edit" @click="submitForm('formData')" >修改</el-button>
          <el-button type="danger" icon="el-icon-delete"  @click="submitForm('formData')" >删除</el-button>
          <el-button type="warning" icon="el-icon-back" @:click="back" >返回</el-button>
        </div>
      </el-form>
    </el-main>
  </div>
</template>
<script>
export default {
  name: 'reportInformation',
  data() {
    return {
      shape: '-',
      flag: true,
      pages: 5,
      currentPage: 2,
      myResult: '',
      checked: false,
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
        contentReport: '',
        entryClerk: '',
        entryDate: '',
        entryTime: ''
      },
      datas: [
        {
          policyNumber: 'A5110210000',
          contentReport: '123456',
          entryClerk: '001',
          entryDate: '2018-08-27',
          entryTime: '02:27:58'
        },
        {
          policyNumber: 'A5110210000',
          contentReport: '123456',
          entryClerk: '001',
          entryDate: '2018-08-27',
          entryTime: '02:27:58'
        },
        {
          policyNumber: 'A5110210000',
          contentReport: '123456',
          entryClerk: '001',
          entryDate: '2018-08-27',
          entryTime: '02:27:58'
        }
      ],
      columns: [
        {
          content: 'policyNumber',
          label: '投保单号码',
          width: ''
        },
        {
          content: 'contentReport',
          label: '核保分析报告内容',
          width: ''
        },
        {
          content: 'entryDate',
          label: '录入日期',
          width: ''
        },
        {
          content: 'entryTime',
          label: '录入时间',
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
.report-title-left{
  float:left;
  color:#3c3c3c;
  font-size:15px;
  line-height:36px;
}
.report-title-right{
  float:right;
  line-height:36px;
}
.btn-div{
  margin:20px 0px;
}
</style>
