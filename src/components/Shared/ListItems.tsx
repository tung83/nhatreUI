/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import { ColTag, PageSection, RowTag, SectionWrapper } from './Tags';
import { size } from '../../styled/_design';

interface ItemData {
    heading: string;
    icon: string;
    text: string;
}
interface Props {
    heading: string;
    subHeading: string;
    items: ItemData[];
    keyText: string;
}

const PageSectionTag = styled(PageSection)`
    padding: 5px 0;
    .row-tag {
        flex-direction: column;
        .item-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
        }
        .item-image {
            width: 30%;
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
            .item-image {
                width: 20%;
            }
        }
    }
`;
const SectionWrapperTag = styled(SectionWrapper)`
    border-radius: 4px;
`;
const HeaderTitle = styled.h4`
    padding: 0.5rem 0 0 1rem;
`;
const SubTitle = styled.p`
    max-width: 950px;
    margin: 0 0 10px 0;
`;

const ListItems: React.FC<Props> = ({
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
                                className="item-image"
                                src={item.icon}
                                alt={item.icon}
                            />
                            <h4 className="item-heading heading-3">
                                {item.heading}
                            </h4>
                            <div
                                className="item-text"
                                dangerouslySetInnerHTML={{
                                    __html: item.text,
                                }}
                            ></div>
                        </ColTag>
                    ))}
                </RowTag>
            </SectionWrapperTag>
        </PageSectionTag>
    );
};

export default ListItems;
