import {Switch} from './Switch';
import {useState} from 'react';
import employees from './employees';
import {filter, map} from 'lodash';
import ReactTooltip from 'react-tooltip';
import StaticImage from './StaticImage';

const dev = 'development';
const biz = 'business';

const withPhoto = (employee) => {
    const hideName = employee.hide && employee.hide.includes('name');

    return (
        <div data-tip={!hideName ? employee.name : ''} key={employee.name} className="employee-info">
            <img
                priority="true"
                className="employee-info__photo"
                height={88}
                width={88}
                src={employee.photo}
                alt={employee.name}
            />
        </div>
    );
};

const Business = map(filter(employees, {department: biz}), withPhoto);
const Devs = map(filter(employees, {department: dev}), withPhoto);

export default function Team({className, id}) {
    const [team, setTeam] = useState(biz);
    return (
        <section className={className} id={id}>
            <div className="container-fluid team__container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="team__title">Team</h2>

                        <Switch left={biz} right={dev} onChange={setTeam}>
                            <div style={{display: team === biz ? 'grid' : 'none'}} className="switch-form__switch-area">
                                {Business}
                            </div>
                            <div style={{display: team === dev ? 'grid' : 'none'}} className="switch-form__switch-area">
                                {Devs}
                            </div>
                        </Switch>
                    </div>
                </div>
                <ReactTooltip className="employee-info__tooltip" place="bottom" effect="solid" />
            </div>
        </section>
    );
}
