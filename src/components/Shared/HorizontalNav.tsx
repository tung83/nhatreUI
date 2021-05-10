import styled from '@emotion/styled';
import React from 'react';
import { NavItem } from '../../shared/interfaces';
import { Link } from 'gatsby';
import {
    primary_color,
    text_grey_color,
    text_light_grey_color,
} from '../../styled/_design';

interface Props {
    links: NavItem[];
}
const HorizontalNavSection = styled.nav`
    padding: 60px 0px 20px 0px;
    border-bottom: 2px solid ${text_light_grey_color};
    color: ${text_grey_color};
    .active-link {
        color: ${primary_color};
    }
`;
export const LinkSection = styled(Link)`
    margin-right: 1rem;
    &:hover {
        text-decoration: none;
    }
`;
const HorizontalNav: React.FC<Props> = ({ links }) => {
    return (
        <HorizontalNavSection>
            {links.map(x => (
                <LinkSection
                    key={x.id}
                    to={x.link}
                    activeClassName="active-link"
                >
                    {x.title}
                </LinkSection>
            ))}
        </HorizontalNavSection>
    );
};

export default HorizontalNav;
