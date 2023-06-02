import React from 'react';
import {
    NavLink,
    Redirect,
    Route,
    Switch,
    useRouteMatch,
} from "react-router-dom";
import UserListPage from '../components/page/userListPage/userListPage';
import UserProfilePage from '../components/page/userProfilePage/userProfilePage';
import EditUserPage from '../components/page/editUserPage/editUserPage';

function UsersLayout() {
    const { path } = useRouteMatch();
    return (
        <div>
            <h1>Users Layout</h1>
            <NavLink to='/'>Main Page</NavLink>
            <Switch>
                <Route
                    path={path + "/:userId/profile"}
                    component={UserProfilePage}
                />
                <Route path={path + "/:userId/edit"} component={EditUserPage} />
                <Route path={path} exact component={UserListPage} />
                <Redirect
                    from={path + "/:userId"}
                    to={path + "/:userId/profile"}
                />
            </Switch>
        </div>
    );
}

export default UsersLayout;