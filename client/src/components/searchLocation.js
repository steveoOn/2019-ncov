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
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.6);
    color: #102320;
    backdrop-filter: blur(5px);

    ::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
    &:focus {
      outline: 1px solid #098ff1;
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
        placeholder='搜索省份或直辖市名称'
        onChange={props.onSearch}
      />
    </Wrapper>
  );
};

export default SearchLocation;
