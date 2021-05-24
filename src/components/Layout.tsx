import React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import Header from './Header';
import SEO from './SEO';

import 'bootstrap/dist/css/bootstrap.min.css';
import { globalStyles, bootstrapStylesOverrides } from '../styled';
import { menu_height, size } from '../styled/_design';
import Footer from './Footer/Footer';

interface Props {
    pageTitle: string;
    isHiddenGetStartedPanel?: boolean;
    headerStyle?: string;
}

const Main = styled.main`
    padding-top: 40px;
    @media (min-width: ${size.sm}) {
        padding-top: ${menu_height}px;
    }
`;

const Layout: React.FC<Props> = ({ pageTitle, children, headerStyle }) => {
    return (
        <>
            <Global styles={[globalStyles, ...bootstrapStylesOverrides]} />
            <SEO title={pageTitle} />
            <Header headerStyle={headerStyle} />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
