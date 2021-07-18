/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import { ColTag, PageSection, RowTag, SectionWrapper } from './Tags';
import { size } from '../../styled/_design';

interface ItemData {
    heading?: string;
    icon?: string;
    text?: string;
}
interface Props {
    heading: string;
    subHeading: string;
    items: ItemData[];
    keyText: string;
}

const PageSectionTag = styled(PageSection)`
    padding: 5px 0;
    background-image: url('/images/balloons.png');
    .row-tag {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .item-content {
            display: flex;
            flex-basis: auto;
            flex-direction: column;
            align-items: center;
            max-width: none;
            margin-bottom: 10px;
        }
        .item-image {
            width: 100%;
            border-radius: 5px;
        }
        .item-text,
        .item-heading {
            text-align: center;
        }
    }
    @media (min-width: ${size.md}) {
        padding: 10px 0;
        .row-tag {
            flex-direction: row;
            .item-content {
                max-width: 352px;
            }
            .item-image {
                width: 100%;
            }
        }
    }
`;
const SectionWrapperTag = styled(SectionWrapper)`
    border-radius: 4px;
`;
const HeaderTitle = styled.h1`
    padding: 45px 0 0 1rem;
`;
const SubTitle = styled.p`
    margin: 0 0 10px 0;
`;

const ListImages: React.FC<Props> = ({
    heading,
    subHeading,
    items,
    keyText,
}) => {
    return (
        <PageSectionTag>
            <SectionWrapperTag>
                <HeaderTitle className="heading-2">{heading}</HeaderTitle>
                <SubTitle
                    dangerouslySetInnerHTML={{
                        __html: subHeading,
                    }}
                ></SubTitle>
                <RowTag className="flex row-tag">
                    {items.map((item, index) => (
                        <ColTag
                            className="item-content"
                            key={`${keyText}-${index}`}
                        >
                            <img
                                title="Trường mẫu giáo Montessori tại Gò Vấp"
                                className="item-image"
                                src={item.icon}
                                alt={item.icon}
                            />
                        </ColTag>
                    ))}
                </RowTag>
            </SectionWrapperTag>
        </PageSectionTag>
    );
};

export default ListImages;
