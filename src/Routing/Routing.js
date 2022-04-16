import React from "react"
import { useRoutes } from "react-router-dom"
import Home from "../Component/Home/Home"
import Jobs from "../Component/Jobs/Jobs"
import Mission from "../Component/Mission/Mission"

export const Routing = () => {
	let routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/home", element: <Home /> },
		{ path: "/mission", element: <Mission /> },
		{ path: "/job", element: <Jobs /> },
		{ path: "/company", element: <Mission /> },
		{ path: "/contact", element: <Mission /> },
		{ path: "/privacy", element: <Mission /> },
	])
	return routes
}
