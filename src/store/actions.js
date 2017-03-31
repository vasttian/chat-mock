import * as api from '../api'
import * as types from './mutation-types'

// 获取全部消息记录
export const getAllMessages = ({ commit }) => {
  api.getAllMessages(messages => {
    commit(types.RECEIVE_ALL, {
      messages,
    })
  })
}

// 发送消息
export const sendMessage = ({ commit }, messageObj) => {
	api.createMessage(messageObj, message => {
		commit(types.RECEIVE_MESSAGE, {
			message,
		});
	});
};

// 选择聊天窗口
export const switchThread = ({ commit }, id) => {
  commit(types.SWITCH_THREAD, id);
}
