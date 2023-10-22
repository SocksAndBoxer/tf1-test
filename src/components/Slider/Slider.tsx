import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import LeftArrow from '../../assets/svg/left-arrow.svg'
import RightArrow from '../../assets/svg/right-arrow.svg'
import { useDebounce } from '../../hooks/useDebounce'

type SliderProps = {
  children: ReactNode[]
  itemLength: number
  itemWidth: number
}

const Slider = ({ children, itemLength, itemWidth }: SliderProps) => {
  const [position, setPosition] = useState(0)
  const [hasDebounced, setHasDebounced] = useState(true)
  const containerRef: React.RefObject<HTMLDivElement> = useRef(null)
  const sliderRef: React.RefObject<HTMLDivElement> = useRef(null)
  const sliderWidth: number = itemLength * itemWidth + 144
  const pagesLength: number = Math.ceil(children.length / 6) - 1
  const debouncedPosition = useDebounce(position, 500)

  const scrollX = (nextPage = true) => {
    if (sliderRef.current && hasDebounced) {
      const { clientWidth } = sliderRef.current

      sliderRef.current.scrollTo({
        left: nextPage
          ? sliderRef.current.scrollLeft + clientWidth
          : sliderRef.current.scrollLeft - clientWidth,
        behavior: 'smooth',
      })

      setPosition(prevPosition =>
        nextPage ? (prevPosition += 1) : (prevPosition -= 1)
      )

      setHasDebounced(false)
    }
  }

  useEffect(() => {
    setHasDebounced(true)
  }, [debouncedPosition])

  return (
    <SliderWrapper ref={containerRef} $width={`${sliderWidth}px`}>
      {position > 0 && (
        <ArrowContainer
          onClick={() => scrollX(false)}
          $position={'left'}
          className='arrow'
        >
          <img src={LeftArrow} alt='Left arrow' />
        </ArrowContainer>
      )}
      <SliderItems ref={sliderRef}>{children}</SliderItems>
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
`

const SliderItems = styled.div`
  display: flex;
  gap: 24px;
  flex-grow: grow;
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
