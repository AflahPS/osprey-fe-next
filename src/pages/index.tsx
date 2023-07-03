import AppLayout from '@/wrappers/Layout'
import MetaHeader from '@/wrappers/Meta'
import { Box } from '@mui/material'


export default function Home() {
  return (
    <AppLayout>
      <MetaHeader />
      <Box height={500} border={"1px solid crimson"}>
 1
      </Box>
      <Box height={500} border={"1px solid crimson"}>
 2
      </Box>
      <Box height={500} border={"1px solid crimson"}>
 3
      </Box>
      <Box height={500} border={"1px solid crimson"}>
 4
      </Box>

    </AppLayout>
  )
}
