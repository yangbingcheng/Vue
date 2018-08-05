<template>
  <div class="main">
    <el-main>
      <p><span @click="isShowTell">{{ shapeTell }}</span>投保人告知信息</p>
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
        <el-form :model="tellData" :rules="rules" ref="tellData" label-width="130px" class="demo-ruleForm" label-position="right">
          <el-row type="flex" class="row-bg">
            <el-col :span="8">
              <el-form-item  label="确认栏是否录入" :required="false" prop="isEntry" size="small">
                <el-select v-model="formData.isEntry" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                  <el-option
                    v-for="item in judge"
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
              <el-form-item  label="合同争议处理方式" :required="false" prop="method" size="small">
                <el-select v-model="formData.method" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                  <el-option
                    v-for="item in dealWith"
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
              <el-form-item label="仲裁机构" prop="organization" size="small" :required="false">
                  <el-input v-model="formData.organization" style=""></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg">
            <el-col :span="4">
              <el-form-item>
                <el-button type="primary" @click="save" style="margin:0 20px;">保存</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-form-item>
                <el-button type="primary" @click="revise">修改</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-form-item>
                <el-button type="primary" @click="deleteBtn">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-main>
    <el-main>
      <p style="border-bottom: none;"><span @click="isShowCompact">{{ shapeCompact }}</span>被保险人资料(客户号:<el-input v-model="clientNumber" style="width:200px;margin:5px;" size="mini"></el-input><el-button @click="queryBtn" type="success" style="margin:5px;" size="mini">查询</el-button>首次投保客户无需填写客户号)</p>
      <p style="color: red;">如投保人为被保险人本人，可免填本栏，请选择 <el-checkbox v-model="checked"></el-checkbox></p>
      <el-form :model="formData" :rules="rules" ref="formData" label-width="130px" class="demo-ruleForm" label-position="right" v-if="flagCompact">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="客户内部号码" :required="false" prop="knumber" size="small">
              <el-select v-model="formData.knumber" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="与第一被保险人关系" :required="false" prop="relation" size="small">
              <el-select v-model="formData.relation" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item label="姓名" prop="name" size="small" :required="false">
                <el-input v-model="formData.name" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="性别" :required="false" prop="sex" size="small">
              <el-select v-model="formData.sex" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="被保人年龄" prop="age" size="small" :required="false">
                <el-input v-model="formData.age" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="证件类型" :required="false" prop="type" size="small">
               <el-select v-model="formData.type" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item label="证件号码" prop="number" size="small" :required="false">
                <el-input v-model="formData.number" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="证件号码有效期至" :required="false" prop="dates" size="small">
              <el-date-picker
                v-model="formData.dates"
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
            <el-form-item label="身高" prop="height" size="small" :required="false">
                <el-input v-model="formData.height" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="体重" prop="weight" size="small" :required="false">
                <el-input v-model="formData.weight" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="国籍" :required="false" prop="country" size="small">
              <el-select v-model="formData.country" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item label="E-mail" prop="E_mail" size="small" :required="false">
                <el-input v-model="formData.E_mail" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="联系地址" :required="false" prop="address" size="small">
                     <el-select v-model="formData.address" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item label="邮政编码" prop="coding" size="small" :required="false">
                <el-input v-model="formData.coding" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="固定电话" prop="tel" size="small" :required="false">
                <el-input v-model="formData.tel" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="手机" prop="phone" size="small" :required="false">
                <el-input v-model="formData.phone" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系电话" prop="tels" size="small" :required="false">
                <el-input v-model="formData.tels" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="工作单位" prop="work" size="small" :required="false">
                <el-input v-model="formData.work" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="职业编码" :required="false" prop="job" size="small">
                     <el-select v-model="formData.job" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                        <el-option
                          v-for="item in selectData"
                          :key="item.value"
                          :label="item.value+'-'+item.label"
                          :value="item.value+'-'+item.label">
                          <span>{{ item.value }}</span>-
                          <span>{{ item.label}}</span>
                        </el-option>
                    </el-select>
                    <el-button type="primary" @click="queryBtns">查询</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="职业类别" :required="false" prop="jobType" size="small">
                     <el-select v-model="formData.jobType" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item label="年收入" prop="year" size="small" :required="false">
                <el-input v-model="formData.year" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="主要收入来源" :required="false" prop="imp" size="small">
                     <el-select v-model="formData.imp" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="是否拥有公费医疗、社会医疗保险" :required="false" prop="isPolicy" size="small">
                     <el-select v-model="formData.isPolicy" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
        <!-- <el-row type="flex" class="row-bg">
          <el-col>
            <el-form-item>
              <el-button type="primary" @click="queryBtn">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row> -->
      </el-form>
    </el-main>
    <show-page-policy v-if="isShowPage" :isShowPage="isShowPage" @back="back"></show-page-policy>
    <div id="isShowJob" v-if="isShowJob">
      <el-main>
            <el-table
                :data="dataJob"
                style="width: 100%"
                :highlight-current-row="true"
                border
                @current-change="tableHandleCurrentChangeJob"
              >
                <el-table-column
                  label="职业类别编号"
                  width="200%"
                  align="center" header-align="center"
                >
                  <template slot-scope="scope">
                    <el-select v-model="scope.row.number" filterable placeholder="" :disabled="false" style=""
                    @change="numberChange"
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
                <el-table-column
                  label="职业类别"
                  width="150%"
                  align="center" header-align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.type" style=""></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  label="职业代码"
                  width="200%"
                  align="center" header-align="center"
                >
                  <template slot-scope="scope">
                    <el-select v-model="scope.row.coding" filterable placeholder="" :disabled="false" style=""
                    @change="codingChange"
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
            <el-button @click="selectJob" type="success" style="margin:5px;" size="mini">选定职业</el-button>
            <el-button @click="close" type="success" style="margin:5px;" size="mini">关闭</el-button>
      </el-main>
    </div>
  </div>
