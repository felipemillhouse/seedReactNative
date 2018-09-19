import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import SignIn from 'views/signIn';
import theme from 'theme/light';

class Route extends Component {
  nothing = () => {
    // nothing
  };

  render() {
    // Routes
    const Routes = createStackNavigator(
      {
        SignIn,
      },
      {
        navigationOptions: {
          header: null,
        },
      },
    );
    return (
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    );
  }
}

// export default Routes;
/*const mapStateToProps = state => ({
  themeReducer: state.theme,
});*/

export default connect(
  null,
  null,
)(Route);
