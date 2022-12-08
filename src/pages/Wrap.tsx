import { Outlet } from "react-router";
import Layout from "../components/Layout";

export function Wrap(){
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}