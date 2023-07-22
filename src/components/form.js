import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';


export const FormEmail = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }
  
    console.log(formData);
  
      setFormData({
        name: '',
        email: '',
        message: '',
      });
  
      setErrors({});
    };
  
    
    return (
     <div>
         <h2 className="contact-us-title text-center font-weight-bold mt-5">Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mx-auto col-5" controlId="formBasicName">
            <Form.Label className='mx-auto'>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
          </Form.Group>
    
          <Form.Group className="mx-auto col-5" controlId="formBasicEmail">
            <Form.Label className='mx-auto'>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
    
          <Form.Group className="mx-auto col-5" controlId="formBasicMessage">
            <Form.Label className='mx-auto'>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </Form.Group>
    
        <div className="submit-button-container text-center mt-2">
        <Button variant="primary" type="submit" className="submit-button mb-3">
          Submit
        </Button>
        </div>
        </Form>
    </div>
    );
    
}

