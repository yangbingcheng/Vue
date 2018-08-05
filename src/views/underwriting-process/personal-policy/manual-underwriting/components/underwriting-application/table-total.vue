<template>
    <div class="main">
           <p><span @click="isShow">{{ shape }}</span>被保人信息</p>
           <el-main v-if="flag">
               <el-table
                    :data="datas"
                    style="width: 100%"
                    :highlight-current-row="true"
                    border
                    @current-change="tableHandleCurrentChange"
               >
                    <el-table-column
                      label="序号"
                      align="center" header-align="center"
                      type="index"
                      width="80">
                    </el-table-column>
                    <el-table-column
                      label="评估对象"
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
                    <el-table-column
                      v-for="(v,i) in column"
                      :key="i"
                      :prop="v.content"
                      :label="v.label"
                      :width="v.width"
                      align="center" header-align="center"

                    >
                        <template slot-scope="scope">
                          <el-input v-model="scope.row[v.content]" style="" size="mini"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      width=""
                      align="center" header-align="center"
                    >
                      <template slot-scope="scope">
                        <el-button
                          type="danger"
                          @click.native.prevent="deleteRow(scope.$index, datas)"
                          size="small">
                          移除
                        </el-button>
                      </template>
                    </el-table-column>
                </el-table>
           </el-main>
            <el-row>
                  <el-button @click.native.prevent="addRow" type="success" size="small" style="margin:30px;">
                          添加
                  </el-button>
                  <el-button type="primary" @click="submitForm('formData')">汇总</el-button>
            </el-row>
            <el-main>
               <el-table
                    :data="datas"
                    style="width: 100%"
                    :highlight-current-row="true"
                    border
                    @current-change="tableHandleCurrentChange"
               >
                    <el-table-column
                      label="序号"
                      align="center" header-align="center"
                      type="index"
                      width="80">
                    </el-table-column>
                    <el-table-column
                      label="评估对象"
                      width="150%"
                      align="center" header-align="center"
                    >
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.obj" style="" size="mini"></el-input>
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
                          <el-input v-model="scope.row[v.content]" style="" size="mini"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      width=""
                      align="center" header-align="center"
                    >
                      <template slot-scope="scope">
                        <el-button
                          type="danger"
                          @click.native.prevent="deleteRow(scope.$index, datas)"
                          size="small">
                          移除
                        </el-button>
                      </template>
                    </el-table-column>
                </el-table>
           </el-main>
            <el-row>
                  <el-button @click.native.prevent="addRow" type="success" size="small" style="margin:30px;">
                          添加
                  </el-button>
                  <el-button type="primary" @click="submitForm('formData')">保存</el-button>
            </el-row>
            <p><span @click="isShow1">{{ shape1 }}</span>加费信息</p>
            <el-main v-if="flag1">
               <el-table
                    :data="datas"
                    style="width: 100%"
                    :highlight-current-row="true"
                    border
                    @current-change="tableHandleCurrentChange"
               >
                    <el-table-column
                      label="序号"
                      width="150%"
                      align="center" header-align="center"
                    >
                      <template slot-scope="scope">
                        <el-radio v-model="myResult" :label="scope.$index+1" @change="radioChange"></el-radio>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="评估对象"
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
                    <el-table-column
                      label="评估对象"
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
                    <el-table-column
                      label="评估对象"
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
                    <el-table-column
                      v-for="(v,i) in column"
                      :key="i"
                      :prop="v.content"
                      :label="v.label"
                      :width="v.width"
                      align="center" header-align="center"

                    >
                        <template slot-scope="scope">
                          <el-input v-model="scope.row[v.content]" style="" size="mini"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      width=""
                      align="center" header-align="center"
                    >
                      <template slot-scope="scope">
                        <el-button
                          type="danger"
                          @click.native.prevent="deleteRow(scope.$index, datas)"
                          size="small">
                          移除
                        </el-button>
                      </template>
                    </el-table-column>
                </el-table>
           </el-main>
            <el-row>
                  <el-button @click.native.prevent="addRow" type="success" size="small" style="margin:30px;">
                          添加
                  </el-button>
                  <el-button type="primary" @click="submitForm('formData')">确定</el-button>
                  <el-button type="primary" @click="submitForm('formData')">删除</el-button>
            </el-row>
            <p><span @click="isShow2">{{ shape2 }}</span>特约信息</p>
            <el-main v-if="flag2">
               <el-table
                    :data="datas"
                    style="width: 100%"
                    :highlight-current-row="true"
                    border
                    @current-change="tableHandleCurrentChange"
               >
                    <el-table-column
                      label="序号"
                      width="80"
                      align="center" header-align="center"
                    >
                      <template slot-scope="scope">
                        <el-radio v-model="myResult" :label="scope.$index+1" @change="radioChange"></el-radio>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="评估对象"
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
                    <el-table-column
                      label="评估对象"
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
                    <el-table-column
                      label="评估对象"
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
                    <el-table-column
                      v-for="(v,i) in column"
                      :key="i"
                      :prop="v.content"
                      :label="v.label"
                      :width="v.width"
                      align="center" header-align="center"

                    >
                        <template slot-scope="scope">
                          <el-input v-model="scope.row[v.content]" style="" size="mini"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      width=""
                      align="center" header-align="center"
                    >
                      <template slot-scope="scope">
                        <el-button
                          type="danger"
                          @click.native.prevent="deleteRow(scope.$index, datas)"
                          size="small">
                          移除
                        </el-button>
                      </template>
                    </el-table-column>
                </el-table>
           </el-main>
            <el-row>
                  <el-button @click.native.prevent="addRow" type="success" size="small" style="margin:30px;">
                          添加
                  </el-button>
                  <el-button type="primary" @click="submitForm('formData')">确定</el-button>
                  <el-button type="primary" @click="submitForm('formData')">删除</el-button>
            </el-row>
    </div>
</template>
<script>
export default {
  name: 'tableTotal',
  components: { },
  data() {
    return {
      shape: '-',
      shape1: '-',
      shape2: '-',
      flag: true,
      flag1: true,
      flag2: true,
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
      datas: [
        {
          obj: '投保人1',
          factor: '',
          sxEM: '',
          zjEM: '',
          ylEM: '',
          EMtz: ''
        }, {
          obj: '投保人2',
          factor: '',
          sxEM: '',
          zjEM: '',
          ylEM: '',
          EMtz: ''
        }
      ],
      column: [
        {
          content: 'factor',
          label: '风险因素',
          width: '150%'
        },
        {
          content: 'sxEM',
          label: '寿险EM值',
          width: '150%'
        },
        {
          content: 'zjEM',
          label: '重疾险EM值',
          width: '150%'
        },
        {
          content: 'ylEM',
          label: '医疗险EM值',
          width: '150%'
        },
        {
          content: 'EMtz',
          label: 'EM值调整说明',
          width: '150%'
        }
      ]
    }
  },
  methods: {
    radioChange() { },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    addRow() {
      this.datas.push({})
    },
    selectChange(value) {
      console.log(value)
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
    },
    isShow2() {
      if (this.flag2) {
        this.flag2 = !this.flag2
        this.shape2 = '+'
      } else {
        this.flag2 = !this.flag2
        this.shape2 = '-'
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
