import SortableTable from "./sortableTable";
import { Component, JSX } from 'preact'
import { TfootDef } from "./table";
export type PaginatedHeader<T = {}> = { class?: string, label: any, sortable?: boolean, sortKey?: keyof T };
export type PaginatedHeaderDef<T> = string | PaginatedHeader<T>;
type ColLam<DT = any> = ((rowData: DT, rowIndex) => any);
export type ColumnDefinitionObject<DT = any> = { column: keyof DT | ColLam<DT>, sort?: ((x: DT) => any), format?: ((x: any) => any), class?: string, onClick?: ColLam };
export type ColumnDefinition<DT = any> = keyof DT | ColLam<DT> | ColumnDefinitionObject<DT>;
export type GTableProps<DT> = { showPageNumberInput?: boolean, maxPagButtons?: number, columns?: ColumnDefinition<DT>[], headers?: PaginatedHeaderDef<DT>[], tfoot?: TfootDef[][] };
export type PaginatedTableProps<T> = GTableProps<T> & {
    pageSize: number,
    restClient: PaginatedRestClient<T>,
    ref?: any,
    onRowClick?: (row) => void,
    headerLabel: string | JSX.Element,
    filterForm: JSX.Element,
    actions: JSX.Element,
    rowTemplate?: (d: T, i: number) => JSX.Element
}
export interface PaginatedRestClient<DT = {}> {
    page(crit, page, pageSize: number, sortKey?, sortDirection?): Promise<{ count: number, data: DT[] }>;
}
export class PaginatedSortableTable<T = {}> extends SortableTable<T, PaginatedTableProps<T> & GTableProps<T> & { data: any[], page: number, filterCrit: any, parent: Component, restClient: PaginatedRestClient }>{
    // props: any
    async sort(index) {
        let selectedHeader = this.headers[index];

        if ((selectedHeader as PaginatedHeader).sortKey) {
            let sortDirection = (!this.state.sortDirection ? 'a' : this.state.sortDirection == 'a' ? 'd' : 'a')
            let d = await this.props.restClient.page(this.props.filterCrit, this.props.page, this.props.pageSize, (selectedHeader as PaginatedHeader).sortKey, sortDirection);
            this.setState({ sortedIndex: index, sortDirection: sortDirection });
            this.props.parent.setState({ data: d.data, sortKey: (selectedHeader as PaginatedHeader).sortKey, sortDirection: sortDirection })
        } else {
            super.sort(index);
        }


    }
    getHeader(index) {
        let cls = " ";
        let label = "";
        // todo(rc): handle element being entered directly e.g. headers = {[<h1></h1>]}
        let hd: PaginatedHeader<any> = { label: '', class: '', sortable: false, sortKey: undefined };
        if (this.props.headers && typeof this.props.headers[index] == 'string') {

            label = this.props.headers[index] as string;
            hd.label = label;
            if (label) {
                hd.sortable = true;
            }

        } else {
            if(this.props.headers){
                hd = this.props.headers[index] as PaginatedHeader<any>;
            }

            label = hd.label;
            if (hd.sortKey) {
                hd.sortable = true;
            }
        }
        if (hd.sortable) {
            cls = 'sortable ' + (hd.class ? hd.class : '');
        }
        return <th class={(this.state.sortedIndex == index ? this.state.sortDirection : '') + ' ' + (cls ? cls : '')} onClick={x => hd.sortable && this.sort(index)} >{label}
            {this.state.sortDirection == 'a' && this.state.sortedIndex == index && <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" class="sorted down">
                <path d="m 13,6 -5,5 -5,-5 z" fill="#117cc0" />
            </svg>}
            {this.state.sortDirection == 'd' && this.state.sortedIndex == index && <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" class="sorted up">
                <path d="m 13,10 -5,-5 -5,5  z" fill="#117cc0" />
            </svg>}
            {hd && hd.sortable && this.state.sortedIndex != index && <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" class="unsorted">
                <path d="m 13,9 -5,-5 -5,5  z" fill="#117cc0" />
                <path d="m 13,11 -5,5 -5,-5 z" fill="#117cc0" />
            </svg>}
        </th>;
    }
    render() {
        return <div class="o-table">
            <table class={this.props.class}>
                <thead>
                    <tr>
                        {this.getHeaders()}
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((r, i) => <>
                        {this.props.rowTemplate && this.props.rowTemplate(r, i)}
                        {!this.props.rowTemplate && <tr onClick={_ => this.props.onRowClick && this.props.onRowClick(r)}>{this.getRow(r, i)}</tr>}
                    </>
                    )}
                </tbody>
                {this.props.tfoot && <tfoot>{this.props.tfoot.map((tr, i) => <tr>{this.getTfootRow(tr, i)}</tr>)}</tfoot>}
            </table>
        </div>
    }
}