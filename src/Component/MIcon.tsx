import { AiFillDashboard } from 'react-icons/ai'
import { FaEdit, FaPlusSquare, FaTrashAlt } from 'react-icons/fa'

const globalHeaderIconSize = 30
const globalButtonIconSize = 20
const globalFillIcon = 'white'

export const MIconPlus = <FaPlusSquare size={globalButtonIconSize} fill={globalFillIcon} />

export const MIconEdit = <FaEdit size={globalButtonIconSize} fill={globalFillIcon} />

export const MIconTrash = <FaTrashAlt size={globalButtonIconSize} fill={globalFillIcon} />

export const MIconDashBoard = <AiFillDashboard size={globalHeaderIconSize} fill={globalFillIcon} />
