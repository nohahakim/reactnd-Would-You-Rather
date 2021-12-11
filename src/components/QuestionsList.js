import React from 'react'
import QuestionPreview from "./QuestionPreview";


const QuestionsList = (props) => {
    const { questionsIds } = props;
    return (
        <div className="questions-list">
            {questionsIds.map(qid => (
                <QuestionPreview key={qid} id={qid} />
            ))}
        </div>
    )
}

export default QuestionsList;