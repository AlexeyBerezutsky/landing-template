import {Switch} from './Switch';
import {useState} from 'react';
import employees from './employees.json';
import { team as teamNav } from "./navigation";
import { filter, map } from "lodash";
import { Tooltip } from 'react-tooltip';

const dev = 'development';
const biz = 'business';

type Department = 'development'|'business';

type Employee ={
    name: string;
    photo: string;
    department: Department;
    hide: string;
}

const withPhoto = (employee: Employee) => {
    const hideName = employee.hide && employee.hide.includes('name');

    return (
        <div data-tip={!hideName ? employee.name : ''} key={employee.name} className="employee-info">
            <img
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

export default function Team() {
    const [team, setTeam] = useState(biz);
    return (
        <section className="team" id={teamNav.id}>
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
                <Tooltip className="employee-info__tooltip" place="bottom" />
            </div>
        </section>
    );
}
