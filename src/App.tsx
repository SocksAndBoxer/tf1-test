import { useQuery } from '@apollo/client'
import { TProgam } from './types/program'
import QUERY_PROGRAMS from './graphql/program'

function App() {
  const { loading, error, data } = useQuery<TProgam[]>(QUERY_PROGRAMS, {
    variables: {
      limit: 1,
      offset: 0,
    },
  })

  console.log(data, error, loading)

  return <div>Hello TF1</div>
}

export default App
