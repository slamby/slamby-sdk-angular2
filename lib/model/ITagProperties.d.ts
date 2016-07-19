import * as models from './models';
export interface ITagProperties {
    Path?: Array<models.IPathItem>;
    Level?: number;
    IsLeaf?: boolean;
    DocumentCount?: number;
    WordCount?: number;
}
