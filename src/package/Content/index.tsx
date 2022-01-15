import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'

import ContentWrapper from './Stylecomponents';

import PhotoBox from '../../components/PhotoBox';

export default function Content(props: any) {

    return (
        <ContentWrapper>
            <span>欢迎来到我的照片分享地</span>
            <div className='photo-warpper'>
                <PhotoBox 
                    url='https://yanminghou.pek3b.qingstor.com/photo/DSC00189.jpg'
                    location='成都-宽窄巷子'
                    desc='古建筑'
                />
                <PhotoBox 
                    url='https://yanminghou.pek3b.qingstor.com/photo/DSC00197.jpg'
                    location='成都-宽窄巷子'
                    desc='茶摊'
                />
                <PhotoBox 
                    url='https://yanminghou.pek3b.qingstor.com/photo/DSC00213.jpg'
                    location='成都-宽窄巷子'
                    desc='屋檐'
                />
                <PhotoBox 
                    url='https://yanminghou.pek3b.qingstor.com/photo/DSC00236.jpg'
                    location='成都-锦里'
                    desc='武侯祠美术馆'
                />
                <PhotoBox 
                    url='https://yanminghou.pek3b.qingstor.com/photo/DSC00242-HDR.jpg'
                    location='成都-锦韵路'
                    desc='成都网红桥-蘑菇桥'
                />
                <PhotoBox 
                    url='https://yanminghou.pek3b.qingstor.com/photo/DSC00284-2.jpg'
                    location='成都-锦韵路'
                    desc='成都网红桥-蘑菇桥'
                />
                <PhotoBox 
                    url='https://yanminghou.pek3b.qingstor.com/photo/DSC00313.jpg'
                    location='成都-空港体育公园'
                    desc='顺丰货机起飞'
                />
                <PhotoBox 
                    url='https://yanminghou.pek3b.qingstor.com/photo/DSC00307.jpg'
                    location='成都-空港体育公园'
                    desc='机场夜景'
                />
            </div>
        </ContentWrapper>

    )
}