import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  .li-city {
    background: #ffffff;
    box-shadow: 0 6px 16px -6px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    list-style: none;
    margin: 0.7rem 0 0.7rem 1rem;
    color: #7a90a3;
    font-size: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;

    p {
      padding-right: 0.4rem;

      &:nth-child(1) {
        color: #098ff1;
      }
      &:nth-child(2) {
        color: #ff821d;
      }
      &:nth-child(3) {
        color: #06d78c;
      }
      &:nth-child(4) {
        color: #ff3768;
      }
    }
  }
`;

const City = props => {
  return (
    <Wrapper>
      {props.cities.map(city => {
        return (
          <li key={city.cityName} className='li-city'>
            {city.cityName}
            <p>: 确诊{city.confirmedCount}</p>
            <p>治愈{city.curedCount}</p>
            <p>死亡{city.deadCount}</p>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default City;
