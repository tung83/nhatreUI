/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import { ColTag, PageSection, RowTag, SectionWrapper } from './Tags';
import { size } from '../../styled/_design';

interface Props {
    heading: string;
    image: string;
}

const PageSectionTag = styled(PageSection)`
    padding: 5px 0;
    .row-tag {
        flex-direction: column;
        .image-section {
            img {
                width: 100%;
                border-radius: 5px;
            }
        }
    }
    @media (min-width: ${size.md}) {
        padding: 10px 0;
        .row-tag {
            flex-direction: row;
            .image-section {
                width: 50%;
            }
        }
    }
`;
const SectionWrapperTag = styled(SectionWrapper)`
    border-radius: 4px;
`;
const HeaderTitle = styled.h1`
    padding: 0.5rem 0 0 1rem;
`;
const TextImageAside: React.FC<Props> = ({ heading, image, children }) => {
    return (
        <PageSectionTag>
            <SectionWrapperTag>
                <RowTag className="flex row-tag">
                    <ColTag className="aside-content">
                        <HeaderTitle className="heading-2">
                            {heading}
                        </HeaderTitle>
                        <div className="text">{children}</div>
                    </ColTag>
                    <ColTag className="image-section">
                        <img
                            title="Trường mẫu giáo Montessori tại Gò Vấp"
                            src={image}
                            alt={image}
                        />
                    </ColTag>
                </RowTag>
            </SectionWrapperTag>
        </PageSectionTag>
    );
};

export default TextImageAside;
