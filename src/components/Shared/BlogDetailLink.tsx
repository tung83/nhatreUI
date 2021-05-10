import React from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { blogs } from '../../../gatsby-node/dynamic-routes-prefix';
import styled from '@emotion/styled';
import { primary_color } from '../../styled/_design';

interface Props {
    slug: string;
    color?: string;
}

interface LinkProps {
    color?: string;
}
const StyledLink = styled(Link)<LinkProps>`
    color: ${({ color }) => color || primary_color};
    &:visited,
    &:hover,
    &:active {
        color: ${({ color }) => color || primary_color};
    }
`;

const BlogDetailLink: React.FC<Props> = ({ slug, color, children }) => {
    const { pathname } = useLocation();
    return (
        <StyledLink
            to={`${blogs}/${slug}`}
            state={{ back: pathname }}
            color={color}
        >
            {children || <span>Read on</span>}
        </StyledLink>
    );
};

export default BlogDetailLink;
