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
 * 
 */
export interface IProcess {
    

    /**
     * The process GUID identifier
     */
    Id?: string;

    /**
     * The UTC time of the process start
     */
    Start?: Date;

    /**
     * The UTC time of the process end
     */
    End?: Date;

    /**
     * The percent of the whole process. (e.g.: 12.23 means 12.23%)
     */
    Percent?: number;

    /**
     * Process description
     */
    Description?: string;

    /**
     * InProgress - the process is in progress, it's working |  Cancelled - the process was cancelled by the user |  Finished - the process was finished successfully |  Error - the process stopped by an error, see the ErrorMessages for detailed information |  Interrupted - the process was interrupted by an unknown event (e.g.: server restart) - under development |  Paused - the process was paused  - under development
     */
    Status?: IProcess.IStatusEnum;

    /**
     * Type of the process
     */
    Type?: IProcess.ITypeEnum;

    ErrorMessages?: Array<string>;

    ResultMessage?: string;
}

export namespace IProcess {

    export enum IStatusEnum { 
        InProgress = <any> 'InProgress',
        Cancelled = <any> 'Cancelled',
        Finished = <any> 'Finished',
        Error = <any> 'Error',
        Interrupted = <any> 'Interrupted',
        Paused = <any> 'Paused',
        Cancelling = <any> 'Cancelling',
    }

    export enum ITypeEnum { 
        ClassifierPrepare = <any> 'ClassifierPrepare',
        PrcPrepare = <any> 'PrcPrepare',
        ClassifierExportDictionaries = <any> 'ClassifierExportDictionaries',
        PrcExportDictionaries = <any> 'PrcExportDictionaries',
        TagsExportWords = <any> 'TagsExportWords',
        ClassifierActivate = <any> 'ClassifierActivate',
        PrcActivate = <any> 'PrcActivate',
        PrcIndex = <any> 'PrcIndex',
        PrcIndexPartial = <any> 'PrcIndexPartial',
    }
}
