import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MemberData } from "./TeamMembers";

interface MemberDataProps {
    data: MemberData
}

const Member: React.FC<MemberDataProps> = ({data}) => {

    return (
        <div>
            <div>{data.name}</div>
            <div>{data.email}</div>
            <div>{data.phone}</div>
            <div>{data.role}</div>
            {
                ( ()=>{
                    const route = "/edit-member/"+data.id;
                        return (<Link to={route}>Edit</Link>);
                    })()
                }
        </div>
    );
}

export default Member;