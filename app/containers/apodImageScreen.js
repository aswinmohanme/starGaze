import React, { Component } from 'react';

import {
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {
  Image,
  TouchableOpacity,
} from '@shoutem/ui';

import ImageDetails from '../components/imageDetails';

class ApodImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFlex: 0.8,
      textFlex: 0.2
    };

    this.render = this.render.bind(this);
    this._animateLayout = this._animateLayout.bind(this);
  }

  _animateLayout(){
    // SetUp for Android Permissions
    UIManager.setLayoutAnimationEnabledExperimental && 
    UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      imageFlex: this.state.textFlex,
      textFlex: this.state.imageFlex,
    });
  }

  render() {
    return(
      <TouchableOpacity 
        style={styles.container} 
        onPress={this._animateLayout}>
        <Image 
          source={{uri: 'https://apod.nasa.gov/apod/image/1705/STSCI-HST-abell370_1797x2000.jpg'}}
          style={{flex: this.state.imageFlex}}
        />
        <ImageDetails 
            style={{flex: this.state.textFlex}}
            title="Awesome Title"
            description="Awesome Description"
        />
      </TouchableOpacity>
    );
  }
}

const styles = {
  container:{
    flex: 1,
  },
};

export default ApodImage;