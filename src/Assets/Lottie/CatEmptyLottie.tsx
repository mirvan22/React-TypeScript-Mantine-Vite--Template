import { Box, Center, Text } from '@mantine/core'
import Lottie from 'lottie-react'
import CatEmpty from './cat-empty.json'

export const CatEmptyLottie = () => {
  return (
    <>
      <Center>
        <Box sx={{ width: 200, height: 200, marginTop: -30 }}>
          <Lottie animationData={CatEmpty} loop={true} />
          <Center>
            <Text sx={{ marginTop: -90, fontWeight: 600 }}>Belum ada data . . .</Text>
          </Center>
        </Box>
      </Center>
    </>
  )
}

export const __catEmptyLottie = <CatEmptyLottie />
