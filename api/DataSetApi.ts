/**
 * Slamby API
 * Slamby API
 *
 * OpenAPI spec version: 1.5.0
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
export class DataSetApi {
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
     * @param dataSet 
     */
    public createDataSet (dataSet?: models.IDataSet, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/DataSets';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(dataSet);

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
     * @param dataSet 
     */
    public createDataSetSchema (dataSet?: models.IDataSet, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/DataSets/Schema';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(dataSet);

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
     * @param name 
     */
    public deleteDataSet (name: string, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/DataSets/{name}'
            .replace('{' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteDataSet.');
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
     * @param name 
     */
    public getDataSet (name: string, extraHttpRequestParams?: any ) : Observable<models.IDataSet> {
        const path = this.basePath + '/api/DataSets/{name}'
            .replace('{' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDataSet.');
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
     */
    public getDataSets (extraHttpRequestParams?: any ) : Observable<Array<models.IDataSet>> {
        const path = this.basePath + '/api/DataSets';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
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
     * @param existingName 
     * @param dataSetUpdate 
     */
    public updateDataSet (existingName: string, dataSetUpdate?: models.IDataSetUpdate, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/DataSets/{existingName}'
            .replace('{' + 'existingName' + '}', String(existingName));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'existingName' is not null or undefined
        if (existingName === null || existingName === undefined) {
            throw new Error('Required parameter existingName was null or undefined when calling updateDataSet.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(dataSetUpdate);

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
