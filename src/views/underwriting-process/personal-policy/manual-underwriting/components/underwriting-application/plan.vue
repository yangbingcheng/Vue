<template>
    <div class="main">
           <p><span @click="isShow">{{ shape }}</span>承保计划变更</p>
           <el-main v-if="flag">
              <el-menu :default-active="this.$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="/uwApplication">当前保险计划</el-menu-item>
                <el-menu-item index="/underwriting">变更保险计划</el-menu-item>
              </el-menu>
               <el-table
                    :data="datas"
                    style="width: 100%;margin-top: 20px;"
                    :highlight-current-row="true"
                    border
                    @current-change="tableHandleCurrentChange"
                  >
                    <el-table-column
                      label="序号"
                      width=""
                      align="center" header-align="center"
                    >
                      <template slot-scope="scope">
                        <el-radio v-model="myResult" :label="scope.$index+1" @change="radioChange"></el-radio>
                      </template>
                    </el-table-column>
                    <el-table-column
                      v-for="(v,i) in column"
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
                      label="币种"
                      width="150%"
                      align="center" header-align="center"
                    >
                      <template slot-scope="scope">
                        <el-select v-model="scope.row.obj" filterable placeholder="请选择" @change="selectChange" :disabled="false" style="" size="mini">
                                          <el-option
                                            v-for="item in getData"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.label">
                                            <span>{{ item.value }}</span>-
                                            <span>{{ item.label}}</span>
                                          </el-option>
                          </el-select>
                      </template>
                    </el-table-column>
                </el-table>
          </el-main>
          <p><span @click="isShow1">{{ shape1 }}</span>险种信息</p>
          <el-main v-if="flag1">
              <el-table
                    :data="data"
                    style="width: 100%;margin-top: 20px;"
                    :highlight-current-row="true"
                    border
                    @current-change="tableHandleCurrentChange"
                  >
                    <el-table-column
                      label="序号"
                      width="80"
                      type="index"
                      align="center" header-align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      label="核保决定"
                      width="200"
                      align="center" header-align="center"
                    >
                      <template slot-scope="scope">
                        <el-select v-model="scope.row.obj" filterable placeholder="请选择" @change="selectChange" :disabled="false" style="" size="mini">
                                          <el-option
                                            v-for="item in getData"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.label">
                                            <span>{{ item.value }}</span>-
                                            <span>{{ item.label}}</span>
                                          </el-option>
                          </el-select>
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
          </el-main>
    </div>
</template>
<script>
export default {
  name: 'rmessage',
  components: { },
  data() {
    return {
      activeIndex: '1',
      shape: '-',
      shape1: '-',
      flag1: true,
      flag: true,
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
      datas: [
        {
          obj: '',
          clientNumber: '0000178430',
          name: '张0000201769',
          sex: '男',
          age: 32,
          relationship: '配偶',
          imprelationship: '本人',
          nationality: '中国'
        }
      ],
      data: [
        {
          code: 16010,
          name: '横琴优健人生终身重大疾病保险',
          amount: 100000,
          copies: 1,
          bxPeriod: '终身',
          jfPeriod: '20Y',
          frequency: 12,
          bzaddCost: 3000,
          zyaddCost: 0,
          jkaddCost: 0,
          qtaddCost: 0,
          content: ''
        }
      ],
      column: [
        {
          content: 'clientNumber',
          label: '客户号码',
          width: '150%'
        },
        {
          content: 'name',
          label: '姓名',
          width: '150%'
        },
        {
          content: 'sex',
          label: '性别',
          width: '150%'
        },
        {
          content: 'age',
          label: '年龄',
          width: '150%'
        },
        {
          content: 'relationship',
          label: '与被保险人关系',
          width: '150%'
        },
        {
          content: 'imprelationship',
          label: '与主被保人关系',
          width: '150%'
        },
        {
          content: 'nationality',
          label: '国籍',
          width: '150%'
        }
      ],
      columns: [
        {
          content: 'code',
          label: '险种编码',
          width: 80
        },
        {
          content: 'name',
          label: '险种名称',
          width: 250
        },
        {
          content: 'amount',
          label: "'保额'",
          width: 80
        },
        {
          content: 'copies',
          label: '份数',
          width: 80
        },
        {
          content: 'bxPeriod',
          label: '保险期间',
          width: 100
        },
        {
          content: 'jfPeriod',
          label: '交费期间',
          width: 100
        },
        {
          content: 'frequency',
          label: '交费频率',
          width: 100
        },
        {
          content: 'bzaddCost',
          label: '标准保费',
          width: 100
        },
        {
          content: 'zyaddCost',
          label: '职业加费',
          width: 100
        },
        {
          content: 'jkaddCost',
          label: '健康加费',
          width: 100
        },
        {
          content: 'qtaddCost',
          label: '其他加费',
          width: 100
        },
        {
          content: 'content',
          label: '特约内容',
          width: ''
        }
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) { },
    selectChange(value) {
      console.log(value)
    },
    dateChange1(value) {
      console.log(value)
      this.date1 = value
    },
    radioChange() { },
    tableHandleCurrentChange(n, o) {
      console.log(n)
    },
    isShow() {
      if (this.flag) {
        this.flag = !this.flag
        this.shape = '+'
      } else {
        this.flag = !this.flag
        this.shape = '-'
      }
    },
    isShow1() {
      if (this.flag1) {
        this.flag1 = !this.flag1
        this.shape1 = '+'
      } else {
        this.flag1 = !this.flag1
        this.shape1 = '-'
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
