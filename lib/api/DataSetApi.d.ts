import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';
export declare class DataSetApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    constructor(http: Http, basePath: string);
    createDataSet(dataSet?: models.IDataSet, extraHttpRequestParams?: any): Observable<{}>;
    createDataSetSchema(dataSet?: models.IDataSet, extraHttpRequestParams?: any): Observable<{}>;
    deleteDataSet(name: string, extraHttpRequestParams?: any): Observable<{}>;
    getDataSet(name: string, extraHttpRequestParams?: any): Observable<models.IDataSet>;
    getDataSets(extraHttpRequestParams?: any): Observable<Array<models.IDataSet>>;
    updateDataSet(name: string, dataSetUpdate?: models.IDataSetUpdate, extraHttpRequestParams?: any): Observable<{}>;
}
