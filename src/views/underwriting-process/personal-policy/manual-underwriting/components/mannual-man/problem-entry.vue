<template>
<div>
<div class="icon">
      <el-button @click="change"><i class="el-icon-plus" ref="dom"></i></el-button><span style="color: blue">待发送问题件信息</span>
    </div>
<div class="table1" v-show="isShow">
  <el-table
    :data="tableData"
    style="width: 100%"
   >
    <el-table-column
      type="selection"
      width="50">
    </el-table-column>
    <el-table-column
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      label="投保单号码"
      width="120">
    </el-table-column>
    <el-table-column
      label="问题代码"
      width="120">
    </el-table-column>
    <el-table-column
      label="问题内容"
      width="100">
    </el-table-column>
    <el-table-column
      label="录入人"
      width="80">
    </el-table-column>
    
    <el-table-column
      label="录入日期"
      width="80">
    </el-table-column>
     <el-table-column
      label="操作位置"
      width="80">
    </el-table-column>

<el-table-column
      label="是否下发"
      width="100">
    </el-table-column>

<el-table-column
      label="发送对象"
      width="100">
    </el-table-column>
<el-table-column
      label="是否计入初审差错"
      width="100">
    </el-table-column>
</el-table>
<el-row class="footer1">
    <el-button type="primary" class="footer_btn">首页</el-button>
    <el-button type="primary" class="footer_btn">上一页</el-button>
    <el-button type="primary" class="footer_btn">下一页</el-button>
    <el-button type="primary" class="footer_btn">尾页</el-button>
  </el-row>
</div>
<div class="icc">
    <div class="pp">  <el-button  @click="change"><i class="el-icon-plus" ref="dom"></i></el-button><span style="color: blue">问提件消息</span></div>
      
    <div class="input_top">
        <span>
        发送对象:<el-input class="input1"></el-input>
        </span>
        <span>
        是否下发：<el-input class="input1"></el-input>
        </span>
         <span>
        是否计入初审差错：<el-input class="input1"></el-input>
        </span>
      </div>
     <div class="ttt">
     问题件内容<el-input
     type="textarea"
     :rows="10"
     size="medium"
     placeholder="请输入内容"
     v-model="textarea">
      </el-input>
      </div>
   <el-row class="footer1">
    <el-button type="primary" class="footer_btn">新增</el-button>
    <el-button type="primary" class="footer_btn">删除</el-button>
    <el-button type="primary" class="footer_btn">修改下发标记</el-button>
    <el-button type="primary" class="footer_btn">修改计入初审差错</el-button>
    </el-row>
    </div>
    </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      isShow: true,
      textarea2: ''
    }
  },
  methods: {
    change() {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.$refs.dom.className = 'el-icon-plus'
      } else {
        this.$refs.dom.className = 'el-icon-minus'
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input3{
  margin-top:50px;
  position:absolute;
}
a {
  color: #42b983;
}
.header {
  position:absolute;
  left: 5px;
  top: 10px;
}
.input1 {
  width:200px;
  height: 5px;}
span {
margin-right: 20px;
}
.cc{
  position: absolute;
  margin-top: 350px; 
}
.mm{
   position: absolute;
  margin-top: 420px;
}
.mm1{
   position: absolute;
  margin-top: 480px;
}
.ttt{
  margin-top:30px;
}
.pcc{
margin-top:10px;
}
.container {
left:5px;
  }
.input_top {
  margin-top: 60px;
}
.yy{
  position:absolute;
}
.top{
    width:200px;
    height:5px;
   top:10px;
}
.shenqing {
  background-color: blue;
  color: white;
  width: 70px;
  height: 30px;
position: absolute;
  left: 10px;
  margin-top:70px;
}
.el-icon-plus {
    background-color:whitesmoke; 
}
.pp{
   position: absolute;
  margin-top: 20px;
}
.icon{
    position: absolute;
    left: 0px; 
}
.icc {
  position: absolute;
  top: 220px;
}
.LL{
  position: absolute;
  
}
.input3{
  position:absolute;
  top:290px;
}
.input4{
   position:absolute;
  top:440px;
}
.input5{
    position:absolute;
  top:510px;
}
.shuru{
  margin-top:500px;
}
.input6{
    position:absolute;
  top:580px;
}
.kk{
    position: absolute;
  margin-top: 250px;
  }
.table1 {
  top: 80px;
  position: absolute;
}
.footer1 {
  position: absolute;
}
.footer2 {
  position: absolute;
  left: 10px;
  margin-top: 40px;
}
 .footer_btn {
    width: 80px;
   height: 30px;
 }
</style>
