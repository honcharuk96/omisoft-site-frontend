import React, {Component} from 'react';
import axios from 'axios';

import  styles from './AboutInfo.scss';

class AboutInfo extends Component {

  state = {
    tags: [],
    news: [],
    currentTag: '',
    index: 0,
  }

  componentDidMount() {
    axios.get('http://ualegion.com:9999/api/v1/tags/all?lng=en').then(responce => {
      const currentTag = responce.data[this.state.index].tag_en,
            tags = responce.data;

        this.setState({
        tags,
        currentTag,
      });
      this.updateNews(currentTag);
    });

    setInterval(() => this.updateNews(this.state.tags[this.state.index].tag_en), 15000);
  }

  updateNews(tag) {
    console.log('NEWS UPDATING', tag);

    axios.get(`http://ualegion.com:9999/api/v1/blog/posts/tag?tag=${tag}&page=0&size=10`).then(responce => {
      this.setState({
        news: responce.data.content,
        index: this.state.index > this.state.tags.length - 2 ? 0 : this.state.index + 1,
        currentTag: tag,
      });
    });
  }

  render() {
    return (
    <div>
      <h3>We write about <b style={{
        backgroundColor: '#f77b62',
        color: 'white',
        padding: '5px',
        borderRadius: '5px',
      }}>{this.state.currentTag}</b></h3>
      <span>Leading digital agency with solid design and development expertise.<br/> We build mobile and web products for startups and design intricate.</span>
      <div style={{
        paddingTop: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}>
        
        {this.state.news.map((post, i) => { return i < 3 ? <div  style={{
          width: '20%'
        }}>
        <img style={{
          boxShadow: '0 12px 24px 0 #e2e8e8',
          width: '100%',
          borderRadius: '8px',
        }} src='http://wallpaperstock.net/macbook-on-table_wallpapers_33335_1920x1200.jpg' />
        <div
          style={{
            display: 'flex',
            flexDirection: "row",
          }}
        >{post.tags.map(tag => <h4
            style={{
              opacity: 0.5,
              marginRight: '20px',
              color: '#2f2f2f',
              fontFamily: 'Montserrat',
              fontWeight: 'normal',
              fontStyle: 'normal'
            }}
          >{`#${tag.tag_en}`}</h4>)}
        </div>
        <h2 style={{
          fontFamily: 'Montserrat',
          fontSize: '16px',
          marginTop: '-15px',
        }}>{post.title_en}</h2>
        {/* {JSON.stringify(post)} */}
        </div> : null })}
      </div>
    </div>
    )
  }
  
}
export default AboutInfo;