export interface DataManipulationMethods {
    init (url: string): any;
    save (objectToBeSaved: any): ng.IPromise<any>;
    rows (): ng.IPromise<any>;
    update (objectToBeUpdated: any): ng.IPromise<any>;
    delete (id: any): ng.IPromise<any>;
    rowsBetween(startIndex: number, endIndex: number, sortDirection?: string, keyWord?: string ): ng.IPromise<any>;
}
