import { h } from 'preact';
import { Table, HeaderData as HD } from './table';
declare type HeaderData = HD & {
    sortable: boolean;
};
export declare class SortableTable<DT, AdditionalProps = {}> extends Table<DT, AdditionalProps> {
    state: {
        sortDirection: string;
        sortedIndex: null;
    };
    bestGuessCompare(a: any, b: any): any;
    sort(index: any): void;
    getHeaderData(index: any): HeaderData;
    getHeader(index: any): h.JSX.Element;
}
export {};
