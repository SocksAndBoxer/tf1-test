import React, { ReactNode } from 'react'
import { styled } from 'styled-components'

type SliderProps = {
  children: ReactNode
  itemLength: number
}

const Slider = ({ children, itemLength }: SliderProps) => {
  return (
    <SliderWrapper $width={`${itemLength * 200}px`}>{children}</SliderWrapper>
  )
}

const SliderWrapper = styled.div<{ $width: string }>`
  display: flex;
  gap: 16px;
  width: ${props => props.$width};
  flex-grow: grow;
  margin: 0 auto;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    min-width: 200px;
  }
`

export default Slider
