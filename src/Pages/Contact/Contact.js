import React from 'react'
import './Contact.css'

const Contact = () => {
return (
    <div className="container contact" id='contact'>
        <div className="row contact--row">
            <p className='contact--header'>Contact Me</p>
            <p className='contact--text'>Feel free to Contact me by submitting the 
            form below and I will get back to you as soon as possible</p>
        </div>
        <div className="card contact--card">
            <div className="input mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' id="name" />
            </div>
            <div className="input mb-3">
                <label htmlFor="email">Email</label>
                <input type="text" className='form-control' id="email" />
            </div>
            <div className="input mb-3">
                <label htmlFor="message">Message</label>
                <textarea cols={5} rows={5} type="text" className='form-control' id="message" />
            </div>
            <div className="button">
                <button className='btn btn-primary' >Send</button>
            </div>
        </div>

    </div>

)
}

export default Contact