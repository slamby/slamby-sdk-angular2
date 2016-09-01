import * as models from './models';
export interface IPrcRecommendationByIdRequest {
    DocumentId?: string;
    Count?: number;
    NeedDocumentInResult?: boolean;
    TagId?: string;
    Filter?: models.IFilter;
    Weights?: Array<models.IWeight>;
}
