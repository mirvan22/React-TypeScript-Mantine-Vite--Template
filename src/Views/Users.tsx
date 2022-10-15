import { FunctionComponent } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import AMainTitle from '../Component/AMainTitle'

const Users = () => {
  return (
    <>
      <AMainTitle label="Users" icon={<FaUserAlt size={30} fill="white" />} />
    </>
  )
}

export default Users as FunctionComponent
