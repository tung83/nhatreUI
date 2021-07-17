/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import { content_width, dark_gray, size } from '../../styled/_design';
import Button from 'react-bootstrap/Button';
import { PageSection, SectionWrapper } from '../Shared/Tags';

const PageSectionTag = styled(PageSection)`
    padding: 50px 15px 93px 15px;
    background-position: center;
    position: relative;
    background-color: #e6ecfc;
    background-image: url('/footer-bg.svg');
    @media (min-width: ${size.md}) {
        padding: 130px 0 106px 0px;
    }
`;
const SectionWrapperTag = styled(SectionWrapper)`
    max-width: 290px;
    @media (min-width: ${size.md}) {
        max-width: ${content_width}px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;

const TitleText = styled.h2`
    margin-bottom: 0;
    line-height: 1.3;
    font-weight: 700;
`;
const BodyTag = styled.div`
    color: ${dark_gray};
    margin-top: 2px;
    @media (min-width: ${size.md}) {
        max-width: 821px;
        margin-top: 16px;
        .text-highlight {
            font-weight: 700;
        }
    }
`;

const DemoButtton = styled(Button)`
    width: 149px;
    margin: 40px 0 0;
    position: relative;
    @media (min-width: ${size.md}) {
        width: 176px;
        margin: 20px;
    }
`;
const DemoButtonWrapper = styled.div`
    text-align: right;
    @media (min-width: ${size.md}) {
        text-align: left;
    }
`;

const BackgroundImageTag = styled.div`
    .person-bg {
        background-repeat: no-repeat;
        background-image: url('/footer-person-pointing.mobile.svg');
        position: absolute;
        top: -5px;
        right: 28px;
        width: 246px;
        height: 140px;
        @media (min-width: ${size.md}) {
            background-image: url('/footer-person-pointing.svg');
            width: 427px;
            height: 209px;
            top: -40px;
            right: 68%;
        }
    }
`;
const BackgroundImageComponent = () => {
    return (
        <BackgroundImageTag>
            <div className="person-bg" />
        </BackgroundImageTag>
    );
};
interface Props {}
const FooterContactUs: React.FC<Props> = () => {
    return (
        <PageSectionTag>
            <SectionWrapperTag>
                <TitleText className="heading-2">
                    Maximise{' '}
                    <span className="text-highlight">Effectiveness</span>,
                    Minimise <span className="text-highlight">Cost</span>
                </TitleText>
                <BodyTag className="body-24">
                    Contact us to learn how Momshouse can help you see trade
                    differently.
                </BodyTag>
                <DemoButtonWrapper>
                    <DemoButtton variant="primary">
                        Request Demo
                        <BackgroundImageComponent />
                    </DemoButtton>
                </DemoButtonWrapper>
            </SectionWrapperTag>
        </PageSectionTag>
    );
};

export default FooterContactUs;
