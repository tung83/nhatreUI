import React from 'react';
import Img from 'gatsby-image';
import Alert from 'react-bootstrap/Alert';
import styled from '@emotion/styled';
import { ImageSharp } from '../../shared/interfaces';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
    variant?: 'fixed' | 'fixedMobile' | 'fluid';
    src?: ImageSharp;
    wrapperStyle?: React.CSSProperties;
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
    width: 100%;
    height: 100%;
`;

const LazyImage: React.FC<Props> = ({ src, variant, wrapperStyle }) => {
    if (!src || !src.childImageSharp) {
        return (
            <Wrapper className="lazy-image-wrapper">
                <Alert variant="danger" className="text-center">
                    Image not found.
                </Alert>
            </Wrapper>
        );
    }
    const imageSharp = src.childImageSharp as any;
    return (
        <Wrapper className="lazy-image-wrapper" style={wrapperStyle}>
            {!variant || variant === 'fluid' ? (
                <Img fluid={imageSharp[variant || 'fluid']} />
            ) : variant === 'fixed' ? (
                <Img fixed={imageSharp[variant]} />
            ) : (
                <div>
                    <Row bsPrefix="d-none d-sm-block">
                        <Col>
                            <Img fixed={imageSharp['fixed']} />
                        </Col>
                    </Row>
                    <Row bsPrefix="d-sm-none d-xs-block">
                        <Col>
                            <Img fixed={imageSharp['fixedMobile']} />
                        </Col>
                    </Row>
                </div>
            )}
        </Wrapper>
    );
};

export default LazyImage;
