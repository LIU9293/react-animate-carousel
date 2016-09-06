import React, { Component } from 'react';
import 'animate.css';
import './index.css';

const styles = {
  wapper: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden',
  },
  slide: {
    position: 'absolute',
  },
  bottom: {
    marginTop: '1px',
    marginBottom: '1px',
    display: 'block',
    position: 'relative',
  },
  thumbnail: {
    overflow: 'hidden',
    height: '150px',
    display: 'inline-block',
    position: 'relative',
  },
  main: {
    display: 'block',
    overflow: 'hidden',
    position: 'relative',
  },
  blackFilter: {
    backgroundColor: '#000',
    opacity: '0.6',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
  }
}

class AnimateCarousel extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      sliderCount: this.props.children.length,
      currentSlider: 0,
      appearType: 'fadeIn animated',
      disappearType: 'fadeOut animated',
      addonType: 'scaleIn',
    }
    this.config = {
      animateType: this.props.animateType || 'fade',
      autoplay: this.props.autoplay || 'true',
      speed: this.props.speed || 4000,
      thumbnail: this.props.thumbnail || 'true',
      height: this.props.height || '',
      width: this.props.width || '',
      addon: this.props.addon || '',
    }
    this.t = null;
    this.autoplay = this.autoplay.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
    this.goToSilde = this.goToSilde.bind(this);
  }

  componentDidMount(){
    if(this.config.autoplay || this.props.autoplay){
      this.t = setInterval(() => {
        this.autoplay()
      }, this.config.speed)
    };
    this.setupAnimateType(this.config.animateType);
    this.setupAddon(this.config.addon);
  }

  componentWillUnmount(){
    clearInterval(this.t);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.animateType !== this.props.animateType){
      this.setupAnimateType(nextProps.animateType);
    }
    if(nextProps.addon !== this.props.addon){
      this.setupAddon(nextProps.addon);
    }
  }

  setupAddon(addon){
    this.setState({
      addonType: addon
    })
  }

  setupAnimateType(type){
    let appearType, disappearType;
    switch (type) {
      case 'fade':
        appearType = 'fadeIn animated';
        disappearType = 'fadeOut animated';
        break
      case 'slide':
        appearType = 'slideInRight animated';
        disappearType = 'slideOutLeft animated';
        break
      case 'rotate':
        appearType = 'rotateInDownRight animated';
        disappearType = 'rotateOutDownLeft animated';
        break
      case 'flip':
        appearType = 'flipInX animated';
        disappearType = 'flipOutX animated';
        break
      case 'bounce':
        appearType = 'bounceIn animated';
        disappearType = 'bounceOut animated';
        break
      case 'zoom':
        appearType = 'zoomIn animated';
        disappearType = 'zoomOut animated';
        break
      default:
        appearType = 'fadeIn animated';
        disappearType = 'fadeOut animated';
    };
    this.setState({
      appearType: appearType,
      disappearType: disappearType
    })
  }

  autoplay(){
    if(this.state.currentSlider == this.state.sliderCount - 1){
      this.changeSlide(0);
    } else {
      this.changeSlide(this.state.currentSlider + 1);
    }
  }

  goToSilde(nextPage){
    clearInterval(this.t);
    setTimeout(()=>{
      this.changeSlide(nextPage);
      if(this.config.autoplay){
        this.t = setInterval(() => {
          this.autoplay()
        }, this.config.speed)
      }
    },50)
  }

  changeSlide(nextPage){
    let next = this.refs[nextPage];
    let current = this.refs[this.state.currentSlider];
    next.className = this.state.appearType;
    current.className = this.state.disappearType;
    let nextChild = next.childNodes[0];
    let currentChild = current.childNodes[0];
    nextChild.className = this.state.addonType;
    setTimeout(()=>{currentChild.className = ''}, 1000);
    /*console.log(next);
    const listener = () => {
      console.log('the animation is ended !');
      next.removeEventListener('animationend', listener)
    }
    next.addEventListener('animationend', listener)*/
    this.setState({
      currentSlider: nextPage
    })
  }

  render(){
    let thumbnails = null;
    if(this.props.thumbnail){
      thumbnails = this.props.children.map((item, ii)=>{
        let width = (100/(this.props.children.length)) + '%';
        if(ii !== 0){
          return(
            <a key={'thumbnail'+ii} onClick={()=>this.goToSilde(ii)}>
              <div style={{...styles.thumbnail, width: width}}>
                {item}
                <div style={styles.blackFilter} />
              </div>
            </a>
          )
        } else {
          return(
            <a key={'thumbnail'+ii} onClick={()=>this.goToSilde(ii)}>
              <div style={{...styles.thumbnail, width: width}}>
                {item}
                <div style={styles.blackFilter} />
              </div>
            </a>
          )
        }
      })
    }
    let slides = this.props.children.map((item, ii)=>{
      return(
        <div style={styles.slide} key={ii} ref={ii} className={ ii == 0 ? this.state.appearType : this.state.disappearType} >
          <div className={ ii == 0 ? this.state.addonType : ''}>
            {item}
          </div>
        </div>
      )
    })
    return(
      <div style={{...styles.wapper, ...this.props.style}} >
        <div style={{...styles.main, height: this.props.height || '600px'}}>
          {slides}
        </div>
        <div style={{...styles.bottom, display: thumbnails ? 'block' : 'none'}}>
          {thumbnails ? thumbnails : null }
        </div>
      </div>
    )
  }
}

module.exports = AnimateCarousel
