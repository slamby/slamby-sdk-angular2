/**
 * Slamby API
 * Slamby API
 *
 * OpenAPI spec version: latest
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
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/Rx');
/* tslint:disable:no-unused-variable member-ordering */
'use strict';
var DocumentApi = (function () {
    function DocumentApi(http, basePath) {
        this.http = http;
        this.basePath = 'https://localhost/';
        this.defaultHeaders = new http_1.Headers();
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     *
     * @param settings
     */
    DocumentApi.prototype.bulkDocuments = function (settings, extraHttpRequestParams) {
        var path = this.basePath + '/api/Documents/Bulk';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(settings);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param copySettings
     */
    DocumentApi.prototype.copyDocuments = function (copySettings, extraHttpRequestParams) {
        var path = this.basePath + '/api/Documents/Copy';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(copySettings);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param document
     */
    DocumentApi.prototype.createDocument = function (document, extraHttpRequestParams) {
        var path = this.basePath + '/api/Documents';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(document);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param id
     */
    DocumentApi.prototype.deleteDocument = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/api/Documents/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteDocument.');
        }
        var requestOptions = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param id
     */
    DocumentApi.prototype.getDocument = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/api/Documents/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDocument.');
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param scrollId
     * @param filterSettings
     */
    DocumentApi.prototype.getFilteredDocuments = function (scrollId, filterSettings, extraHttpRequestParams) {
        var path = this.basePath + '/api/Documents/Filter/{scrollId}'
            .replace('{' + 'scrollId' + '}', String(scrollId));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'scrollId' is not null or undefined
        if (scrollId === null || scrollId === undefined) {
            throw new Error('Required parameter scrollId was null or undefined when calling getFilteredDocuments.');
        }
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(filterSettings);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param sampleSettings
     */
    DocumentApi.prototype.getSampleDocuments = function (sampleSettings, extraHttpRequestParams) {
        var path = this.basePath + '/api/Documents/Sample';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(sampleSettings);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param moveSettings
     */
    DocumentApi.prototype.moveDocuments = function (moveSettings, extraHttpRequestParams) {
        var path = this.basePath + '/api/Documents/Move';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(moveSettings);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param id
     * @param document
     */
    DocumentApi.prototype.updateDocument = function (id, document, extraHttpRequestParams) {
        var path = this.basePath + '/api/Documents/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateDocument.');
        }
        var requestOptions = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(document);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    DocumentApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional())
    ], DocumentApi);
    return DocumentApi;
}());
exports.DocumentApi = DocumentApi;