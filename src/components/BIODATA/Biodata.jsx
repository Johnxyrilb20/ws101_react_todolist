import { Component } from "react"
import './Biodata.css'
function biodata(props) {
    return (
        <div class="biodata" id="biodata">
            <h1>Activity #2 biodata using Reactjs </h1>
            <h2>Peronal Background </h2>
            <p> <strong>Name:</strong> {props.name}{props.lastname} </p>
            <p> <strong>Mobile:</strong> {props.mobile} </p>
            <p> <strong>Email Address:</strong> {props.email} </p>
            <p> <strong>Gender:</strong> {props.gender} </p>
            <p> <strong>Birthdate:</strong> {props.birthdate} </p>
            <h2>Famiy Data</h2>
            <p> <strong>Father's Name:</strong> {props.father} </p>
            <p> <strong>Contact:</strong> {props.Contactf} </p>
            <p> <strong>Civil status:</strong> {props.civilstatusf} </p>
            <p> <strong>Occupation:</strong> {props.occupationf} </p>
            <p> <strong>Birthdate:</strong> {props.birthdatef} </p>
            <p> <strong>Birth of Place:</strong> {props.birthplacef} </p>
            <p> <strong>Religion:</strong> {props.religionf} </p>
            <p> <strong>Occupation:</strong> {props.occupationf} </p>
            <p> <strong>Mother's Name:</strong> {props.mother} </p>
            <p> <strong>Birthdate:</strong> {props.birthdatem} </p>
            <p> <strong>Birth of Place:</strong> {props.birthplacem} </p>
            <p> <strong>Religion:</strong> {props.religionm} </p>
            <p> <strong>Occupation:</strong> {props.occupationm} </p>
            <h2>Education:</h2>
            <p> <strong>Elementary School:</strong> {props.elementaryschool} </p>
            <p> <strong>High School:</strong> {props.highschool} </p>
            <p> <strong>Senior High School:</strong> {props.seniorhighschool} </p>
            <p> <strong>College:</strong> {props.college} </p>
        </div>
    );
  }

export default biodata;