import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import UserScore from './UserScore';

const Leaderboard = (props) => {
    let { users } = props;
    const totalCount = (user) => {
        return Object.keys(user.answers).length + user.questions.length
    }
    users = Object.values(users).sort((a, b) => totalCount(b) - totalCount(a))



    return (

        <Container className="leader-board">
            <h2 className="text-center my-3">
                <small>LeaderBoard</small>
            </h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="mb-4">
                        <UserScore key={user.id} user={user} rank={users.indexOf(user) + 1} />
                    </li>
                ))}
            </ul>
        </Container>
    )
}


function mapStateToProps({ users }) {

    return {
        users
    };
}

export default connect(mapStateToProps)(Leaderboard);
