import React from 'react'

function Contact() {
    return (
        <div className='contactContainer'>
            <div className='section-heading'>
                Contact Us
            </div>
            <div className='contactSection'>
                <div className='contactDetails'>
                    <p className='contactRow'>
                        <div className='heading'>
                            Visit Us:
                        </div>
                        <div className='detail'>
                            123, ABC Tower, Lahore - Pakistan
                        </div>
                    </p>

                    <p className='contactRow'>
                        <div className='heading'>
                            Call Us:
                        </div>
                        <div className='detail'>
                            111 222 333
                        </div>
                    </p>

                    <p className='contactRow'>
                        <div className='heading'>
                            Email Us:
                        </div>
                        <div className='detail'>
                            foodiesnfoodies@mailservice.com
                        </div>
                    </p>

                </div>
                <div className='Map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1675066603198!5m2!1sen!2s" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact