import React, { useState } from 'react';
import {Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Login = () => {

  const[formDetails, setFormDetails] = useState({
    EmployeeID:"",
    Password:""
  });

  const handleChange = (e) => {
    setFormDetails({...formDetails,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{

      console.log(formDetails)
      //const response = await axios.post("http://localhost:5000",formDetails);
    }
    catch(error){
      console.error("Login Failed: ",error);
    }
  };

  return(
    <Container>
      <h2 className='mt-5 mb-4'>Login</h2>
      <Form onSubmit={handleSubmit}>

        <Form.Group controlId='formBasicID'>
          <Form.Label>Employee ID:</Form.Label>
          <Form.Control type='text' placeholder='Enter your Employee ID' name='EmployeeID' onChange={handleChange}></Form.Control>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password:</Form.Label>
          <Form.Control type='password' placeholder='Password' name='Password' onChange={handleChange}></Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit' className='btn-large mt-3'>
          Login
        </Button>

        <p className="mt-3">
          Don't have an account? <Link to="/register">Register Now</Link>
        </p>

      </Form>
    </Container>
  )
}

export default Login;
