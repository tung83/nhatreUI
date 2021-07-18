/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';

import FooterFacebookIcon from './FooterFacebookIcon.inline.svg';
import { primary_color, size, yellow } from '../../styled/_design';
import PhoneIcon from '../Assets/PhoneIcon.inline.svg';

interface Props {}

const SocialWrapperTag = styled.div`
    margin: 0;
    display: flex;
    font-size: 10px;
    li {
        padding: 0 15px;
    }
    @media (min-width: 370px) {
        font-size: 12px;
    }
    @media (min-width: ${size.md}) {
        font-size: 16px;
    }
`;
const SubMenuTag = styled.li`
    list-style-type: none;
    text-align: center;
    flex-grow: 1;
    font-weight: 500;
    line-height: 14px;
    color: ${yellow};
    a {
        color: #000;
        font-weight: 700;
        &:hover {
            color: ${primary_color};
        }
    }
    a {
        display: flex;
        svg {
            width: 12px;
            margin-right: 5px;
        }
    }
    @media (min-width: ${size.md}) {
        line-height: 1.5rem;
    }
`;

interface SocialLink {
    id: any;
    name: string;
    phone: string;
    link: string;
    svg: any;
}
const socialLinks: SocialLink[] = [
    {
        id: 'facebook',
        name: `Moms' House`,
        link: 'https://www.facebook.com/Momshouse102',
        svg: FooterFacebookIcon,
        phone: '098 261 02 06',
    },
    {
        id: 'facebook',
        name: `Babies' House`,
        link: 'https://www.facebook.com/668leductho',
        svg: FooterFacebookIcon,
        phone: '090 910 71 27',
    },
];
interface Props {}
const SocialLinks: React.FC<Props> = () => {
    return (
        <SocialWrapperTag>
            {socialLinks.map((node, index: number) => {
                const SvgSocialNode = node.svg;
                return (
                    <SubMenuTag className="" key={index}>
                        <a
                            className="d-flex justify-content-center align-items-center"
                            href={node.link}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <SvgSocialNode />
                            <div>{node.name}</div>
                        </a>
                        <a href={`tel:${node.phone}`} className="phone">
                            <PhoneIcon />
                            <span>{node.phone}</span>
                        </a>
                    </SubMenuTag>
                );
            })}
        </SocialWrapperTag>
    );
};

export default SocialLinks;
