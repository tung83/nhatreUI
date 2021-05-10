import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { primary_color } from '../../styled/_design';
const range = (from: number, to: number, step = 1): any[] => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
};
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';
const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .page-item.active .page-link {
        background-color: ${primary_color};
        border-color: ${primary_color};
    }
    .page-link {
        color: ${primary_color};
    }
`;
export interface PaginationData {
    currentPage: number;
    totalRecords: number;
    pageSize: number;
    totalPages: number;
}
interface Props {
    totalRecords?: number;
    pageSize?: number;
    pageNeighbours?: number;
    onPageChanged(paginationData: PaginationData): void;
    resetCurrentPage: boolean;
    onDidResetCurrentPage(): void;
    onNoPaging(): void;
}
const PaginationSection: React.FC<Props> = ({
    totalRecords,
    pageSize,
    pageNeighbours,
    onPageChanged,
    resetCurrentPage,
    onDidResetCurrentPage,
    onNoPaging,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSizeValue = pageSize ? pageSize : 30;
    const totalRecordsValue = totalRecords ? totalRecords : 0;
    const pageNeighboursValue = pageNeighbours
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0;

    const totalPagesValue = Math.ceil(totalRecordsValue / pageSizeValue);

    useEffect(() => {
        if (!totalRecords || totalPagesValue === 1) onNoPaging();
    }, []);
    if (!totalRecords || totalPagesValue === 1) {
        return null;
    }
    const fetchPageNumbers = (): any[] => {
        const totalPagesNumber = totalPagesValue;
        const currentPageNumber = currentPage;
        const pageNeighboursNumber = pageNeighboursValue;
        const totalNumbers = pageNeighboursNumber * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPagesNumber > totalBlocks) {
            let pages = [];

            const leftBound = currentPageNumber - pageNeighboursNumber;
            const rightBound = currentPageNumber + pageNeighboursNumber;
            const beforeLastPage = totalPagesNumber - 1;

            const startPage = leftBound > 2 ? leftBound : 2;
            const endPage =
                rightBound < beforeLastPage ? rightBound : beforeLastPage;

            pages = range(startPage, endPage);

            const pagesCount = pages.length;
            const singleSpillOffset = totalNumbers - pagesCount - 1;

            const leftSpill = startPage > 2;
            const rightSpill = endPage < beforeLastPage;

            const leftSpillPage = LEFT_PAGE;
            const rightSpillPage = RIGHT_PAGE;

            if (leftSpill && !rightSpill) {
                const extraPages = range(
                    startPage - singleSpillOffset,
                    startPage - 1,
                );
                pages = [leftSpillPage, ...extraPages, ...pages];
            } else if (!leftSpill && rightSpill) {
                const extraPages = range(
                    endPage + 1,
                    endPage + singleSpillOffset,
                );
                pages = [...pages, ...extraPages, rightSpillPage];
            } else if (leftSpill && rightSpill) {
                pages = [leftSpillPage, ...pages, rightSpillPage];
            }

            return [1, ...pages, totalPagesNumber];
        }

        return range(1, totalPagesNumber);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, []);

    useEffect(() => {
        if (resetCurrentPage) {
            setCurrentPage(1);
            onDidResetCurrentPage();
        }
    }, [resetCurrentPage]);
    useEffect(() => {
        if (currentPage > 0) {
            const currentPageValue = Math.max(
                0,
                Math.min(currentPage, totalPagesValue),
            );

            const paginationData: PaginationData = {
                currentPage: currentPageValue,
                totalPages: totalPagesValue,
                pageSize: pageSizeValue,
                totalRecords: totalRecordsValue,
            };
            onPageChanged(paginationData);
        }
    }, [currentPage]);

    const handleClickPage = (
        page: number,
        evt: React.MouseEvent<HTMLElement>,
    ) => {
        evt.preventDefault();
        setCurrentPage(page);
    };
    const handleMovePrev = (evt: React.MouseEvent<HTMLElement>) => {
        evt.preventDefault();
        setCurrentPage(currentPage - pageNeighboursValue * 2 - 1);
    };

    const handleMoveNext = (evt: React.MouseEvent<HTMLElement>) => {
        evt.preventDefault();
        setCurrentPage(currentPage + pageNeighboursValue * 2 + 1);
    };
    const pages = fetchPageNumbers();
    return (
        <SectionContainer>
            <Pagination>
                {pages.map((page: any, index: number) => {
                    if (page === LEFT_PAGE) {
                        return (
                            <Pagination.Prev
                                key={index}
                                onClick={handleMovePrev}
                            />
                        );
                    }
                    if (page === RIGHT_PAGE) {
                        return (
                            <Pagination.Next
                                key={index}
                                onClick={handleMoveNext}
                            />
                        );
                    }
                    return (
                        <Pagination.Item
                            active={currentPage === page}
                            key={index}
                            onClick={e => handleClickPage(page, e)}
                        >
                            {page}
                        </Pagination.Item>
                    );
                })}
            </Pagination>
        </SectionContainer>
    );
};

export default PaginationSection;
