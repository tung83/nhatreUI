/* eslint-disable max-len */
import styled from '@emotion/styled';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import {
    ContentTag,
    PageSection,
    SectionWrapper,
} from '../../components/Shared/Tags';
import { GqlCollection, Article } from '../../shared/interfaces';
import { primary_color } from '../../styled/_design';

export const query = graphql`
    query($slug: String!) {
        allStrapiArticles(limit: 1, filter: { slug: { eq: $slug } }) {
            edges {
                node {
                    title
                    content
                }
            }
        }
    }
`;
const TitleTag = styled.h2`
    color: ${primary_color};
`;

interface Props {
    allStrapiArticles: GqlCollection<Article>;
}

const ArticlePage: React.FC<PageProps<Props>> = ({ data }) => {
    const { allStrapiArticles } = data;
    const article = allStrapiArticles.edges.map(x => x.node)[0];

    return (
        <Layout pageTitle={`${article.title}`} headerStyle="white-background">
            <PageSection>
                <SectionWrapper>
                    <TitleTag className="d-flex justify-content-center flex-column align-items-center">
                        {article.title}
                    </TitleTag>
                    {article.content && (
                        <ContentTag
                            dangerouslySetInnerHTML={{
                                __html: article.content,
                            }}
                        />
                    )}
                </SectionWrapper>
            </PageSection>
        </Layout>
    );
};

export default ArticlePage;
