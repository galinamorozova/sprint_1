import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('page2', tpl);

export default (props = {}) => {
	return tpl(props);
}
