import React from 'react';

import {
  auth,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { SignInContainer, SignInTitle, ButtonContainer } from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super();


    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
    } catch(error) {
      console.log(error.message);
    }

  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            label='email'
            required 
          />
          <FormInput 
            name='password' 
            type='password' 
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required 
          />
          <ButtonContainer>
            <CustomButton type='submit' value='Submit Form'>SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} value='Submit Form' isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
          </ButtonContainer>
        </form>

      </SignInContainer>
    )
  }
}


export default SignIn;
