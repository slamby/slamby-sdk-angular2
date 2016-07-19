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

'use strict';
import * as models from './models';

/**
 * \"Result of a bulk save element.              If the save was successful then the StatusCode is 2XX.               If there was a problem, the StatusCode is not 2XX, and the error message is in the Error field.
 */
export interface IBulkResult {
    

    /**
     * HTTP status code
     */
    StatusCode?: number;

    /**
     * Document id
     */
    Id?: string;

    /**
     * Error message
     */
    Error?: string;
}

