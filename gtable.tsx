// import { Component } from "preact";
// import { PaginatedTableProps } from "./paginatedTable";

// export class GTable<T = any> extends Component<PaginatedTableProps<T & { collapsed?: boolean, dirty?: boolean }> & {
// 	showQuickSearchInput?: boolean
// 	OnRowClick?: (r: T) => void,
// 	addCollapsed?: boolean,
// 	actionsInline?: boolean,
// 	filterInline?: boolean,
// 	filterClass?: string,
// 	class?: string,
// 	suppressOnPropChange?: boolean,
// 	onCritChange?: (crit: any) => void,
// 	exportExcel?: string
// },
// 	{
// 		page: number, data: T[], count: number, crit: any,
// 		pageSize: number,
// 		loading: boolean,
// 		sortKey: string,
// 		sortDirection: string
// 	}> {
// 	state = { data: [], page: 1, pageSize: 0, count: 0, crit: {}, sortKey: null, sortDirection: 'a', loading: true }
// 	tableRef: EventTarget;
// 	quickSearchInp: any;
// 	getData() {
// 		return this.state.data;
// 	}
// 	async load() {
// 		let pageSize = localStorage.getItem('PAGE_SIZE') || 10;
// 		await this.setState({ pageSize: Number(pageSize) });
// 		let res = await this.props.restClient.page({}, this.state.page, this.state.pageSize);
// 		if (this.props.addCollapsed) {
// 			res.data.forEach((d, i) => {
// 				d.collapsed = i > 0;
// 			});
// 		}
// 		// console.log('Data', res.data);

// 		await this.setState({ ...res, loading: false })
// 	}
// 	linkThisChild(c) {
// 		if (c && c.type) {
// 			if (!c.linked) {
// 				c.linked = true;
// 				c.props.linkTo = this;
// 			}
// 			if (c.type == GQuickPick) {
// 				c.props.crit = this.state.crit;
// 			} else {
// 				if (c.props.name) {
// 					if (!(c.props.name as string).startsWith('crit.')) {
// 						c.props.name = 'crit.' + c.props.name
// 					}
// 				} else {
// 					c.props.name = 'notUsed'
// 				}
// 			}
// 		}
// 		if (c && c.props?.children) {
// 			let children = c.props.children;
// 			if (!Array.isArray(c.props.children)) {
// 				children = [c.props.children];
// 			}
// 			for (let c of children) {
// 				this.linkThisChild(c);
// 			}
// 		}
// 	}
// 	// linkThisActionButton(child) {
// 	// 	console.log(child)
// 	// 	if (child) {
// 	// 		if (child.type == 'button') {
// 	// 			console.log(child.props.onClick);
// 	// 		}


// 	// 		if (child.props?.children) {
// 	// 			let children = child.props.children;
// 	// 			if (!Array.isArray(children)) {
// 	// 				children = [children];
// 	// 			}
// 	// 			for (let c of children) {
// 	// 				this.linkThisActionButton(c);
// 	// 			}
// 	// 		}
// 	// 	}
// 	// }
// 	// linkActionButtons(actions) {
// 	// 	let children = actions.props.children;
// 	// 	if (!Array.isArray(children)) {
// 	// 		children = [children];
// 	// 	}
// 	// 	for (let c of children) {
// 	// 		this.linkThisActionButton(c);
// 	// 	}

// 	// }
// 	linkChildren(props) {
// 		let children = props.filterForm.props.children;
// 		if (!Array.isArray(props.filterForm.props.children)) {
// 			children = [props.filterForm.props.children];
// 		}
// 		for (let c of children) {
// 			this.linkThisChild(c);
// 		}
// 		// this.linkActionButtons(props.actions);

// 	}
// 	refresh() {
// 		this.setState({});
// 	}
// 	async componentWillMount() {
// 		this.setState({ loading: true })
// 		// super.componentWillMount();
// 		// console.log(this.props.filterForm);
// 		// this.props.filterForm.props.onSubmit = (e) => {
// 		//     e.preventDefault();
// 		//     console.log(e);
// 		// }
// 		this.linkChildren(this.props)

// 		await this.load();
// 	}
// 	async componentWillReceiveProps(nextProps) {
// 		this.linkChildren(nextProps);
// 		// console.log('this will break somethihng')
// 		if (!this.props.suppressOnPropChange) {
// 			await this.load();
// 		}
// 	}
// 	async sortOn(sortKey) {
// 		if (this.state.sortKey == sortKey) {
// 			if (this.state.sortDirection == 'a') {
// 				this.state.sortDirection = 'd';
// 			} else {
// 				this.state.sortDirection = 'a';
// 			}
// 		}
// 		await this.setState({ loading: true, sortKey, sortDirection: this.state.sortDirection });
// 		let data = await this.props.restClient.page(this.state.crit, this.state.page, this.state.pageSize, sortKey, this.state.sortDirection);
// 		this.setState({ ...data, loading: false })

