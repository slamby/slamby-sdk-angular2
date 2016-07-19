import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';
export declare class PrcServiceApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    constructor(http: Http, basePath: string);
    prcActivateService(id: string, prcActivateSettings?: models.IPrcActivateSettings, extraHttpRequestParams?: any): Observable<models.IProcess>;
    prcDeactivateService(id: string, extraHttpRequestParams?: any): Observable<{}>;
    prcExportDictionaries(id: string, settings?: models.IExportDictionariesSettings, extraHttpRequestParams?: any): Observable<models.IProcess>;
    prcGetService(id: string, extraHttpRequestParams?: any): Observable<models.IPrcService>;
    prcKeywordsService(id: string, request?: models.IPrcKeywordsRequest, isStrict?: boolean, extraHttpRequestParams?: any): Observable<Array<models.IPrcKeywordsResult>>;
    prcPrepareService(id: string, prcPrepareSettings?: models.IPrcPrepareSettings, extraHttpRequestParams?: any): Observable<models.IProcess>;
    prcRecommendService(id: string, request?: models.IPrcRecommendationRequest, extraHttpRequestParams?: any): Observable<Array<models.IPrcRecommendationResult>>;
}
