
import React, { Component } from 'react';

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
    this._swapLayout = this._swapLayout.bind(this);
  }

  _swapLayout(){
    this.setState({
      imageFlex: this.state.textFlex,
      textFlex: this.state.imageFlex,
    });
  }
  render() {
    return(
      <TouchableOpacity 
        style={styles.container} 
        styleName="rounded-corners"
        onPress={this._swapLayout}>
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
  image: {
    flex:0.8,
  },
  textContainer:{
    flex: 0.2,
  },
};

export default ApodImage;