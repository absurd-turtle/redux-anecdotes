import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: "initial message"
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      const message = action.payload
      Object.assign(state, { message })
    }
  }
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer
