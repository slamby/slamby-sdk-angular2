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

export interface IDocumentSampleSettings {
    

    /**
     * It must be a random string for every new sampling, but must be the same for the same sampling during pagination.   If you leave it empty then it'll be generated automatically, but then you can not use pagination
     */
    Id?: string;

    /**
     * You can create a sample from a whole dataset, or just from a given tag section.   To create a sample from the whole dataset please keep it empty.   To create a sample from a given number of tags please provide the tag ids
     */
    TagIdList?: Array<string>;

    /**
     * Defining the sample size, you can use percentage or a given number.   Using a percentage you can define the document number by a percentage.   This percentage will calculate the document number by using the available dataset document number.   E.g.: if your dataset contains 100.000 documents and you are using 10% as a sampling size without stratified method, your sample size is 100.000 x 10% = 10.000
     */
    Percent?: number;

    /**
     * Define your sample size by providing a simple integer.   E.g.: if your dataset contains 100.000 documents and you are using 3.000 as a sampling size without stratified method, your sample size is 3.000
     */
    Size?: number;

    /**
     * Query returns only with the specified field(s)
     */
    FieldList?: Array<string>;
}

