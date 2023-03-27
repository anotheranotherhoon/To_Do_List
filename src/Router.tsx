import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './page/Home'
// import Todo from './page/Todo'
import { getToken } from "./utils/localeStorage"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={withAuthGuard('beforeAuth', <Home />)} />
            {/* <Route path="/todo" element={withAuthGuard('afterAuth', <Todo />)} /> */}
        </Routes>
    );
};

const withAuthGuard = (state : string, Component : JSX.Element) => {
    const isLoggedIn = getToken()
    if (!isLoggedIn && state === 'afterAuth') {
        return <Navigate replace to='/' />
    }
    if (isLoggedIn && state === 'beforeAuth') {
        return <Navigate replace to='/todo' />
    }
    return Component
}

export default Router;