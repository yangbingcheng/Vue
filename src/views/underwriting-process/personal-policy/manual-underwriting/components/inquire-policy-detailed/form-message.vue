<template>
  <div class="main">
    <el-main>
      <p><span @click="isShowCompact">{{ shapeCompact }}</span>投保人信息（客户号：<el-input v-model="formData.name" style="width:150px"></el-input><el-button type="primary" @click="otherButton" style="margin:5px;">查询</el-button>首次投保客户无需填写客户号)</p>
      <el-form :model="formData" :rules="rules" ref="formData" label-width="130px" class="demo-ruleForm" label-position="right" v-if="flagCompact">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="姓名" prop="name" size="small" :required="true">
                <el-input v-model="formData.name" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="性别" :required="true" prop="sex" size="small">
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
            <el-form-item label="出生日期" :required="true" prop="birth" size="small">
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
            <el-form-item label="年龄" prop="age" size="small" :required="false">
                <el-input v-model="formData.age" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="证件类型" :required="true" prop="type" size="small">
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
            <el-form-item label="证件号码" prop="number" size="small" :required="true">
                <el-input v-model="formData.number" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="证件有效期至" :required="false" prop="dates" size="small">
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
            <el-form-item label="身高" prop="height" size="small" :required="true">
                <el-input v-model="formData.height" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="体重" prop="weight" size="small" :required="true">
                <el-input v-model="formData.weight" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="是否为特殊人群" :required="false" prop="isSpecial" size="small">
              <el-select v-model="formData.isSpecial" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="国籍" :required="true" prop="country" size="small">
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
            <el-form-item  label="联系地址" :required="true" prop="address" size="small">
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
            <el-form-item label="邮政编码" prop="coding" size="small" :required="true">
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
            <el-form-item label="联系电话" prop="tels" size="small" :required="true">
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
            <el-form-item  label="职业编码" :required="true" prop="job" size="small">
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
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item  label="职业类别" :required="true" prop="jobType" size="small">
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
            <el-form-item label="年收入" prop="year" size="small" :required="true">
                <el-input v-model="formData.year" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="主要收入来源" :required="true" prop="imp" size="small">
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
            <el-form-item  label="系被保人的" :required="true" prop="policy" size="small">
                     <el-select v-model="formData.policy" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
        <el-row>
          <el-col :span="16">
            <el-form-item  label="是否拥有公费医疗、社会医疗保险" :required="true" prop="isPolicy" size="small" label-width="250px">
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
      </el-form>
    </el-main>
    <el-main>
      <p><span @click="isShowOther">{{ shapeOther }}</span>个人税收居民身份信息</p>
      <el-form :model="formDatas" :rules="rules" ref="formDatas" label-width="130px" class="demo-ruleForm" label-position="right" v-if="flagOther">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="纳税身份" :required="false" prop="sex" size="small">
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
            <el-form-item label="姓(英文或拼音)" prop="name" size="small" :required="false">
                <el-input v-model="formData.name" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="名(英文或拼音)" prop="age" size="small" :required="false">
                <el-input v-model="formData.age" style=""></el-input>
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
          <el-col :span="6">
            <el-form-item label="现居住地址-中文" prop="country" size="small" :required="false">
                <el-input v-model="formData.country" style=""></el-input>(国家)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="province" size="small" :required="false">
                <el-input v-model="formData.province" style=""></el-input>(省)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="city" size="small" :required="false">
                <el-input v-model="formData.city" style=""></el-input>(市)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="address" size="small" :required="false">
                <el-input v-model="formData.address" style=""></el-input>(详细地址)
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item label="现居住地址-英文或拼音" prop="country" size="small" :required="false" label-width="160px">
                <el-input v-model="formData.country" style=""></el-input>(国家)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="province" size="small" :required="false">
                <el-input v-model="formData.province" style=""></el-input>(省)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="city" size="small" :required="false">
                <el-input v-model="formData.city" style=""></el-input>(市)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="address" size="small" :required="false">
                <el-input v-model="formData.address" style=""></el-input>(详细地址)
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item label="出生地址-中文" prop="country" size="small" :required="false">
                <el-input v-model="formData.country" style=""></el-input>(国家)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="province" size="small" :required="false">
                <el-input v-model="formData.province" style=""></el-input>(省)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="city" size="small" :required="false">
                <el-input v-model="formData.city" style=""></el-input>(市)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="address" size="small" :required="false">
                <el-input v-model="formData.address" style=""></el-input>(详细地址)
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item label="出生地址-英文或拼音" prop="country" size="small" :required="false" label-width="160px">
                <el-input v-model="formData.country" style=""></el-input>(国家)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="province" size="small" :required="false">
                <el-input v-model="formData.province" style=""></el-input>(省)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="city" size="small" :required="false">
                <el-input v-model="formData.city" style=""></el-input>(市)
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" prop="address" size="small" :required="false">
                <el-input v-model="formData.address" style=""></el-input>(详细地址)
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="税收居民国（地区）1" prop="E_mail" size="small" :required="false" label-width="160px">
                <el-input v-model="formData.E_mail" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="纳税人识别号1" prop="E_mail" size="small" :required="false">
                <el-input v-model="formData.E_mail" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item label="税收居民国（地区）2" prop="E_mail" size="small" :required="false" label-width="160px">
                <el-input v-model="formData.E_mail" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="纳税人识别号2" prop="E_mail" size="small" :required="false">
                <el-input v-model="formData.E_mail" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="16">
            <el-form-item  label="不能提供居民国（地区）纳税人识别号原因:" :required="true" prop="job" size="small" label-width="300px">
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
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="16">
            <el-form-item label="详细原因:" prop="reason" size="small" :required="false">
              <el-input v-model="formData.reason" style="" type="textarea" autosize></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
    <el-main>
      <p><span @click="isShowTell">{{ shapeTell }}</span>缴费信息</p>
      <el-form :model="formDatasMessage" :rules="rules" ref="formDatasMessage" label-width="130px" class="demo-ruleForm" label-position="right" v-if="flagTell">
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="首期交费形式" :required="false" prop="style" size="small">
              <el-select v-model="formData.style" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="公私标志" :required="false" prop="gtarget" size="small">
              <el-select v-model="formData.gtarget" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="自动垫交标志" :required="false" prop="ztarget" size="small">
              <el-select v-model="formData.ztarget" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="首期转账开户行" :required="false" prop="pay" size="small">
              <el-select v-model="formData.pay" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item label="首期账户姓名" prop="name" size="small" :required="false">
                <el-input v-model="formData.name" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="首期账号" prop="number" size="small" :required="false">
                <el-input v-model="formData.number" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="续期/续保交费形式" :required="false" prop="xstyle" size="small">
              <el-select v-model="formData.xstyle" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
          <el-col :span="10">
            <el-form-item label="首、续期/续保账号一致" label-width="160px">
              <el-checkbox-group v-model="formDatasMessage">
                <el-checkbox label="" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="8">
            <el-form-item  label="续期/续保转账开户行" :required="false" prop="xpay" size="small" label-width="150px">
              <el-select v-model="formData.xpay" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
            <el-form-item  label="续期/续保开户行所在省" :required="false" prop="province" size="small" label-width="160px">
              <el-select v-model="formData.province" filterable placeholder="请选择" @change="selectChange1" :disabled="false" style="">
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
          <el-col :span="6">
            <el-form-item label="续期/续保账户姓名" prop="xname" size="small" :required="false">
                <el-input v-model="formData.xname" style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item label="续期/续保账号" prop="xuser" size="small" :required="false">
                <el-input v-model="formData.xuser" style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="指定转账日期" :required="false" prop="date" size="small">
              <el-date-picker
                v-model="formData.date"
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
      </el-form>
    </el-main>
  </div>
</template>
<script>
export default {
  name: 'formMessage',
  components: { },
  data() {
    return {
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
        name: '',
        sex: '',
        birth: '',
        age: '',
        type: '',
        number: '',
        dates: '',
        height: '',
        weight: '',
        isSpecial: '',
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
        policy: '',
        isPolicy: ''
      },
      formDatas: {
        name: '',
        sex: '',
        birth: '',
        age: '',
        country: '',
        province: '',
        city: '',
        E_mail: '',
        address: '',
        coding: '',
        reason: '',
        job: ''
      },
      formDatasMessage: {
        style: '',
        gtarget: '',
        ztarget: '',
        pay: '',
        name: '',
        number: '',
        xstyle: '',
        same: '',
        address: '',
        xpay: '',
        province: '',
        xname: '',
        xuser: '',
        date: ''
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
          width: ''
        },
        {
          content: 'organization',
          label: '所属机构',
          width: ''
        },
        {
          content: 'team',
          label: '营业部、组',
          width: ''
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
    isShowTell() {
      if (this.flagTell) {
        this.flagTell = !this.flagTell
        this.shapeTell = '+'
      } else {
        this.flagTell = !this.flagTell
        this.shapeTell = '-'
      }
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
