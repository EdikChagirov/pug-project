import './style.scss';
import createMenu from '../../components/menu/menu';

var menu = createMenu(['Blog item 1', ['Blog item 2']], 'menu');

document.body.appendChild(menu);

console.log('in blog.js');