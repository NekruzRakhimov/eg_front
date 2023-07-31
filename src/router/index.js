import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Enterprises from "../pages/Enterprises";
import Classifiers from "../pages/Classifiers";
import Reports from "../pages/Reports";
import EnterPriseIdPage from "../pages/EnterPriseIdPage";

export const privateRoutes = [
    {path: "/enterprises", component: Enterprises, exact: true},
    {path: "/enterprises/:id", component: EnterPriseIdPage, exact: true},
    {path: "/classifiers", component: Classifiers, exact: true},
    {path: "/reports", component: Reports, exact: true},

    {path: "/about", component: About, exact: true},
    {path: "/posts", component: Posts, exact: true},
    {path: "/posts/:id", component: PostIdPage, exact: true},
    {path: "/error", component: Error, exact: true},
]

export const publicRoutes = [
    {path: "/login", component: Login, exact: true},
]