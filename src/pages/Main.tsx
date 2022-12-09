import { Intro } from "../components/Intro";
import { Features } from "../components/Features";
import { Business } from "../components/Business";
import { Portfolio } from "../components/Portfolio";
import Team from "../components/Team";
import { Careers } from "../components/Careers";
import Customers from "../components/Customers";
import { Cite } from "../components/Cite";

export function Main() {
    return (
        <main className="content">
            <Intro/>
            <Features/>
            <Business/>
            <Portfolio/>
            <Team/>
            <Careers/>
            <Customers/>
            <Cite/>
        </main>
    );
}
