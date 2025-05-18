import { Outlet } from "react-router-dom";

export const routes = {
    HOME: "/"
}

function Root() {
    return(
        <>
            <Outlet />
        </>
    )
};

export default Root;