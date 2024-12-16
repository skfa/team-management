import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";


const AddEditMember: React.FC = () => {

    const deleteMember  = ()=>{

    }

    const save = ()=>{

    }

    return (
        <div>
            <h1>Add a team member</h1>
            <h2>Set Email, Location and Role</h2>
            <div>
                <p>Info</p>
                <div>
                    <input type="text" placeholder="First Name"></input>
                    <input type="text" placeholder="Last Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Phone"></input>
                </div>
                <p>Role</p>
                <div>
                    <input type="radio"></input>
                    <input type="radio"></input>
                </div>
                <div>
                    <button onClick={deleteMember}>Delete</button>
                    <button onClick={save}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default AddEditMember;