import { useQuery } from '@apollo/client'
import { TProgam } from './types/program'
import QUERY_PROGRAMS from './graphql/program'
import Slider from './components/Slider/Slider'
import { styled } from 'styled-components'
import Program from './components/Program/Program'
import Loader from './components/Loader/Loader'

function App() {
  const {
    loading,
    error,
    data: dataPrograms,
  } = useQuery<{ program: TProgam[] }>(QUERY_PROGRAMS)

  if (error) {
    return <div>An error occured</div>
  }

  return (
    <SliderContainer>
      {loading ? (
        <Loader />
      ) : (
        <Slider
          childrenLength={dataPrograms?.program.length || 0}
          itemWidth={200}
          itemLength={6}
        >
          {dataPrograms?.program.map(program => (
            <Program
              key={program.name}
              thumnail={program.thumnail}
              name={program.name}
            />
          ))}
        </Slider>
      )}
    </SliderContainer>
  )
}

const SliderContainer = styled.div`
  color: white;
  height: 869px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

export default App
