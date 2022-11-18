import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlicer'

export function Counter() {
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(incrementByAmount(20))}>
          Increment by 20
        </button>
      </div>
    </div>
  )
}

