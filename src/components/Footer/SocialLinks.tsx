/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';

import FooterFacebookIcon from './FooterFacebookIcon.inline.svg';
import { primary_color, size, yellow } from '../../styled/_design';

interface Props {}

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
const SubMenuTag = styled.li`
    list-style-type: none;
    text-align: center;
    flex-grow: 1;
    font-weight: 500;
    line-height: 24px;
    color: ${yellow};
    a {
        color: #000;
        font-weight: 700;
        &:hover {
            color: ${primary_color};
        }
    }
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
interface Props {}
const SocialLinks: React.FC<Props> = () => {
    return (
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
    );
};

export default SocialLinks;
