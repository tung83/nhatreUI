import React from 'react';
import styled from '@emotion/styled';
import AppSectionContainer from './AppSectionContainer';
import LazyImage from './LazyImage';
import { ImageSharp } from '../../shared/interfaces';

interface Props {
    image?: ImageSharp;
    title?: string;
    maxHeight?: number;
}

type ImageProps = {
    maxHeight: number;
};
const ImageWrapper = styled.div<ImageProps>`
    width: 100%;
    max-height: ${props => props.maxHeight + 'px'};
    overflow-y: hidden;
    position: relative;
`;
export const Image = styled(LazyImage)<ImageProps>`
    width: 100%;
`;
export const ImageTitle = styled.div`
    position: absolute;
    left: 80px;
    bottom: 40px;
    text-transform: uppercase;
    font-size: 24px;
    color: #fff;
`;

const ImageHeader: React.FC<Props> = ({ image, title, maxHeight }) => {
    const maxHeightValue = maxHeight ? maxHeight : 1000;
    return (
        <AppSectionContainer backFill="#000">
            <ImageWrapper maxHeight={maxHeightValue}>
                {image && <LazyImage src={image}></LazyImage>}
                <ImageTitle>{title}</ImageTitle>
            </ImageWrapper>
        </AppSectionContainer>
    );
};

export default ImageHeader;
