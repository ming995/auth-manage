import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import EasyTyper from 'easy-typer-js'
import { Map } from 'react-amap';

import ContentWrapper from './Stylecomponents';

// import test from '../../doc/test.md';

export default function Content(props: any) {
    // 纬度
    const [latitude, setLatitude] = useState<number>(0);
    // 经度
    const [longitude, setLongitude] = useState<number>(0);


    const showPosition = (position: any) => {
        let newLatitude = position.coords.latitude;
        setLatitude(newLatitude);
        let newLongitude = position.coords.longitude;
        setLongitude(newLongitude);
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    useEffect(() => {
        getLocation();
    }, [])
    return (
        <ContentWrapper>
            <ReactMarkdown># Hello, *world*!</ReactMarkdown>
            <div className='map-wrapper'>
                <Map center={[longitude, latitude]} />
            </div>
        </ContentWrapper>

    )
}