import React from 'react';
import ReactMarkdown from 'react-markdown'
import EasyTyper from 'easy-typer-js'

import ContentWrapper from './Stylecomponents';

// import test from '../../doc/test.md';

export default function Content(props: any) {


    return (
        <ContentWrapper>
            <ReactMarkdown># Hello, *world*!</ReactMarkdown>
        </ContentWrapper>

    )
}