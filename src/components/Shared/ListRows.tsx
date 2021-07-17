/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import { ColTag, PageSection, SectionWrapper } from './Tags';
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
    .row-tag {
        flex-direction: column;
        border: solid 1px #f1b24a;
        box-shadow: 0px 0px 8px #f1b24a;
        background-color: #f9f8f7;
        border-radius: 5px;
        padding: 20px 10px;
        .item-content {
            display: flex;
            flex-direction: row;
            margin-bottom: 20px;
            .icon {
                width: 28px;
                height: 28px;
                margin-right: 10px;
                display: inline-block;
                background-image: url('/images/baby.png');
                background-size: contain;
            }
            .item-text {
                flex: 1;
            }
        }
        .item-image {
            width: 30%;
            border-radius: 5px;
        }
        .item-heading {
            text-align: center;
        }
    }
    @media (min-width: ${size.md}) {
        padding: 10px 0;
        .row-tag {
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

const ListRows: React.FC<Props> = ({ heading, subHeading, items, keyText }) => {
    return (
        <PageSectionTag>
            <SectionWrapperTag>
                <HeaderTitle className="heading-2">{heading}</HeaderTitle>
                <SubTitle
                    dangerouslySetInnerHTML={{
                        __html: subHeading,
                    }}
                ></SubTitle>
                <div className="flex row-tag">
                    {items.map((item, index) => (
                        <ColTag
                            className="item-content"
                            key={`${keyText}-${index}`}
                        >
                            <div className="icon" />
                            <div
                                className="item-text"
                                dangerouslySetInnerHTML={{
                                    __html: item.text || '',
                                }}
                            ></div>
                        </ColTag>
                    ))}
                </div>
            </SectionWrapperTag>
        </PageSectionTag>
    );
};

export default ListRows;
