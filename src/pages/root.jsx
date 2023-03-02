import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Root() {
    return (
        <>
            <header>
                <Link to={"/admin"}>Admin</Link>
                <Link to={"/quizz"}>Quizz</Link>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
