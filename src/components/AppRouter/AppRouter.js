import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import Posts from "../../Pages/Posts";
import About from "../../Pages/About";

const AppRouter = () => {
    return (
            <Routes>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'*'} element={<Navigate to='/posts'/>}/>
            </Routes>
    );
};

export default AppRouter;