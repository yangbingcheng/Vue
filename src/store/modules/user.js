import { login, logout, getInfo } from '@/api/login/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const mutationsType = {
  setToken: 'setToken',
  setName: 'setName',
  setAvatar: 'setAvatar',
  setRoles: 'setRoles',
  setMenus: 'setMenus'
}

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    menus: []
  },

  mutations: {
    [mutationsType.setToken]: (state, token) => {
      state.token = token
    },
    [mutationsType.setName]: (state, name) => {
      state.name = name
    },
    [mutationsType.setAvatar]: (state, avatar) => {
      state.avatar = avatar
    },
    [mutationsType.setRoles]: (state, roles) => {
      state.roles = roles
    },
    [mutationsType.setMenus]: (state, menus) => {
      state.menus = menus
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          commit(mutationsType.setToken, data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          if (data.menus && data.menus.length > 0) {
            commit(mutationsType.setMenus, data.menus)
          } else {
            reject('getInfo:menus must be a non-null array !')
          }
          commit(mutationsType.setName, data.name)
          commit(mutationsType.setAvatar, data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit(mutationsType.setToken, '')
          commit(mutationsType.setRoles, [])
          commit(mutationsType.setMenus, [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit(mutationsType.setToken, '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
