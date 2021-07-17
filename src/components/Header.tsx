import { useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FullNavMenu from './NavMenu/FullNavMenu';
import CompactNavMenu from './NavMenu/CompactNavMenu';
import {
    black_500,
    content_width,
    menu_shadow,
    primary_color,
    size,
    white_500,
} from '../styled/_design';
import useScroll from '../hooks/useScroll';
import SocialLinks from './Footer/SocialLinks';

interface Props {
    headerStyle?: string;
}

const Wrapper = styled.header`
    transition: background-color 0.3s ease-out 0s;
    z-index: 1001;
    position: fixed;
    background-color: transparent;
    top: 0;
    left: 0;
    right: 0;
    font-size: 0.8rem;
    .menu-top {
        background-color: transparent;
        .menu-item a {
            color: ${white_500};
            &.btn {
                background-color: transparent;
                border-color: ${white_500};
                &:active,
                &:hover {
                    background-color: ${white_500};
                    border-color: ${black_500};
                    color: ${black_500};
                }
            }
        }
        .navbar-dark .navbar-toggler .icon-bar {
            background-color: ${white_500};
        }
        .icon-bar {
            background-color: ${white_500};
        }
    }
    .menu-item svg path {
        fill: ${primary_color};
    }
    .menu-floating {
        border-radius: 5px;
        margin-top: 4px;
        background-color: ${white_500};
        a:not(.btn),
        .menu-item svg {
            path {
                fill: ${primary_color};
            }
        }
        box-shadow: ${menu_shadow};
        @media (min-width: ${size.md}) {
            margin-top: 20px;
        }
    }
`;

const MenuContainer = styled(Container)`
    max-width: calc(${content_width}px - 32px);
    margin: 0 auto;
    padding: 0;
`;

const Header: React.FC<Props> = ({ headerStyle }) => {
    if (!headerStyle) headerStyle = '';
    const { strapiTopMenu } = useStaticQuery(graphql`
        {
            strapiTopMenu {
                left {
                    id
                    name
                    item {
                        id
                        title
                        link
                        svg
                        icon {
                            childImageSharp {
                                fixed(height: 20) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                        enabled
                    }
                    children {
                        id
                        title
                        link
                        subTitle
                        enabled
                    }
                }
                right {
                    id
                    name
                    is_button
                    item {
                        id
                        title
                        link
                        svg
                        enabled
                        icon {
                            childImageSharp {
                                fixed(height: 20) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const [wrapperClass, setWrapperStyle] = useState<string>(
        headerStyle ? `${headerStyle}-menu-top` : 'menu-top',
    );
    const scrollUpMenu = () => {
        setWrapperStyle(`${headerStyle} menu-floating`);
    };
    const scrollDownMenu = () => {
        setWrapperStyle(headerStyle ? `${headerStyle}-menu-top` : 'menu-top');
    };
    useScroll(30, scrollUpMenu, scrollDownMenu);
    return (
        <Wrapper>
            <MenuContainer fluid className={wrapperClass}>
                <Row bsPrefix="d-none d-lg-block">
                    <Col>
                        <FullNavMenu data={strapiTopMenu}>
                            <SocialLinks />
                        </FullNavMenu>
                    </Col>
                </Row>
                <Row bsPrefix="d-lg-none d-xs-block">
                    <CompactNavMenu data={strapiTopMenu} />
                </Row>
            </MenuContainer>
        </Wrapper>
    );
};

export default Header;
