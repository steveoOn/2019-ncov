import React, { useState } from "react";
import styled from "styled-components";
import { useEventListener } from "../container/useEventListener";

const Wrapper = styled.ul`
  padding: 1rem;
  margin-bottom: 4rem;

  .li-fixed {
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

    &:first-child {
      position: fixed;
      top: 1rem;
    }

    p {
      padding-right: 0.4rem;
    }
  }

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
    }
  }
`;

const Location = props => {
  const [scrollY, setScrollY] = useState(0);

  const getScrollY = e => {
    setScrollY(window.scrollY);
  };

  useEventListener("scroll", getScrollY);

  return (
    <Wrapper>
      {props.locations.map(location => {
        return (
          <li
            key={location}
            dangerouslySetInnerHTML={{ __html: `${location}` }}
            className={scrollY > 745 ? "li-fixed" : "li-initial"}
          />
        );
      })}
    </Wrapper>
  );
};

export default Location;
