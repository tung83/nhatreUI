import { useState } from 'react';
import { PaginationData } from '../components/Shared/PaginationSection';
// eslint-disable-next-line max-len
import { SortInfo } from '../templates/Resources/Layout/ResourceTopSortingSection';
import orderBy from 'lodash/orderBy';

// Hook
function usePagination(data: any[]) {
    const [currentRows, setCurrentRows] = useState<any[]>([]);
    const [paginationData, setPaginationData] = useState<PaginationData>();
    const [allRows, setAllRows] = useState<any[]>(data);
    const [resetCurrentPage, setResetCurrentPage] = useState<boolean>(false);
    const totalRecords = data.length;
    const renderingPagination = (
        all: any[],
        pagination: PaginationData | undefined,
    ) => {
        if (pagination) {
            const { currentPage, pageSize } = pagination;
            const offset = (currentPage - 1) * pageSize;
            const currentRows = all.slice(offset, offset + pageSize);
            setCurrentRows(currentRows);
        } else {
            setCurrentRows(all);
        }
    };

    const onDidResetCurrentPage = () => {
        setResetCurrentPage(false);
    };

    const onNoPaging = () => {
        setCurrentRows(allRows);
    };

    const onPageChanged = (paginationData: PaginationData) => {
        setPaginationData(paginationData);
        renderingPagination(allRows, paginationData);
    };
    const onSortingClicked = (item: SortInfo) => {
        const rows = orderBy(allRows, item.field, item.sorting);
        setAllRows(rows);

        //reset page to 1
        let pagination = paginationData;
        if (paginationData) {
            pagination = {
                ...paginationData,
                currentPage: 1,
            } as PaginationData;
            setPaginationData(pagination);
        }
        renderingPagination(rows, pagination);
        setResetCurrentPage(true);
    };
    return {
        onDidResetCurrentPage,
        onNoPaging,
        onSortingClicked,
        onPageChanged,
        currentRows,
        resetCurrentPage,
        totalRecords,
    };
}

export default usePagination;
