import * as _ from 'lodash';

export class ItableController {

  public currentPage;
  public itemsPerPage;
  public tableRowHeaders;
  public sortKey;
  public reverse;
  public max;
  public tableItems;

  public textExtended;

  public tableData;

  
  public $onInit() {
    this.tableItems = this.tableData;
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.max = this.tableItems.length;
    this.tableRowHeaders = Object.getOwnPropertyNames(this.tableItems[0]);
  };
  public sort(keyname) {
    this.sortKey = keyname;
    this.reverse = !this.reverse;
  };

  public getItems() {
    return this.tableItems.slice(((this.currentPage - 1) * this.itemsPerPage), ((this.currentPage) * this.itemsPerPage));
  }

  public setItemsPerPage(num) {
    this.itemsPerPage = num ? num : 5;
    this.currentPage = 1;
  };

  public range() {
    let rangeSize = 5;
    let start;

    start = this.currentPage;
    if (this.pageCount() === 1) {
      start = 1;
    } else if (start > this.pageCount() - rangeSize) {
      start = Math.abs(this.pageCount() - rangeSize + 1);
    }

    if (rangeSize > this.pageCount()) {
      rangeSize = this.pageCount();
    }

    return _.range(start, rangeSize + 1);
  };

  public prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  };

  public disablePrevPage() {
    return this.currentPage === 1 ? 'disabled' : '';
  };

  public pageCount() {
    return Math.ceil(this.tableItems.length / this.itemsPerPage);
  };

  public nextPage() {
    if (this.currentPage < this.pageCount()) {
      this.currentPage++;
    }
  };

  public disableNextPage() {
    return this.currentPage === this.pageCount() ? 'disabled' : '';
  };

  public setPage(pageNumber) {
    this.currentPage = pageNumber;
  };
};
