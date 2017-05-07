
import React, { Component } from 'react';

import {
  Image,
  View,
} from '@shoutem/ui';

import ImageDetails from '../components/imageDetails';


class ApodImage extends Component {
  render() {
    return(
      <View style={styles.container} styleName="rounded-corners">
        <Image 
          source={{uri: 'https://apod.nasa.gov/apod/image/1705/STSCI-HST-abell370_1797x2000.jpg'}}
          style={styles.image}
        />
        <ImageDetails 
            style={styles.textContainer}
            title="Awesome Title"
            description="Awesome Description"
        />
      </View>
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