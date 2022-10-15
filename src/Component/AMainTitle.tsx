import { Col, Grid, Group, Paper, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { ASearchInput } from './ASearcInput'

interface IAMainTitle {
  label: string
  icon: any
  search?: boolean
}

const AMainTitle = ({ label, icon, search = true }: IAMainTitle) => {
  const mobile = useMediaQuery('(max-width:768px)')
  return (
    <Paper shadow="md" p="sm" className="main-color">
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
          {search && <ASearchInput />}
        </Col>
      </Grid>
    </Paper>
  )
}

export default AMainTitle
