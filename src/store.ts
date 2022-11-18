import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/counter/counterSlicer'

export default configureStore({
  reducer: {
      counter: counterReducer,
  }
})
