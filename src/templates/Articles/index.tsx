/* eslint-disable max-len */
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import ContentDetail from '../../components/Shared/ContentDetail';
import { GqlCollection, Article } from '../../shared/interfaces';

export const query = graphql`
    query($slug: String!) {
        allStrapiArticles(limit: 1, filter: { slug: { eq: $slug } }) {
            edges {
                node {
                    title
                    paragraphs {
                        id
                        heading
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
                }
            }
        }
    }
`;
interface Props {
    allStrapiArticles: GqlCollection<Article>;
}

const ArticlePage: React.FC<PageProps<Props>> = ({ data }) => {
    const { allStrapiArticles } = data;
    const article = allStrapiArticles.edges.map(x => x.node)[0];

    return <ContentDetail data={article} />;
};

export default ArticlePage;
