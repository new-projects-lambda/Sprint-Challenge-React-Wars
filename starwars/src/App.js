import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Display from './components/Display';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState();
  const StyledApp = styled.div`
    background: #00000099;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Container = styled.div`
    width: 80%;
    margin: 30px auto;
  `;
  const StyledH1 = styled.h1`
    color: #4488aa;
  `;
  const fetchData = () => {
    axios.get(
      'https://swapi.co/api/people/'
    )
      .then(res => {
        setData(res.data.results)
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!data) return <h3>Loading Data</h3>;
  return (
    <Container>
      <StyledApp>
        <StyledH1 className="Header">React Wars</StyledH1>
        {data.map(res => <Display data={res} key={res.name} />)}
      </StyledApp>
    </Container>
  );
}

export default App;
