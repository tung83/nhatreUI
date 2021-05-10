import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import { card_shadow, content_width } from '../styled/_design';
import { Link } from 'gatsby';

const Wrapper = styled.div`
    max-width: ${content_width}px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    div {
        border: 1px solid #eee;
        border-radius: 10px;
        background: #fff;
        padding: 150px;
        box-shadow: ${card_shadow};
        margin-bottom: 50px;
    }
`;

const NotFoundPage = () => (
    <Layout pageTitle="Not Found">
        <Wrapper>
            <div>
                <h1>404 - Not Found</h1>
                <p>The page you requested was not found.</p>
                <Link to="/">Back to Home</Link>
            </div>
        </Wrapper>
    </Layout>
);

export default NotFoundPage;
