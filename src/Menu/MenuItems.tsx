import { FaAdjust, FaHome } from 'react-icons/fa'

interface IMenuItems {
  key: string
  label: string
  description?: string
  icon: any
  path: string
}
export const MenuItems: IMenuItems[] = [
  { key: 'home', label: 'Home', icon: <FaHome size={30} />, path: '/' },
  { key: 'about', label: 'About', icon: <FaAdjust size={30} />, path: '/about' },
]
