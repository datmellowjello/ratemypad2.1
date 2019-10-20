import React, { Component } from "react";

import Nav from '../components/Nav/Nav.js'

h2 class="pt-4">Add A Place</h2>

{{!-- <form action="/api/places" method="POST" enctype="multipart/form-data">
    <div class="form-row"> --}}

<form>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputPropertyName4">Property Name</label>
            <input type="propertyName" class="form-control" id="inputpropertyname4" placeholder="Suzy's Place">
        </div>
        <div class="form-group col-md-6">
            <label for="inputPropertyManagement4">Property Manager</label>
            <input type="propertymanager" class="form-control" id="inputPropertyManager4"
                placeholder="Joe's Management LLC">
        </div>
    </div>
    <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="form-group">
        <label for="ListingType">Listing Type</label>
        <input type="text" class="form-control" id="inputListingType" placeholder="Apartment, studio, or basement">
    </div>
    <div class="form-group">
        <label for="Website">Website</label>
        <input type="URL" class="form-control" id="inputWebsite" placeholder="www.google.com">
    </div>
    <div class="grid noMargin">

        <div class="photosWrapper"
            data-bind="style:{'width' : Photos.Community().length == 0 ? '100%' : '' }, css: { 'nonDraggable' : !isBrowserDraggable }"
            style="width: 100%;">

            <!-- before photos are uploaded-->
            <div class="noPhotos"
                data-bind="visible: Photos.Community().length == 0, css: { 'dragOver' : noPhotosDropZoneDragOver }">
                <div class="grid noMargin">
                    <!-- ko if: isBrowserDraggable-->
                    <div class="cell-xs-3">
                        <span data-bind="fileUpload: {
                                onAdd: handleOnAddPhoto,
                                onSend: handleOnSendPhoto,
                                onProgress: handleOnProgress,
                                onDone: handleOnDone,
                                onFail: handleOnFail,
                                onFileDrop: handleFileDrop,
                                onFileChange: handleFileChange,
                                clickPublisher: uploadPhotosListeners,
                                dropOnDocument : true,
                                dropZone: '.noPhotos',
                                dropZoneEnter : noPhotosdropZoneEnter,
                                dropZoneLeave: noPhotosdropZoneLeave,
                                autoUpload: false},
                                click: uploadPhotoClick">
                            <button type="button" class="primary inverted addPhotoBtn">Add Photos</button>
                            <input type="file" name="files[]" multiple=""></span>
                    </div>
                    <div class="cell-xs-9">
                        <h4 data-bind="visible: !noPhotosDropZoneDragOver()">Drop photos here or use the button on the
                            left to add photos</h4>
                        <h4 class="dropPhotoText" data-bind="visible: noPhotosDropZoneDragOver" style="display: none;">
                            Drop Photos Now</h4>
                    </div>
                    <!-- /ko-->
                    <!-- ko if: !isBrowserDraggable -->
                    <!-- /ko -->
                </div>
            </div>
            <div class="photoSizeText"
                data-bind="visible: Photos.Community().length == 0, css: { 'dragOver' : noPhotosDropZoneDragOver }">
                </div>

            <!--After Photos Are Uploaded-->
            <div class="withPhotos" data-bind="visible: Photos.Community().length > 0" style="display: none;">
                <div class="grid">
                    <ul class="photosContainer ui-sortable"
                        data-bind="photoSortable: { data: Photos.Community, itemKey: 'key', options: { cursor: 'move', placeholder: 'cell-sm-3 sortPlaceHolder photoWrapper', tolerance: 'pointer', containment: '#addEditWrapper' } }">
                    </ul>
                    <div class="cell-xs-3 photoDropContainer">
                        <div class="photoDropWrapper">
                            <div class="photoDrop"
                                data-bind="css: { 'dragOver' : withPhotosDropZoneDragOver, 'nonDraggable' : !isBrowserDraggable }">
                                <div class="dropPhotoText" data-bind="visible: withPhotosDropZoneDragOver"
                                    style="display: none;">Drop Photos Now</div>
                                <!-- ko if: isBrowserDraggable -->
                                <div class="dragAndDropText" data-bind="visible: !withPhotosDropZoneDragOver()">Drop
                                    photos here or add photos using the button below.</div>
                                <!-- /ko -->
                                <!-- ko if: !isBrowserDraggable -->
                                <!-- /ko -->

                                <span data-bind="fileUpload: {
                                        onAdd: handleOnAddPhoto,
                                        onSend: handleOnSendPhoto,
                                        onProgress: handleOnProgress,
                                        onDone: handleOnDone,
                                        onFail: handleOnFail,
                                        onFileDrop: handleFileDrop,
                                        onFileChange: handleFileChange,
                                        clickPublisher: uploadPhotosListeners,
                                        dropOnDocument : false,
                                        dropZone: '.photoDrop',
                                        dropZoneEnter: withPhotosdropZoneEnter,
                                        dropZoneLeave: withPhotosdropZoneLeave,
                                        autoUpload: false},
                                        click: uploadPhotoClick">
                                    <button class="primary inverted">Add Photos</button>
                                
                            </div>
                            <div class="subText">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="form-group col-md-8">
        <label for="inputRole">Your Role for this listing</label>
        <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>I am an Owner</option>
            <option>I am a Tenent</option>
            <option>I am a Property Manger</option>
            <option>I am an Agent/Broker</option>
        </select>
    </div>

    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" placeholder="Paradise">
        </div>
        <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>Utah</option>
                <option>California</option>
                <option>Idaho</option>
                <option>Texas</option>
                <option>Oregon</option>
                <option>Washington</option>
                <option>Colorado</option>
            </select>
        </div>
        <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" placeholder="12345">
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Add Place</button>
</form>