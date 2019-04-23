import React from 'react';
import ActionButton from './ActionButton';

const actions = [
    {
        text: 'clear'
    },
    {
        text: 0
    }
]

function Action() {
    return (
        <div class='clear'>
            {actions.map(actionFromMap => {
                return <ActionButton actionProp={actionFromMap} />
            })}
        </div>
    );
}

export default Action;