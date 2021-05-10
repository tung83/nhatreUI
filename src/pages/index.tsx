/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import HomeHeader from '../components/Home/HomeHeader';
import HomeMontessori from '../components/Home/HomeMontessori';
import HomeNutri from '../components/Home/HomeNutri';

const HomePage = () => {
    const { strapiPageHome } = useStaticQuery(graphql`
        {
            strapiPageHome {
                header {
                    id
                    heading_text
                    heading_subText
                    heading_image {
                        childImageSharp {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `);
    return (
        <Layout
            pageTitle="Trường song ngữ theo phương pháp montessori chất lượng tại Gò Vấp"
            headerStyle="white-background"
        >
            <HomeHeader header={strapiPageHome.header} />
            <HomeMontessori />
            <HomeNutri />
        </Layout>
    );
};

export default HomePage;
