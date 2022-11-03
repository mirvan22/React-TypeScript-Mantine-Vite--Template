import { FaAccusoft } from 'react-icons/fa'
import { Icon } from '../Utils/Icon'

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
      { key: 'home', label: 'Dashboard', icon: Icon.Hero.Dashboard, path: '/' },
      { key: 'users', label: 'Users', icon: Icon.Hero.User, path: '/users' },

      //Seed Dont Delete This Comment
    ],
  },
  { label: 'Order', children: [{ key: 'order', label: 'Order', icon: <FaAccusoft size={25} />, path: '/order' }] },
]
