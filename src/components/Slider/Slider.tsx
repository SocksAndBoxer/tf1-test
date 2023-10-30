import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { useDebounce } from '../../hooks/useDebounce'
import LeftArrow from '../../assets/svg/left-arrow.svg'
import RightArrow from '../../assets/svg/right-arrow.svg'

type SliderProps = {
  children: ReactNode
  itemLength: number
  itemWidth: number
  childrenLength: number
  gapLength?: number
}

const Slider = ({
  children,
  itemLength,
  itemWidth,
  childrenLength,
  gapLength = 24,
}: SliderProps) => {
  const [position, setPosition] = useState(0)
  const sliderRef: React.RefObject<HTMLDivElement> = useRef(null)
  const sliderWidth: number = itemLength * itemWidth + itemLength * gapLength
  const pagesLength: number = Math.ceil(childrenLength / 6) - 1
  const [transitionPosition, setTransitionPosition] = useState(0)
  const debouncedPosition = useDebounce(position, 300)
  const [hasDebounced, setHasDebounced] = useState(true)

  const scrollX = (nextPage = true) => {
    if (hasDebounced) {
      setPosition(prevPosition =>
        nextPage ? (prevPosition += 1) : (prevPosition -= 1)
      )

      setTransitionPosition(prevTransition =>
        nextPage
          ? (prevTransition += sliderWidth)
          : (prevTransition -= sliderWidth)
      )

      setHasDebounced(false)
    }
  }

  useEffect(() => {
    setHasDebounced(true)
  }, [debouncedPosition])

  if (childrenLength === 0) {
    return <></>
  }

  return (
    <SliderWrapper $width={`${sliderWidth}px`}>
      {position > 0 && (
        <ArrowContainer
          onClick={() => scrollX(false)}
          $position={'left'}
          className='arrow'
        >
          <img src={LeftArrow} alt='Left arrow' />
        </ArrowContainer>
      )}
      <SliderItems $transition={transitionPosition} ref={sliderRef}>
        {children}
      </SliderItems>
      {position < pagesLength && (
        <ArrowContainer
          onClick={() => scrollX()}
          $position={'right'}
          className='arrow'
        >
          <img src={RightArrow} alt='Right arrow' />
        </ArrowContainer>
      )}
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div<{ $width: string }>`
  width: ${props => props.$width};
  margin: 0 auto;
  position: relative;
  height: 266px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const SliderItems = styled.div<{ $transition: number }>`
  display: flex;
  gap: 24px;
  flex-grow: grow;
  transform: translateX(-${props => props.$transition}px);
  transition: transform 300ms ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    min-width: 200px;
  }
`

const ArrowContainer = styled.div<{ $position: string }>`
  z-index: 1;
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
