# Minify and resize images on the frontend

# How to install

via npm: `npm install front-end-min`

via unpkg: `<script src="https://unpkg.com/front-end-min@latest"></script>`

# Documentataion

all functions imported from front-end-min use the Mini namespace.

Example:

```js
Mini.compressResizeBlobify(file, {
  aspectRatioPreserved: aspectRatioPreserved,
  inputWidth: inputWidth,
  inputHeight: inputHeight,
  smoothingOptions: smoothingOptions,
  quality: quality,
}).then((result) => {
  console.log(result);
});
```

## compressResizeBlobify

a function that accepts a file and options object. Returns a promise object.

### file

file (required) -
image url | image blob data | an image file
if not added the functions fails immediately and returns an error.
Currently only supports .jpeg and .png files

### options object

The object has the following properties:

#### aspectRatioPreserved (Boolean) --

true|false
true - keep the proportions of the image (aspect ratio) the same
false - disregard the aspect ratio of the image

#### inputHeight/inputWidth (Number) --

a number greater than 0 measured in pixels. keep in mind that input height and input width represent the maximum dimensions
and may not be the exact dimensions if the aspect ratio is preserved

#### smoothingOptions (String) --

"bi-cubic" | "bi-linear"
the smoothness of the image - when images changes dimensions, information is either lost or more informaiton is needed.
Smoothing options dictate how the decision of how to turn 4 pixels into one is made (assuming the image is shrinking)
Or how to come up with new pixels in the case of an enlarged image

#### quality (float) --

positive floating point number from 0 - 1
represets the degree of image quality with 1 being highest quality and 0 being the lowest

### return

an promise where the following preoperties can be accessed in the `.then()`

#### blob (blob) --

binary encoding of the image data

#### objUrl (String) --

a local url that can be used to view the image on your local machine

#### dataUrl (String) --

a url that can be used to access the image from any client

## smoothCanvas

Example:

```js
Mini.smoothCanvas(
  img,
  canvas,
  canvas2,
  smoothingOptions,
  newWidth,
  newHeight,
);
```

### arguments

#### img --

Image Object created by `new Image()`

#### canvas --

A canvas element with the propper width and height set

#### canvas2 --

a canvas element with height and width equal to half the target height (only used in bi-cubic smoothing)

#### newWidth/newHeight (Number) --

height and width of the image to be drawn on the canvas context

### return

returns a promise object that can access the canvas with the smoothed image returned in the `.then()`

## resize

a function that accepts a file, an indicator as to whether the user wants to preserve or deisregard the aspect ratio, an maximum dimensions for width and hight of the image. returns a promise

Example:

```js
Mini.resize(file, aspectRatioPreserved, inputWidth, inputHeight).then(
  ({ canvas, canvas2, img, newWidth, newHeight }) => {
    console.table({
      canvas: canvas,
      canvas2: canvas2,
      img: img,
      newWidth: newWidth,
      newHeight: newHeight,
    });
  },
);
```

### arguments

#### file

image url | image blob data | an image file
if not added the functions fails immediately and returns an error.
Currently only supports .jpeg and .png files

#### aspectRatioPreserved (Boolean) --

true|false
true - keep the proportions of the image (aspect ratio) the same
false - disregard the aspect ratio of the image

#### inputHeight/inputWidth (Number) --

a number greater than 0 measured in pixels. keep in mind that input height and input width represent the maximum dimensions
and may not be the exact dimensions if the aspect ratio is preserved

### return

returns a promise object with the following properties accessable in a `.then()`. 2 canvas elements, an image, a new width, and a new height

## canvasToBlob

accepts a canvas element and returns a promise object

Example:

```js
Mini.canvasToBlob(canvas)
    .then(({ dataUrl, objUrl, blob }) => {
        console.table({
            "dataUrl": dataUrl;
            "objUrl": objUrl;
            "blob": blob;
        })
    }
```

### arguments

#### inputElement (HTML Element) --

a canvas element with an image drawn in the context

### return

returns a promise object with the following properties accessable in a `.then()`.

#### blob (blob) --

binary encoding of the image data

#### objUrl (String) --

a local url that can be used to view the image on your local machine

#### dataUrl (String) --

a url that can be used to access the image from any client

## blobToDataUrl

accepts blob data and returns a promise object

Example:

```js
blobToDataUrl(blob)
    .then((dataURL) => {
        console.log(dataUrl)
    }
```

### arguments

#### blob --

a blob representing file data

### return

returns a promise that can access a data url in the `.then()`

# Dependencies

webpack and and webpack cli are included as dev dependencies

Example open source project using front-end-min can bee seen here: https://github.com/MaxSultan/img-compressor
