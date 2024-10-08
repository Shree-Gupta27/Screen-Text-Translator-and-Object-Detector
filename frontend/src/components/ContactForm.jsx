// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className=" contact-form-container container mt-5 " style={{color: "white"}}>
      <h2 className="mb-3" style={{fontSize: "1.6rem"}}>Contact Form</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label sty className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit" style={{    background: "#084244", marginBottom: "20px"}}>
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm