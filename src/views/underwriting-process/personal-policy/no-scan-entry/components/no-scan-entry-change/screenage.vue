<template>
  <div class="main">
    <el-main>
      <p><span @click="isShowCompact">{{ shapeCompact }}</span>合同信息</p>
      <el-form :model="formData" :rules="rules" ref="formData" label-width="130px" class="demo-ruleForm" label-position="right" v-if="flagCompact">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="投保单号" prop="policyNumber" size="small" :required="true">
                <el-input v-model="formData.policyNumber" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="投保日期" :required="true" prop="policyDate" size="small">
              <el-date-picker
                v-model="formData.policyDate"
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
            <el-form-item  label="管理机构" :required="true" prop="organization" size="small">
              <el-select v-model="formData.organization" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="一级销售渠道" :required="true" prop="distributionChannelFirst" size="small">
               <el-select v-model="formData.distributionChannelFirst" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="二级销售渠道" :required="true" prop="distributionChannelSecond" size="small">
               <el-select v-model="formData.distributionChannelSecond" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="代理人编码" :required="true" prop="coding" size="small">
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
            <el-form-item label="代理人组别" prop="organizationName" size="small" :required="false">
                <el-input v-model="formData.organizationName" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="代理人所属机构" :required="false" prop="name" size="small">
             <el-select v-model="formData.name" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item label="初审员签名" prop="signature" size="small" :required="true">
                <el-input v-model="formData.signature" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="初审日期" :required="true" prop="applyDate" size="small">
              <el-date-picker
                v-model="formData.applyDate"
                type="date"
                placeholder="选择日期"
                :format="'yyyy-MM-dd'"
                :value-format="'yyyy-MM-dd'"
                @change="dateChangeApply"
                style="">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="是否关联投保单" :required="true" prop="isConnectPolicy" size="small">
              <el-select v-model="formData.isConnectPolicy" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                <el-option
                  v-for="item in selectData"
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
            <el-form-item label="关联投保单号" prop="connectPolicy" size="small" :required="false">
                <el-input v-model="formData.connectPolicy" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="双录保单" prop="doublePolicy" size="small" :required="false">
                <el-input v-model="formData.doublePolicy" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="是否已双录" :required="true" prop="isDoublePolicy" size="small">
                     <el-select v-model="formData.isDoublePolicy" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                        <el-option
                          v-for="item in selectData"
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
          <el-col :span="16">
            <el-form-item label="备注" prop="remark" size="small" :required="false">
              <el-input v-model="formData.remark" style="" type="textarea" autosize></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
    <el-main>
      <p><span @click="isShowOther">{{ shapeOther }}</span>其他业务员信息</p>
      <el-table
        :data="dataOther"
        style="width: 100%;margin-top: 20px;"
        :highlight-current-row="true"
        border
        @current-change="tableHandleCurrentChangeOther"
        v-if="flagOther"
      >
        <el-table-column
          label="序号"
          width="80"
          type="index"
          align="center" header-align="center"
        >
        </el-table-column>
        <el-table-column
          label="业务员代码"
          width="200%"
          align="center" header-align="center"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.coding" style="" size="mini" @focus="showPage"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(v,i) in columnsOther"
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
    </el-main>
    <el-main>
      <p><span @click="isShowTell">{{ shapeTell }}</span>业务员告知</p>
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
      </div>
    </el-main>
    <show-page v-if="isShowPage" :isShowPage="isShowPage" @back="back"></show-page>
  </div>
</template>
<script>
import showPage from './show-page'
export default {
  name: 'screenage',
  components: { showPage },
  data() {
    return {
      isShowPage: false,
      shapeCompact: '-',
      flagCompact: true,
      shapeOther: '-',
      flagOther: true,
      shapeTell: '-',
      flagTell: true,
      pagesTell: 5,
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
          inputValue: ''
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
          inputValue: ''
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
          inputValue: ''
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
          inputValue: ''
        }
      ],
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
      selectData: [
        {
          value: '01',
          label: '是'
        }, {
          value: '02',
          label: '否'
        }
      ],
      formData: {
        policyNumber: '',
        policyDate: '',
        organization: '',
        distributionChannelFirst: '',
        distributionChannelSecond: '',
        coding: '',
        organizationName: '',
        name: '',
        signature: '',
        applyDate: '',
        isConnectPolicy: '',
        connectPolicy: '',
        doublePolicy: '',
        isDoublePolicy: '',
        remark: ''
      },
      rules: { },
      dataOther: [
        {
          coding: '1440000100',
          name: 'chenruizhang00000',
          organization: '111111111111',
          team: '康金霞区康金霞区康金霞区'
        }
      ],
      columnsOther: [
        {
          content: 'name',
          label: '业务员姓名',
          width: '260%'
        },
        {
          content: 'organization',
          label: '所属机构',
          width: '260%'
        },
        {
          content: 'team',
          label: '营业部、组',
          width: '278%'
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
    back(val) {
      this.isShowPage = val
    },
    showPage() {
      this.isShowPage = true
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
        inputValue: ''
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
    isShowTell() {
      if (this.flagTell) {
        this.flagTell = !this.flagTell
        this.shapeTell = '+'
      } else {
        this.flagTell = !this.flagTell
        this.shapeTell = '-'
      }
    },
    tableHandleCurrentChangeTell(n, o) {
      console.log(n)
    },
    selectChange1(value) {
      console.log(value)
    },
    dateChange(value) {
      console.log(value)
      this.policyDate = value
    },
    dateChangeApply(value) {
      console.log(value)
      this.applyDate = value
    },
    tableHandleCurrentChangeOther(n, o) {
      console.log(n)
      // console.log(o);
    },
    isShowCompact() {
      if (this.flagCompact) {
        this.flagCompact = !this.flagCompact
        this.shapeCompact = '+'
      } else {
        this.flagCompact = !this.flagCompact
        this.shapeCompact = '-'
      }
    },
    isShowOther() {
      if (this.flagOther) {
        this.flagOther = !this.flagOther
        this.shapeOther = '+'
      } else {
        this.flagOther = !this.flagOther
        this.shapeOther = '-'
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
