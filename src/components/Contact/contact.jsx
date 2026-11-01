import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact' id='contact'>

        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>

        <div className='contact-section'>

            <div className='contact-left'>

                <h1>Let's Talk</h1>

                <div className='contact-details'>

                    

                    <div className='contact-detail'>
                        <a
                            href="https://github.com/Maimuna-T"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/git.png" alt="GitHub" />
                        </a>

                        <span>GitHub Link</span>
                    </div>
                    <div className='contact-detail'>
                        
                        <img src='/email.png' alt='Email'/>
                        <p>maimunatabassum2003@gmail.com</p>
                    </div>

                    

                    <div className='contact-detail'>
                        <img src='/location.png' alt='Location'/>
                        <p>Uttara, Dhaka</p>
                    </div>

                    <div className='contact-detail'>
                        <img src='/phone.png' alt='Call'/>
                        <p>+8801894816802</p>
                    </div>

                </div>

            </div>

            <form action="" className='contact-right'>

                <label>Your Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                />

                <label>Your Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                />

                <label>Write your message here</label>

                <textarea
                    rows="8"
                    placeholder="Enter your message"
                    name="message"
                ></textarea>

                <button
                    type="submit"
                    className="contact-submit"
                >
                    Submit
                </button>

            </form>

        </div>

    </div>
  )
}

export default Contact