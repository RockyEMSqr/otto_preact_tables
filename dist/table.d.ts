import { h, Component } from 'preact';
import { JSXInternal as JSX } from 'preact/src/jsx';
declare type ColLam<DT = any> = ((rowData: DT, rowIndex: any) => any);
export declare type ColumnDefinitionObject<DT = any> = {
    column: keyof DT | ColLam<DT>;
    sort?: ((x: DT) => any);
    format?: ((x: any) => any);
    class?: string;
    onClick?: ColLam;
};
export declare type ColumnDefinition<DT = any> = keyof DT | ColLam<DT> | ColumnDefinitionObject<DT>;
export declare type HeaderData = {
    class?: string;
    label: string;
    sortable?: boolean;
};
export declare type HeaderDef = string | HeaderData;
export declare type TfootDef = string | {
    column: any;
    class?: string;
};
export declare type TableProps<DT> = {
    data: DT[];
    rowDef?: {
        class: string | ColLam;
        columns: ColumnDefinition<DT>[];
    };
    columns?: ColumnDefinition<DT>[];
    headers?: HeaderDef[];
    tfoot?: TfootDef[][];
};
export declare class Table<DT = any, AdditionalProps = {}> extends Component<TableProps<DT> & AdditionalProps & Pick<JSX.HTMLAttributes, Exclude<keyof JSX.HTMLAttributes, keyof TableProps<DT>>>, any> {
    componentWillMount(): void;
    componentWillReceiveProps(props: any): void;
    format(v: any, format?: any): any;
    getColumn(rowData: any, columnDef: any, index: any): any;
    getTd(rowData: any, c: ColumnDefinition, index: any): h.JSX.Element;
    getRow(rowData: any, index: any): h.JSX.Element[];
    getHeader(index: any): h.JSX.Element;
    headers: HeaderDef[];
    getHeaders(): h.JSX.Element[];
    getRowClass(rowDefStringOrLambda: any, rowData: any, index: any): any;
    render(): h.JSX.Element;
    getTfootRow(tr: any, i: number): import("preact").ComponentChildren;
    getTFootColumn(x: any): any;
}
export {};
