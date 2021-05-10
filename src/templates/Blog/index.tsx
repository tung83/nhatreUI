import styled from '@emotion/styled';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { GqlCollection, Blog } from '../../shared/interfaces';
import { primary_color } from '../../styled/_design';
import {
    ContentTag,
    PageSection,
    SectionWrapper,
} from '../../components/Shared/Tags';

export const query = graphql`
    query($slug: String!) {
        allStrapiBlogs(limit: 1, filter: { slug: { eq: $slug } }) {
            edges {
                node {
                    title
                    content
                    post_date
                }
            }
        }
    }
`;
const TitleTag = styled.h2`
    color: ${primary_color};
`;

interface Props {
    allStrapiBlogs: GqlCollection<Blog>;
}

const BlogPage: React.FC<PageProps<Props>> = ({ data }) => {
    const { allStrapiBlogs } = data;
    const blog = allStrapiBlogs.edges.map(x => x.node)[0];

    return (
        <Layout pageTitle={`${blog.title}`} headerStyle="white-background">
            {' '}
            <PageSection>
                <SectionWrapper>
                    <TitleTag>{blog.title}</TitleTag>
                    {blog.content && (
                        <ContentTag
                            dangerouslySetInnerHTML={{
                                __html: blog.content,
                            }}
                        />
                    )}
                </SectionWrapper>
            </PageSection>
        </Layout>
    );
};

export default BlogPage;
