import React from 'react';
import { connect } from 'react-redux';
import QuestionPage from './QuestionPage';

const QuestionDetails = props => (
    <div className='component-container'>
        <QuestionPage id={props.match.params.id} detailed />
    </div>
)

export default connect()(QuestionDetails);