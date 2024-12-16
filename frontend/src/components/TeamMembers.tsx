import { Link, useLoaderData } from "react-router-dom";
import Member from './Member';

export type MemberData = {
    id:number;
    name: string;
    email: string;
    phone: string;
    role: string;
    location:string;
}

export async function TeamsLoader() {
    let members: Array<MemberData>;
    /*members = await fetch('http://localhost:8000/api/team/teammembers').then(res=>res.json()).then((data)=>{
        return data;
    });*/

    members = [
        {
            id:1,
            name: 'Test',
            email: 'email',
            phone: '1234566',
            role: 'admin',
            location:'ca'
        },
        {
            id:2,
            name: 'Test',
            email: 'email',
            phone: '1234566',
            role: 'admin',
            location:'ca'
        }
    ]
    return members;
}

export default function TeamMembers(){

    const members = useLoaderData() as Array<MemberData>;
    const addMember = ()=>{

    }

    return (
        <div className="mx-auto">
            <h1>Team Members</h1>
            <h3>You have {members.length} team members</h3>
            <Link to='/add-member/'>Add</Link>
            {
                members.map(member=>{
                    return <Member data={member}></Member>
                })
            }
        </div>
    );
}