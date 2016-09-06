import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AnimateCarousel from '../index';

const styles = {
  wapper: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'table',
  },
  container: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  slider: {
    height: '300px',
    width: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  ratioBox: {
    width: '600px',
    height: '60px',
    margin: 'auto',
    paddingTop: '10px',
    lineHeight: '50px',
    color: '#999'
  },
}

const types = ['fade', 'slide', 'rotate', 'flip', 'bounce', 'zoom'];
const addon = ['', 'scaleIn', 'scaleOut', 'blur'];

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      animateType: 'fade',
      addon: '',
    }
  }

  changeAnimationType(type){
    this.setState({animateType: type});
  }

  changeAddonType(type){
    this.setState({addon: type});
  }

  render(){
    let typeRatios = types.map( (item, ii) => {
      let width = (600/types.length - 2) + 'px';
      return(
        <a key={item} >
          <div className={(item == this.state.animateType) ? 'ratio selected' : 'ratio'} style={(ii!==0) ? {width: width, marginLeft: '-1px'} : {width: width}} onClick={this.changeAnimationType.bind(this,item)} >
            {item}
          </div>
        </a>
      )
    })
    let addonRatios = addon.map( (item, ii) => {
      let width = (600/addon.length - 2) + 'px';
      return(
        <a key={item}>
          <div className={(item == this.state.addon) ? 'ratio selected' : 'ratio'} style={(ii!==0) ? {width: width, marginLeft: '-1px'} : {width: width}} onClick={this.changeAddonType.bind(this,item)} >
            {item == '' ? 'nothing' : item}
          </div>
        </a>
      )
    })
    return(
      <div style={styles.wapper}>
        <div style={styles.container}>
          <h1 className="bigTitle" style={{marginBottom:'20px'}}>react-animate-carousel</h1>
          <p className="description">just another react component on top of <a href="https://daneden.github.io/animate.css/">animate.css</a></p>
          <AnimateCarousel animateType={this.state.animateType} addon={this.state.addon} thumbnail={false} height='300px' style={{width:'600px', margin: 'auto'}} >
            <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/1.jpg' +')'}} />
            <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/2.jpg' +')'}} />
            <div style={{...styles.slider, backgroundImage: 'url('+ 'http://img.careerfore.com/3.jpg' +')'}} />
          </AnimateCarousel>
          <p className="pclass" style={{marginTop:'20px'}}> animation type | 变换类型</p>
          <div style={styles.ratioBox}>
            {typeRatios}
          </div>
          <p className="pclass"> addon animation | 添加效果</p>
          <div style={styles.ratioBox}>
            {addonRatios}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
