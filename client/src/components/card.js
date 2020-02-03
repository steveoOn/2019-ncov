import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 22px;
  width: 166px;
  height: 102px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.06);

  .icon {
    font-size: 1.2rem;
    margin: 0;
  }

  .count {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 600;
    color: #102320;
    text-align: center;
  }

  .incr {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: #a2a2a2;
    margin-bottom: 0.2rem;

    p {
      font-size: 14px;
      color: #fe3535;
      text-align: center;
    }
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
      <p className='count'>{props.count}</p>
      <div className='incr'>
        较昨日
        <p>+{props.incr}</p>
      </div>
      <h4>{props.title}</h4>
    </Wrapper>
  );
};

export default Card;
