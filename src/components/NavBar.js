import React from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import { unSetAuthedUser } from '../actions/authedUser';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = (props) => {

	const { user } = props
	const dispatch = useDispatch()
	const history = useHistory()
	if (!user) {
		return null
	}
	const { avatarURL, name } = user

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(unSetAuthedUser());
		history.push('/')
	}
	return (

		<Navbar bg='light' expand='lg' sticky='top'>
			<Navbar.Brand as={Link} to="/">
				<h2>
					<small>Would You Rather?</small>
				</h2>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="navbar-nav mr-auto">
					<Nav.Link as={Link} to='/'> Home </Nav.Link>
					<Nav.Link as={Link} to='/add'> New Question </Nav.Link>
					<Nav.Link as={NavLink} to='/leaderboard'> Leaderboard </Nav.Link>


					<Nav className="align-items-start">
						<Navbar.Text className='mr-3'>
							Hello, {name}
							<img
								className='rounded-circle ml-2'
								src={avatarURL}
								alt='Avatar'
								height='30'
								width='30'
							/>
						</Navbar.Text>
						<Nav.Link
							onClick={handleLogout}>Log Out
						</Nav.Link>
					</Nav>


				</Nav>

			</Navbar.Collapse>
		</Navbar>

	)

}

const mapStateToProps = ({ authedUser, users }) => {

	return {
		user: users ? users[authedUser] : null
	}
}

export default connect(mapStateToProps)(NavBar)

