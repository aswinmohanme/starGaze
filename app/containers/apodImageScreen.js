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
import getApodJson from '../utils/nasaApi';

class ApodImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apodJson: {},
      imageFlex: 0.8,
      textFlex: 0.2
    };

    this.render = this.render.bind(this);
    this._animateLayout = this._animateLayout.bind(this);
  }

  async componentWillMount() {
    let apodJson = await getApodJson();
    this.setState({
      apodJson: apodJson
    });
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
          source={{uri: this.state.apodJson.url || ''}}
          style={{flex: this.state.imageFlex}}
        />
        <ImageDetails 
            style={{flex: this.state.textFlex}}
            title={this.state.apodJson.title || ''}
            description={this.state.apodJson.explanation || ''}
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