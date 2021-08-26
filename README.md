# Minify and resize images on the frontend

---

# How to install

via npm: `npm install front-end-min`

via unpkg: `<script src="https://unpkg.com/front-end-min@latest"></script>`

---

# Documentataion

all functions imported from front-end-min use the Mini namespace.

---

## compressResizeBlobify

> Resize an image, compress using lossy compression, and turn an image into a blob

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

## arguments

a file and an options object

### file

file (required) -
image url | image blob data | an image file
if not added the functions fails immediately and returns an error.
Currently only supports .jpeg and .png files

### options object

The object has the following properties:

#### aspectRatioPreserved (Boolean)

true|false
true - keep the proportions of the image (aspect ratio) the same
false - disregard the aspect ratio of the image

#### inputHeight/inputWidth (Number)

a number greater than 0 measured in pixels. keep in mind that input height and input width represent the maximum dimensions
and may not be the exact dimensions if the aspect ratio is preserved

#### smoothingOptions (String)

"bi-cubic" | "bi-linear"
the smoothness of the image - when images changes dimensions, information is either lost or more informaiton is needed.
Smoothing options dictate how the decision of how to turn 4 pixels into one is made (assuming the image is shrinking)
Or how to come up with new pixels in the case of an enlarged image

#### quality (float)

positive floating point number from 0 - 1
represets the degree of image quality with 1 being highest quality and 0 being the lowest

## return

a promise object with access to the following properties

#### blob (blob)

binary encoding of the image data

#### objUrl (String)

a local url that can be used to view the image on your local machine

#### dataUrl (String)

a url that can be used to access the image from any client

#### canvas (HTML Element)

an HTML element that fits the maximum dimensions specified in inputHeight/inputWidth

---

# imageify

> turns a file containing image data into an instance of the HTMLImageElement

```js
Mini.imageify(file).then((image) => {
  document.append(image);
});
```

### arguments

| arguments | description                  |
| --------- | ---------------------------- |
| file      | a file containing image data |

### return

| properties | description                         |
| ---------- | ----------------------------------- |
| image      | an instance of the HTMLImageElement |

---

# calculateNewDims

> returns new dimensions with respect to the aspect ratio of the image, given an image and maximum dimensions

```js
Mini.calculateNewDims(img, aspectRatioPreserved, inputWidth, inputHeight).then(
  ({ newHeight, newWidth }) => {
    console.log(newHeight, newWidth);
  },
);
```

### arguments

(img, aspectRatioPreserved, inputWidth, inputHeight)

| arguments              | description                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| img                    | an instance of the HTMLImageElement                                                            |
| aspectRatioPreserved   | Boolean - default is true                                                                      |
| inputWidth/inputHeight | a number greater than 0 measured in pixels. represents MAXIMUM dimensions not exact dimensions |

### return

returns a promise with a newHeight and newWidth property

| properties         | description             |
| ------------------ | ----------------------- |
| newHeight/NewWidth | Number - new dimensions |

---

# resizeImage

> resizes an image and returns a canvas with the resized image drawn in the contex

Example:

```js
Mini.resizeImage(img, smoothingOptions, newWidth, newHeight).then((canvas) => {
  document.append(canvas);
});
```

### arguments

| arguments              | description                                 | example                                    |
| ---------------------- | ------------------------------------------- | ------------------------------------------ |
| file                   | image data (jpeg, png)                      | image url \| image blob data \| image file |
| smoothingOptions       | String - represents image interpolation     | "bi-linear"                                |
| inputHeight/inputWidth | a number greater than 0 measured in pixels. | 0 - Infinity                               |

### return

returns a promise object with a canvas property

| properties | description                                         |
| ---------- | --------------------------------------------------- |
| canvas     | a canvas element with an image drawn in the context |

---

# blobifyCanvas

> turns a canvas element into a binary encoding (blob)

```js
Mini.blobifyCanvas(canvas).then((blob) => {
  console.log(blob);
});
```

### arguments

| arguments | description                                         |
| --------- | --------------------------------------------------- |
| canvas    | a canvas element with an image drawn in the context |

### return

returns a promise with a blob property

| properties | description                         |
| ---------- | ----------------------------------- |
| blob       | binary encoding of a canvas element |

---

# blobToDataUrl

> accepts blob data and returns a promise object

```js
Mini.blobToDataUrl(blob).then((dataURL) => {
  console.log(dataUrl);
});
```

### arguments

| arguments | description                          |
| --------- | ------------------------------------ |
| blob      | a binary representation of file data |

### return

returns a promise object with a dataUrl property

| properties | description                                  |
| ---------- | -------------------------------------------- |
| dataUrl    | uniform resource locator that works anywhere |

---

# blobToObjectUrl(blob)

> turns a blob into an object Url

```js
Mini.blobToObjectUrl(blob).then((objUrl) => {
  console.log(objUrl);
});
```

### arguments

| arguments | description                          |
| --------- | ------------------------------------ |
| blob      | a binary representation of file data |

### return

returns a promise object with a object url property

| properties | description                                                    |
| ---------- | -------------------------------------------------------------- |
| objUrl     | uniform resource locator that works only on your local machine |

---

# Dependancies

none

---

# Example Projects

Example open source project using front-end-min can bee seen here:
https://github.com/MaxSultan/img-compressor
