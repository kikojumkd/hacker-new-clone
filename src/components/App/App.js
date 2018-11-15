import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import List from 'components/List';
import { colorsDark, colorsLight } from 'styles/palette';
import Loader from 'components/Loader';

import { Wrapper, Title } from './styles';

class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({storyIds, page});
    }
  }

  render() {
    const { stories, hasMoreStories } = this.props;
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>// Hacker News Reader</Title>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStories}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible',
              }}
            >
              <List stories={stories} />
            </InfiniteScroll>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;