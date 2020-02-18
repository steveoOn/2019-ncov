import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;

  .img-wrapper {
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 14px;
    color: #bbb;
    margin-bottom: 0.5rem;
  }
`;

const Chart = ({ chartImg, title }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      {chartImg.map(({ imgUrl }) => {
        return <img className='img-wrapper' src={imgUrl} width={350} />;
      })}
    </Wrapper>
  );
};

export default Chart;
