import React from 'react';
import {
    NavLink,
    useParams,
} from "react-router-dom";

function EditUserPage() {
    const { userId } = useParams();
    return (
        <div>
            <h1>Edit User Page</h1>
            <ul>
                <li>
                    <NavLink to={"/users/" + userId}>User profile Page</NavLink>
                </li>
                <li>
                    <NavLink to={"/users/" + (+userId + 1)}>
                        {" "}
                        Another User
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/users"}> Users List page</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default EditUserPage;