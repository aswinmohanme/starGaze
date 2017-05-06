
import { StackNavigator } from 'react-navigation';

import ApodImageScreen from './containers/apodImageScreen';

const App = StackNavigator({
    ApodImage: {screen: ApodImageScreen}
  },{
    navigationOptions: {
      header: null,
    },
  }
);

export default App;