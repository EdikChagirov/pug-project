import './style.scss';
import createMenu from '../../components/menu/menu';

var menu = createMenu(['Main', 'About us'], 'menu');

document.body.appendChild(menu);

console.log('in index.js');