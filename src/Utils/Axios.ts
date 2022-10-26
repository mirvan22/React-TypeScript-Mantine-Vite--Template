import axios from 'axios'
import Swal from 'sweetalert2'
import { closeStack } from '../Store/Reducer/CustomizationReducer'
import { store } from '../Store/store'

const API = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { authorization: `Bearer ${store.getState().auth.auth?.Authorization}` },
})

export const GET = async (
  url: string,
  useEffect: (effect: React.EffectCallback, deps?: React.DependencyList | undefined) => void,

  setData: React.Dispatch<any>
) => {
  await useEffect(() => {
    API.get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        Swal.fire(err)
      })
  }, [])
}

export const POST = (
  url: string,
  data: object,
  dispatch: (counter: { payload: undefined; type: string }) => void,
  refetch?: () => void
) => {
  return API.post(url, {
    ...data,
  })
    .then((res) => {
      dispatch(closeStack())
      refetch
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: res.data.message,
      })
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.response.data.message,
      })
    })
}

export default API
