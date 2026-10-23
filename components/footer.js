import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" fontSize="sm">
      <Box mb={2}>
        <Link
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          color="inherit"
          textDecoration="underline"
          isExternal
        >
          MLH Code of Conduct
        </Link>
      </Box>
      <Box opacity={0.4}>
        &copy; {new Date().getFullYear()} Michael Bobrowski. All Rights Reserved.
      </Box>
    </Box>
  )
}

export default Footer
