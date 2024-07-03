import { create } from 'zustand'

interface IUserRoles {
  role: number,
  userInfo: any,
  setUserInfo: (data: any) => void
}

const useInforUserStore = create<IUserRoles>((set) => ({
  role: 0,
  userInfo: {},
  setUserInfo: (data: any) => set(() => {
    return { role: data.role, userInfo: data }
  })
}))

export default useInforUserStore
