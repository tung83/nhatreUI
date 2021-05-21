import React from 'react';
import styled from '@emotion/styled';

import {
    black_500,
    content_width,
    dark_gray,
    primary_color,
} from '../../styled/_design';
import LazyImage from './LazyImage';
import { ColTag, RowTag } from './Tags';
import { ellipsis } from '../../shared/utils';
import { Container } from 'react-bootstrap';
import BlogDetailLink from './BlogDetailLink';
const ContainerTag = styled(Container)`
    max-width: ${content_width}px;
`;
const NewsColTag = styled(ColTag)`
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
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

interface Props {
    blogs: any;
}

const BlogItems: React.FC<Props> = ({ blogs }) => {
    const latestItems = blogs.map((x: any) => {
        const contentLimit = 200;
        const content = ellipsis(
            (x.node.paragraphs &&
                x.node.paragraphs[0] &&
                x.node.paragraphs[0].body) ||
                'TBA',
            contentLimit,
        );
        // const paragraphs = x.node.content && x.node.content.split('</p>');
        // const firstParagraph = paragraphs && paragraphs[0] + '</p>';
        return {
            ...x.node,
            content,
        };
    });
    return (
        <ContainerTag className="pt-1">
            <RowTag className="flex">
                {latestItems.map((item: any) => (
                    <NewsColTag key={item.id} md={4}>
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
        </ContainerTag>
    );
};

export default BlogItems;
