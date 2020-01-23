import React, { useState } from "react";
import styled from "styled-components";
import Card from "./components/card";
import Location from "./components/location";
import { useApi } from "./container/useApi";
import SearchLocation from "./components/searchLocation";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const TopContainer = styled.div`
  background-image: linear-gradient(180deg, #fbb049 0%, #f57823 100%);
  width: auto;
  height: 20rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex-direction: column;

  .update-time {
    background: #ffb258;
    border-radius: 26px;
    color: white;
    padding: 0.6rem 1rem;
    width: max-content;
    height: max-content;
    font-size: 14px;
    font-weight: 500;
    margin-top: 1.5rem;
  }

  span {
    font-size: 2rem;
    margin: 2rem 0;
  }

  .high-line {
    /* font-family: MF-ShangYaNoncommercial-Regular; */
    font-size: 5rem;
    color: #ffffff;
    text-align: center;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
  }
`;

const H = styled.p`
  color: #cbd0d2;
  font-size: 14px;
  margin: 0 0 1rem 1rem;
  width: max-content;
`;

function App() {
  const [text, setText] = useState("");
  const [filterText, setFilterText] = useState([]);
  const data = useApi();

  // console.log(data);

  const search = e => {
    setText(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    const result = data.location.filter(word => !word.indexOf(text));
    setFilterText(result);
  };

  return (
    <div className='App'>
      <TopContainer>
        <p className='update-time'>{data.time}</p>
        <span role='img' aria-label='医生'>
          👨‍⚕️👩‍⚕️
        </span>
        <p className='high-line'>致敬!</p>
        <p>奋斗在一线的医护人员</p>
      </TopContainer>
      <H>全国新冠状病毒肺炎感染数据</H>
      {data ? (
        <CardContainer>
          <Card title='确诊病例' icon='😷' count={data.trend.diagnosis} />
          <Card title='疑似病例' icon='🤧' count={data.trend.suspected} />
          <Card title='治愈病例' icon='💖' count={data.trend.cured} />
          <Card title='死亡病例' icon='🎗' count={data.trend.deceased} />
        </CardContainer>
      ) : (
        <p>loading...</p>
      )}
      <Location
        locations={filterText.length === 0 ? data.location : filterText}
      />
      <form onSubmit={submit}>
        <label htmlFor='search-location' />
        <SearchLocation onSearch={search} text={text} />
      </form>
    </div>
  );
}

export default App;
