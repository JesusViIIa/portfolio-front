import React from 'react'
import Swal from 'sweetalert2'

export const Contact = () => {
const handleSubmit =(e )=>{
  e.preventDefault()
  Swal.fire('Nothing here','I´m still working on it, if you want to communicate use whatsapp', 'info')
  console.log(e.target)

}

  return (
    <div id="contact" className="text-center">
  <div className="container">
    <div className="section-title center">
      <h2>Get In Touch</h2>
      <hr/>
    </div>
    <div className="col-md-8 col-md-offset-2">
      <form onSubmit={handleSubmit} name="sentMessage" id="contactForm" noValidate>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" id="name" className="form-control" placeholder="Name" required="required"/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
          <p className="help-block text-danger"></p>
        </div>
        <div id="success"></div>
        <button type="submit" className="btn btn-default btn-lg">Send Message</button>
      </form>
      <div className="social">
        <ul>
          <li><a href="https://wa.me/522491787510?text=Buenos%20dias%2C%20Tienes%20tiempo%20para%20platicar%3F"><i className="fa fa-whatsapp"></i></a></li>
          <li><a href="https://www.linkedin.com/in/jos%C3%A9-jes%C3%BAs-villa-arreola-8339a6205/"><i className="fa fa-linkedin"></i></a></li>
          <li><a href="https://github.com/JesusViIIa/"><i className="fa fa-github"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
  )
}
