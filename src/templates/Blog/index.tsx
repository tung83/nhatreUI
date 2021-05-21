import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { GqlCollection, Blog } from '../../shared/interfaces';
import ContentDetail from '../../components/Shared/ContentDetail';

export const query = graphql`
    query($slug: String!) {
        allStrapiBlogs(limit: 1, filter: { slug: { eq: $slug } }) {
            edges {
                node {
                    title
                    paragraphs {
                        id
                        body
                        after_image {
                            caption
                            image_postion
                            media {
                                childImageSharp {
                                    fluid(maxWidth: 960) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                    post_date
                }
            }
        }
    }
`;

interface Props {
    allStrapiBlogs: GqlCollection<Blog>;
}

const BlogPage: React.FC<PageProps<Props>> = ({ data }) => {
    const { allStrapiBlogs } = data;
    const blog = allStrapiBlogs.edges.map(x => x.node)[0];

    return <ContentDetail data={blog} />;
};

export default BlogPage;
