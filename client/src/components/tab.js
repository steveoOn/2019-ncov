import React from "react";
import styled from "styled-components";

const TabWrapper = styled.div`
  width: 188px;
  margin: 0 auto 1rem auto;
  display: flex;
  justify-content: space-evenly;

  button {
    padding: 8px 14px;
    background: #f1f1f1;
    color: #666;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    outline: none;

    :hover {
      cursor: pointer;
    }
  }
  button.active {
    background: #fff;
    color: #666;
    box-shadow: 0 5px 11px -2px rgba(0, 0, 0, 0.08);
  }
`;

const Tab = ({ onClick, tabName }) => {
  return (
    <TabWrapper>
      <button
        className={tabName === "data" ? "active" : ""}
        onClick={onClick.bind(this, "data")}
      >
        数据
      </button>
      <button
        className={tabName === "chart" ? "active" : ""}
        onClick={onClick.bind(this, "chart")}
      >
        图表
      </button>
    </TabWrapper>
  );
};

export default Tab;
