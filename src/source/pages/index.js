import {business, features, jobs, team, portfolio} from '../components/navigation';
import Team from '../components/Team';
import Intro from '../components/Intro';
import Features from '../components/Features';
import Business from '../components/Business';
import Portfolio from '../components/Portfolio';
import Careers from '../components/Careers';
import Customers from '../components/Customers';
import Cite from '../components/Cite';

export default function Index({stickyHeaderRef}) {
    return (
        <main className="content">
            <Intro className="intro" />
            <Features stickyHeaderRef={stickyHeaderRef} className="features" id={features.id} />
            <Business className="business" id={business.id} />
            <Portfolio className="portfolio" id={portfolio.id} />
            <Team className="team" id={team.id} />
            <Careers className="jobs" id={jobs.id} />
            <Customers className="customers" />
            <Cite className="cite" />
        </main>
    );
}
