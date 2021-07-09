const ProtectRoutes = ({ middlewares = [], routes, children }) => {
    const pathName = window.location.pathname;
    console.log(routes)
    middlewares.forEach(middleware => {
        if (routes.includes(pathName)) {
            middleware();
        }
    })
    return children;
}

export default ProtectRoutes;