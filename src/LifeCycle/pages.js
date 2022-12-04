import Discussion from './discussion'
import Rules from './rules'
import Workflow from './workflow'

const pages = [
  {
    name: 'Discussion',
    path: '/',
    component: <Discussion />,
    exact: true,
  },
  {
    name: 'Rules',
    path: '/rules',
    component: <Rules />,
  },
  {
    name: 'Workflow',
    path: '/workflow',
    component: <Workflow />,
  },
]

export default pages
