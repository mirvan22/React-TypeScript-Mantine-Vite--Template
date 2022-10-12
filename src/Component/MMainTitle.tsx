import { Col, Grid, Group, Paper, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { MSearchInput } from '../Component/MSearchInput'

interface IMMainTitle {
  label: string
  icon: any
  search?: boolean
}

const MMainTitle = ({ label, icon, search = true }: IMMainTitle) => {
  const mobile = useMediaQuery('(max-width:768px)')
  return (
    <Paper shadow="md" p="sm" sx={{ backgroundColor: 'rgb(26, 27, 30)' }}>
      <Grid justify="flex-start" gutter="xl">
        <Col span={mobile ? 12 : 5}>
          <Group align="center" sx={{ marginTop: 0 }}>
            {icon}
            <Title mt={5} pl={5} order={3} color="white">
              {label} {mobile ? 'Mobile' : 'Desktop'}
            </Title>
          </Group>
        </Col>

        <Col span={mobile ? 12 : 5} offset={mobile ? 0 : 2}>
          {search && <MSearchInput />}
        </Col>
      </Grid>
    </Paper>
  )
}

export default MMainTitle
