import Cookies from 'js-cookie'

/**
 * 之所以定义mutationsType，是为了mutations和actions使用统一的方法名称
 * @type {Object}
 */
const mutationsType = {
  toggleSidebar: 'toggleSidebar',
  closeSidebar: 'closeSidebar',
  toggleDevice: 'toggleDevice'
}

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop'
  },
  mutations: {
    [mutationsType.toggleSidebar]: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    [mutationsType.closeSidebar]: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    [mutationsType.toggleDevice]: (state, device) => {
      state.device = device
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit(mutationsType.toggleSidebar)
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit(mutationsType.closeSidebar, withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit(mutationsType.toggleDevice, device)
    }
  }
}

export default app
