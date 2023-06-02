import React from 'react';
import {
    NavLink,
    useParams,
} from "react-router-dom";

function UserProfilePage() {
    const { userId } = useParams();
    return (
        <div>
            <h1>UserPage</h1>
            <ul>
                <li>
                    <NavLink to='/users'>Users List page</NavLink>
                </li>
                <li>
                    <NavLink to={`/users/${userId}/edit`}>
                        Edit this user
                    </NavLink>
                </li>
            </ul>
            <p> userId:{userId}</p>
        </div>
    );
}

export default UserProfilePage;