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
      // Типа была загрузка и сохраняем данные в accessUserToken, после чего записываем в сторе
      commit('setData', { path:'accessUserToken', value: state.userToken });
      localStorage.setItem('token', state.userToken)
    },
    getFromStrage({ commit })
    {
      // если есть токен то записываем, если бы был живой сервер, то сперва проверили и обновили токен
      commit('setData', { path:'accessUserToken', value: localStorage.getItem('token') })
    }
  },
  mutations:
  {
    ...mutations,
  }
}