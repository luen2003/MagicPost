import axios from 'axios'
import {
  POST_LIST_REQUEST,
  POST_LIST_FAIL,
  POST_LIST_SUCCESS,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DETAILS_REQUEST,
} from '../constants/postConstants'

export const listPosts = (keyword = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: POST_LIST_REQUEST })

    const { data } = await axios.get(
      `/api/posts?keyword=${keyword}`
    )

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listPostDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/posts/${id}`)

    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}