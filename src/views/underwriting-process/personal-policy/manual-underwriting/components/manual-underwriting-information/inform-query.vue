<template>
<div class="main">
  <div class="header">
   <span>
        客户号：<el-input class="input1"></el-input>
    </span>
    <span>
        客户姓名：<el-input class="input1"></el-input>
     </span>
  </div>
  <p><span @click="change1">{{ shape1 }}</span>保单信息</p>
  <div class="infoTable" v-show="isShow1">
    <el-table
      :data="tableData1"
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        label="序号"
        prop="1"
        align="center" header-align="center"
        width="55">
      </el-table-column>
      <el-table-column
        label="投保单号"
        prop="2"
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="保单号"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="投保日期"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="保单状态"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
    </el-table>
    <el-row class="tableFooter">
      <el-button type="primary" class="footer_btn">首页</el-button>
      <el-button type="primary" class="footer_btn">上一页</el-button>
      <el-button type="primary" class="footer_btn">下一页</el-button>
      <el-button type="primary" class="footer_btn">尾页</el-button>
    </el-row>
  </div>

  <p><span @click="change2">{{ shape2 }}</span>告知信息</p>
  <div class="infoTable" v-show="isShow2">
    <el-table
      :data="tableData2"
      style="width: 100%"
    >
      <el-table-column
        label="序号"
        prop=""
        align="center" header-align="center"
        width="55">
      </el-table-column>
      <el-table-column
        label="告知版别"
        prop=""
        align="center" header-align="center"
        width="150">
      </el-table-column>
      <el-table-column
        label="告知编码"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="告知内容"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="填写内容"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="说明内容"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="操作"
        width=""
        align="center" header-align="center"
      >
        <template slot-scope="scope">
          <el-button
            type="danger"
            @click.native.prevent="deleteRow(scope.$index,tableData2)"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click.native.prevent="addRow" type="success" size="small" style="margin:20px;">
      添加
    </el-button>
    <el-row class="tableFooter">
      <el-button type="primary" class="footer_btn">首页</el-button>
      <el-button type="primary" class="footer_btn">上一页</el-button>
      <el-button type="primary" class="footer_btn">下一页</el-button>
      <el-button type="primary" class="footer_btn">尾页</el-button>
    </el-row>
  </div>
  <el-row class="tableFooter2">
    <el-button type="primary" class="footer_btn" @click="toManualUnderwriting()">返回</el-button>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'informQuery',
  data() {
    return {
      isShow1: true,
      isShow2: true,
      shape1: '-',
      shape2: '-',
      tableData2: [
        {
        }
      ],
      tableData1: [
        {
          1: 'aa',
          2: 'bb'
        },
        {
          1: '1a',
          2: '1b'
        }
      ]
    }
  },
  methods: {
    change1() {
      this.isShow1 = !this.isShow1
      if (this.isShow1) {
        this.shape1 = '+'
      } else {
        this.shape1 = '-'
      }
    },
    change2() {
      this.isShow2 = !this.isShow2
      if (this.isShow2) {
        this.shape2 = '+'
      } else {
        this.shape2 = '-'
      }
    },
    toManualUnderwriting() {
      alert('hhhhh')
    },
    addRow() {
      this.tableData2.push({})
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
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
  .tableFooter {
    margin-left: 300px;
    margin-top: 20px;
    margin-bottom: 20px
  }
  .tableFooter2 {
    margin-top: 50px;
  }
  .input1 {
    width:200px;
  }
  .header {
    margin-top: 10px;
    margin-left: 20px;
  }
  span {
    margin-left: 50px;
  }
  .infoTable {
    margin-left: 15px;
  }
  .footer_btn {
    margin-left: 20px;
  }
</style>
