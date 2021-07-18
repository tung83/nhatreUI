/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { content_width, dark_gray, size, yellow } from '../../styled/_design';
import { NavNode } from '../../shared/interfaces';
import FooterFacebookIcon from './FooterFacebookIcon.inline.svg';
import PhoneIcon from '../Assets/PhoneIcon.inline.svg';

interface Props {}

const Wrapper = styled.footer`
    font-size: 16px;
    background: url('/Footer_bg.jpg') bottom center no-repeat;
    svg {
        path {
            fill: #fff;
        }
    }
    color: #fff;
    padding: 28px 0;
    margin-top: 20px;
    a {
        color: #fff;
        &:hover,
        &:active,
        &:focus {
            color: #88bf40;
            svg {
                path {
                    fill: #88bf40;
                }
            }
        }
    }
    @media (min-width: ${size.md}) {
        padding: 10px 0 10px 0;
    }
`;

const MenuContainer = styled(Container)`
    max-width: ${content_width}px;
    margin: 0 auto;
    padding: 0;
    .mobile-map {
        flex-direction: column;
    }
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
    @media (min-width: ${size.md}) {
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
const MobileMaps = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px -15px;
    .map-item {
        &:first-of-type {
            margin-bottom: 20px;
        }
        a.map {
            height: 130px;
            display: block;
            min-height: 130px;
        }
    }
`;
const Maps = styled.div`
    display: flex;
    margin: 10px -15px;
`;
const AddressMap = styled.div`
    flex: 1;
    padding: 0 15px;
    h3 {
        color: ${yellow};
    }
    a.phone {
        display: flex;
        align-items: center;
        svg {
            width: 20px;
            margin-right: 7px;
        }
    }
    a.map {
        margin-top: 10px;
        cursor: pointer;
        position: relative;
        height: 160px;
        display: block;
        min-height: 280px;
    }
    .map0 {
        background: url('/MomsHouseMap.png') center no-repeat;
        background-size: cover;
    }
    .map1 {
        background: url('/BabiesHouseMap.png') center no-repeat;
        background-size: cover;
    }
`;
const SubMenuTag = styled.li`
    list-style-type: none;
    text-align: center;
    flex-grow: 1;
    font-weight: 500;
    line-height: 24px;
    color: ${yellow};
    @media (min-width: ${size.md}) {
        line-height: 1.5rem;
    }
`;

interface SocialLink {
    id: any;
    name: string;
    link: string;
    svg: any;
}
interface MapLink {
    link: string;
    name: string;
    phone: string;
    address: string;
}
const maps: MapLink[] = [
    {
        name: "Moms' House",
        address: '843/11, Nguyễn Kiệm, Gò Vấp, Hồ Chí Minh',
        phone: '098 261 02 06',
        link:
            "https://www.google.com/maps/place/M%E1%BA%A7m+Non+Moms'house/@10.8196572,106.6759533,17z/data=!3m1!4b1!4m5!3m4!1s0x3175290414b2381f:0x35dd1b256192d179!8m2!3d10.8190618!4d106.6779074",
    },
    {
        name: "Babies' House",
        phone: '090 910 71 27',
        address: '668/2 Lê Đức Thọ, Phường 15, Gò Vấp, Hồ Chí Minh',
        link:
            "https://www.google.com/maps/place/M%E1%BA%A7m+Non+Babies'+House/@10.8460498,106.6691213,17z/data=!3m1!4b1!4m5!3m4!1s0x317529e5f7c929e7:0x1655658916ed9540!8m2!3d10.8460018!4d106.6712586",
    },
];
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
interface Props {
    maps: MapLink[];
}
const BottomFooter: React.FC<Props> = ({ maps }) => {
    return (
        <MenuContainer>
            <Maps>
                {maps.map((x, index) => (
                    <AddressMap key={index} className="map-item">
                        <h3 className="heading-3">{x.name}</h3>
                        <a href={`tel:${x.phone}`} className="phone">
                            <PhoneIcon />
                            <span>{x.phone}</span>
                        </a>
                        <div>{x.address}</div>
                        <a
                            className={`map${index} map`}
                            href={x.link}
                            rel="noreferrer"
                            target="_blank"
                        ></a>
                    </AddressMap>
                ))}
            </Maps>
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
            <MobileMaps>
                {maps.map((x, index) => (
                    <AddressMap key={index} className="map-item">
                        <h3 className="heading-3">{x.name}</h3>
                        <a href={`tel:${x.phone}`} className="phone">
                            <PhoneIcon />
                            <span>{x.phone}</span>
                        </a>
                        <div>{x.address}</div>
                        <a
                            className={`map${index} map`}
                            href={x.link}
                            rel="noreferrer"
                            target="_blank"
                        ></a>
                    </AddressMap>
                ))}
            </MobileMaps>
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
                © Moms' House {new Date().getFullYear()}
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
                        <BottomFooter maps={maps} />
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
