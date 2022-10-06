import { h } from 'preact';
import  {Table, ColumnDefinitionObject, HeaderData as HD } from './table';

type HeaderData = HD & { sortable: boolean }
export class SortableTable<DT, AdditionalProps = {}> extends Table<DT, AdditionalProps> {
    state = { sortDirection: '', sortedIndex: null }
    // sortDirection = 'asc';
    bestGuessCompare(a, b) {
        if (typeof a == 'number' && typeof b == 'number') {
            if (this.state.sortDirection == 'a') {
                return a - b;
            } else {
                return b - a;
            }
        } else if (typeof a == 'number' || typeof b == 'number') {
            if (!a) {
                a = Number.NEGATIVE_INFINITY;
            }
            if (!b) {
                b = Number.NEGATIVE_INFINITY;
            }
            if (this.state.sortDirection == 'a') {
                return a - b;
            } else {
                return b - a;
            }
        }
        else if (typeof a == 'string' && typeof b == 'string') {
            if (this.state.sortDirection == 'a') {
                return a.localeCompare(b);
            } else {
                return b.localeCompare(a);
            }
        }
        else if (typeof a == 'string' || typeof b == 'string') {
            if (!a) {
                a = '';
            }
            if (!b) {
                b = '';
            }
            if (this.state.sortDirection == 'a') {
                return a.localeCompare(b);
            } else {
                return b.localeCompare(a);
            }
        }
        if (!a) {
            a = 0;
        }
        if (!b) {
            b = 0;
        }
        if (this.state.sortDirection == 'a') {
            return a - b;
        } else {
            return b - a;
        }
    }
    sort(index) {
        // console.time('Sort')
        if (!this.props.columns && !this.props.rowDef) {
            return;
        }
        let d = this.props.data.sort((a, b) => {
            let av;
            let bv;
            let col;
            if(this.props.columns){
                col =this.props.columns[index];
            }else if(this.props.rowDef?.columns){
                col = this.props.rowDef?.columns[index];
            }
            if (col) {
                if ((col as ColumnDefinitionObject).sort) {
                    let colDef: ColumnDefinitionObject = col as ColumnDefinitionObject;
                    if(colDef && colDef.sort){
                        av = colDef.sort(a);
                        bv = colDef.sort(b);
                    }
                } else {
                    av = this.getColumn(a, col, null);
                    bv = this.getColumn(b, col, null);
                }
            }

            return this.bestGuessCompare(av, bv);

        });
        this.setState({ sortedIndex: index, data: d, sortDirection: (!this.state.sortDirection ? 'a' : this.state.sortDirection == 'a' ? 'd' : 'a') });
        // console.timeEnd('Sort')
    }
    getHeader(index) {
        let cls = " ";
        let label = "";
        let hd: HeaderData = { label: '', class: '', sortable: false };
        if (this.props.headers) {
            if (typeof this.props.headers[index] == 'string') {

                label = this.props.headers[index] as string;
                hd.label = label;
                if (label) {
                    hd.sortable = true;
                }
            }
        } else {
            if (this.props.headers) {
                hd = this.props.headers[index] as HeaderData;
            }
            label = hd.label;
        }

        if (hd.sortable) {
            cls = 'sortable ' + (hd.class ? hd.class : '');
        }
        return <th class={(this.state.sortedIndex == index ? this.state.sortDirection : '') + ' ' + (cls ? cls : '')} onClick={this.sort.bind(this, index)} >{label}
            {this.state.sortDirection == 'd' && this.state.sortedIndex == index && <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16">
                <path d="m 13,6 -5,5 -5,-5 z" fill="#117cc0" />
            </svg>}
            {this.state.sortDirection == 'a' && this.state.sortedIndex == index && <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16">
                <path d="m 13,10 -5,-5 -5,5  z" fill="#117cc0" />
            </svg>}
            {hd && hd.sortable && this.state.sortedIndex != index && <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16">
                <path d="m 13,9 -5,-5 -5,5  z" fill="#117cc0" />
                <path d="m 13,11 -5,5 -5,-5 z" fill="#117cc0" />
            </svg>}
        </th>;
    }
}