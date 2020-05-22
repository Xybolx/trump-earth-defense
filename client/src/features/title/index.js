import React from 'react';

const Title = props => {

    const { text, subText, pText } = props;

    return (
        <>
            <h2>{text}</h2>
            <h6>{subText}</h6>
            <p>{pText}</p>
        </>
    );
};

export default Title;
