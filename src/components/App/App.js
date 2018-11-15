import React, { Component } from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import List from 'components/List';
import { colorsDark, colorsLight } from 'styles/palette';

import { Wrapper, Title } from './styles';

class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }

  render() {
    const { stories } = this.props;
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>// Hacker News Reader</Title>
            <List stories={stories} />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;