import React from 'react';
import {Link} from 'react-router-dom'


const GridLine = props => {
  return (
    <li className="gridLineLi">
    <p>{props.id}:
    <Link to={`/Employees/${props.id}`}> {props.firstName + ' ' + props.lastName}</Link>  Title: {props.jobTitle === '' ? ('N/A') : (props.jobTitle)} {props.isFullTime === true ? ('Full-time') : ('Part-time')}</p>
    <img src={props.profileImage} alt=""/>
    </li>
  )
}

export default GridLine;