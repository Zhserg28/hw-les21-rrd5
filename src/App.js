import {
    BrowserRouter,
    NavLink,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import MainPage from "./layouts/main";
import UsersLayout from "./layouts/users";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <h1> App Layout</h1>
                <NavLink to='/users'>Users list Page</NavLink>
                <Switch>
                    <Route path='/users' component={UsersLayout} />
                    <Route path='/' component={MainPage} />
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        </div>
    );
}





export default App;
