const ProtectRoutes = ({ middlewares = [], routes, children }) => {
    const pathName = window.location.pathname;

    middlewares.forEach(middleware => {
        routes.includes(pathName) && middleware();
    });

    return children;
}

export default ProtectRoutes;