// 	}
// 	async reloadData() {
// 		await this.setState({ loading: true });
// 		let data = await this.props.restClient.page(this.state.crit, this.state.page, this.state.pageSize, this.state.sortKey, this.state.sortDirection);
// 		this.setState({ ...data, loading: false })
// 	}
// 	async filter(crit) {
// 		await this.setState({ loading: true })
// 		let data = await this.props.restClient.page(crit, 1, this.state.pageSize, this.state.sortKey, this.state.sortDirection);
// 		this.setState({ ...data, crit: crit, page: 1, loading: false });
// 	}
// 	async goToPage(page) {
// 		await this.setState({ loading: true });
// 		if (page < 1) {
// 			page = 1;
// 		}
// 		let maxPage = Math.ceil(this.state.count / this.state.pageSize);
// 		if (page > maxPage) {
// 			page = maxPage;
// 		}
// 		let data = await this.props.restClient.page(this.state.crit, page, this.state.pageSize, this.state.sortKey, this.state.sortDirection);
// 		this.setState({ ...data, page, loading: false })
// 	}
// 	getPageButtons() {

// 		// ~ (total Pages / max) if that is 
// 		let buttons:any[] = [];
// 		let pages = Math.ceil(this.state.count / this.state.pageSize);
// 		for (let x = 0; x < pages; x++) {
// 			buttons.push(<li class={this.state.page == (x + 1) ? 'active' : ''} ><button class={this.state.page == (x + 1) ? 'active' : ''} onClick={this.goToPage.bind(this, (x + 1))}>{x + 1}</button></li>)
// 		}
// 		if (this.props.maxPagButtons) {
// 			if (pages > this.props.maxPagButtons) {
// 				buttons = [];
// 				let lastButtons:any[] = [];
// 				let pageButtons = Math.ceil(this.props.maxPagButtons / 2);
// 				if (this.state.page < (pages - (pageButtons - 1))) {
// 					for (let x = 0; x < pageButtons; x++) {
// 						let pageNum = x + this.state.page;
// 						if (pageNum < (pages - (pageButtons - 1)))
// 							buttons.push(<button class={this.state.page == pageNum ? 'active' : ''} onClick={this.goToPage.bind(this, pageNum)}>{pageNum}</button>)
// 					}
// 				}
// 				for (let x = 0; x < pageButtons; x++) {
// 					lastButtons.unshift(<button class={this.state.page == (pages - x) ? 'active' : ''} onClick={this.goToPage.bind(this, (pages - x))}>{pages - x}</button>)
// 				}
// 				let showEllipsis = this.state.page < (pages - (this.props.maxPagButtons - 1));
// 				buttons = [...buttons]
// 				if (showEllipsis) {
// 					buttons.push(<li class="ellipsis">...</li>)
// 				}
// 				buttons.push(...lastButtons);

// 			}
// 		}
// 		buttons = [
// 			<button onClick={x => this.goToPage(1)}>&lt;&lt;</button>,
// 			<li class="prev"><button class="prev" onClick={x => this.goToPage(this.state.page - 1)}>&lt;</button></li>,
// 			...buttons,
// 			<button class="next" onClick={x => this.goToPage(this.state.page + 1)}>&gt;</button>,
// 			<button onClick={x => this.goToPage(pages)}>&gt;&gt;</button>]
// 			.map(x => x.type != 'li' ? <li>{x}</li> : x);
// 		return buttons;
// 	}
// 	async changePageSize(e) {

