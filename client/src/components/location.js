import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  padding: 1rem;
  margin-bottom: 4rem;

  li {
    background: #ffffff;
    box-shadow: 0 6px 16px -6px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    list-style: none;
    margin: 0.7rem 0;
    color: #7a90a3;
    font-size: 1rem;
    padding: 1rem;
  }
`;

const Location = props => {
  return (
    <Wrapper>
      {props.locations.map(location => {
        return <li key={location}>{location}</li>;
      })}
    </Wrapper>
  );
};

export default Location;
