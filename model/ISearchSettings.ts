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

/**
 * The Search settings. The search is using ElasticSearch MATCH or QUERYSTRING search. Depends on the Type setting
 */
export interface ISearchSettings {
    

    /**
     * The Filter settings
     */
    Filter?: models.IFilter;

    /**
     * When you activate a Search service with a Filter, you can use this property to control if you want to use that 'default filter' during each searches
     */
    UseDefaultFilter?: boolean;

    /**
     * Can use each available dataset field, a preferred value and a weighted score between 0 and 10 to boost the result
     */
    Weights?: Array<models.IWeight>;

    /**
     * When you activate a Search service with Weights, you can use this property to control if you want to use that 'default weights' during each searches
     */
    UseDefaultWeights?: boolean;

    /**
     * Which dataset fields must be in the search response
     */
    ResponseFieldList?: Array<string>;

    /**
     * In which fields you would liket to search. The list can contains boosts. For example: title^2  which means matches on the title field will have twice the weight as those on the other fields
     */
    SearchFieldList?: Array<string>;

    /**
     * The type of the search. Can be MATCH (default) which means a simple word based search or can be QUERY which means you can use expressions in the query, like in the [QueryString Query](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax) in ElasticSearch
     */
    Type?: ISearchSettings.ITypeEnum;

    /**
     * Allows specifying an absolute or relative document frequency where high frequency terms are moved into an optional subquery and are only scored if one of the low frequency (below the cutoff) terms in the case of an OR operator or all of the low frequency terms in the case of an AND operator match
     */
    CutOffFrequency?: number;

    /**
     * Interpreted as a Levenshtein Edit Distance — the number of one character changes that need to be made to one string to make it the same as another string. Can be specified as: -1 (generates an edit distance based on the length of the term) or 0, 1, 2 (the maximum allowed Levenshtein Edit Distance)
     */
    Fuzziness?: number;

    /**
     * The maximum number of matches
     */
    Count?: number;

    /**
     * Can be set to OR or AND to control the operators between the text words  For example if the operator is AND, and the query is: 'white mobilephone' then the 'white' AND the 'mobilephone' must be match the documents  If the operator is OR in the same query then one of the query words is enough for a match. Of course if a document matches all the words then that will have a higher score
     */
    Operator?: ISearchSettings.IOperatorEnum;

    /**
     * You can change the order of the search results. You have to specify a field of the dataset the order (Ascending or Descending)  Be careful with this, if you change the default order then not the most relevant (for the text) documents will be on the top
     */
    Order?: models.IOrder;
}

export namespace ISearchSettings {

    export enum ITypeEnum { 
        Match = <any> 'Match',
        Query = <any> 'Query',
    }

    export enum IOperatorEnum { 
        AND = <any> 'AND',
        OR = <any> 'OR',
    }
}
