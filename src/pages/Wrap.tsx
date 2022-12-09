import { Outlet } from "react-router";
import Layout from "../components/Layout";
import { ProvideAuth } from "../hooks/useAuth";

export function Wrap(){
    return (
        <ProvideAuth>
            <Layout>
                <Outlet/>
            </Layout>
        </ProvideAuth>
    )
}