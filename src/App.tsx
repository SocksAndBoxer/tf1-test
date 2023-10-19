import { useQuery } from '@apollo/client'
import { TProgam } from './types/program'
import QUERY_PROGRAMS from './graphql/program'
import { useState } from 'react'
import Slider from './components/Slider/Slider'
import { styled } from 'styled-components'

function App() {
  const [initialVariables, setInitialVariables] = useState({
    limit: 12,
    offset: 0,
  })

  const { loading, error, data, refetch } = useQuery<TProgam[]>(
    QUERY_PROGRAMS,
    {
      variables: initialVariables,
    }
  )

  console.log('1', data, error, loading)

  return (
    <SliderContainer>
      <Slider itemWidth={200} itemLength={6}>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </Slider>
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
