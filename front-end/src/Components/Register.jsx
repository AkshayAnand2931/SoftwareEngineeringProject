import React,{useState} from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Register = () =>{
    const [formDetails,setFormDetails] = useState({
        EmployeeID:"",
        Name:"",
        EmailID:"",
        Password:"",
        PhoneNumber:"",
        Role:""
    });

    const handleChange = (e) => {
        setFormDetails({...formDetails,[e.target.name] : e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            //const response = await axios.post("http://localhost:5000",formDetails);
            console.log(formDetails);
        }
        catch(error){
            console.error(error);
        }
    };

    return(
        <Container>
            <h2 className="mt-5 mb-4">Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmployeeID">
                    <Form.Label>Employee ID:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Employee ID" name="EmployeeID" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" name="Name" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control type="email" placeholder="Enter your Email ID" name="EmailID" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" name="Password" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPhoneNumber">
                    <Form.Label>PhoneNumber:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" name="PhoneNumber" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicRole">
                    <Form.Label>Role:</Form.Label>
                    <Form.Control as="select" name="Role" onChange={handleChange} >
                        <option value="" disabled selected>Select a role</option>
                        <option value="Employee">Employee</option>
                        <option value="Floor Manager">Floor Manager</option>
                        <option value="Inventory Manager">Inventory Manager</option>
                    </Form.Control>
                </Form.Group>

                <Button variant='primary' type='submit' className='btn-large mt-3'>
                    Register
                </Button>
            </Form>
        </Container>
    );
}

export default Register;