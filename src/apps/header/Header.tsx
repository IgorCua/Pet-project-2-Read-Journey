import { Outlet } from "react-router-dom"

export const Header = () => {
    return (
        <>
        <div>
            <p>Header</p>
        </div>
        <Outlet/>
        </>
    )
}