/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import React from 'react';
import styled from '@emotion/styled';
import Container from 'react-bootstrap/Container';

import { content_width, primary_color, size } from '../styled/_design';
import FooterFacebookIcon from '../components/Footer/FooterFacebookIcon.inline.svg';
import PhoneIcon from '../components/Assets/PhoneIcon.inline.svg';
import Layout from '../components/Layout';
import { PageSection } from '../components/Shared/Tags';

interface Props {}

const PageSectionTag = styled(PageSection)`
    padding: 5px 0;
`;
const Wrapper = styled.footer`
    svg {
        path {
        }
    }
    padding: 28px 0;
    a {
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
const Maps = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const AddressMap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-bottom: 20px;
    h3 {
        color: ${primary_color};
    }
    a.phone {
        display: flex;
        svg {
            width: 20px;
            margin-right: 10px;
        }
    }
    a.map {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 10px;
        cursor: pointer;
        position: relative;
        min-height: 280px;
    }
    img {
        min-width: 50%;
    }
    div {
        text-align: center;
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
    image: string;
    address: string;
}
const maps: MapLink[] = [
    {
        name: "Moms' House",
        address: '843/11, Nguyễn Kiệm, Gò Vấp, Hồ Chí Minh',
        phone: '098 261 02 06',
        image: '/MomsHouseMap.png',
        link:
            "https://www.google.com/maps/place/M%E1%BA%A7m+Non+Moms'house/@10.8196572,106.6759533,17z/data=!3m1!4b1!4m5!3m4!1s0x3175290414b2381f:0x35dd1b256192d179!8m2!3d10.8190618!4d106.6779074",
    },
    {
        name: "Babies' House",
        phone: '090 910 71 27',
        address: '668/2 Lê Đức Thọ, Phường 15, Gò Vấp, Hồ Chí Minh',
        image: '/BabiesHouseMap.png',
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
interface Props {
    maps: MapLink[];
}
const BottomFooter: React.FC<Props> = ({ maps }) => {
    return (
        <MenuContainer>
            <Maps>
                {maps.map((x, index) => {
                    const SvgSocialNode = socialLinks[index].svg;
                    return (
                        <AddressMap key={index} className="map-item">
                            <h3 className="heading-3">{x.name}</h3>
                            <a
                                className="d-flex align-items-center"
                                href={socialLinks[index].link}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <SvgSocialNode />
                                <div className="pt-1">
                                    {socialLinks[index].name}
                                </div>
                            </a>
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
                            >
                                <img src={x.image} alt={x.image}></img>
                            </a>
                        </AddressMap>
                    );
                })}
            </Maps>
        </MenuContainer>
    );
};

const LienHe: React.FC<Props> = () => {
    return (
        <Layout
            pageTitle="Liên hệ - Trường mẫu giáo Montessori tại Gò Vấp"
            headerStyle="white-background"
        >
            <PageSectionTag>
                <Wrapper>
                    <MenuContainer fluid>
                        <BottomFooter maps={maps} />
                    </MenuContainer>
                </Wrapper>
            </PageSectionTag>
        </Layout>
    );
};

export default LienHe;
