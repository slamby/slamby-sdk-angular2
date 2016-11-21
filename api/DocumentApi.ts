/**
 * Slamby API
 * Slamby API
 *
 * OpenAPI spec version: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class DocumentApi {
    protected basePath = 'https://localhost/';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * 
     * @param settings 
     */
    public bulkDocuments (settings?: models.IDocumentBulkSettings, extraHttpRequestParams?: any ) : Observable<models.IBulkResults> {
        const path = this.basePath + '/api/Documents/Bulk';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(settings);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.text() ? response.json() : undefined;
                }
            });
    }

    /**
     * 
     * 
     * @param copySettings 
     */
    public copyDocuments (copySettings?: models.IDocumentCopySettings, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/Documents/Copy';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(copySettings);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.text() ? response.json() : undefined;
                }
            });
    }

    /**
     * 
     * 
     * @param document 
     */
    public createDocument (document?: any, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/Documents';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(document);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.text() ? response.json() : undefined;
                }
            });
    }

    /**
     * 
     * 
     * @param id 
     */
    public deleteDocument (id: string, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/Documents/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteDocument.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.text() ? response.json() : undefined;
                }
            });
    }

    /**
     * 
     * 
     * @param id 
     */
    public getDocument (id: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/api/Documents/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDocument.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.text() ? response.json() : undefined;
                }
            });
    }

    /**
     * 
     * 
     * @param scrollId 
     * @param filterSettings 
     */
    public getFilteredDocuments (scrollId: string, filterSettings?: models.IDocumentFilterSettings, extraHttpRequestParams?: any ) : Observable<models.IPaginatedListObject> {
        const path = this.basePath + '/api/Documents/Filter/{scrollId}'
            .replace('{' + 'scrollId' + '}', String(scrollId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'scrollId' is not null or undefined
        if (scrollId === null || scrollId === undefined) {
            throw new Error('Required parameter scrollId was null or undefined when calling getFilteredDocuments.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(filterSettings);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.text() ? response.json() : undefined;
                }
            });
    }

    /**
     * 
     * 
     * @param sampleSettings 
     */
    public getSampleDocuments (sampleSettings?: models.IDocumentSampleSettings, extraHttpRequestParams?: any ) : Observable<models.IPaginatedListObject> {
        const path = this.basePath + '/api/Documents/Sample';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(sampleSettings);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.text() ? response.json() : undefined;
                }
            });
    }

    /**
     * 
     * 
     * @param moveSettings 
     */
    public moveDocuments (moveSettings?: models.IDocumentMoveSettings, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/Documents/Move';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(moveSettings);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.text() ? response.json() : undefined;
                }
            });
    }

    /**
     * 
     * 
     * @param id 
     * @param document 
     */
    public updateDocument (id: string, document?: any, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/api/Documents/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateDocument.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(document);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.text() ? response.json() : undefined;
                }
            });
    }

}
