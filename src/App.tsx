import { useQuery } from '@apollo/client'
import { TProgam } from './types/program'
import QUERY_PROGRAMS from './graphql/program'
import { useEffect, useMemo, useState } from 'react'
import Slider from './components/Slider/Slider'
import { styled } from 'styled-components'

type TVariables = {
  limit: number
  offset: number
}

function App() {
  const {
    loading,
    error,
    data: dataPrograms,
  } = useQuery<{ program: TProgam[] }>(QUERY_PROGRAMS)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>An error occured</div>
  }

  return (
    <SliderContainer>
      <Slider itemWidth={200} itemLength={6}>
        {dataPrograms?.program.map(program => (
          <Program>
            <img src={program.thumnail.url} alt={program.thumnail.alt} />
            <p>{program.name}</p>
          </Program>
        ))}
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

const Program = styled.div`
  max-width: 200px;

  & > img {
    object-fit: contain;
    width: 200px;
    height: 266px;
    border-radius: 8px;
  }

  & > p {
    font-family: Inter, sans-serif;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

export default App
