import React from 'react';
import styled from '@emotion/styled';
import ArrowSvg from './Arrow.inline.svg';

const ArrowSvgWrapper = styled.div`
    display: inline-block;
    overflow-x: hidden;
    margin-bottom: -4px;
    margin-left: 10px;
    svg {
        transform: translateX(-20px);
        width: 41px;
        transition: 0.5s ease;
    }
`;
interface Props {}
const ArrowLine: React.FC<Props> = () => {
    return (
        <ArrowSvgWrapper className="arrow-wrapper">
            <ArrowSvg />
        </ArrowSvgWrapper>
    );
};

export default ArrowLine;
