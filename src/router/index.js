import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set),且限制10字以内
    icon: 'svg-name'             the icon show in the sidebar,一级路由的图标最好设置了
  }
**/
export const constantRouterMap = [
  { path: '/login',
    component: () => import('@/views/login/index'),
    name: 'login',
    hidden: true
  },
  { path: '/404',
    component: () => import('@/views/404'),
    name: 'page404',
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/underwriting-process',
    component: Layout,
    redirect: '/underwriting-process/personal-policy',
    name: 'underwritingProcess',
    meta: {
      title: '承保处理',
      icon: 'form'
    },
    alwaysShow: true,
    children: [
      {
        path: 'personal-policy',
        component: () => import('@/views/underwriting-process/personal-policy/index'), // Parent router-view
        name: 'personalPolicy',
        alwaysShow: true,
        meta: { title: '个人保单' },
        children: [
          {
            path: 'manual-underwriting',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/manual-underwriting'),
            name: 'manualUnderwriting',
            meta: { title: '人工核保' }
          },
          {
            path: 'underwriting-application',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/underwriting-application'),
            name: 'underwritingApplication',
            hidden: true
          },
          {
            path: 'tell-query',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/tell-query'),
            name: 'tellQuery',
            hidden: true
          },
          {
            path: 'save-query',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/save-query'),
            name: 'saveQuery',
            hidden: true
          },
          {
            path: 'insure-demand',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/insure-demand'),
            name: 'insureDemand',
            hidden: true
          },
          {
            path: 'new-entry',
            component: () => import('@/views/underwriting-process/personal-policy/new-entry/new-entry'),
            name: 'newEntry',
            meta: { title: '新单录入' }
          },
          {
            path: 'new-entry-change',
            component: () => import('@/views/underwriting-process/personal-policy/new-entry/new-entry-change'),
            name: 'newEntryChange',
            hidden: true
          },
          {
            path: 'photo-query',
            component: () => import('@/views/underwriting-process/personal-policy/new-entry/photo-query'),
            name: 'photoQuery',
            hidden: true
          },
          {
            path: 'problem-entry',
            component: () => import('@/views/underwriting-process/personal-policy/new-entry/problem-entry'),
            name: 'problemEntry',
            hidden: true
          },
          {
            path: 'problem-query',
            component: () => import('@/views/underwriting-process/personal-policy/new-entry/problem-query'),
            name: 'problemQuery',
            hidden: true
          },
          {
            path: 'note-query',
            component: () => import('@/views/underwriting-process/personal-policy/new-entry/note-query'),
            name: 'noteQuery',
            hidden: true
          },
          {
            path: 'message-entry',
            component: () => import('@/views/underwriting-process/personal-policy/new-entry/message-entry'),
            name: 'messageEntry',
            hidden: true
          },
          {
            path: 'no-scan-entry',
            component: () => import('@/views/underwriting-process/personal-policy/no-scan-entry/no-scan-entry'),
            name: 'noScanEntry',
            meta: { title: '无扫描录入' }
          },
          {
            path: 'no-scan-entry-change',
            component: () => import('@/views/underwriting-process/personal-policy/no-scan-entry/no-scan-entry-change'),
            name: 'noScanEntryChange',
            hidden: true
          },
          {
            path: 'photo-querys',
            component: () => import('@/views/underwriting-process/personal-policy/no-scan-entry/photo-query'),
            name: 'photoQuerys',
            hidden: true
          },
          {
            path: 'problem-entrys',
            component: () => import('@/views/underwriting-process/personal-policy/no-scan-entry/problem-entry'),
            name: 'problemEntrys',
            hidden: true
          },
          {
            path: 'problem-querys',
            component: () => import('@/views/underwriting-process/personal-policy/no-scan-entry/problem-query'),
            name: 'problemQuerys',
            hidden: true
          },
          {
            path: 'note-querys',
            component: () => import('@/views/underwriting-process/personal-policy/no-scan-entry/note-query'),
            name: 'noteQuerys',
            hidden: true
          },
          {
            path: 'message-entrys',
            component: () => import('@/views/underwriting-process/personal-policy/no-scan-entry/message-entry'),
            name: 'messageEntrys',
            hidden: true
          },
          {
            path: 'auto-underwriting',
            component: () => import('@/views/underwriting-process/personal-policy/auto-underwriting/auto-underwriting'),
            name: 'autoUnderwriting',
            meta: { title: '自动核保' }
          },
          {
            path: 'state-query',
            component: () => import('@/views/underwriting-process/personal-policy/state-query/state-query'),
            name: 'stateQuery',
            meta: { title: '状态查询' }
          },
          {
            path: 'issuing-policy',
            component: () => import('@/views/underwriting-process/personal-policy/issuing-policy/issuing-policy'),
            name: 'issuingPolicy',
            meta: { title: '签发保单' }
          },
          {
            path: 'operation-history-query',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/operation-history-query.vue'),
            name: 'operationHistoryQuery',
            meta: { title: '投保操作履历查询' },
            hidden: true
          },
          {
            path: 'medical-notice-entry',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/components/mannual-man/medical-notice-entry.vue'),
            name: 'medicalNoticeEntry',
            meta: { title: '体检通知录入' },
            hidden: true
          },
          {
            path: 'admission-application-entry',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/components/mannual-man/admission-application-entry.vue'),
            name: 'admissionApplicationEntry',
            meta: { title: '生调申请录入' },
            hidden: true
          },
          {
            path: 'security-waiting',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/components/mannual-man/security-waiting.vue'),
            name: 'securityWaiting',
            meta: { title: '核保等待' },
            hidden: true
          },
          {
            path: 'audit-audit',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/components/mannual-man/audit-audit.vue'),
            name: 'auditAudit',
            meta: { title: '核保审核通知函录入' },
            hidden: true
          },
          {
            path: 'problem-entry',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/components/mannual-man/problem-entry.vue'),
            name: 'questionEntry',
            meta: { title: '问题件录入' },
            hidden: true
          },
          {
            path: 'notepad',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/components/mannual-man/notepad.vue'),
            name: 'notepad',
            meta: { title: '记事本查看' },
            hidden: true
          },

          {
            path: 'v-a-download',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/v-a-download.vue'),
            name: 'vaDownload',
            meta: { title: '录音录像资料下载' },
            hidden: true
          },
          {
            path: 'inform-query',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/components/manual-underwriting-information/inform-query.vue'),
            name: 'informQuery',
            meta: { title: '被保人告知查询' },
            hidden: true
          },
          {
            path: 'underwriting-query',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/underwriting-query.vue'),
            name: 'underwritingQuery',
            meta: { title: '核保结论查询' },
            hidden: true
          },
          {
            path: 'previous-insurance-information',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/previous-insurance-information.vue'),
            name: 'previousInsuranceInformation',
            meta: { title: '既往投保信息' },
            hidden: true
          },
          {
            path: 'security-detail',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/security-detail.vue'),
            name: 'securityDetail',
            meta: { title: '个人保单保全查询' },
            hidden: true
          },
          {
            path: 'inquiry-acceptance',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/inquiry-acceptance.vue'),
            name: 'inquiryAcceptance',
            meta: { title: '保全查询受理' },
            hidden: true
          },
          {
            path: 'operate-route',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/operate-route.vue'),
            name: 'operateRoute',
            meta: { title: '保全操作轨迹' },
            hidden: true
          },
          {
            path: 'new-single-check',
            component: () => import('@/views/underwriting-process/personal-policy/new-single-check/new-single-check'),
            name: 'newSingleCheck',
            meta: { title: '新单复核' }
          },
          {
            path: 'transfer-day',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/transfer-day'),
            name: 'transferDay',
            meta: { title: '指定转账日' },
            hidden: true
          },
          {
            path: 'salesman-quality',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/salesman-quality'),
            name: 'salesmanQuality',
            meta: { title: '业务员品质管理' },
            hidden: true
          },
          {
            path: 'analysis-report',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/analysis-report'),
            name: 'analysisReport',
            meta: { title: '核保分析报告查看' },
            hidden: true
          },
          {
            path: 'revise-security',
            component: () => import('@/views/underwriting-process/personal-policy/revise/revise-security'),
            name: 'reviseSecurity',
            meta: { title: '核保订正' }
          },
          {
            path: 'modify-problem',
            component: () => import('@/views/underwriting-process/personal-policy/modification/modify-problem'),
            name: 'modifyProblem',
            meta: { title: '问题件修改' }
          },
          {
            path: 'policy-detailed',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/policy-detailed'),
            name: 'policyDetailed',
            meta: { title: '投保单明细查询' },
            hidden: true
          },
          {
            path: 'video-information',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/video-information'),
            name: 'videoInformation',
            meta: { title: '影像资料查询' },
            hidden: true
          },
          {
            path: 'send-underwriting-notice',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/send-underwriting-notice'),
            name: 'sendUnderwritingNotice',
            meta: { title: '发送核保通知书' },
            hidden: true
          },
          {
            path: 'rescue-video-information',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/rescue-video-information'),
            name: 'rescueVideoInformation',
            meta: { title: '保全影像查询' },
            hidden: true
          },
          {
            path: 'inquire-policy-detailed',
            component: () => import('@/views/underwriting-process/personal-policy/manual-underwriting/inquire-policy-detailed'),
            name: 'inquirePolicyDetailed',
            meta: { title: '保单详情' },
            hidden: true
          }
        ]
      }
    ]
  },

  { path: '*',
    redirect: '/404',
    name: 'redirect404',
    hidden: true
  }
]
