
import {
    ProductInterface,
} from './index';

interface CollectionInterface {
    id?: number;
    fileToUpload?: any;
    image_url_preview?: string;
    products?: ProductInterface[];
    title?: string;
    uploadingState?: string;
    uploadProgressPercentage?: number;
}

export default CollectionInterface;
