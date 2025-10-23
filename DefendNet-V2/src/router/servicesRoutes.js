import AuditView from '@/views/pages/AuditView.vue'
import CloudView from '@/views/pages/CloudView.vue'
import CyberView from '@/views/pages/CyberView.vue'
import PolicyView from '@/views/pages/PolicyView.vue'
import SoxView from '@/views/pages/SoxView.vue'
import ItSupportView from '@/views/pages/ItSupportView.vue'
import ThirdPartyView from '@/views/pages/ThirdPartyView.vue'
import BusinessView from '@/views/pages/BusinessView.vue'


import ServiesLayout from '@/views/Layout/ServiesLayout.vue'
export const servicesRoutes = [
  {
    path: '/services',
    component: ServiesLayout,
    children: [
      {
        path: '/audit',
        name: 'routeAudit',
        component: AuditView,
      },
      {
        path: '/cloud-security',
        name: 'routeCloud',
        component: CloudView,
      },
      {
        path: '/cybersecurity',
        name: 'routeCyber',
        component: CyberView,
      },

      {
        path: '/policy-development',
        name: 'routePolicy',
        component: PolicyView,
      },
      {
        path: '/sox-compliance',
        name: 'routeSox',
        component: SoxView,
      },
      {
        path: '/it-support',
        name: 'routeIt',
        component: ItSupportView,
      },
      {
        path: '/third-party-risk',
        name: 'routeThird',
        component: ThirdPartyView,
      },
      {
        path: '/business-continuity',
        name: 'routeBusiness',
        component: BusinessView,
      },
    ],
  },
]
