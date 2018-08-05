<template>
  <div class="main">
    <el-container>
      <el-header style="height: 300px;overflow: auto;">
        <div style="height: 800px;background: black;color:white;">影像</div>
      </el-header>
      <el-main>
        <el-form :model="formData" :rules="rules" ref="formData" label-width="150px" class="demo-ruleForm" label-position="right">
          <el-row type="flex" class="row-bg">
            <el-col :span="8">
              <el-form-item label="投保单号/保险合同号" prop="policyNumber" size="small" :required="false">
                <el-input v-model="formData.policyNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item  label="影像类别" :required="false" prop="videoCategory" size="small">
                <el-select v-model="formData.videoCategory" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
                  <el-option
                    v-for="item in videoCategory"
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
              <el-form-item label="扫描批次号" prop="batchNumber" size="small" :required="false">
                <el-input v-model="formData.batchNumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button type="primary" @click="submitForm('numberValidateForm')">查询</el-button>
        </el-form>
        <p><span @click="isShow">{{ shape }}</span>影像资料查询</p>
        <el-table :data="videoInformationList" border v-show="flag" >
          <el-table-column label="序号" min-width="6%" align="center">
            <template slot-scope="scope">
              <el-radio v-model="checkValue" :label="scope.$index+1"></el-radio>
            </template>
          </el-table-column>
          <el-table-column prop="documentNumber" label="单证号" min-width="14%" align="center"></el-table-column>
          <el-table-column prop="category" label="影像类别" min-width="9%" align="center"></el-table-column>
          <el-table-column prop="videoName" label="影像名称" min-width="17%" align="center"></el-table-column>
          <el-table-column prop="batchNumber" label="扫描批次号" min-width="14%" align="center"></el-table-column>
          <el-table-column prop="page" label="页数" min-width="5%" align="center"></el-table-column>
          <el-table-column prop="scanDate" label="扫描日期" min-width="12%" align="center"></el-table-column>
          <el-table-column prop="scanTime" label="扫描时间" min-width="9%" align="center"></el-table-column>
          <el-table-column prop="employeeNumber" label="扫描员工号" min-width="9%" align="center"></el-table-column>
          <el-table-column prop="partsNumber" label="件号" min-width="5%"></el-table-column>
        </el-table>
        <div class="block" style="margin:20px" v-show="flag">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[2, 5, 10]"
            :page-size="pages"
            layout="total, sizes, prev, pager, next, jumper"
            :total="videoCategory.length">
          </el-pagination>
        </div>
      </el-main>
      
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'videoInformation',
  data() {
    return {
      currentPage: '1',
      pages: 5,
      flag: true,
      videoCategory: [
        {
          value: '101011',
          label: '保险合同正文页(个险)'
        },
        {
          value: '111011',
          label: '个人保险投保单'
        },
        {
          value: '111012',
          label: '人身保险投保提示书'
        }
      ],
      formData: {
        policyNumber: '',
        videoCategory: '',
        batchNumber: ''
      },
      rules: {
        underwritingTaskStatus: [
          { required: true, message: '请输入核保任务状态', trigger: 'blur' }
        ]
      },
      checkValue: '',
      videoInformationList: [
        {
          documentNumber: 'A11135100011984',
          category: '111351',
          videoName: '个人电子投保书',
          batchNumber: 'A11135100011984',
          page: '4',
          scanDate: '2018-06-05',
          scanTime: '20:31:04',
          employeeNumber: '001',
          partsNumber: '1'
        },
        {
          documentNumber: 'A11135100011984',
          category: '111351',
          videoName: '个人电子投保书',
          batchNumber: 'A11135100011984',
          page: '4',
          scanDate: '2018-06-05',
          scanTime: '20:31:04',
          employeeNumber: '001',
          partsNumber: '1'
        },
        {
          documentNumber: 'A11135100011984',
          category: '111351',
          videoName: '个人电子投保书',
          batchNumber: 'A11135100011984',
          page: '4',
          scanDate: '2018-06-05',
          scanTime: '20:31:04',
          employeeNumber: '001',
          partsNumber: '1'
        }
      ]
    }
  },
  methods: {
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
  color: blue;
  border-bottom: 2px solid blue;
  margin: 15px 0;
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
