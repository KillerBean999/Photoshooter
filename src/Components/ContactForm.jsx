import React from 'react'

export default function ContactForm() {

  //on Submit send the info to my mail
  return (
    <div className='contact-form'>
      <form>
      <label style={{color: 'black'}}>Contact Me Here</label>
        <input type="email" className="emal" placeholder='Email'/>
        <input type="text" className="name" placeholder='Private Name'/>
        <input type="text" className="description" placeholder='How Can I Help?'/>
        <button>Submit</button>
      </form>
    </div>
  )
}
