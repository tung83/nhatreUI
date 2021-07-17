/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/Layout';
import BieuPhi from '../../components/Shared/BieuPhi';

const HomePage = () => {
    return (
        <Layout
            pageTitle="Biểu phí nhập học - Trường song ngữ theo phương pháp montessori chất lượng tại Gò Vấp"
            headerStyle="white-background"
        >
            <BieuPhi />
        </Layout>
    );
};

export default HomePage;
