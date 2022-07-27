import React, {useState} from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    city: "",
    state: "",
    oid: "",
    retURL: ""

  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const requestOptions = {
    method: 'POST',
    mode: 'no-cors'
  }

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  }

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  }

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  }

  const handleCompanyInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      company: event.target.value,
    }));
  }

  const handlePhoneInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      phone: event.target.value,
    }));
  }

  const handleCityInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      city: event.target.value,
    }));
  }

  const handleStateInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      state: event.target.value,
    }));
  }

  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email && values.company && values.phone && values.state) {
        setValid(true);
        values.oid = document.getElementsByName('oid')[0].defaultValue;
        values.retURL = document.getElementsByName('retURL')[0].defaultValue;

    }
    setSubmitted(true);
    }

    fetch(`https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=${values.oid}&retURL=${values.retURL}&first_name=${values.firstName}&last_name=${values.lastName}&company=${values.company}&city=${values.city}&email=${values.email}&phone=${values.phone}&=state=${values.state}`,
    requestOptions
    )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));


  return (
    <div className="form-container">
      
      <form className="register-form" onSubmit={handleSubmit}>
      {submitted && valid ? <div className="success-message">Success! Thank you for submitting. </div> : null}

      <input type="hidden" name="oid" value="00D8Z000001uRTB"></input>
      <input type="hidden" name="retURL" value="http://hover.to"></input>
      
        <input
          value={values.firstName}
          onChange={handleFirstNameInputChange}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName" />
          {submitted && !values.firstName ? <span>Please enter a first name</span> : null }
          
        <input
          value={values.lastName}
          onChange={handleLastNameInputChange}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span>Please enter a last name</span> : null }

        <input
          value={values.email}
          onChange={handleEmailInputChange}
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter an email</span> : null }

        <input
          value={values.company}
          onChange={handleCompanyInputChange}
          id="company"
          className="form-field"
          type="text"
          placeholder="Company"
          name="company" />
          {submitted && !values.company ? <span>Please enter a company</span> : null }

          <input
          value={values.phone}
          onChange={handlePhoneInputChange}
          id="phone"
          className="form-field"
          type="number"
          placeholder="Phone Number"
          name="phone"
          minLength="7"
          maxLength="10" />
          {submitted && !values.phone ? <span>Please enter a valid phone number</span> : null }

          <input
          value={values.city}
          onChange={handleCityInputChange}
          id="city"
          className="form-field"
          type="text"
          placeholder="City"
          name="city" />
          

          <input
          value={values.state}
          onChange={handleStateInputChange}
          id="state"
          className="form-field"
          type="text"
          placeholder="State"
          name="state" />
          {submitted && !values.firstName ? <span>Please enter a state</span> : null }
          
          
        
        <button className="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
