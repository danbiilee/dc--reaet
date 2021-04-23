import React from 'react';
import Icon from '../common/icon';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
	return (
		<header>
			<img src="/images/logo.png" />
			<Icon icon={faBars} />
		</header>
	);
};

export default Header;
