<template>
  <div class="container">
    <el-main>
      <p><span @click="isShowTell">{{ shapeTell }}</span>被保险人告知信息<el-button type="primary" @click="otherButton" style="margin:5px;">健康告知随动</el-button><el-button type="primary" @click="otherButton" style="margin:5px;">财务告知随动</el-button><el-button type="primary" @click="otherButton" style="margin:5px;">告知说明随动</el-button></p>
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
      </div>
    </el-main>
    <el-main>
      <p><span @click="isShowFavoree">{{ shapeFavoree }}</span>受益人信息<el-button type="primary" @click="otherButton" style="margin:5px;">受益人信息随动</el-button></p>
      <div class="table" v-if="flagFavoree">
        <el-table
          :data="tableData"
          style="width: 100%"
          :highlight-current-row="true"
          border
          @current-change="tableHandleCurrentChangeFavoree">
          <el-table-column
            label="序号"
            align="center" header-align="center"
            type="index"
            width="">
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
          <el-table-column
            fixed="right"
            label="操作"
            width=""
            align="center" header-align="center">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRowFavoree(scope.$index, tableData)"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button @click.native.prevent="addRowFavoree" type="success"
            size="small" style="margin:30px;">
              添加
        </el-button>
        <el-table
          :data="tableDataSort"
          style="width: 100%"
          :highlight-current-row="true"
          border
          @current-change="tableHandleCurrentChangeSort">
          <el-table-column
            label="序号"
            align="center" header-align="center"
            type="index"
            width="">
          </el-table-column>
          <el-table-column
            v-for="(v,i) in columnsSort"
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
          <el-table-column
            fixed="right"
            label="操作"
            width=""
            align="center" header-align="center">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRowSort(scope.$index, tableDataSort)"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button @click.native.prevent="addRowSort" type="success"
            size="small" style="margin:30px;">
              添加
        </el-button>
      </div>
    </el-main>
    <el-main>
      <p><span @click="isShowInsured">{{ shapeInsured }}</span>被保险人险种信息<el-button type="primary" @click="otherButton" style="margin:5px;">被保险人险种影像</el-button></p>
      <div class="table" v-if="flagInsured">
        <el-table
          :data="tableDataInsured"
          style="width: 100%"
          :highlight-current-row="true"
          border
          @current-change="tableHandleCurrentChangeInsured">
          <el-table-column
            label="序号"
            align="center" header-align="center"
            type="index"
            width="">
          </el-table-column>
          <el-table-column
            v-for="(v,i) in columnsInsured"
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
        <div class='tell-bottom'>
          <span>外包前面比对结果</span>
          <el-input style="width:150px"></el-input>
          <el-button type="primary" style="margin-left: 10px;">签名查询</el-button>
          <el-button type="primary">进入险种信息</el-button>
        </div>
      </div>
    </el-main>
  </div>
</template>
<script>
export default {
  name: 'tell',
  components: { },
  data() {
    return {
      shapeTell: '-',
      flagTell: true,
      shapeFavoree: '-',
      flagFavoree: true,
      shapeInsured: '-',
      flagInsured: true,
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
      tableData: [
        // {
        //   style: '',
        //   item: '',
        //   name: '',
        //   order: '',
        //   percent: ''
        // }
      ],
      columns: [
        {
          content: 'style',
          label: '受益人型态',
          width: ''
        },
        {
          content: 'item',
          label: '受益人类别',
          width: ''
        },
        {
          content: 'name',
          label: '金融机构名称',
          width: ''
        },
        {
          content: 'order',
          label: '受益顺序',
          width: ''
        },
        {
          content: 'percent',
          label: '受益份额(%)',
          width: ''
        }
      ],
      tableDataSort: [
        // {
        //   sort: '',
        //   name: '',
        //   sex: '',
        //   date: '',
        //   type: '',
        //   number: '',
        //   relation: '',
        //   order: '',
        //   percent: '',
        //   useful: '',
        //   write: '',
        //   country: '',
        //   work: '',
        //   address: '',
        //   phone: '',
        //   coding: '',
        //   job: ''
        // }
      ],
      columnsSort: [
        {
          content: 'sort',
          label: '受益人类别',
          width: 100
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
          content: 'date',
          label: '出生日期',
          width: ''
        },
        {
          content: 'type',
          label: '证件类型',
          width: ''
        },
        {
          content: 'number',
          label: '证件号码',
          width: ''
        },
        {
          content: 'relation',
          label: '与被保人关系',
          width: 120
        },
        {
          content: 'order',
          label: '受益顺序',
          width: ''
        },
        {
          content: 'percent',
          label: '受益份额(%)',
          width: 120
        },
        {
          content: 'useful',
          label: '证件有效期',
          width: 120
        },
        {
          content: 'write',
          label: '速填',
          width: ''
        },
        {
          content: 'country',
          label: '国籍',
          width: ''
        },
        {
          content: 'work',
          label: '工作单位',
          width: ''
        },
        {
          content: 'address',
          label: '联系地址',
          width: ''
        },
        {
          content: 'phone',
          label: '联系电话',
          width: ''
        },
        {
          content: 'coding',
          label: '职业编码',
          width: ''
        },
        {
          content: 'job',
          label: '职业',
          width: ''
        }
      ],
      tableDataInsured: [
        {
          coding: '',
          name: '',
          bdate: '',
          jdate: '',
          amount: '',
          percent: '',
          total: '',
          job: '',
          kind: ''
        }
      ],
      columnsInsured: [
        {
          content: 'coding',
          label: '险种编码',
          width: ''
        },
        {
          content: 'name',
          label: '险种名称',
          width: ''
        },
        {
          content: 'bdate',
          label: '保险期间',
          width: ''
        },
        {
          content: 'jdate',
          label: '交费期间',
          width: ''
        },
        {
          content: 'amount',
          label: '保险金额',
          width: ''
        },
        {
          content: 'percent',
          label: '投保份数',
          width: ''
        },
        {
          content: 'total',
          label: '合计保费(元)',
          width: 120
        },
        {
          content: 'job',
          label: '职业加费(元)',
          width: 120
        },
        {
          content: 'kind',
          label: '币种',
          width: ''
        }
      ]
    }
  },
  mounted() { },
  methods: {
    otherButton() { },
    tableHandleCurrentChangeTell(n, o) {
      console.log(n)
    },
    tableHandleCurrentChangeInsured(n, o) {
      console.log(n)
    },
    tableHandleCurrentChangeSort(n, o) {
      console.log(n)
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    deleteRowInsured(index, rows) {
      rows.splice(index, 1)
    },
    deleteRowSort(index, rows) {
      rows.splice(index, 1)
    },
    tableHandleCurrentChangeFavoree(n, o) {
      console.log(n)
    },
    deleteRowFavoree(index, rows) {
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
    addRowInsured() {
      this.tableDataInsured.push({})
    },
    addRowFavoree() {
      this.tableData.push({})
    },
    addRowSort() {
      this.tableDataSort.push({})
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
    isShowFavoree() {
      if (this.flagFavoree) {
        this.flagFavoree = !this.flagFavoree
        this.shapeFavoree = '+'
      } else {
        this.flagFavoree = !this.flagFavoree
        this.shapeFavoree = '-'
      }
    },
    isShowInsured() {
      if (this.flagInsured) {
        this.flagInsured = !this.flagInsured
        this.shapeInsured = '+'
      } else {
        this.flagInsured = !this.flagInsured
        this.shapeInsured = '-'
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
.tell-bottom{
  font-size:12px;
  text-align: center;
  padding:30px 0 10px;
}
.tell-bottom span{
  margin-right: 5px;
}
</style>
