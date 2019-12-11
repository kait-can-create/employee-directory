import React, {useState, useEffect}  from 'react'
import Axios from 'axios'
import GridLine from './GridLine'

const Employees = () => {

  const [grid, setGrid] = useState([])
  const [company] = useState(localStorage.getItem('valueOfCompany'))
  // const [today, setToday] = useState(new Date())
  const [newEmployee, setEmployee] = useState({ firstName: '', lastName: '', birthday: '', hiredDate: '', isFullTime: true || false, profileImage: '', 
  jobTitle: '', jobDescription: '', ptoHours: '' , address: '', city: '', state: '', zip: '', phoneNumber: '', email: '', emergencyEmail: '', emergencyPhoneNumber: '',})
  const [employeeId, setEmployeeId] = useState([])

  const getGrid = async (company) => {
    const resp = await Axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/${company}/Employees`)
    setGrid(resp.data)
  }

  useEffect(() => {
    getGrid(company)
    // setToday(new Date())
  })

  const handleInputChange = event => {
    event.persist()
    setEmployee(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const createEmployee =  () => {
    // e.preventDefault()
     Axios.post(
        `https://sdg-staff-directory-app.herokuapp.com/api/${company}/Employees`, newEmployee, {timeout: 30000}
      ).then((response) => {
        console.log(response)
      }).catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        }
      }
    )
  }

  return (<>
    <ul className="employeesPageUl">
    <h1 className="companyHeader">{company} Employee Directory</h1>
    {grid.map(gridItem => {
      return (
        <GridLine 
          id = {gridItem.id}
          firstName = {gridItem.firstName}
          isFullTime = {gridItem.isFullTime}
          jobTitle = {gridItem.jobTitle}
          lastName = {gridItem.lastName}
          profileImage = {gridItem.profileImage}
        />
      )
    })}
      <form onSubmit={() => createEmployee()}>
      <section className="formCompanyName">
      <span>* Company Name: </span>
      <input
          placeholder="Company Name"
          value={company}
          name="companyName"
          type="text"
          onChange={() => {}}
          required
        />
        </section>
        <section className="formFirstName">
      <span>* First Name: </span>
        <input
          placeholder="First Name"
          value={newEmployee.firstName}
          name="firstName"
          type="text"
          onChange={(e) => handleInputChange(e)}
          required
        />
        </section>
        <section className="formLastName">
      <span>* Last Name: </span>
        <input
          placeholder="Last Name"
          value={newEmployee.lastName}
          name="lastName"
          type="text"
          onChange={(e) => handleInputChange(e)}
          required
        /></section>
          <section className="formFullTime">
      <span>* Full Time: </span> 
          <select
          name="isFullTime"
          value={newEmployee.isFullTime}
          type="text"
          onChange={() => handleInputChange}
        >
        <option value={true}>Yes</option>
        <option value={false}>No</option></select></section>
          <section className="formJobTitle">
      <span>* Job Title: </span>
        <input
          placeholder="Job Title"
          value={newEmployee.jobTitle}
          name="jobTitle"
          type="text"
          onChange={(e) => handleInputChange(e)}
          required
        /></section>
          <section className="formJobDescription">
       <span>* Job Description: </span>
         <input
           placeholder="Job Description"
           value={newEmployee.jobDescription}
           name="jobDescription"
           type="text"
           onChange={(e) => handleInputChange(e)}
           required
         /></section>
          <section className="formHiredDate">
          <span>Hired Date: </span>
        <input
          placeholder="Hired Date"
          value={newEmployee.hiredDate}
          name="hiredDate"
          type="date"
          min="1960-01-01" 
          onChange={() => handleInputChange}
        /></section>
      <section className="ptoHours">
      <span>PTO Hours: </span>
        <input
          placeholder="PTO Hours"
          value={newEmployee.ptoHours}
          name="ptoHours"
          type="text"
          onChange={() => handleInputChange}
        /></section>
        <section className="formProfileImage">
      <span>Profile Image: </span>
        <input
          placeholder="Profile Image Link"
          value={newEmployee.profileImage}
          name="profileImage"
          type="text"
          onChange={() => handleInputChange}
        /></section>
        <section className="formBirthday">
      <span>Birthday: </span>
        <input
          placeholder="Birthday"
          value={newEmployee.birthday}
          name="birthday"
          type="date"
          min="1920-01-01" max="2005-01-01"
          onChange={() => handleInputChange}
        /></section>
             <section className="formAddress">
      <span>Street Address: </span>
        <input
          placeholder="Street Address"
          value={newEmployee.address}
          name="address"
          type="text"
          onChange={() => handleInputChange}
        /></section>
        <section className="formCity">
      <span>City: </span>
        <input
          placeholder="City"
          value={newEmployee.city}
          name="city"
          type="text"
          onChange={() => handleInputChange}
        /></section>
             <section className="formState">
      <span>State: </span>
        <input
          placeholder="State"
          value={newEmployee.state}
          name="state"
          type="text"
          onChange={() => handleInputChange}
        /></section>
        <section className="formZipCode">
      <span>Zip Code: </span>
        <input
          placeholder="Zip Code"
          value={newEmployee.zip}
          name="zip"
          type="text"
          onChange={() => handleInputChange}
        /></section>
        <section className="formPhoneNumber">
      <span>Phone Number: </span>
        <input
          placeholder="Phone Number"
          value={newEmployee.phoneNumber}
          name="phoneNumber"
          type="text"
          onChange={() => handleInputChange}
        /></section>
        <section className="formEmail">
      <span>Email: </span>
        <input
          placeholder="Email"
          value={newEmployee.email}
          name="email"
          type="text"
          onChange={() => handleInputChange}
        /></section>
         <section className="formEmergencyEmail">
      <span>Emergency Email: </span>
        <input
          placeholder="Emergency Email"
          value={newEmployee.emergencyEmail}
          name="emergencyEmail"
          type="text"
          onChange={() => handleInputChange}
        /></section>
        <section className="formEmergencyPhoneNumber">
        <span>Emergency Phone Number: </span>
        <input
          placeholder="Emergency Phone Number"
          value={newEmployee.emergencyPhoneNumber}
          name="emergencyPhoneNumber"
          type="text"
          onChange={() => handleInputChange}
        /></section>
        <section className="formButton"><button className="addButton" type="submit">Add</button></section>
      </form>
    </ul>
    </>)
}

export default Employees
