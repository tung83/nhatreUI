import React from 'react';
import styled from '@emotion/styled';

import { black_500, dark_gray, primary_color } from '../../styled/_design';
import { graphql, useStaticQuery } from 'gatsby';
import LazyImage from './LazyImage';
import { ColTag, RowTag } from './Tags';
import { ellipsis } from '../../shared/utils';
import { Container } from 'react-bootstrap';
import BlogDetailLink from './BlogDetailLink';

const NewsColTag = styled(ColTag)`
    border-top: 1px solid #e5e5e5;
    margin-top: 15px;
    padding-top: 15px;
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
    &:first-of-type {
        border-top: none;
        margin-top: 0;
        padding-top: 0;
    }
`;
const NewsItem = styled.div`
    padding: 10px;
    a {
        color: ${primary_color};
    }
`;

const NewsItemParagraphs = styled.p`
    height: 110px;
    margin-bottom: 20px;
    color: ${dark_gray};
`;

const NewsItemImage = styled.div`
    .gatsby-image-wrapper {
        border-radius: 10px;
    }
    flex: none;
    width: 100px;
    height: 100%;
    margin-right: 20px;
`;

const ItemTitle = styled.h4`
    color: ${black_500};
`;

interface Props {}

const Blogs: React.FC<Props> = () => {
    const { latestBlogs } = useStaticQuery(graphql`
        {
            latestBlogs: allStrapiBlogs(
                filter: { in_home: { eq: true } }
                limit: 2
                sort: { order: DESC, fields: post_date }
            ) {
                edges {
                    node {
                        id
                        title
                        thumbnail {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        slug
                        paragraphs {
                            id
                            body
                        }
                    }
                }
            }
        }
    `);
    const latestItems = latestBlogs.edges.map((x: any) => {
        return {
            ...x.node,
            content: ellipsis(
                (x.node.paragraphs &&
                    x.node.paragraphs[0] &&
                    x.node.paragraphs[0].body) ||
                    'TBA',
                200,
            ),
        };
    });
    return (
        <Container className="pt-1">
            <RowTag className="flex-column">
                {latestItems.map((item: any) => (
                    <NewsColTag key={item.id}>
                        <NewsItem>
                            <BlogDetailLink slug={item.slug}>
                                <ItemTitle className="heading-4-all">
                                    {item.title}
                                </ItemTitle>
                                <div className="d-flex">
                                    {item.thumbnail && (
                                        <NewsItemImage>
                                            <LazyImage src={item.thumbnail} />
                                        </NewsItemImage>
                                    )}
                                    <NewsItemParagraphs
                                        className="body-16-all"
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    ></NewsItemParagraphs>
                                </div>
                            </BlogDetailLink>
                        </NewsItem>
                    </NewsColTag>
                ))}
            </RowTag>
        </Container>
    );
};

export default Blogs;
