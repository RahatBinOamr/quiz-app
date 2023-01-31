import React from 'react';
import { Bars, Button, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from "../Shared/NavbarElements"


const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/quiz' activeStyle>
			QUIZ
		</NavLink>
		<NavLink to='/result' activeStyle>
			Result
		</NavLink>
		<NavLink to='/blog' activeStyle>
			Blog
		</NavLink>
		<NavBtnLink>
            <NavBtn> signOut </NavBtn>
        </NavBtnLink>
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
