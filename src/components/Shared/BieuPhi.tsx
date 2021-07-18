/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import { PageSection, SectionWrapper } from './Tags';
import { base_font_size, size } from '../../styled/_design';

interface Props {}

const PageSectionTag = styled(PageSection)`
    padding: 5px 0;
    .hocphi-truong-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: wrap;
        font-size: 15px;
        ol {
            padding: 0 5px 0 16px;
        }
    }
    .hocphi-truong {
        flex-direction: column;
        border: solid 1px #f1b24a;
        background-color: #f9f8f7;
        box-shadow: 0px 0px 8px #f1b24a;
        border-radius: 5px;
        padding: 20px 20px;
        margin-bottom: 15px;
        max-width: 655px;
        li > div {
            display: flex;
            .li-hocphi {
                flex: 1;
            }
        }
        .table-hocphi {
            width: fit-content;
        }
        .table-column {
            max-width: 310px;
        }
        .table-header {
            font-weight: 700;
        }
        .table-header,
        .table-cell {
            border-collapse: collapse;
            border: 1px solid #000;
            padding: 4px 7px;
        }
        .table-cell {
            border-top: none;
        }
        .table-column:nth-of-type(2) {
            .table-header,
            .table-cell {
                border-left: none;
                border-right: none;
            }
        }
        .big-column {
            max-width: 240px;
        }
        .cell-big {
            min-height: 106px;
        }
    }
    .hocphi-giam {
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        .hocphi-giam-icon {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            display: inline-block;
            background-image: url('/images/surprise.png');
            background-size: contain;
        }
        .hocphi-giam-text {
            color: #164a41;
            flex: 1;
        }
    }
    .row-tag {
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
        .hocphi-truong-wrapper {
            flex-direction: row;
            justify-content: space-around;
            font-size: ${base_font_size};
            ol {
                padding: 0 5px 0 40px;
            }
        }
        .hocphi-truong {
            li > div {
                display: flex;
                .li-hocphi {
                    width: 300px;
                }
            }
            .cell-big {
                min-height: 78px;
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
    color: #164a41;
    font-weight: 700;
`;

const ListRows: React.FC<Props> = () => {
    return (
        <PageSectionTag>
            <SectionWrapperTag>
                <HeaderTitle className="heading-2">Học phí</HeaderTitle>
                <div className="hocphi-giam">
                    <div className="hocphi-giam-icon" />
                    <div className="hocphi-giam-text">
                        Giảm học phí: Giảm 10% học phí cho Bé thứ 2 và 15% học
                        phí cho Bé thứ 3 của anh/chị/em ruột trong cùng 1 gia
                        đình.
                    </div>
                </div>
                <div className="hocphi-truong-wrapper">
                    <div className="hocphi-truong">
                        <SubTitle>MOMS' HOUSE</SubTitle>
                        <ol>
                            <li>
                                <div>
                                    <div className="li-hocphi">
                                        Phí cơ sở vật chất:
                                    </div>
                                    3.000.000đ/năm.
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="li-hocphi">
                                        Phí học liệu, học phẩm:
                                    </div>
                                    1.200.000đ/năm.
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="li-hocphi2">
                                        Khoản thu hàng tháng (bao gồm học phí,
                                        tiền ăn):
                                    </div>
                                </div>

                                <div className="table-hocphi">
                                    <div className="table-column">
                                        <div className="table-header">Lớp</div>
                                        <div className="table-cell">
                                            0-3 tuổi
                                        </div>
                                        <div className="table-cell">
                                            3-6 tuổi
                                        </div>
                                    </div>
                                    <div className="table-column">
                                        <div className="table-header">
                                            Học phí
                                        </div>
                                        <div className="table-cell">
                                            6.100.000 đồng/tháng
                                        </div>
                                        <div className="table-cell">
                                            5.700.000 đồng/tháng
                                        </div>
                                    </div>
                                    <div className="table-column big-column">
                                        <div className="table-header">
                                            Tiền ăn
                                        </div>
                                        <div className="table-cell cell-big">
                                            1.430.000 đồng/tháng (65.000
                                            đồng/ngày)
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className="hocphi-truong">
                        <SubTitle>BABIES' HOUSE</SubTitle>
                        <ol>
                            <li>
                                <div>
                                    <div className="li-hocphi">
                                        Phí cơ sở vật chất:
                                    </div>
                                    4.500.000đ/năm.
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="li-hocphi">
                                        Phí học liệu, học phẩm:
                                    </div>
                                    1.200.000đ/năm.
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="li-hocphi2">
                                        Khoản thu hàng tháng (bao gồm học phí,
                                        tiền ăn):
                                    </div>
                                </div>
                                <div className="table-hocphi">
                                    <div className="table-column">
                                        <div className="table-header">Lớp</div>
                                        <div className="table-cell">
                                            0-3 tuổi
                                        </div>
                                        <div className="table-cell">
                                            3-6 tuổi
                                        </div>
                                    </div>
                                    <div className="table-column">
                                        <div className="table-header">
                                            Học phí
                                        </div>
                                        <div className="table-cell">
                                            6.200.000 đồng/tháng
                                        </div>
                                        <div className="table-cell">
                                            6.100.000 đồng/tháng
                                        </div>
                                    </div>
                                    <div className="table-column big-column">
                                        <div className="table-header">
                                            Tiền ăn
                                        </div>
                                        <div className="table-cell cell-big">
                                            1.430.000 đồng/tháng (65.000
                                            đồng/ngày)
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </SectionWrapperTag>
        </PageSectionTag>
    );
};

export default ListRows;
