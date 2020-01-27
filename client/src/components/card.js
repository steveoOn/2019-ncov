import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 22px;
  width: 166px;
  height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.06);

  .icon {
    font-size: 1.2rem;
    margin: 0;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 600;
    color: #102320;
    text-align: center;
  }

  h4 {
    margin: 0;
    color: #7a90a3;
    text-align: center;
    font-size: 14px;
  }
`;

const Card = props => {
  return (
    <Wrapper>
      <p className='icon'>{props.icon}</p>
      <p>{props.count}</p>
      <h4>{props.title}</h4>
    </Wrapper>
  );
};

export default Card;
