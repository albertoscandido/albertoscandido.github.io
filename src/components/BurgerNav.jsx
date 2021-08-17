import React, { useState } from 'react'
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledDiv = styled.div`
  width: 2rem;
  height: 2rem;
  // position: fixed;
  top: 0.75rem;
  right: 1rem;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#9A03FC' : 'white'};
    border-radius: 0.25rem;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
    }

    &:nth-child(2) {
      transform: ${({open}) => open ? 'translate(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }

  }
`;

const BurgerNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledDiv open={ open } onClick={ () => setOpen(!open) }>
        <div />
        <div />
        <div />
      </StyledDiv>
      <RightNav open={ open } setOpen={ setOpen }/>
    </>
  )
}

export default BurgerNav