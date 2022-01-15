import React from "react";
import styled from "styled-components";

const PhotoBoxWrapper = styled.div`
    width: ${props => localStorage.getItem('INSOMNIAC_PC_FLAG') === 'true' ? '50%' : '100%'};
    height: ${props => localStorage.getItem('INSOMNIAC_PC_FLAG') === 'true' ? '50%' : '100%'};;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .text-wrapper {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        .location-style {
            display: inline-block;
            color: rgba(0,0,0,.9);
            font-size: 20px;
            font-weight: 500;
        }
        .desc-style {
            font-size: 14px;
        }
    }
`;

export default function PhotoBox(props) {
    const { url, location, desc } = props;
    return (
        <PhotoBoxWrapper>
            <img src={url} className="img-style" />
            <div className="text-wrapper">
                <span className="location-style">{location}</span>
                <p className="desc-style">描述：{desc}</p>
            </div>
        </PhotoBoxWrapper>
    )

}