import { h } from 'preact';
import { Table } from './table';
export default class SortableTable<DT, AdditionalProps = {}> extends Table<DT, AdditionalProps> {
    state: {
        sortDirection: string;
        sortedIndex: null;
    };
    bestGuessCompare(a: any, b: any): any;
    sort(index: any): void;
    getHeader(index: any): h.JSX.Element;
}
