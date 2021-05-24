/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { content_width, dark_gray, size } from '../../styled/_design';
import { NavNode } from '../../shared/interfaces';
import FooterFacebookIcon from './FooterFacebookIcon.inline.svg';

interface Props {}

const Wrapper = styled.footer`
    padding: 28px 0;
    a {
        &:hover,
        &:active,
        &:focus {
            color: ${dark_gray};
        }
    }
    @media (min-width: ${size.sm}) {
        padding: 111px 0 25px 0;
    }
`;

const MenuContainer = styled(Container)`
    max-width: ${content_width}px;
    margin: 0 auto;
    padding: 0;
`;
const MobileBottomFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const MobileCopyright = styled.div`
    font-weight: 700;
`;
const SocialWrapperTag = styled.div`
    margin: 20px 0;
    display: flex;
    li {
        padding: 0 15px;
    }
    @media (min-width: ${size.sm}) {
        margin: 0;
    }
`;
const ExtraLinkWrapperTag = styled.span`
    color: ${dark_gray};
    line-height: 30px;
    padding-left: 10px;
    a {
        padding: 0 15px;
    }
`;
const SubMenuTag = styled.li`
    list-style-type: none;
    text-align: center;
    flex-grow: 1;
    font-weight: 500;
    line-height: 24px;
    color: ${dark_gray};
    @media (min-width: ${size.sm}) {
        line-height: 1.5rem;
    }
`;

interface SocialLink {
    id: any;
    name: string;
    link: string;
    svg: any;
}
const socialLinks: SocialLink[] = [
    {
        id: 'facebook',
        name: `Moms' House`,
        link: 'https://www.facebook.com/Momshouse102',
        svg: FooterFacebookIcon,
    },
    {
        id: 'facebook',
        name: `Babies' House`,
        link: 'https://www.facebook.com/668leductho',
        svg: FooterFacebookIcon,
    },
];
const extraPageLinks: NavNode = {
    id: '',
    item: { id: '', link: '' },
    children: [],
};
interface Props {}
const BottomFooter: React.FC<Props> = () => {
    return (
        <MenuContainer>
            <Row>
                <Col className="d-flex">
                    <span>© Moms' House 2021</span>
                    <ExtraLinkWrapperTag className="body-16">
                        {extraPageLinks.children &&
                            extraPageLinks.children.map(
                                (node, index: number) => (
                                    <Link key={index} to={node.link}>
                                        {node.title}
                                    </Link>
                                ),
                            )}
                    </ExtraLinkWrapperTag>
                </Col>
                <Col className="col-auto">
                    <SocialWrapperTag>
                        {socialLinks.map((node, index: number) => {
                            const SvgSocialNode = node.svg;
                            return (
                                <SubMenuTag className="body-16" key={index}>
                                    <a
                                        className="d-flex justify-content-center align-items-center"
                                        href={node.link}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <SvgSocialNode />
                                        <div className="pt-1">{node.name}</div>
                                    </a>
                                </SubMenuTag>
                            );
                        })}
                    </SocialWrapperTag>
                </Col>
            </Row>
        </MenuContainer>
    );
};
const MobileBottomFooter = () => {
    return (
        <MobileBottomFooterWrapper>
            <SocialWrapperTag>
                {socialLinks.map((node, index: number) => {
                    const SvgSocialNode = node.svg;
                    return (
                        <SubMenuTag className="body-16" key={index}>
                            <a
                                href={node.link}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <SvgSocialNode />
                                <div className="pt-1">{node.name}</div>
                            </a>
                        </SubMenuTag>
                    );
                })}
            </SocialWrapperTag>
            <MobileCopyright className="body-16">
                © Moms' House 2021
            </MobileCopyright>
        </MobileBottomFooterWrapper>
    );
};

const Footer: React.FC<Props> = () => {
    return (
        <Wrapper>
            <MenuContainer fluid>
                <Row bsPrefix="d-none d-sm-block">
                    <Col>
                        <BottomFooter />
                    </Col>
                </Row>
                <Row bsPrefix="d-sm-none d-xs-block">
                    <Col>
                        <MobileBottomFooter />
                    </Col>
                </Row>
            </MenuContainer>
        </Wrapper>
    );
};

export default Footer;
