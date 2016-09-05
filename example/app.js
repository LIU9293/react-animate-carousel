import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AnimateCarousel from '../index';

const styles = {
  wapper: {
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center',
  },
  slider: {
    height: '300px',
    width: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }
}

class App extends Component{
  render(){
    return(
      <div style={styles.wapper}>
        <h3 style={{marginTop:'50px'}}>fade效果</h3>
        <AnimateCarousel animateType='fade' thumbnail={false} height='300px' style={{marginTop:'20px'}} >
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/1.jpg' +')'}} />
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/2.jpg' +')'}} />
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/3.jpg' +')'}} />
        </AnimateCarousel>
        <h3 style={{marginTop:'50px'}}>rotate效果</h3>
        <AnimateCarousel animateType='rotate' thumbnail={false} height='300px' style={{marginTop:'20px'}} >
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/1.jpg' +')'}} />
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/2.jpg' +')'}} />
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/3.jpg' +')'}} />
        </AnimateCarousel>
        <h3 style={{marginTop:'50px'}}>flip效果</h3>
        <AnimateCarousel animateType='flip' thumbnail={false} height='300px' style={{marginTop:'20px'}} >
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/1.jpg' +')'}} />
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/2.jpg' +')'}} />
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/3.jpg' +')'}} />
        </AnimateCarousel>
        <h3 style={{marginTop:'50px'}}>bounce效果</h3>
        <AnimateCarousel animateType='bounce' thumbnail={false} height='300px' style={{marginTop:'20px'}} >
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/1.jpg' +')'}} />
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/2.jpg' +')'}} />
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/3.jpg' +')'}} />
        </AnimateCarousel>
        <h3 style={{marginTop:'50px'}}>zoom效果</h3>
        <AnimateCarousel animateType='zoom' thumbnail={false} height='300px' style={{marginTop:'20px'}} >
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/1.jpg' +')'}} />
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/2.jpg' +')'}} />
          <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/3.jpg' +')'}} />
        </AnimateCarousel>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
