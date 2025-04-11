import React, { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [errors, setErrors] = useState({});

  const validate =() =>{
    const newErrors ={};
    if(!formData.name.trim()) newErrors.name= "Name is Required";

    if(!formData.email.trim()){
      newErrors.email = "Email is required";
    }else if(!/^\S+@\S+\.\S+$/.test(formData.email)){
      newErrors.email = "Invalid email address";
    }

    if(!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChanges = (e) =>{
    setFormData({...formData, [e.target.name] : e.target.value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(validate()){
      console.log("Form Submitted:", formData);
      alert("Form Submitted Successfully!");
      setFormData({name: "", email: "", message: ""});
      setErrors({});
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen  p-4'>
      <form 
        onSubmit={handleSubmit}
        className='w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl hover:shadow-orange-300 transition-all duration-500 space-y-6'
      >
      <h2 className='text-3xl font-bold text-center text-gray-800'>Contact Us</h2>

      {/* Name field */}
      <div className='flex flex-col space-y-2'>
        <label htmlFor="name" className='text-sm font-semibold text-gray-700'>Name</label>
        <input 
          type="text"
          id='name'
          name='name'
          placeholder='Your Name' 
          onChange={handleChanges}
          value={formData.name}
          className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-300" : "focus:ring-orange-300"}`}
        />
        {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
      </div>

      {/* email field */}
      <div className='flex flex-col space-y-2'>
        <label htmlFor="Email" className='text-sm font-semibold text-gray-700'>Email</label>
        <input 
          type="text"
          id='email'
          name='email'
          placeholder='You@example.com' 
          onChange={handleChanges}
          value={formData.email}
          className={`border p-3 rounded-lg focus:outline-none focus:ring-2 ${
            errors.email ? "border-red-500 focus:ring-red-300" : "focus:ring-orange-300"
          }`}
        />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
      </div>

      {/* Message field */}
      <div className='flex flex-col space-y-2'>
        <label htmlFor="message" className='text-sm font-semibold text-gray-700'>Messages</label>
        <textarea 
          name="message" 
          id="message"
          placeholder='Your Message'
          rows="4"
          onChange={handleChanges}
          value={formData.message}
          className={`border p-3 rounded-lg focus:outline-none focus:ring-2 resize-none ${
            errors.message ? "border-red-500 focus:ring-red-300" : "focus:ring-orange-300"
          }`}
        ></textarea>
        {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
      </div>

      {/* Submit button */}
      <button 
        type='submit'
        className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300'
      >
        Send Message
      </button>
      </form>
    </div>
  )
}

export default Contact
