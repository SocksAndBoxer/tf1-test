import { styled } from 'styled-components'
import { TProgam } from '../../types/program'
import PlusIcon from '../../assets/svg/plus.svg'

type ProgramProps = Pick<TProgam, 'thumnail' | 'name'>

const Program = ({ thumnail, name }: ProgramProps) => {
  return (
    <ProgramWrapper>
      <div>
        <img
          loading='lazy'
          className='program-image'
          src={thumnail.url}
          alt={thumnail.alt}
          title={thumnail.alt}
          decoding='async'
          width={200}
          height={266}
        />
        <img className='plus-icon' src={PlusIcon} alt='Plus Icon' />
      </div>
      <h3 className='title'>{name}</h3>
    </ProgramWrapper>
  )
}

const ProgramWrapper = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 13px;

  & > div {
    position: relative;
    height: 266px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 16;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    .program-image {
      cursor: pointer;
      object-fit: contain;
      width: 200px;
      border-radius: 8px;
      font-size: 14px;
      line-height: 16px;
      content-visibility: auto;

      &:before {
        padding-top: 8px;
      }
    }

    .plus-icon {
      position: absolute;
      bottom: 6px;
      right: 7px;
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.7);
      padding: 4px;
    }
  }

  .title {
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

    &::first-letter {
      text-transform: uppercase;
    }
  }
`

export default Program
