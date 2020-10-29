import mutations from '../mutations'

export default {
  namespaced: true,
  state: 
  {
    mapToken: 'pk.eyJ1IjoidGVmZmV0eSIsImEiOiJja2d1OWU5NG8wMHVrMnFxdGYzZnVha3RyIn0.3qrfI6_F4q1TeBjeKp7Bvg',
    userToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpYXQiOm51bGwsImV4cCI6bnVsbCwiYXVkIjoiIiwic3ViIjoiIiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIxMjMifQ.w9Ghn4IDL8kKjxjaTYGubNU4vIH5AfWDedcbKJHGFcg',
    accessUserToken: undefined,
  },
  actions:
  {
    setAccessToken( { commit, state} )
    {
      commit('setData', { path:'accessUserToken', value: state.userToken });
      localStorage.setItem('token', state.userToken)
    },
    getFromStrage({ commit })
    {
      commit('setData', { path:'accessUserToken', value: localStorage.getItem('token') })
    }
  },
  mutations:
  {
    ...mutations,
  }
}