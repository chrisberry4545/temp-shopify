import {
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

import {
    CollectionInterface,
    ProductInterface,
} from './../../models/index';

import {
    ANIMATION_DEFAULTS_CONST,
    fadeInOutAnimation,
} from '@kite-tech/kite-components/src/helpers/animations/index';

const UPLOADING_STATES = {
    COMPLETE: 'COMPLETE',
    ERROR: 'ERROR',
    UPLOADING: 'UPLOADING',
};

@Component({
    animations: [
        fadeInOutAnimation({
            animationTimingsEnter: ANIMATION_DEFAULTS_CONST
                .animationTimings,
            animationTimingsLeave: '0s',
        }),
    ],
    host: {
        '[@fadeInOutAnimation]': '',
        'style': 'display: block',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'collections-component',
    styleUrls: [
        './collections.component.scss',
    ],
    templateUrl: './collections.component.template.pug',
})
export default class CollectionsRanges implements OnInit {

    public uploadId = 0;
    public searchValue = null;
    public productRangeBeingEdited = null;
    public uploadInProgress = false;
    public selectedFilters = [];
    public UPLOADING_STATES = UPLOADING_STATES;
    public isLoading = true;

    public collectionToBeDeleted: CollectionInterface = null;
    public collections: CollectionInterface[] = [];
    public visibleCollections: CollectionInterface[] = [];

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
    ) {}

    public ngOnInit() {
        this.loadCollections();
    }

    public loadCollections() {
        this.isLoading = true;
        this.collections = [{
            title: 'test',
            // tslint:disable-next-line
            image_url_preview: 'https://s3.amazonaws.com/kiteshopify/81dcb7c5-ba9c-42e9-be4d-08e946bdd0e9_preview.jpeg',
        }];
        this.visibleCollections = this.collections;
        this.isLoading = false;
        this._changeDetectorRef.markForCheck();
    }

    public uploadSingleProduct(collection) {
    //     uploadService.upload([collection.fileToUpload]).then(
    //     function success(files) {
    //         var file = files[0];
    //         var imageURLs = file.completedUpload && !file.uploadFailed
    //             ?
    //         [{
    //             full: file.fullImageURL,
    //             preview: file.previewImageURL
    //         }]
    //             :
    //             [];

    //         return productService.createProductRanges(imageURLs).then(
    //             function success(productRanges) {
    //                 var productRangePosition =
    //                     ctrl.productRanges.findIndex(function (eachProductRange) {
    //                         return eachProductRange.id === collection.id;
    //                     });
    //                 var productRangeToUse = productRanges[0];
    //                 productRangeToUse.uploadingState =
    //                     ctrl.UPLOADING_STATES.COMPLETE;
    //                 ctrl.productRanges[productRangePosition] = productRangeToUse;
    //             }, function failure(err) {
    //             collection.uploadingState =
    //                     ctrl.UPLOADING_STATES.ERROR;
    //             errorBar.show(err);
    //         });
    //     },
    //     function failure() {
    //         collection.uploadingState =
    //             ctrl.UPLOADING_STATES.ERROR;
    //     },
    //     function progress(uploadProgress) {
    //         collection.uploadProgressPercentage = uploadProgress.uploadPercentage;
    //     }
    // );
    }

    public createNewCollection(fileToUpload) {
        const newProduct = {
            fileToUpload,
            id: this.uploadId,
            uploadProgressPercentage: 0,
            uploadingState: this.UPLOADING_STATES.UPLOADING,
        };
        this.uploadId++;
        return newProduct;
    }

    public createAndUploadNewProduct(fileToUpload) {
        const newProduct = this.createNewCollection(fileToUpload);
        this.collections.push(newProduct);
        this.uploadSingleProduct(newProduct);
    }

    public updateAllProductRanges() {
        // tslint:disable-next-line
        console.log('updating product ranges');
    }

    public fileUploadChanges() {
        // var totalUnpublishedProducts = 0;
        // if (ctrl.productRanges) {
        //     for (var i = 0; i < ctrl.productRanges.length; ++i) {
        //         totalUnpublishedProducts += ctrl.productRanges[i].published ? 0 : 1;
        //     }
        // }

        // var filesToUpload =
        // uploadService.filterUploadCandidates(ctrl.selectedFiles);
        // if (filesToUpload && filesToUpload.length > 0) {
        //     if (totalUnpublishedProducts + filesToUpload.length
        //         > MAX_CONCURRENT_UPLOADS) {
        //         errorBar.show('Uploading is currently limited to '
        //         + MAX_CONCURRENT_UPLOADS + ' images at a time. You can add '
        //         + (MAX_CONCURRENT_UPLOADS - totalUnpublishedProducts)
        //         + ' more.');
        //         return;
        //     }

        //     for (var i = 0; i < filesToUpload.length; i++) {
        //         ctrl.createAndUploadNewProduct(filesToUpload[i]);
        //     }
        // }
    }

    public retryUpload(productRange) {
    //     if (!productRange || !productRange.fileToUpload) {
    //         return undefined;
    //     }
    //     productRange.fileToUpload.startedUploading = false;
    //     productRange.uploadingState =
    //         ctrl.UPLOADING_STATES.UPLOADING;
    //     productRange.uploadProgressPercentage = 0;
    //     var filteredFiles = uploadService.filterUploadCandidates(
    //     [productRange.fileToUpload]
    // );
    //     if (filteredFiles && filteredFiles.length > 0) {
    //         ctrl.uploadSingleProduct(
    //         productRange
    //     );
    //     }
    }

    public searchChanged() {
        this.visibleCollections = !this.searchValue ?
            this.collections :
            this.collections.filter((collection) => (
                collection.title &&
                collection.title.toUpperCase().indexOf(
                    this.searchValue.toUpperCase(),
                ) > -1
            ));
    }

    public isDeleteModalVisible() {
        return this.collectionToBeDeleted != null;
    }

    public showDeleteModal(collection) {
        this.collectionToBeDeleted = collection;
    }

    public closeDeleteModal() {
        this.collectionToBeDeleted = null;
    }

    public deleteCollection(collection) {
        if (collection.deleteInProgress) {
            return;
        }
    //     $scope.showAlertDialog(
    //     'Delete product range',
    //     'Are you sure that you want to delete this product range?',
    //     'Yes', 'No',
    //     function onYes() {
    //         productRange.deleteInProgress = true;
    //         productService.deleteProductRange(productRange).then(function success() {
    //             ctrl.productRanges.splice(ctrl.productRanges.indexOf(productRange), 1);
    //         }, function error(err) {
    //             errorBar.show(err);
    //         }).finally(function () {
    //             productRange.deleteInProgress = false;
    //         });
    //     },
    //     function onNo() {
    //     },
    //     'yellow',
    //     false
    // );
    }

    public startEditingTitle(productRange) {
        // ctrl.productRangeBeingEdited =
        // productRange;

        // ctrl.tempEditTitle =
        // !ctrl.productRangeBeingEdited.title ||
        // ctrl.productRangeBeingEdited.title.startsWith('Untitled Range') ?
        //     '' : ctrl.productRangeBeingEdited.title;

        // $timeout(function () {
        //     var titleInputElem = angular
        //     .element('.c-product-ranges__title-input')[0];
        //     titleInputElem.selectionStart = 1000;
        //     titleInputElem.selectionEnd = 10000;
        //     titleInputElem.focus();
        // });
    }

    public togglePublishState(
        toggled: boolean, collection: CollectionInterface,
    ) {
        console.log('toggled', toggled, collection);
        return undefined;
    }
}
