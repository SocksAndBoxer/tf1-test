import React, { ReactNode } from 'react'
import { styled } from 'styled-components'
import LeftArrow from '../../assets/svg/left-arrow.svg'
import RightArrow from '../../assets/svg/right-arrow.svg'

type SliderProps = {
  children: ReactNode
  itemLength: number
}

const Slider = ({ children, itemLength }: SliderProps) => {
  return (
    <SliderWrapper $width={`${itemLength * 200}px`}>
      <ArrowContainer onClick={} $position={'left'} className='arrow'>
        <img src={LeftArrow} alt='Left arrow' />
      </ArrowContainer>
      {children}
      <ArrowContainer onClick={} $position={'right'} className='arrow'>
        <img src={RightArrow} alt='Right arrow' />
      </ArrowContainer>
    </SliderWrapper>
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
  position: relative;
  height: 266px;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div:not(.arrow) {
    min-width: 200px;
  }
`

const ArrowContainer = styled.div<{ $position: string }>`
  cursor: pointer;
  position: absolute;
  background: #313132;
  top: 110px;
  box-shadow: 0px 2px 4px 0px rgba(38, 40, 47, 0.4);
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: ${props => props.$position === 'right' && 0};
`

export default Slider
