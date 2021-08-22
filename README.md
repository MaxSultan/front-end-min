# Minify and resize images on the frontend

# How to install

via npm: `npm install front-end-min`

via unpkg: `<script src="https://unpkg.com/front-end-min@latest"></script>`

# Documentataion

all functions imported from front-end-min use the Mini namespace.

Example: 
```
Mini.compressResizeBlobify(file, {
        aspectRatioPreserved: aspectRatioPreserved,
        inputWidth: inputWidth,
        inputHeight: inputHeight,
        smoothingOptions: smoothingOptions,
        quality: quality
      }).then(result => { console.log(result) })
```
compressResizeBlobify is a function that accepts a file and options object.

### file
file (required) - 
image url | image blob data | an image file
if not added the functions fails immediately and returns an error.
Currently only supports .jpeg and .png files

The object has the following properties:

aspectRatioPreserved (Boolean) --
true|false
true - keep the proportions of the image (aspect ratio) the same
false - disregard the aspect ratio of the image

inputHeight/inputWidth (Number) -- 
a number greater than 0 measured in pixels. keep in mind that input height and input width represent the maximum dimensions 
and may not be the exact dimensions if the aspect ratio is preserved

smoothingOptions (String) -- 
"bi-cubic" | "bi-linear"
the smoothness of the image -  when images changes dimensions, information is either lost or more informaiton is needed.
Smoothing options dictate how the decision of how to turn 4 pixels into one is made (assuming the image is shrinking)
Or how to come up with new pixels in the case of an enlarged image

quality (float) --
positive floating point number from 0 - 1
represets the degree of image quality with 1 being highest quality and 0 being the lowest


an object with the following fields is returned

blob (blob) -- 
binary encoding of the image data

objUrl (String) -- 
a local url that can be used to view the image on your local machine

dataUrl (String) -- 
a url that can be used to access the image from any client

TODO: add documentation for the following functions: 
        smoothCanvas
        resize
        canvasToBlob
        blobToDataUrl


Example open source project using front-end-min can bee seen here: https://github.com/MaxSultan/img-compressor 