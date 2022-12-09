export type MenuItem = {
    id:string;
    title:string;
    url:string;
    hash:string;
}

export const features: MenuItem = {id: 'features', title: 'Features', url: '/#features', hash: '#features'};
export const business: MenuItem = {id: 'business', title: 'Solution', url: '/#business', hash: '#business'};
export const portfolio: MenuItem = {id: 'portfolio', title: 'Portfolio', url: '/#portfolio', hash: '#portfolio'};
export const team: MenuItem = {id: 'team', title: 'Team', url: '/#team', hash: '#team'};
export const jobs: MenuItem = {id: 'jobs', title: 'Careers', url: '/#jobs', hash: '#jobs'};
