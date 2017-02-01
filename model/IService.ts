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

'use strict';
import * as models from './models';

export interface IService {
    

    /**
     * Service unique identifier. It cannot be modified.
     */
    Id?: string;

    /**
     * User-defined name for the service
     */
    Name?: string;

    /**
     * Alias name of the service. Services can be accessed via this name.  Alias can be modified. It is unique amongst the services.
     */
    Alias?: string;

    /**
     * Service description
     */
    Description?: string;

    /**
     * New - the service was created |   Busy - the service is working on something (e.g.: during the Prepare) |   Prepared - the service was prepared so you can activate it to use |   Active - the service so you can use it
     */
    Status?: IService.IStatusEnum;

    /**
     * Type of the service.  Currently supported types:  - Classifier  - Prc
     */
    Type?: IService.ITypeEnum;

    /**
     * Contains all the process ids which belong to this service
     */
    ProcessIdList?: Array<string>;

    ActualProcessId?: string;
}

export namespace IService {

    export enum IStatusEnum { 
        New = <any> 'New',
        Busy = <any> 'Busy',
        Prepared = <any> 'Prepared',
        Active = <any> 'Active',
    }

    export enum ITypeEnum { 
        Classifier = <any> 'Classifier',
        Prc = <any> 'Prc',
        Search = <any> 'Search',
    }
}
