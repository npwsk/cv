import { ReactComponent as GithubIcon } from '@/assets/icons/outlined/github.svg';
import { ReactComponent as TelegramIcon } from '@/assets/icons/outlined/telegram.svg';
import { ReactComponent as MailIcon } from '@/assets/icons/outlined/mail.svg';

export const navItems = [
  { id: 'home_navlink', route: '/', text: 'Home', key: 'home' },
  // { id: 'about_navlink', route: '/about', text: 'About me', key: 'about' },
  { id: 'projects_navlink', route: '/projects', text: 'Projects', key: 'projects' },
  // { id: 'experience_navlink', route: '/experience', text: 'Experience', key: 'experience' },
  // { id: 'education_navlink', route: '/education', text: 'Education', key: 'education' },
  // { id: 'contacts_navlink', route: '/contacts', text: 'Contacts', key: 'contacts' },
];

export const contacts = [
  {
    id: 'email',
    title: 'Email',
    text: 'perfil.nika@gmail.com',
    url: 'mailto:perfil.nika@gmail.com',
    icon: MailIcon,
  },
  {
    id: 'telegram',
    title: 'Telegram',
    text: '@nika_perfilova',
    url: 'https://t.me/nika_perfilova',
    icon: TelegramIcon,
  },
  {
    id: 'github',
    title: 'Github',
    text: 'npwsk',
    url: 'https://github.com/npwsk',
    icon: GithubIcon,
  },
];

const projects = [
  {
    id: 'ticTackToe',
    stack: ['JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/npwsk/tic-tac-toe',
    deploy: 'https://npwsk.github.io/tic-tac-toe/tic-tac-toe/',
    year: 2022,
  },
  {
    id: 'movieApp',
    stack: ['JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/npwsk/movie-app',
    deploy: 'https://npwsk-movie-app.netlify.app/',
    year: 2022,
  },
  {
    id: 'virtualKeyboard',
    stack: ['JavaScript', 'HTML', 'SCSS'],
    source: 'https://github.com/npwsk/virtual-keyboard',
    deploy: 'https://npwsk.github.io/virtual-keyboard/',
    year: 2022,
  },
  {
    id: 'onlineStore',
    stack: ['TypeScript', 'HTML', 'SCSS'],
    source: 'https://github.com/npwsk/online-store',
    deploy: 'https://npwsk.github.io/virtual-keyboard/',
    year: 2022,
  },
];

export const getProjects = () => projects;

export const getProjectById = (id) => projects.find((project) => project.id === id);
