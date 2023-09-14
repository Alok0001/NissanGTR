import React, { useState } from 'react';

function ContactUs() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`We will contact you at ${email}`);
    setEmail('');
  };

  return (
    <div className="ContactUs">
      <h2>Contact Us</h2>
      <p>Have any queries?</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>We will contact you at {email}</p>
    </div>
  );
}

export default ContactUs;
