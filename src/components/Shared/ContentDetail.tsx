/* eslint-disable max-len */
import styled from '@emotion/styled';
import React from 'react';
import Layout from '../Layout';
import LazyImage from './LazyImage';
import { PageSection, SectionWrapper } from './Tags';
import { MediaExtra } from '../../shared/interfaces';
import {
    content_width,
    dark_gray,
    primary_color,
    size,
} from '../../styled/_design';

const TitleTag = styled.h2`
    color: ${primary_color};
`;

interface ParagraphProps {
    spacing?: number;
}
const colPadding = 15;
const PageSectionTag = styled(PageSection)`
    @media (min-width: ${size.lg}) {
        padding: 80px 0 130px 0;
    }
`;

export const TitleLine = styled.div`
    max-width: ${content_width}px;
    text-align: center;
    h1 {
        margin: 0;
    }
`;
const ParagraphSectionWrapper = styled.div<ParagraphProps>`
    .content-inner {
        max-width: ${content_width}px;
        margin: 0 auto;
    }
    .paragrahp-row {
        @media (min-width: ${size.lg}) {
            width: 100%;
            margin-right: -${colPadding}px;
            margin-left: -${colPadding}px;
        }
    }
    .image-container {
        width: 100%;
        @media (min-width: ${size.lg}) {
            width: auto;
        }
    }
    .full-width-image .lazy-image-wrapper {
        width: 100vw;
        margin-right: -15px;
        margin-left: -15px;
        @media (min-width: ${size.lg}) {
            margin-right: 0;
            margin-left: 0;
        }
    }
    .col-half {
        @media (min-width: ${size.lg}) {
            flex: 0 0 50%;
            padding-right: ${colPadding}px;
            padding-left: ${colPadding}px;
        }
    }
    p {
        margin-bottom: 20px;
    }
    .lazy-image-wrapper {
        height: auto !important;
    }
    .spacing {
        margin-bottom: ${({ spacing }) => `${spacing}px`};
    }
`;

const ParagraphImageCaption = styled.div`
    padding: 10px 0;
    color: ${dark_gray};
`;
interface Props {
    data: any;
}

const ContentDetail: React.FC<Props> = ({ data }) => {
    const renderParagraphImage = (item?: MediaExtra) => {
        if (!item) return null;
        const { media, caption } = item;
        return (
            <>
                <LazyImage src={media} />
                {caption && (
                    <ParagraphImageCaption className="content-inner">
                        <span
                            className="label-12 image-caption"
                            dangerouslySetInnerHTML={{ __html: caption }}
                        />
                    </ParagraphImageCaption>
                )}
            </>
        );
    };
    return (
        <Layout pageTitle={`${data.title}`} headerStyle="white-background">
            <PageSection>
                <SectionWrapper>
                    <TitleTag className="d-flex justify-content-center flex-column align-items-center">
                        {data.title}
                    </TitleTag>
                </SectionWrapper>
            </PageSection>
            <PageSectionTag>
                <ParagraphSectionWrapper spacing={30}>
                    {data.paragraphs.map((p: any) => {
                        let paraWrapperClass = 'spacing  ';
                        let paraRowClass = ' ';
                        let colHaftClass = '';
                        if (p.after_image?.image_postion === 'Right') {
                            paraWrapperClass += 'content-inner';
                            paraRowClass += 'paragrahp-row d-flex flex-wrap';
                            colHaftClass = 'col-half';
                        }
                        if (p.after_image?.image_postion === 'Left') {
                            paraWrapperClass += 'content-inner ';
                            paraRowClass +=
                                'paragrahp-row d-flex flex-wrap flex-row-reverse';
                            colHaftClass = 'col-half';
                        }
                        return (
                            <div key={p.id} className={paraWrapperClass}>
                                <div className={paraRowClass}>
                                    <p
                                        className={`body-16-all ${colHaftClass} content-inner`}
                                        dangerouslySetInnerHTML={{
                                            __html: p.body || '',
                                        }}
                                    />
                                    {p.after_image && (
                                        <div
                                            className={
                                                p.after_image.image_postion ===
                                                'Full_Width'
                                                    ? 'image-container full-width-image'
                                                    : `${colHaftClass} image-container content-inner`
                                            }
                                        >
                                            {renderParagraphImage(
                                                p.after_image,
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </ParagraphSectionWrapper>
            </PageSectionTag>
        </Layout>
    );
};

export default ContentDetail;
