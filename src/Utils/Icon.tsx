import { AiFillDashboard, AiOutlineKey, AiOutlineUser } from 'react-icons/ai'
import { BsAt, BsFilterLeft } from 'react-icons/bs'
import { FaEdit, FaPlusSquare, FaTrashAlt, FaUserAlt } from 'react-icons/fa'
import { GrUserSettings } from 'react-icons/gr'
import { MdShoppingCart } from 'react-icons/md'

const ButtonSize = 20
const InputSize = 20
const HeroSize = 25

export const Icon = {
  Button: {
    Plus: <FaPlusSquare size={ButtonSize} />,
    Edit: <FaEdit size={ButtonSize} />,
    Trash: <FaTrashAlt size={ButtonSize} />,
  },
  Input: {
    User: <AiOutlineUser size={InputSize} />,
    Email: <BsAt size={InputSize} />,
    Key: <AiOutlineKey size={InputSize} />,
    Role: <GrUserSettings size={InputSize} />,
    Filter: <BsFilterLeft size={InputSize} />,
  },
  Hero: {
    Dashboard: <AiFillDashboard size={HeroSize} />,
    User: <FaUserAlt size={HeroSize} />,
    ShoppingChart: <MdShoppingCart size={HeroSize} />,
  },
}
