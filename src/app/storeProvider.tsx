'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { setCount } from '../lib/features/counter/counterSlice'

export default function StoreProvider({
  children,
  count
}: {
  children: React.ReactNode,
  count: number
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(setCount(count))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}



