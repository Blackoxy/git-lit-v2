import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import Submit from './Submit.js'

class SignUp extends Component{
  constructor(props){
    super(props);

    this.state={
      firstname:'',
      lastname:'',
      email:'',
      username:'',
      password:'',
      confirm:'',
         }
  }



  render(){
  return(
    <div>
    <Segment inverted>
        <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name'
                onChange={event =>this.setState({firstname: event.target.value})} />
                <Form.Input fluid label='Last name' placeholder='Last name'
                onChange={event =>this.setState({lastname: event.target.value})} />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input type="email" label='Email' placeholder='joe@schmoe.com'
                onChange={event =>this.setState({email: event.target.value})} />
                <Form.Input label='UserName' placeholder='joe89'
                onChange={event =>this.setState({username: event.target.value})} />

            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input type="password" label='Password' placeholder='Password'
                onChange={event =>this.setState({password: event.target.value})} />
                <Form.Input type="password" label='Confirm Password' placeholder='Password'
                onChange={event =>this.setState({confirm: event.target.value})} />
            </Form.Group>
            <Submit />
            <Button type='submit'>Submit</Button>
        </Form>
    </Segment>
    <div className='test'>
    <p>firstname: {this.state.firstname}</p>
    <p>lastname:{this.state.lastname}</p>
    <p>email: {this.state.email}</p>
    <p>username:{this.state.username}</p>
    <p>password:{this.state.password}</p>
    <p>confirm: {this.state.confirm}</p>

    </div>
    </div>
)}};
export default SignUp;
