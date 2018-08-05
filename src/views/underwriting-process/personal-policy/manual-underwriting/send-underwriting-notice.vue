<template>
  <div class="main">
    <div>核保通知书信息</div>
    <p>
      <span @click="isShow('sentMessageFlag')" v-if='sentMessageFlag'>-</span>
      <span @click="isShow('sentMessageFlag')" v-else>+</span>
      已发送信息
    </p>
    <div class="table-con" v-show='sentMessageFlag'>
  		<p>
        <span @click="isShow('issuedIssueFlag')" v-if='issuedIssueFlag'>-</span> 
        <span @click="isShow('issuedIssueFlag')" v-else>+</span>  
        已发送问题件信息
      </p>
  		<el-table :data="issuedIssueInformationList" border v-show='issuedIssueFlag' style="width:100%">
        <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
        <el-table-column prop="policyNumber" label="投保单号码" min-width="19%" align="center"></el-table-column>
        <el-table-column prop="problemCode" label="问题代码" min-width="12%"  align="center"></el-table-column>
        <el-table-column prop="questionContent" label="问题内容" min-width="27%"  align="center"></el-table-column>
        <el-table-column prop="enteringPerson" label="录入人" min-width="12%"  align="center">
        </el-table-column>
        <el-table-column prop="entryDate" label="录入日期" min-width="12%" align="center"></el-table-column>
        <el-table-column prop="replyStatus" label="回复状态" min-width="12%" align="center"></el-table-column>
      </el-table>
      <div class="block" style="margin:20px" v-show="issuedIssueFlag">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[2, 5, 10]"
          :page-size="pages"
          layout="total, sizes, prev, pager, next, jumper"
          :total="issuedIssueInformationList.length">
        </el-pagination>
      </div>
      <p>
        <span @click="isShow('auditFlag')" v-if='auditFlag'>-</span>
        <span @click="isShow('auditFlag')" v-else>+</span>
        已发送核保审核信息
      </p>
      <el-table :data="auditInformationList" border v-show='auditFlag'>
        <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
        <el-table-column prop="policyNumber" label="投保单号码" min-width="14%" align="center"></el-table-column>
        <el-table-column prop="noticeContent" label="通知书内容" min-width="25%" align="center"></el-table-column>
        <el-table-column prop="enteringPerson" label="录入人" min-width="11%" align="center">
        </el-table-column>
        <el-table-column prop="entryDate" label="录入日期" min-width="11%" align="center"></el-table-column>
        <el-table-column prop="sender" label="发送对象" min-width="11%" align="center"></el-table-column>
        <el-table-column prop="receiver" label="接收对象" min-width="11%" align="center"></el-table-column>
        <el-table-column prop="printStatus" label="打印状态" min-width="11%" align="center"></el-table-column>
      </el-table>
      <p>
        <span @click="isShow('specialFlag')" v-if='specialFlag'>-</span>
        <span @click="isShow('specialFlag')" v-else>+</span>
        已发送特约信息
      </p>
      <el-table :data="specialInformationList" border v-show='specialFlag'>
        <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
        <el-table-column prop="specialContent" label="特约内容" min-width="29%" align="center"></el-table-column>
        <el-table-column prop="enteringPerson" label="录入人" min-width="13%" align="center">
        </el-table-column>
        <el-table-column prop="entryDate" label="录入日期" min-width="13%" align="center"></el-table-column> 
        <el-table-column prop="receiver" label="接收对象" min-width="13%" align="center"></el-table-column>
        <el-table-column prop="printStatus" label="打印状态" min-width="13%" align="center"></el-table-column>
        <el-table-column prop="replyStatus" label="回复状态" min-width="13%" align="center"></el-table-column>
      </el-table>
      <p>
        <span @click="isShow('medicalExaminationFlag')" v-if='medicalExaminationFlag'>-</span>
        <span @click="isShow('medicalExaminationFlag')" v-else>+</span>
        已发送体检信息
      </p>
      <el-table :data="medicalExaminationInformationList" border v-show='medicalExaminationFlag'>
        <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
        <el-table-column prop="project" label="特约内容" min-width="29%" align="center"></el-table-column>
        <el-table-column prop="enteringPerson" label="录入人" min-width="13%" align="center">
        </el-table-column>
        <el-table-column prop="entryDate" label="录入日期" min-width="13%" align="center"></el-table-column> 
        <el-table-column prop="receiver" label="接收对象" min-width="13%" align="center"></el-table-column>
        <el-table-column prop="printStatus" label="打印状态" min-width="13%" align="center"></el-table-column>
        <el-table-column prop="replyStatus" label="回复状态" min-width="13%" align="center"></el-table-column>
      </el-table>
      <p>
        <span @click="isShow('survivalSurveyFlag')" v-if='survivalSurveyFlag'>-</span>
        <span @click="isShow('survivalSurveyFlag')" v-else>+</span>
        已发送生调信息
      </p>
      <el-table :data="survivalSurveyInformationList" border v-show='survivalSurveyFlag'>
        <el-table-column label="序号" type="index" width="60"  align="center"></el-table-column>
        <el-table-column prop="survivalSurveyContent" label="生调内容" min-width="30%" align="center"></el-table-column>
        <el-table-column prop="enteringPerson" label="录入人" min-width="16%" align="center">
        </el-table-column>
        <el-table-column prop="entryDate" label="录入日期" min-width="16%" align="center"></el-table-column> 
        <el-table-column prop="printStatus" label="打印状态" min-width="16%" align="center"></el-table-column>
        <el-table-column prop="replyStatus" label="回复状态" min-width="16%" align="center"></el-table-column>
      </el-table>
	</div>
	<p>
    <span @click="isShow('feeFlag')" v-if='feeFlag'>-</span>
    <span @click="isShow('feeFlag')" v-else>+</span>
    已发送加费信息
  </p>
  <el-table :data="feeInformationList" border v-show='feeFlag'>
    <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
    <el-table-column prop="insuranceCode" label="险种代码" min-width="10%" align="center"></el-table-column>
    <el-table-column prop="insuranceName" label="险种名称" min-width="20%" align="center"></el-table-column>
    <el-table-column prop="feeType" label="加费类型" min-width="9%" align="center">
    </el-table-column>
    <el-table-column prop="increaseFee" label="加费金额" min-width="9%" align="center"></el-table-column>
    <el-table-column prop="emValue" label="EM值" min-width="10%" align="center"></el-table-column>
    <el-table-column prop="enteringPerson" label="录入人" min-width="9%" align="center"></el-table-column>
    <el-table-column prop="entryDate" label="录入日期" min-width="9%" align="center"></el-table-column> 
    <el-table-column prop="receiver" label="接收对象" min-width="9%" align="center"></el-table-column>
    <el-table-column prop="issueMark" label="下发标记" min-width="9%" align="center"></el-table-column>
  </el-table>
  <p>
    <span @click="isShow('underwritingPlanChangeFlag')" v-if='underwritingPlanChangeFlag'>-</span>
    <span @click="isShow('underwritingPlanChangeFlag')" v-else>+</span>
    已发送承保计划变更信息 
  </p>
  <el-table :data="underwritingPlanChangeInformationList" border v-if='underwritingPlanChangeFlag'>
    <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
    <el-table-column prop="insuranceName" label="险种名称" min-width="10%"" align="center"></el-table-column>
    <el-table-column prop="amount" label="保额"  min-width="7%" align="center"></el-table-column>
    <el-table-column prop="copy" label="份数" min-width="7%" align="center">
    </el-table-column>
    <el-table-column prop="premium" label="保费" min-width="7%" align="center"></el-table-column>
    <el-table-column prop="paymentPeriod" label="交费期间" min-width="8%" align="center"></el-table-column>
    <el-table-column prop="insurePeriod" label="保险期间" min-width="8%" align="center"></el-table-column>
    <el-table-column prop="paymentFrequency" label="交费频率" min-width="8%" align="center"></el-table-column>
    <el-table-column prop="underwritingDecision" label="核保决定" min-width="8%" align="center"></el-table-column>
    <el-table-column prop="enteringPerson" label="录入人" min-width="8%" align="center"></el-table-column>
    <el-table-column prop="entryDate" label="录入日期" min-width="8%" align="center"></el-table-column> 
    <el-table-column prop="receiver" label="接收对象" min-width="8%" align="center"></el-table-column>
    <el-table-column prop="issueMark" label="下发标记" min-width='8%' align="center"></el-table-column>
  </el-table>
  <p>
    <span @click="isShow('waitMessageFlag')" v-if='waitMessageFlag'>-</span> 
    <span @click="isShow('waitMessageFlag')" v-else>+</span>  
    待发送信息
  </p>
    <div class="table-con" v-show='waitMessageFlag'>
    	<p>
        <span @click="isShow('waitIssuedIssueFlag')" v-if='waitIssuedIssueFlag'>-</span> 
        <span @click="isShow('waitIssuedIssueFlag')" v-else>+</span>  
        待发送问题件信息
      </p>
      <el-table :data="issuedIssueInformationList" border v-show='waitIssuedIssueFlag'>
        <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
        <el-table-column prop="policyNumber" label="投保单号码" min-width="19%" align="center"></el-table-column>
        <el-table-column prop="problemCode" label="问题代码" min-width="12%" align="center"></el-table-column>
        <el-table-column prop="questionContent" label="问题内容" min-width="27%" align="center"></el-table-column>
        <el-table-column prop="enteringPerson" label="录入人" min-width="12%" align="center">
        </el-table-column>
        <el-table-column prop="entryDate" label="录入日期" min-width="12%" align="center"></el-table-column>
        <el-table-column prop="replyStatus" label="回复状态" min-width="12%"  align="center"></el-table-column>
      </el-table>
      <div class="block" style="margin:20px" v-show="waitIssuedIssueFlag">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[2, 5, 10]"
          :page-size="pages"
          layout="total, sizes, prev, pager, next, jumper"
          :total="issuedIssueInformationList.length">
        </el-pagination>
      </div>
      <p>
        <span @click="isShow('waitAuditFlag')" v-if='waitAuditFlag'>-</span>
        <span @click="isShow('waitAuditFlag')" v-else>+</span>
        待发送核保审核信息
      </p>
      <el-table :data="auditInformationList" border v-show='waitAuditFlag'>
        <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
        <el-table-column prop="policyNumber" label="投保单号码" min-width="14%" align="center"></el-table-column>
        <el-table-column prop="noticeContent" label="通知书内容" min-width="25%" align="center"></el-table-column>
        <el-table-column prop="enteringPerson" label="录入人" min-width="11%" align="center">
        </el-table-column>
        <el-table-column prop="entryDate" label="录入日期" min-width="11%" align="center"></el-table-column>
        <el-table-column prop="sender" label="发送对象" min-width="11%" align="center"></el-table-column>
        <el-table-column prop="receiver" label="接收对象" min-width="11%" align="center"></el-table-column>
        <el-table-column prop="printStatus" label="打印状态" min-width="11%" align="center"></el-table-column>
      </el-table>
      <p>
        <span @click="isShow('waitSpecialFlag')" v-if='waitSpecialFlag'>-</span>
        <span @click="isShow('waitSpecialFlag')" v-else>+</span>
        待发送特约信息
      </p>
      <el-table :data="specialInformationList" border v-show='waitSpecialFlag'>
        <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
        <el-table-column prop="specialContent" label="特约内容" min-width="29%" align="center"></el-table-column>
        <el-table-column prop="enteringPerson" label="录入人" min-width="13%" align="center">
        </el-table-column>
        <el-table-column prop="entryDate" label="录入日期" min-width="13%" align="center"></el-table-column> 
        <el-table-column prop="receiver" label="接收对象" min-width="13%" align="center"></el-table-column>
        <el-table-column prop="printStatus" label="打印状态" min-width="13%" align="center"></el-table-column>
        <el-table-column prop="replyStatus" label="回复状态" min-width="13%" align="center"></el-table-column>
      </el-table>
      <p>
        <span @click="isShow('waitMedicalExaminationFlag')" v-if='waitMedicalExaminationFlag'>-</span>
        <span @click="isShow('waitMedicalExaminationFlag')" v-else>+</span>
        待发送体检信息
      </p>
      <el-table :data="medicalExaminationInformationList" border v-show='waitMedicalExaminationFlag'>
        <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
        <el-table-column prop="project" label="特约内容" min-width="29%" align="center"></el-table-column>
        <el-table-column prop="enteringPerson" label="录入人" min-width="13%" align="center">
        </el-table-column>
        <el-table-column prop="entryDate" label="录入日期" min-width="13%" align="center"></el-table-column> 
        <el-table-column prop="receiver" label="接收对象" min-width="13%" align="center"></el-table-column>
        <el-table-column prop="printStatus" label="打印状态" min-width="13%" align="center"></el-table-column>
        <el-table-column prop="replyStatus" label="回复状态" min-width="13%" align="center"></el-table-column>
      </el-table>
      <p>
        <span @click="isShow('waitSurvivalSurveyFlag')" v-if='waitSurvivalSurveyFlag'>-</span>
        <span @click="isShow('waitSurvivalSurveyFlag')" v-else>+</span>
        待发送生调信息
      </p>
      <el-table :data="survivalSurveyInformationList" border v-show='waitSurvivalSurveyFlag'>
        <el-table-column label="序号" type="index" width="60"  align="center"></el-table-column>
        <el-table-column prop="survivalSurveyContent" label="生调内容" min-width="30%" align="center"></el-table-column>
        <el-table-column prop="enteringPerson" label="录入人" min-width="16%" align="center">
        </el-table-column>
        <el-table-column prop="entryDate" label="录入日期" min-width="16%" align="center"></el-table-column> 
        <el-table-column prop="printStatus" label="打印状态" min-width="16%" align="center"></el-table-column>
        <el-table-column prop="replyStatus" label="回复状态" min-width="16%" align="center"></el-table-column>
      </el-table>
    </div>
    <el-form label-width="20px" style="margin:20px 0 50px;">
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'sendUnderwritingNotice',
  data() {
    return {
      shape: '-',
      flag: true,
      sentMessageFlag: true,
      waitMessageFlag: true,
      issuedIssueFlag: true,
      auditFlag: true,
      specialFlag: true,
      medicalExaminationFlag: true,
      survivalSurveyFlag: true,
      waitIssuedIssueFlag: true,
      waitAuditFlag: true,
      waitSpecialFlag: true,
      waitMedicalExaminationFlag: true,
      waitSurvivalSurveyFlag: true,
      feeFlag: true,
      underwritingPlanChangeFlag: true,
      currentPage: 1,
      pages: 5,
      issuedIssueInformationList: [
        {
          policyNumber: 'A11135100011984',
          problemCode: '111351',
          questionContent: '个人电子投保书',
          enteringPerson: '马晓东',
          entryDate: '2018-06-05',
          replyStatus: '已回复'
        }
      ],
      auditInformationList: [
        {
          policyNumber: 'A11135100011984',
          noticeContent: '111351111351111351111351',
          enteringPerson: '马晓东',
          entryDate: '2018-06-05',
          sender: '马晓',
          receiver: '2018-06-05',
          printStatus: '已回收'
        }
      ],
      specialInformationList: [
        {
          specialContent: '测试测试',
          enteringPerson: '马晓东',
          entryDate: '2018-06-05',
          receiver: '2018-06-05',
          printStatus: '已回收',
          replyStatus: '已回复'
        }
      ],
      medicalExaminationInformationList: [
        {
          project: '测试测试',
          enteringPerson: '马晓东',
          entryDate: '2018-06-05',
          receiver: '2018-06-05',
          printStatus: '已回收',
          replyStatus: '已回复'
        }
      ],
      survivalSurveyInformationList: [
        {
          survivalSurveyContent: '测试测试',
          enteringPerson: '马晓东',
          entryDate: '2018-06-05',
          printStatus: '已回收',
          replyStatus: '已回复'
        }
      ],
      feeInformationList: [
        {
          insuranceCode: '测试测试',
          insuranceName: '马晓东',
          feeType: '特约',
          increaseFee: '￥65',
          emValue: '11.3',
          enteringPerson: '马晓东',
          entryDate: '2018-06-05',
          receiver: '马晓东',
          issueMark: '已标记'
        }
      ],
      underwritingPlanChangeInformationList: [
        {
          insuranceName: '测试测试',
          amount: '￥1000',
          copy: '3',
          premium: '￥1000',
          paymentPeriod: '年缴',
          insurePeriod: '10年',
          paymentFrequency: '1年1次',
          underwritingDecision: '测试测试',
          enteringPerson: '马晓东',
          entryDate: '2018-02-13',
          receiver: '马晓东',
          issueMark: '已标记'
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
    isShow(val) {
      this[val] = !this[val]
    },
    onSubmit() {
      alert('submit')
    }
  }
}
</script>
<style scoped>
.main{
	padding:10px 20px;
  width:100%;
}
.table-con{
  padding-left: 40px;
}
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