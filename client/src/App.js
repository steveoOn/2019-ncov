import React, { useState } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import Card from "./components/card";
import Location from "./components/location";
import { useApi } from "./container/useApi";
import { ReactComponent as IconCors } from "./static/icon-cors.svg";
import SearchLocation from "./components/searchLocation";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const TopContainer = styled.div`
  background-image: linear-gradient(180deg, #ff6565 0%, #fe3535 100%);
  width: auto;
  height: 20rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex-direction: column;

  .time-container {
    display: flex;
    margin-top: 1rem;
    padding: 0.6rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 26px;
    align-items: center;

    p {
      color: white;
      font-size: 13px;
      font-weight: 500;
    }
  }

  .update-time {
    color: white;
    width: max-content;
    height: max-content;
    font-size: 14px;
    font-weight: 500;
  }

  .high-line {
    /* font-family: MF-ShangYaNoncommercial-Regular; */
    font-size: 106px;
    color: rgba(255, 255, 255, 0.86);
    text-shadow: 0 6px 16px rgba(180, 0, 0, 0.64);
    text-align: center;
    margin-top: 1.5rem;
    z-index: 1;
  }

  .icon-cors {
    position: absolute;
    top: 4.5rem;
    z-index: 0;
  }

  .slogan {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.86);
    text-align: center;
    text-shadow: 0 6px 16px rgba(180, 0, 0, 0.64);
    z-index: 1;
    margin-top: 1.8rem;
  }

  .provider {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.55);
    text-align: center;
    z-index: 1;

    a {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.55);
      text-align: center;
    }
  }
`;

const H = styled.p`
  color: #cbd0d2;
  font-size: 14px;
  margin: 0 0 1rem 1rem;
  width: max-content;
`;

const Loading = styled.p`
  text-align: center;
  margin: 1rem 0;
  color: rgba(0, 0, 0, 0.4);
`;

function App() {
  const [text, setText] = useState("");
  const [filterText, setFilterText] = useState([]);

  const { data } = useApi("/ncov/api", null);
  const location = useApi("/ncov/api/location", []);

  const time = data ? new Date(data.modifyTime) : "--";

  const search = e => {
    setText(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    // const result = data.location.filter(word => !word.indexOf(text));

    const result = location.data.filter(result => {
      // console.log(result.provinceShortName);
      return !result.provinceShortName.indexOf(text);
    });

    setFilterText(result);
  };

  return (
    <div className='App'>
      <TopContainer>
        <div className='time-container'>
          <p>最后更新于：</p>
          <Moment className='update-time' format='YYYY/MM/DD kk:mm:ss'>
            {time}
          </Moment>
        </div>
        <p className='high-line'>致敬</p>
        <p className='slogan'>
          奋斗在一线的医护人员
          <span role='img' aria-label='医生'>
            👨‍⚕️👩‍⚕️
          </span>
        </p>
        <p className='provider'>
          Designed by 💜
          <a
            href='https://siwen.site/about'
            target='_blank'
            rel='noopener noreferrer'
          >
            siwen.site
          </a>
        </p>
        <IconCors className='icon-cors' />
      </TopContainer>
      <H>感谢丁香园-丁香医生数据提供</H>
      <CardContainer>
        <Card
          title='确诊病例'
          icon='😷'
          count={data ? data.confirmedCount : "..."}
        />
        <Card
          title='疑似病例'
          icon='🤧'
          count={data ? data.suspectedCount : "..."}
        />
        <Card
          title='治愈病例'
          icon='💖'
          count={data ? data.curedCount : "..."}
        />
        <Card title='死亡病例' icon='🎗' count={data ? data.deadCount : "..."} />
      </CardContainer>
      {!location.loading ? (
        <Location
          locations={filterText.length === 0 ? location.data : filterText}
        />
      ) : (
        <Loading>正在获取数据...</Loading>
      )}
      <form onSubmit={submit}>
        <label htmlFor='search-location' />
        <SearchLocation onSearch={search} text={text} />
      </form>
    </div>
  );
}

export default App;