</template>
<script>
import showPagePolicy from './show-page-policy'
export default {
  name: 'tellMessage',
  components: { showPagePolicy },
  data() {
    return {
      checked: false,
      isShowJob: false,
      isShowPage: false,
      clientNumber: '',
      shapeCompact: '-',
      flagCompact: true,
      shapeOther: '-',
      flagOther: true,
      shapeTell: '-',
      flagTell: true,
      pagesTell: 5,
      dataJob: [
        {
          number: '',
          type: '',
          coding: ''
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
        knumber: '',
        relation: '',
        name: '',
        sex: '',
        birth: '',
        age: '',
        type: '',
        number: '',
        dates: '',
        height: '',
        weight: '',
        country: '',
        E_mail: '',
        address: '',
        coding: '',
        tel: '',
        phone: '',
        tels: '',
        work: '',
        job: '',
        jobType: '',
        year: '',
        imp: '',
        isPolicy: ''
      },
      tellData: {
        isEntry: '',
        method: '',
        organization: ''
      },
      judge: [
        {
          value: '0',
          label: '否'
        }, {
          value: '1',
          label: '是'
        }
      ],
      dealWith: [
        {
          value: '0',
          label: '诉讼'
        }, {
          value: '1',
          label: '仲裁'
        }
      ],
      rules: { }
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
    selectJob() { },
    close() {
      this.isShowJob = false
    },
    tableHandleCurrentChangeJob(val) {
      console.log(val)
    },
    codingChange() { },
    numberChange() { },
    queryBtns() {
      this.isShowJob = true
    },
    back(val) {
      this.isShowPage = val
    },
    queryBtn() {
      this.isShowPage = true
    },
    save() { },
    revise() { },
    deleteBtn() { },
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
    otherButton() { },
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
#isShowJob {
  width: 600px;
  height: 200px;
  background: rgba(0,0,0,0.95);
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
