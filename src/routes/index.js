import About from '../pages/Home';
import Education from '../pages/Education';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const publicRouters = [
    { path: '/', component: About },
    { path: '/education', component: Education },
    { path: '/skills', component: Skills },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
];
export { publicRouters };
