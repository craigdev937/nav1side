import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Sidebar } from "./Sidebar";
import { Home } from "../pages/home/Home";
import { Comments } from "../pages/comments/Comments";
import { Products } from "../pages/prod/Products";
import { Posts } from "../pages/posts/Posts";
import { Quotes } from "../pages/quotes/Quotes";
import { Recipes } from "../pages/recipes/Recipes";
import { Users } from "../pages/users/Users";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/comments",
                element: <Comments />
            },
            {
                path: "/prod",
                element: <Products />
            },
            {
                path: "/posts",
                element: <Posts />
            },
            {
                path: "/quotes",
                element: <Quotes />
            },
            {
                path: "/recipes",
                element: <Recipes />
            },
            {
                path: "/users",
                element: <Users />
            }
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};




