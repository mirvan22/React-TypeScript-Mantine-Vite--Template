import { AiFillDashboard } from 'react-icons/ai'
import { FaAccusoft, FaUserAlt } from 'react-icons/fa'

interface IMenuItems {
  key: string
  label: string
  description?: string
  icon: any
  path: string
}

interface IParentMenu {
  label: string
  children: IMenuItems[]
}
export const MenuItems: IParentMenu[] = [
  {
    label: 'Application',
    children: [
      { key: 'home', label: 'Dashboard', icon: <AiFillDashboard size={25} />, path: '/' },
      { key: 'users', label: 'Users', icon: <FaUserAlt size={25} />, path: '/users' },
    ],
  },
  { label: 'Order', children: [{ key: 'order', label: 'Order', icon: <FaAccusoft size={25} />, path: '/order' }] },
]
