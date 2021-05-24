/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import LazyImage from '../Shared/LazyImage';
import { primary_color, size } from '../../styled/_design';
import { Meta } from '../../shared/interfaces/meta.interface';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PageSection, SectionWrapper } from '../Shared/Tags';
import Blogs from '../Shared/Blogs';

interface Props {
    header: Meta;
}

const PageSectionTag = styled(PageSection)`
    padding: 5px 0;
    @media (min-width: ${size.sm}) {
        padding: 10px 0;
    }
`;
const ImageWrapper = styled.div`
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 500px;
`;
export const Image = styled.div`
    height: 100%;
    width: 100%;
    left: 0;
    position: absolute;
    top: 0px;
    max-width: none;
    overflow: hidden;
    @media (min-width: ${size.sm}) {
        border-radius: 5px;
    }
`;
export const SectionWrapperTag = styled(SectionWrapper)`
    background: #f7f7f7;
    @media (min-width: ${size.sm}) {
        border-radius: 5px;
    }
`;
export const ImageTitle = styled.div`
    position: absolute;
    font-family: 'Lobster', 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 500;
    left: 0px;
    right: 0px;
    padding: 0 40px;
    bottom: 0;
    background-color: ${primary_color};
    color: #fff;
    margin: 0 15px;
    @media (min-width: ${size.sm}) {
        margin: 0;
    }
`;

const HomeHeader: React.FC<Props> = ({ header }) => {
    return (
        <PageSectionTag>
            <SectionWrapperTag>
                <Row>
                    <Col md={8}>
                        <ImageWrapper>
                            <Image>
                                <LazyImage
                                    src={header?.heading_image}
                                ></LazyImage>
                                <SectionWrapperTag>
                                    <ImageTitle>
                                        <div className="animate-bottom-parent">
                                            <h2 className="heading-2 animate-bottom">
                                                {header?.heading_text}
                                            </h2>
                                        </div>
                                        <div className="animate-bottom-parent">
                                            <h3 className="heading-3 animate-bottom">
                                                {header?.heading_subText}
                                            </h3>
                                        </div>
                                    </ImageTitle>
                                </SectionWrapperTag>
                            </Image>
                        </ImageWrapper>
                    </Col>
                    <Col md={4} className="pl-0">
                        <Blogs />
                    </Col>
                </Row>
            </SectionWrapperTag>
        </PageSectionTag>
    );
};

export default HomeHeader;
