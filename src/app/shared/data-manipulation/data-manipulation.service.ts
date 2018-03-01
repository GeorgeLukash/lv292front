/**
 * Service for communication with backend
 * In order to use it you have to:
 * 1. Inject it in the constructor
 * 2. Do itit inside of your service like private dataSourceInst: DataManipulationMethods;
 *        this.dataSourceInst = this.dataManipulationService
            .init('https://api.github.com/gists')
            .rows()
            .then(data => {
                debugger;
            });
 */

export class DataManipulationService {
    public static $inject: Array <string> = ['$http'];
    private url: string;

    public constructor(
        private $http: ng.IHttpService
    ) {

    }
    
    public init (url: string): any {
        this.url = url;
        return this;
    }
    public rows (): ng.IPromise<any> {
       return this.$http.get(this.url);
    }
    public save (objectToBeSaved: any): ng.IPromise<any> {
        return this.$http.post(
            this.url, 
            objectToBeSaved
        );
    }
    public update (objectToBeUpdated: any): ng.IPromise<any> {
        return this.$http.put(
            this.url, 
            objectToBeUpdated
        );
    }
    public delete (id: number|string): ng.IPromise<any> {
        return this.$http.delete(
            this.url, 
            {
                params: {
                    id: id
                }
            }
        );
    }
    public rowsBetween(startIndex: number, endIndex: number, sortDirection?: string, keyWord?: string ): ng.IPromise<any> {
        return this.$http.get(this.url, {
            params: {
                startIndex: startIndex, 
                endIndex: endIndex
            }
        });
    }
}
