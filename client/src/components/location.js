import React, { useState } from "react";
import styled from "styled-components";
import { useEventListener } from "../container/useEventListener";
import City from "./cities";

const Wrapper = styled.ul`
  padding: 1rem;
  margin-bottom: 4rem;

  .li-initial {
    background: #ffffff;
    box-shadow: 0 6px 16px -6px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    list-style: none;
    margin: 0.7rem 0;
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

const Location = props => {
  const [scrollY, setScrollY] = useState(0);
  const [isListOpen, setIsListOpen] = useState(false);

  const extendList = e => {
    // console.log(e.target.children);
    setIsListOpen(!isListOpen);
  };

  const getScrollY = e => {
    setScrollY(window.scrollY);
  };

  useEventListener("scroll", getScrollY);

  return (
    <Wrapper>
      {props.locations.map(location => {
        return (
          <React.Fragment key={location.provinceShortName}>
            <li
              key={location.provinceShortName}
              className='li-initial'
              onClick={extendList}
            >
              {location.provinceName}
              <p>: 确诊{location.confirmedCount}</p>
              <p>疑似{location.suspectedCount}</p>
              <p>治愈{location.curedCount}</p>
              <p>死亡{location.deadCount}</p>
            </li>
            {isListOpen && <City cities={location.cities} />}
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

export default Location;
