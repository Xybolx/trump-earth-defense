import React from 'react';

const Title = props => {

    const { text, subText } = props;

    return (
        <>
            <h2>{text}</h2>
            <h5>{subText}</h5>
        </>
    );
};

export default Title;
