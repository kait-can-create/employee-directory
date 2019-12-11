import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Companies = () => {

  const [company, setcompany] = useState(localStorage.getItem('valueOfCompany'))

  useEffect(() =>
  {
    localStorage.setItem('valueOfCompany', company)
  }, [company])


  const onChange = event => {
    setcompany(event.target.value)
  }


  return (
    <>
    <section className="companyName">
    <input className="company" placeholder="Enter your Company Name" value={company} onChange={onChange}/>
    <Link to="/Employees" className="btn btn-primary">Submit</Link>
    </section>
    </>)
}

export default Companies
