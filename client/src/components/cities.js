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
        color: #ec51cb;
      }
      &:nth-child(3) {
        color: #19c394;
      }
      &:nth-child(4) {
        color: #999;
      }
    }
  }
`;

const City = props => {
  return (
    <Wrapper>
      {props.cities.map(city => {
        const positiveCurrentConfirmedCount =
          city.currentConfirmedCount > 0 ? city.currentConfirmedCount : 0;

        return (
          <li key={city.cityName} className='li-city'>
            {city.cityName}
            <p>: 现存{positiveCurrentConfirmedCount}</p>
            <p>累计{city.confirmedCount}</p>
            <p>治愈{city.curedCount}</p>
            <p>死亡{city.deadCount}</p>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default City;
