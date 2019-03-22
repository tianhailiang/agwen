// import api from '../api/index'
import * as types from './mutation-types'
import vm from '@/main'

// 全局的actions

// questionList
export const getNaire = ({commit, state}, data) => {
  return vm.$http.post('/naire/detail', {
    n_id: data.n_id
  })
}
// 新增问卷
export const createNaire = ({commit, state}, data) => {
  commit(types.CREATE_NEW_NAIRE, {
    naire: data
  })
}
// 保存问卷
export const saveNewQuestionnaire = ({commit, state}) => {
  return vm.$http.post('/go/saveQuestionnaire', {
    questionnaire: state.naire,
    status: state.status
  })
}
// 新增问题
export const addQuestion = ({commit, state}, data) => {
  commit(types.ADD_NEW_QUESTION, {
    topic: data
  })
}
export const delQuestion = ({commit, state}, data) => {
  commit(types.DEL_QUESTION, data)
}
export const delOption = ({commit, state}, data) => {
  commit(types.DEL_OPTION, data)
}
export const changeStatus = ({commit, state}, data) => {
  commit(types.CHANGE_STATUS, data)
}
export const changeNaireStatus = ({commit, state}, data) => {
  commit(types.CHANGE_NAIRE_STATUS, data)
}
// 管理员登录时，将 is_admin 设置为 true
export const login = ({commit}, data) => {
  commit(types.USER_LOGIN, {
    username: data.username,
    token: data.token
  })
}
export const logout = ({commit}) => {
  commit(types.LOG_OUT)
}
