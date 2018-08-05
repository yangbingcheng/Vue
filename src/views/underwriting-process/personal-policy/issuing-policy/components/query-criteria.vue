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
          <el-col :span="8">
            <el-form-item  label="管理机构" :required="false" prop="management" size="small">
               <el-select v-model="formData.management" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="销售渠道" :required="false" prop="distributionChannel" size="small">
              <el-select v-model="formData.distributionChannel" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
          <el-col :span="8">
            <el-form-item  label="业务员编码" :required="false" prop="salecoding" size="small">
               <el-input v-model="formData.salecoding" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="核保完成日期" :required="false" prop="scanDate" size="small">
              <el-date-picker
                v-model="formData.scanDate"
                type="date"
                placeholder="选择日期"
                :format="'yyyy-MM-dd'"
                :value-format="'yyyy-MM-dd'"
                @change="dateChange1"
                style="">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="险种编码" :required="false" prop="coding" size="small">
               <el-select v-model="formData.coding" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
          <el-col :span="8">
            <el-form-item  label="保单状态" :required="false" prop="salesRank" size="small">
                     <el-select v-model="formData.salesRank" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
          <el-button type="primary" @click="submitForm('formData')" >签发保单</el-button>
    </el-main>
  </div>
</template>
<script>
export default {
  name: 'queryTop',
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
        policyNumber: '',
        policyholders: '',
        scanDate: '',
        management: '',
        salename: '',
        salecoding: '',
        allbill: '',
        salesRank: '',
        appoint: '',
        reason: '',
        distributionChannel: '',
        coding: ''
      },
      datas: [
        {
          policyNumber: 'A5110210000',
          policyholders: '李想',
          scanDate: '2017-06-02',
          management: '8644989801',
          salename: '0000000',
          salecoding: '0000002',
          allbill: '11',
          salesRank: '查询失败',
          appoint: '2017-7-15',
          reason: '自核未通过原因'
        },
        {
          policyNumber: 'A5110210000',
          policyholders: '李想',
          scanDate: '2017-06-02',
          management: '8644989801',
          salename: '0000000',
          salecoding: '0000002',
          allbill: '11',
          salesRank: '查询失败',
          appoint: '2017-7-15',
          reason: '自核未通过原因'
        },
        {
          policyNumber: 'A5110210000',
          policyholders: '李想',
          scanDate: '2017-06-02',
          management: '8644989801',
          salename: '0000000',
          salecoding: '0000002',
          allbill: '11',
          salesRank: '查询失败',
          appoint: '2017-7-15',
          reason: '自核未通过原因'
        }
      ],
      columns: [
        {
          content: 'policyNumber',
          label: '投保单号码',
          width: ''
        },
        {
          content: 'policyholders',
          label: '投保人',
          width: 120
        },
        {
          content: 'scanDate',
          label: '核保完成日期',
          width: 110
        },
        {
          content: 'management',
          label: '管理机构',
          width: 130
        },
        {
          content: 'salename',
          label: '业务员姓名',
          width: 130
        },
        {
          content: 'salecoding',
          label: '业务员代码',
          width: 130
        },
        {
          content: 'allbill',
          label: '整单保费',
          width: 110
        },
        {
          content: 'salesRank',
          label: '保单状态',
          width: ''
        },
        {
          content: 'appoint',
          label: '指定转账日期',
          width: 110
        },
        {
          content: 'reason',
          label: '签单不成功原因',
          width: 200
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
