<template>
  <div class="container">
    <p><span @click="isShowPolicyMessage">{{ shapePolicyMessage }}</span>既往保全批单信息</p>
    <div class="table" v-if="flagPolicyMessage">
      <el-table
          :data="policyDataMessage"
          style="width: 100%"
          :highlight-current-row="true"
          border
          @current-change="tableHandleCurrentChangePolicyMessage">
          <el-table-column
            label="序号"
            width=""
            align="center" header-align="center">
            <template slot-scope="scope">
              <el-radio v-model="radioResultMessage" :label="scope.$index+1"></el-radio>
            </template>
          </el-table-column>
          <el-table-column
            v-for="(v,i) in policyTableColumnsMessage"
            :key="i"
            :prop="v.content"
            :label="v.label"
            :width="v.width"
            align="center" header-align="center">
              <template slot-scope="scope">
                {{ scope.row[v.content] }}
              </template>
          </el-table-column>
      </el-table>
      <div class="block" style="margin:20px 0;">
        <el-pagination
          @size-change="handleSizeChangePolicyMessage"
          @current-change="handleCurrentChangePolicyMessage"
          :current-page="currentPagePolicyMessage"
          :page-sizes="[4, 5, 10]"
          :page-size="pagesPolicyMessage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="policyDataMessage.length">
        </el-pagination>
      </div>
    </div>
    <p><span @click="isShowPolicy">{{ shapePolicy }}</span>既往保全批改项目信息</p>
    <div class="table" v-if="flagPolicy">
      <el-table
          :data="policyData"
          style="width: 100%"
          :highlight-current-row="true"
          border
          @current-change="tableHandleCurrentChangePolicy">
          <el-table-column
            label="序号"
            width=""
            align="center" header-align="center">
            <template slot-scope="scope">
              <el-radio v-model="radioResult" :label="scope.$index+1"></el-radio>
            </template>
          </el-table-column>
          <el-table-column
            v-for="(v,i) in policyTableColumns"
            :key="i"
            :prop="v.content"
            :label="v.label"
            :width="v.width"
            align="center" header-align="center">
              <template slot-scope="scope">
                {{ scope.row[v.content] }}
              </template>
          </el-table-column>
      </el-table>
      <div class="block" style="margin:20px 0;">
        <el-pagination
          @size-change="handleSizeChangePolicy"
          @current-change="handleCurrentChangePolicy"
          :current-page="currentPagePolicy"
          :page-sizes="[4, 5, 10]"
          :page-size="pagesPolicy"
          layout="total, sizes, prev, pager, next, jumper"
          :total="policyData.length">
        </el-pagination>
      </div>
    </div>
    <el-row type="flex" class="row-bg" style="margin:20px 0;">
      <el-col :span="4">
        <el-button type="primary" @click="jumpRouter('rescueVideoInformation')" style="margin:0 20px;">影像资料查询</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button type="primary" @click="toSecurityDetail()">保全明细查询</el-button>
      </el-col>
    </el-row>
    <el-button type="primary" @click="back" style="margin:20px 0;">返回</el-button>
  </div>
</template>
<script>
export default {
  name: 'save-query',
  components: { },
  data() {
    return {
      flagPolicy: true,
      shapePolicy: '-',
      pagesPolicy: 5,
      currentPagePolicy: 2,
      radioResult: '',
      flagPolicyMessage: true,
      shapePolicyMessage: '-',
      pagesPolicyMessage: 5,
      currentPagePolicyMessage: 2,
      radioResultMessage: '',
      policyTableColumns: [
        {
          label: '批单号',
          content: 'digit',
          width: 150
        },
        {
          label: '保单号',
          content: 'number',
          width: 200
        },
        {
          label: '申请保全项目',
          content: 'project',
          width: 150
        },
        {
          label: '变更内容',
          content: 'content',
          width: 150
        },
        {
          label: '变更申请时间',
          content: 'time',
          width: ''
        },
        {
          label: '变更生效日期',
          content: 'effectiveDate',
          width: ''
        }
      ],
      policyData: [
        {
          digit: '',
          number: '',
          project: '',
          content: '',
          time: '',
          effectiveDate: ''
        },
        {
          digit: '',
          number: '',
          project: '',
          content: '',
          time: '',
          effectiveDate: ''
        },
        {
          digit: '',
          number: '',
          project: '',
          content: '',
          time: '',
          effectiveDate: ''
        }
      ],
      policyTableColumnsMessage: [
        {
          label: '批单号',
          content: 'digit',
          width: 150
        },
        {
          label: '投保人姓名',
          content: 'name',
          width: 200
        },
        {
          label: '变更申请日期',
          content: 'date',
          width: 150
        },
        {
          label: '变更生效日期',
          content: 'effectiveDate',
          width: 150
        },
        {
          label: '核保结论',
          content: 'conclusion',
          width: ''
        }
      ],
      policyDataMessage: [
        // {
        //   digit: '',
        //   name: '',
        //   date: '',
        //   effectiveDate: '',
        //   conclusion: ''
        // }
      ]
    }
  },
  mounted() { },
  methods: {
    submitForm() { },
    tableHandleCurrentChangePolicy(n, o) {
      console.log(n)
    },
    handleSizeChangePolicy(val) {
      // 需要传参数，可以获取到数据
      this.pagesPolicy = val
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChangePolicy(val) {
      // 需要传参数，可以获取到数据
      this.currentPagePolicy = val
      // console.log(`当前页: ${val}`);
    },
    tableHandleCurrentChangePolicyMessage(n, o) {
      console.log(n)
    },
    handleSizeChangePolicyMessage(val) {
      // 需要传参数，可以获取到数据
      this.pagesPolicyMessage = val
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChangePolicyMessage(val) {
      // 需要传参数，可以获取到数据
      this.currentPagePolicyMessage = val
      // console.log(`当前页: ${val}`);
    },
    isShowPolicy() {
      if (this.flagPolicy) {
        this.flagPolicy = !this.flagPolicy
        this.shapePolicy = '+'
      } else {
        this.flagPolicy = !this.flagPolicy
        this.shapePolicy = '-'
      }
    },
    isShowPolicyMessage() {
      if (this.flagPolicyMessage) {
        this.flagPolicyMessage = !this.flagPolicyMessage
        this.shapePolicyMessage = '+'
      } else {
        this.flagPolicyMessage = !this.flagPolicyMessage
        this.shapePolicyMessage = '-'
      }
    },
    back() {
      this.$router.back(-1)
    },
    toSecurityDetail() {
      this.$router.push('security-detail')
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
