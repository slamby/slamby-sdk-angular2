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

'use strict';
import * as models from './models';

/**
 * DataSet object
 */
export interface IDataSet {
    

    /**
     * Name of your dataset. Can contains just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space. This field is unique
     */
    Name?: string;

    /**
     * To deeper analyze your text, a dataset uses ngram to index your document. You can set the ngramcount from 1 to 6
     */
    NGramCount?: number;

    /**
     * To identify a document you need to use IDs. You can use your own conventions to name your ID field, but in the settings you need to provide the field name of the id field from your sample document. Can contains just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space
     */
    IdField?: string;

    /**
     * For text categorization, we provide a predefined document field to store your tags (or categories). If your documents are related to tags or categories, please insert here the tags field name from your sample JSON. Can contains just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space
     */
    TagField?: string;

    /**
     * For text analysis, you can set those document fields that contains useful text content. Slamby is doing ngram analysis and text process related works on these fields. How to decide which field you need to set here? Only the interpreted field can be a part of text analyzes. To provide these fields just simply insert the needed text fields from your JSON document. Field names can contain just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space
     */
    InterpretedFields?: Array<string>;

    /**
     * These are read-only calculated values
     */
    Statistics?: models.IDataSetStats;

    /**
     * Using flexible document schema, you can store all of your required data inside one simple dataset. To create a dataset with your required schema you can provide a sample document. The schema is flexible; the only requirement is using standard JSON format. Field names can contain just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space
     */
    SampleDocument?: any;

    /**
     * Using flexible document schema, you can store all of your required data inside one simple dataset. To create a dataset with your required schema you can provide a schema. The schema is flexible. Field names can contain just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space
     */
    Schema?: any;
}

