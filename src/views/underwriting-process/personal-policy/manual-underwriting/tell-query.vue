<template>
  <div class="container">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
      <el-row type="flex" class="row-bg">
        <el-col :span="8">
          <el-form-item label="客户号" prop="number" size="small" :required="false">
            <el-input v-model="formData.number" style=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="客户姓名" prop="name" size="small" :required="false">
              <el-input v-model="formData.name" style=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p><span @click="isShowPolicy">{{ shapePolicy }}</span>待核保投保单</p>
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
    <p><span @click="isShowTell">{{ shapeTell }}</span>待核保投保单</p>
    <div class="table" v-if="flagTell">
      <el-table
        :data="functionDatas"
        style="width: 100%"
        :highlight-current-row="true"
        border
        @current-change="tableHandleCurrentChangeTell">
        <el-table-column
          label="序号"
          align="center" header-align="center"
          type="index"
          width="">
        </el-table-column>
        <el-table-column
          label="告知版别"
          width=""
          align="center" header-align="center"
        >
          <template slot-scope="scope">
            <el-select v-model="scope.row.firstSelectValue" filterable placeholder="" :disabled="false" style=""
            @change="firstSelectValueChange(scope.$index,scope.row.firstSelectValue)"
            >
              <el-option
                v-for="item in scope.row.selectdata"
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
          label="告知编码"
          width=""
          align="center" header-align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.secondSelectValue" filterable placeholder="" :disabled="false" style=""
            @change="secondSelectValueChange(scope.$index,scope.row.secondSelectValue)"
            >
              <el-option
                v-for="item in scope.row.selectdatas"
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
          label="告知内容"
          width=""
          align="center" header-align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.inputValues" style=""></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="填写内容"
          width=""
          align="center" header-align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.inputValue" style=""></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="说明内容"
          width=""
          align="center" header-align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.inputValueExplain" style=""></el-input>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width=""
          align="center" header-align="center">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, functionDatas)"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button @click.native.prevent="addRow" type="success"
          size="small" style="margin:30px;">
            添加
      </el-button>
      <div class="block" style="margin:20px 0;">
        <el-pagination
          @size-change="handleSizeChangeTell"
          @current-change="handleCurrentChangeTell"
          :current-page="currentPageTell"
          :page-sizes="[4, 5, 10]"
          :page-size="pagesTell"
          layout="total, sizes, prev, pager, next, jumper"
          :total="functionDatas.length">
        </el-pagination>
      </div>
    </div>
    <el-button type="primary" @click="back">返回</el-button>
  </div>
