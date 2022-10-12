import { FunctionComponent } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import MMainTitle from '../Component/MMainTitle'

const Users = () => {
  return (
    <>
      <MMainTitle label="Users" icon={<FaUserAlt size={30} fill="white" />} />
    </>
  )
}

export default Users as FunctionComponent
