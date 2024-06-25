import { create } from 'zustand'

const useInforUserStore = create((set) => ({
  role: 0,
  userInfo: {},
  setRole: (data:number) => set(() => {
    return {role: data}
  })
}))

export default useInforUserStore
