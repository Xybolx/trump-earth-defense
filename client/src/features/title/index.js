import React from 'react';

const Title = props => {

    const { text, pText } = props;

    return (
        <>
            <h2>{text}</h2>
            <p>{pText}</p>
        </>
    );
};

export default Title;