// 		await this.setState({ pageSize: Number(e.target.value), loading: true });
// 		localStorage.setItem('PAGE_SIZE', e.target.value);
// 		this.filter(this.state.crit);
// 	}
// 	async onPageNumberKeyUp(e: KeyboardEvent) {
// 		if (e.key == 'Enter') {
// 			// @ts-ignore // its there i promise
// 			this.goToPage(Number(e.target.value));
// 		}
// 	}
// 	quickSearch(e) {
// 		this.filter(this.state.crit);
// 	}
// 	onQuickSearchKeyup(e: KeyboardEvent) {
// 		if (e.key == 'Enter') {
// 			this.filter(this.state.crit);
// 		}
// 	}
// 	resetChild(child) {
// 		if (child) {
// 			if (child.type == GQuickPick) {
// 				child.__c.reset();
// 			} else if (child.__c?.inp) {
// 				child.__c.inp.value = '';
// 			}
// 			if (child.props.children) {
// 				let children = child.props.children;
// 				if (!Array.isArray(children)) {
// 					children = [children];
// 				}
// 				for (let c of children) {
// 					this.resetChild(c);
// 				}
// 			}
// 		}
// 	}
// 	reset() {
// 		console.log('reset');
// 		this.setState({ crit: {} });//nooooooooo
// 		let children = this.props.filterForm.props.children;
// 		if (!Array.isArray(children)) {
// 			children = [children];
// 		}
// 		for (let c of children) {
// 			this.resetChild(c);
// 		}
// 		if (this.quickSearchInp) {
// 			this.quickSearchInp.inp.value = '';
// 		}
// 		this.filter({});
// 	}
// 	// async exportExcel() {
// 	// 	await this.props.restClient.exportExcel(this.state.crit, this.props.exportExcel,this.state.sortKey, this.state.sortDirection);
// 	// }
	
// 	render() {
// 		// console.log('FILTER FORM:::', this.props.filterForm);
		
// 		if (this.props.onCritChange) {
// 			this.props.onCritChange(this.state.crit)
// 		}
// 		return <Accordion containerClass="" collapsed={false}>
// 			<AccordionSectionAdv collapsed={false}>
// 				<AccordionHeader control='start' collapsed={false}>
// 					<h1>
// 						{this.props.headerLabel}
// 						{/* <HeaderControls parent={undefined} /> */}
// 						<span class="count">&nbsp;Count: {this.state.count}</span>
// 					</h1>
// 					{this.props.actionsInline && <div class="actions">
// 						{this.props.actions}
// 					</div>}

// 					{!this.props.actionsInline && <div class="gtable-actions semi-modal"><FilterModal label="Actions"
// 						onExcelClick={this.props.exportExcel ? (e) => {
// 							this.exportExcel()
// 						} : null}
// 					>
// 						{this.props.actions}
// 					</FilterModal></div>}

// 					{this.props.showQuickSearchInput && <div class="g-quick-search idk">
// 						<Text ref={x => this.quickSearchInp = x} linkTo={this} onKeyUp={this.onQuickSearchKeyup.bind(this)} name="crit.q" />
// 						<SearchButton useIcon onClick={this.quickSearch.bind(this)} />
// 					</div>}

// 					{!this.props.filterInline && <div class={`gtable-filter semi-modal ${this.props.filterClass}`}>
// 						<FilterModal label="Filters" onGoClick={this.filter.bind(this, this.state.crit)} onResetClick={() => { this.reset(); }}>
// 							{this.props.filterForm}
// 						</FilterModal>
// 					</div>}

// 					{this.props.filterInline && <div class={`filters filters-inline ${this.props.filterClass}`}>
// 						{this.props.filterForm}
// 						<div class="button-group">
// 							<button onClick={this.filter.bind(this, this.state.crit)}> GO</button>
// 							<ResetButton useIcon onClick={this.reset.bind(this)} />
// 						</div>
// 					</div>}

// 				</AccordionHeader>
// 				<AccordionContent collapsed={false}>
// 					{/* 
// 					//@ts-ignore */}
// 					{!this.state.loading && <PaginatedSortableTable ref={x => this.tableRef = x} onRowClick={this.props.onRowClick} parent={this} page={this.state.page} filterCrit={this.state.crit} {...this.props} data={this.state.data} pageSize={this.state.pageSize} />}
// 					{/* <InvoiceTable table="group" /> */}
// 					{this.state.loading && <LoadingSpinner />}
// 				</AccordionContent>
// 				<AccordionFooter>
// 					<div class="pagination">
// 						<button class="prev" onClick={x => this.goToPage(this.state.page - 1)} title="Previous Page">Previous Page</button>
// 						<input onKeyUp={this.onPageNumberKeyUp.bind(this)} type="number" value={this.state.page} />
// 						<button class="next" onClick={x => this.goToPage(this.state.page + 1)} title="Next Page">Next Page</button>
// 						{/* <ol class="pagination"> */}
// 						{/* {this.getPageButtons()} */}
// 						{/* </ol> */}
// 					</div>
// 					<div class="page-size">
// 						<Select value={this.state.pageSize} onChange={this.changePageSize.bind(this)} label="Page Size" items={[1, 5, 10, 25, 50, 100].map(x => ({ name: x, value: x }))} />
// 					</div>
// 				</AccordionFooter>
// 			</AccordionSectionAdv>
// 		</Accordion>
// 	}

// }
