import React from "react"
import { useRoutes } from "react-router-dom"
import Home from "../Component/Home/Home"
import Mission from "../Component/Mission/Mission"

export const Routing = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/ホーム", element: <Home /> },
    { path: "/ミッション", element: <Mission /> },
    { path: "/仕事", element: <Mission /> },
    { path: "/会社概要", element: <Mission /> },
    { path: "/お問合せ", element: <Mission /> },
    { path: "/プライバシーポリシー", element: <Mission /> },
  ])
  return routes
}