</template>
<script>
export default {
  name: 'tell-query',
  components: { },
  data() {
    return {
      formData: {
        number: '00002222',
        name: '安000000000'
      },
      rules: { },
      flagPolicy: true,
      shapePolicy: '-',
      pagesPolicy: 5,
      currentPagePolicy: 2,
      radioResult: '',
      shapeTell: '-',
      flagTell: true,
      pagesTell: 5,
      currentPageTell: 2,
      policyTableColumns: [
        {
          label: '投保单号',
          content: 'digit',
          width: ''
        },
        {
          label: '保单号',
          content: 'number',
          width: ''
        },
        {
          label: '投保日期',
          content: 'date',
          width: ''
        },
        {
          label: '保单状态',
          content: 'status',
          width: ''
        }
      ],
      policyData: [
        {
          digit: 'A11135100011977',
          number: 'A11135100011977',
          date: '2018-06-05',
          status: '未承保'
        },
        {
          digit: 'A11135100011977',
          number: 'A11135100011977',
          date: '2018-06-05',
          status: '未承保'
        },
        {
          digit: 'A11135100011977',
          number: 'A11135100011977',
          date: '2018-06-05',
          status: '未承保'
        },
        {
          digit: 'A11135100011977',
          number: 'A11135100011977',
          date: '2018-06-05',
          status: '未承保'
        }
      ],
      functionDatas: [
        {
          selectdata: [
            {
              value: 'A03',
              label: '业务员告知'
            },
            {
              value: 'D04',
              label: '新系统家庭单业务员告知'
            }
          ],
          firstSelectValue: '',
          selectdatas: [
            {
              value: 'D0151',
              label: '您认识被保险人多久?'
            },
            {
              value: 'D0153',
              label: '您亲眼见过所有被保险人吗？'
            },
            {
              value: 'A0152',
              label: '您亲眼见过被保险人吗？'
            },
            {
              value: 'A0158',
              label: '业务员电话'
            }
          ],
          secondSelectValue: '',
          inputValues: '',
          inputValue: '',
          inputValueExplain: ''
        },
        {
          selectdata: [
            {
              value: 'A03',
              label: '业务员告知'
            },
            {
              value: 'D04',
              label: '新系统家庭单业务员告知'
            }
          ],
          firstSelectValue: '',
          selectdatas: [
            {
              value: 'D0151',
              label: '您认识被保险人多久?'
            },
            {
              value: 'D0153',
              label: '您亲眼见过所有被保险人吗？'
            },
            {
              value: 'A0152',
              label: '您亲眼见过被保险人吗？'
            },
            {
              value: 'A0158',
              label: '业务员电话'
            }
          ],
          secondSelectValue: '',
          inputValues: '',
          inputValue: '',
          inputValueExplain: ''
        },
        {
          selectdata: [
            {
              value: 'A03',
              label: '业务员告知'
            },
            {
              value: 'D04',
              label: '新系统家庭单业务员告知'
            }
          ],
          firstSelectValue: '',
          selectdatas: [
            {
              value: 'D0151',
              label: '您认识被保险人多久?'
            },
            {
              value: 'D0153',
              label: '您亲眼见过所有被保险人吗？'
            },
            {
              value: 'A0152',
              label: '您亲眼见过被保险人吗？'
            },
            {
              value: 'A0158',
              label: '业务员电话'
            }
          ],
          secondSelectValue: '',
          inputValues: '',
          inputValue: '',
          inputValueExplain: ''
        },
        {
          selectdata: [
            {
              value: 'A03',
              label: '业务员告知'
            },
            {
              value: 'D04',
              label: '新系统家庭单业务员告知'
            }
          ],
          firstSelectValue: '',
          selectdatas: [
            {
              value: 'D0151',
              label: '您认识被保险人多久?'
            },
            {
              value: 'D0153',
              label: '您亲眼见过所有被保险人吗？'
            },
            {
              value: 'A0152',
              label: '您亲眼见过被保险人吗？'
            },
            {
              value: 'A0158',
              label: '业务员电话'
            }
          ],
          secondSelectValue: '',
          inputValues: '',
          inputValue: '',
          inputValueExplain: ''
        }
      ]
    }
  },
  mounted() { },
  methods: {
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
    tableHandleCurrentChangeTell(n, o) {
      console.log(n)
    },
    handleSizeChangeTell(val) {
      // 需要传参数，可以获取到数据
      this.pagesTell = val
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChangeTell(val) {
      // 需要传参数，可以获取到数据
      this.currentPageTell = val
      // console.log(`当前页: ${val}`);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    addRow() {
      this.functionDatas.push({
        selectdata: [
          {
            value: 'A03',
            label: '业务员告知'
          },
          {
            value: 'D04',
            label: '新系统家庭单业务员告知'
          }
        ],
        firstSelectValue: '',
        selectdatas: [
          {
            value: 'D0151',
            label: '您认识被保险人多久?'
          },
          {
            value: 'D0153',
            label: '您亲眼见过所有被保险人吗？'
          },
          {
            value: 'A0152',
            label: '您亲眼见过被保险人吗？'
          },
          {
            value: 'A0158',
            label: '业务员电话'
          }
        ],
        secondSelectValue: '',
        inputValues: '',
        inputValue: '',
        inputValueExplain: ''
      })
    },
    firstSelectValueChange(index, val) {
      console.log(index)
      console.log(val)
      this.functionDatas[ index ].selectdatas = this.functionDatas[index].selectdatas.filter(function(item) {
        if (item.value.toLowerCase().indexOf(val.toLowerCase().slice(0, 1)) !== -1) {
          return item
        }
      })
    },
    secondSelectValueChange(index, val) {
      console.log(index)
      console.log(val)
      for (var i = 0; i < this.functionDatas[ index ].selectdatas.length; i++) {
        if (this.functionDatas[ index ].selectdatas[i].value === val) {
          this.functionDatas[ index ].inputValues = this.functionDatas[ index ].selectdatas[i].label
        }
      }
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
    isShowTell() {
      if (this.flagTell) {
        this.flagTell = !this.flagTell
        this.shapeTell = '+'
      } else {
        this.flagTell = !this.flagTell
        this.shapeTell = '-'
      }
    },
    back() {
      this.$router.back(-1)
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
