/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { PageSection, SectionWrapper } from '../Shared/Tags';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { size } from '../../styled/_design';
import BlogItems from '../Shared/BlogItems';

interface Props {}

const PageSectionTag = styled(PageSection)`
    padding: 5px 0;
    @media (min-width: ${size.sm}) {
        padding: 10px 0;
    }
`;
const SectionWrapperTag = styled(SectionWrapper)`
    background: #f7f7f7;
    border-radius: 4px;
`;
const HeaderTitle = styled.h4`
    padding: 0.5rem 0 0 1rem;
`;
const tabs = [{ label: 'Toán' }, { label: 'Thực hành cuộc sống' }];
const tabs36 = [{ label: 'Toán' }, { label: 'Thực hành cuộc sống' }];
const HomeMontessori: React.FC<Props> = () => {
    const { items03, items36 } = useStaticQuery(graphql`
        {
            items03: allStrapiBlogs(
                filter: {
                    in_home: { eq: true }
                    blog_tag: { level1: { eq: "Montessori03" } }
                }
                limit: 10
                sort: { order: DESC, fields: post_date }
            ) {
                edges {
                    node {
                        id
                        title
                        slug
                        content
                        thumbnail {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        blog_tag {
                            level1
                            level2
                        }
                    }
                }
            }
            items36: allStrapiBlogs(
                filter: {
                    in_home: { eq: true }
                    blog_tag: { level1: { eq: "Montessori36" } }
                }
                limit: 10
                sort: { order: DESC, fields: post_date }
            ) {
                edges {
                    node {
                        id
                        title
                        slug
                        paragraphs {
                            id
                            body
                        }
                        thumbnail {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        blog_tag {
                            level1
                            level2
                        }
                    }
                }
            }
        }
    `);
    const renderItems = (items: any) => items && <BlogItems blogs={items} />;
    return (
        <>
            <PageSectionTag>
                <SectionWrapperTag>
                    <HeaderTitle>
                        Chương trình Montessori Lớp 0-3 tuổi
                    </HeaderTitle>
                    <Tabs>
                        {tabs?.map((tab: any, index: number) => (
                            <Tab
                                key={index}
                                eventKey={index.toString()}
                                title={tab.label}
                            >
                                {renderItems(
                                    items03.edges?.filter(
                                        (x: any) =>
                                            x.node?.blog_tag?.level2 ===
                                            tab.label,
                                    ),
                                )}
                            </Tab>
                        ))}
                    </Tabs>
                </SectionWrapperTag>
            </PageSectionTag>
            <PageSectionTag>
                <SectionWrapperTag>
                    <HeaderTitle>
                        Chương trình Montessori Lớp 3-6 tuổi
                    </HeaderTitle>
                    <Tabs>
                        {tabs36?.map((tab: any, index: number) => (
                            <Tab
                                key={index}
                                eventKey={index.toString()}
                                title={tab.label}
                            >
                                {renderItems(
                                    items36.edges?.filter(
                                        (x: any) =>
                                            x.node?.blog_tag?.level2 ===
                                            tab.label,
                                    ),
                                )}
                            </Tab>
                        ))}
                    </Tabs>
                </SectionWrapperTag>
            </PageSectionTag>
        </>
    );
};

export default HomeMontessori;
