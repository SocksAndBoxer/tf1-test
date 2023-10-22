import { gql } from '@apollo/client'

const QUERY_PROGRAMS = gql`
  query getPrograms($limit: Int, $offset: Int) {
    program(limit: $limit, offset: $offset) {
      id
      name
      thumnail {
        alt
        id
        program_id
        url
      }
    }
  }
`

export default QUERY_PROGRAMS
