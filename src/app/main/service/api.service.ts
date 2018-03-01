import { IPromise } from 'angular';

export class ApiService {

    public static $inject = ['$http'];

    constructor(public http: ng.IHttpService) { }

    public get(
        url: string,
        options?: { [key: string]: any }
    ): IPromise<any> {
        return this.request(url, 'GET');
    }
    public post(
        url: string,
        body: any,
        options?: { [key: string]: any }
    ): IPromise<any> {
        return this.http.post(url, body);
    }

    public delete(
        url: string,
        body?: any,
        options?: { [key: string]: any }
    ): IPromise<any> {
        return this.request(url, 'DELETE');
    }

    public put(
        url: string,
        body?: any,
        options?: { [key: string]: any }
    ): IPromise<any> {
        return this.request(url, 'PUT');
    }

    private request(
        path: string,
        httpMethod: string
    ): IPromise<any> {
        const promise = this.http({
            method: httpMethod,
            url: 'http://localhost:3000/' + path
        });
        return promise;
    }

}
