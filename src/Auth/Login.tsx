import { Paper, createStyles, TextInput, PasswordInput, Checkbox, Button, Title, Text, Anchor } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../Store/hook'
import { AppDispatch } from '../Store/store'
import { API } from '../Utils/Axios'
import Swal from 'sweetalert2'

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]}`,
    paddingTop: 80,
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 800,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : 'blue',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}))

interface IInitialValues {
  username: string
  password: string
}
export const Login = () => {
  const [token, setToken] = useState()
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      username: (value) => (value.length < 1 ? 'Username wajib diisi' : null),
      password: (value) => (value.length < 1 ? 'Password wajib diisi' : null),
    },
  })
  const { classes } = useStyles()
  const navigate = useNavigate()
  const dispatch: AppDispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.auth)

  if (user) {
    return <Navigate to="/" />
  }

  const handleSubmit = async (value: IInitialValues) => {
    dispatch({ type: 'counter/loadingOverlay', payload: true })
    API()
      .post('/auth/login', {
        username: value.username,
        password: value.password,
      })
      .then((res) => {
        dispatch({ type: 'counter/loadingOverlay', payload: false })
        localStorage.setItem('login', JSON.stringify(res.data))
        localStorage.setItem('role', res.data.data.role)
        dispatch({ type: 'auth/getUser', payload: res.data.Authorization })
        navigate('')
      })
      .catch((err) => {
        dispatch({ type: 'counter/loadingOverlay', payload: false })
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: err.response.data.message,
        })
        console.log(err)
      })
  }
  return (
    <form onSubmit={form.onSubmit(() => handleSubmit(form.values))}>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={1} className={classes.title} align="center" mt="md" mb={50}>
            Login
          </Title>

          <TextInput label={'Username'} placeholder="Your username" size="md" {...form.getInputProps('username')} />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" {...form.getInputProps('password')} />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md" type="submit">
            Login
          </Button>

          <Text align="center" mt="md">
            Don&apos;t have an account?{' '}
            <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
              Register
            </Anchor>
          </Text>
        </Paper>
      </div>
    </form>
  )
}
