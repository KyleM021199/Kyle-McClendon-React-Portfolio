//need a react form for the contact section
import { useState } from "react";
import {validateEmail} from "../../helper/confirmEmail";
    function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    
    const handleInputChange = (e) =>{
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        
        if(inputType === 'name'){
            setName(inputValue);
        } else if(inputType === 'email'){
            setEmail(inputValue);
        }else{
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        
        if(!validateEmail(email)){
            setError('Email is invalid');
            return;
        }
        if(message === ''){
            setError('A message is required');
            return;
        }
        
        setName('');
        setEmail('');
        setMessage('');
        setError('');

    };
    
    return (
      <div>
        <h2>Contact Page</h2>
        <form className="contact-form" onSubmit={handleFormSubmit}>
        Name:
        <input className="form-item"
        value={name}
        name = "name"
        onChange={handleInputChange}
        type="text"
        placeholder="Your Name"
        />
        Email:
        <input
        className="form-item"
        value={email}
        name = "email"
        onChange={handleInputChange}
        type="text"
        placeholder="Your Email"
        />
        Message:
        <input
        className="form-item"
        value={message}
        name = "message"
        onChange={handleInputChange}
        type="text"
        placeholder="Your Message"
        />
        
        <button type="submit">
            Submit
        </button>
        </form>
        {error && (
        <div>
          <p className="error-text">{error}</p>
        </div>
      )}
      </div>
    );
  }
export default Contact;