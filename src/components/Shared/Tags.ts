import styled from '@emotion/styled';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    black_500,
    content_width,
    indigo_400,
    size,
} from '../../styled/_design';
export const PageSection = styled.section`
    overflow: hidden;
    margin: 0;
    padding: 30px 15px;
    @media (min-width: ${size.sm}) {
        padding: 50px 0;
    }
`;
export const SectionWrapper = styled.div`
    max-width: ${content_width}px;
    margin: 0 auto;
`;
export const TitleHeading4 = styled.h4`
    font-size: 0.75rem;
    font-weight: 700;
    color: ${indigo_400};
    @media (min-width: ${size.sm}) {
        font-size: 1.2rem;
    }
`;
export const Heading2WithTitle = styled.h2`
    font-size: 1.5rem;
    color: ${black_500};
    margin-bottom: 0px;
    @media (min-width: ${size.sm}) {
        font-size: 2.4rem;
    }
`;
export const Heading1WithTitle = styled.h1`
    font-size: 2.5rem;
    color: ${black_500};
    margin-bottom: 0px;
    @media (min-width: ${size.sm}) {
        font-size: 3.6rem;
    }
`;
export const TitleHeading5 = styled.h5`
    font-weight: 700;
    color: ${indigo_400};
    font-size: 0.75rem;
    @media (min-width: ${size.sm}) {
        font-size: 1rem;
    }
`;
export const Heading3WithTitle = styled.h3`
    color: ${black_500};
    margin-bottom: 0px;
    font-size: 1.25rem;
    @media (min-width: ${size.sm}) {
        font-size: 1.6rem;
        line-height: 1.4;
    }
`;

export const RowTag = styled(Row)`
    margin-right: -10px;
    margin-left: -10px;
    @media (min-width: ${size.sm}) {
        margin-right: -15px;
        margin-left: -15px;
    }
`;
export const ColTag = styled(Col)`
    padding-right: 10px;
    padding-left: 10px;
    @media (min-width: ${size.sm}) {
        padding-right: 15px;
        padding-left: 15px;
    }
`;
export const ContentTag = styled.p`
    img {
        width: 100%;
        object-fit: cover;
    }
`;
