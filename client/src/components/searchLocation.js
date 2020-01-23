import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  #search-location {
    padding: 1rem;
    border-radius: 12px;
    border-style: none;
    outline: none;
    font-size: 1rem;
    position: fixed;
    z-index: 9999;
    bottom: 1.5rem;
    left: 25%;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.07);
    background: rgba(245, 120, 35, 0.7);
    color: white;
    backdrop-filter: blur(8px);

    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const SearchLocation = props => {
  return (
    <Wrapper>
      <input
        type='text'
        id='search-location'
        value={props.text}
        placeholder='查找你所在的省份'
        onChange={props.onSearch}
      />
    </Wrapper>
  );
};

export default SearchLocation;
