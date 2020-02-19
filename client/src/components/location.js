import React, { useState } from "react";
import styled from "styled-components";
import Collapse, { Panel } from "rc-collapse";
import City from "./cities";

const Wrapper = styled(Collapse)`
  padding: 1rem;
  margin-bottom: 4rem;

  .provinces {
    background: #ffffff;
    box-shadow: 0 6px 16px -6px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    color: #7a90a3;
    margin: 0.7rem 0;
    font-size: 1rem;
    padding: 1rem;
    outline: none;

    .arrow {
      ::after {
        content: "👉";
      }
    }
  }
`;

const Location = props => {
  const [activeKey, setActiveKey] = useState(["0"]);

  return (
    <Wrapper
      activeKey={activeKey}
      onChange={activeKey => {
        setActiveKey(activeKey);
      }}
      destroyInactivePanel
    >
      {props.locations.map((location, index) => {
        return (
          <Panel
            key={index}
            header={`${location.provinceName}: 现存${location.currentConfirmedCount} 累计${location.confirmedCount} 治愈${location.curedCount} 死亡${location.deadCount}`}
            headerClass='provinces'
            showArrow
          >
            <City cities={location.cities} />
          </Panel>
        );
      })}
    </Wrapper>
  );
};

export default Location;
