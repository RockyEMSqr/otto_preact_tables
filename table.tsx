import { h, Component, Fragment } from 'preact';
import display from '@emsquared/otto_display';
import { JSXInternal as JSX } from 'preact/src/jsx';
type ColLam<DT = any> = ((rowData: DT, rowIndex) => any);
export type ColumnDefinitionObject<DT = any> = { column: keyof DT | ColLam<DT>, sort?: ((x: DT) => any), format?: ((x: any) => any), class?: string, onClick?: ColLam };
export type ColumnDefinition<DT = any> = keyof DT | ColLam<DT> | ColumnDefinitionObject<DT>;
export type HeaderData = { class?: string, label: string, sortable?: boolean };
export type HeaderDef = string | HeaderData;
export type TfootDef = string | { column: any, class?: string }
export type TableProps<DT> = { data: DT[], rowDef?: { class: string | ColLam, columns: ColumnDefinition<DT>[] }, columns?: ColumnDefinition<DT>[], headers?: HeaderDef[], tfoot?: TfootDef[][] };
export class Table<DT = any, AdditionalProps = {}> extends Component<TableProps<DT>
    & AdditionalProps
    // & Partial<JSX.HTMLAttributes>
    // & Partial<Pick<TableProps<DT>, Extract<keyof JSX.HTMLAttributes, keyof TableProps<DT>>>>
    // Include the remaining properties from Props
    & Pick<JSX.HTMLAttributes, Exclude<keyof JSX.HTMLAttributes, keyof TableProps<DT>>>
    , any> {
    componentWillMount() {
        this.setState({ data: this.props.data });
        console.log('table will Mounted')
    }
    componentWillReceiveProps(props) {
        this.setState({ data: props.data });
        console.log('table Receive Props')
    }
    format(v, format?) {
        if (!v) {
            return;
        }
        if (format) {
            return format(v);
        }
        if (!v.constructor) {
            return v;
        }
        switch (v.constructor.name) {
            case 'Date':
                return display._dt(v);
            case 'Number':
                if (Number.isSafeInteger(v)) {
                    return v;
                } else {
                    return v.toFixed(3);
                }

            default:
                return v;
        }
    }
    getColumn(rowData, columnDef, index) {
        let val: any = null;
        let col = columnDef;
        if (typeof columnDef == 'object') {
            if (columnDef.column) {
                col = columnDef.column;
            }
        }
        try {
            if (typeof col == 'function') {

                val = col(rowData, index);

            } else if (typeof col == 'string') {
                val = rowData[col];
            }
        } catch (e) {
            val = '-';
        }

        return this.format(val, columnDef.format);
    }
    getTd(rowData, c: ColumnDefinition, index) {
        let td = <td />
        let child = this.getColumn(rowData, c, index);
        if (!child) {

        } else if (!child.type) {
            td.props.children = child;
        } else if (child.type == 'td') {
            td = child;
        } else {
            td.props.children = child;
        }
        if (typeof c == 'object') {
            if (c.class) {
                td.props.class = c.class;
            }
            if (c.onClick) {
                td.props.onClick = c.onClick(rowData, index);
            }
        }


        return td;
    }
    getRow(rowData, index) {
        if (this.props.columns) {
            return this.props.columns.map(c => this.getTd(rowData, c, index));
        } else {
            return this.headers.map(c => <td>{this.format(rowData[c as string])}</td>);
        }
    }
    getHeader(index) {
        if (typeof this.headers[index] == 'string') {
            return <th>{this.headers[index]}</th>;
        }
        let headerData = this.headers[index] as HeaderData;
        return <th class={headerData.class}>{headerData.label}</th>;
    }
    headers: HeaderDef[] = [];
    getHeaders() {
        if (this.props.headers) {
            this.headers = this.props.headers;
        }
        if (!this.headers) {
            this.headers = Object.keys(this.props.data[0]);
        }

        return this.headers.map((x, i) => this.getHeader(i));

    }
    getRowClass(rowDefStringOrLambda, rowData, index) {
        if (typeof rowDefStringOrLambda == 'string') {
            return rowDefStringOrLambda;
        }
        return rowDefStringOrLambda(rowData);
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
                    {this.props.rowDef && this.state.data.map((rowData, index) => <tr class={this.getRowClass(this.props.rowDef?.class, rowData, index)}>
                        {this.props.rowDef?.columns.map(c=>this.getTd(rowData, c, index))}
                    </tr>)}
                    {!this.props.rowDef && this.state.data.map((r, i) => <tr class={r.class || null}>
                        {this.getRow(r, i)}
                    </tr>)}
                </tbody>
                {this.props.tfoot && <tfoot>{this.props.tfoot.map((tr, i) => <tr>{this.getTfootRow(tr, i)}</tr>)}</tfoot>}
            </table>
        </div>
    }
    getTfootRow(tr, i: number): import("preact").ComponentChildren {
        console.log(tr)
        return <Fragment>
            {tr.map(x => this.getTFootColumn(x))}
        </Fragment>;
    }
    getTFootColumn(x: any): any {
        if (typeof x == 'string') {
            return <td>{x}</td>
        }
        let td = <td />
        if (x.class) {
            td.props.class = x.class;
        }
        if (x.column) {
            td.props.children = x.column;
        }
        return td;
    }

}