import React, { Component } from 'react';

import {
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {
  Image,
  TouchableOpacity,
  Spinner,
  View,
  Text,
} from '@shoutem/ui';

import ImageDetails from '../components/imageDetails';
import getApodJson from '../utils/nasaApi';

class ApodImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apodJson: {},
      loaded: false,
      imageFlex: 0.8,
      textFlex: 0.2,
    };

    this.render = this.render.bind(this);
    this._animateLayout = this._animateLayout.bind(this);
  }

  async componentWillMount() {
    let apodJson = await getApodJson();
    this.setState({
      apodJson: apodJson,
      loaded: true,
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
    if(!this.state.loaded)
      return(
        <View style={styles.spinner}>
          <Spinner style={{size: 'large', color: '#2c3e50'}}/>
          <Text styleName="md-gutter"> Please wait while we Load the Galaxy </Text>
        </View>
      );
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
            jsonApod = {this.state.apodJson || {}}
        />
      </TouchableOpacity>
    );
  }
}

const styles = {
  container:{
    flex: 1,
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default ApodImage;