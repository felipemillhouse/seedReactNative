import React, { Component } from 'react';
import {
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import theme from 'theme';
import { Creators as userActions } from 'store/ducks/user';
import { Container, ViewContainer, PaperText } from './styles';

class SignIn extends Component {
  componentDidMount() {
    // nothing
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
              <StatusBar
                barStyle="dark-content"
                backgroundColor={theme.colors.darkBackground}
                hidden={false}
              />
              <ViewContainer>
                <Container>
                  <PaperText>SignInScreen</PaperText>
                </Container>
              </ViewContainer>
            </SafeAreaView>
          </ScrollView>
        </KeyboardAvoidingView>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = { ...userActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
