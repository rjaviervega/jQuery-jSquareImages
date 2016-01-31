#jSquareImages Plugin 

This is a very simple jquery plugins that takes a selection of images and wraps them around span tags to create
a square version of the image. The plugin use CSS attributes on the span so the image can be aligned horizontally 
and or vertically inside the square space.

You can use this plugin to easily format non-square images and create aligned square images.
 
<img src="https://raw.github.com/rjaviervega/jQuery-jSquareImages/master/screenshot.png" alt="screenshot" />
 
## To use this plugin:
 
- Add the script tag:
 
```
<script type="text/javascript" src="jsquareimages.js"></script>
```
 
- Initialize the plugin:

```
$(document).ready(function(){
    $(".jsquareimage").squareimages({size: 64}); 
}); 
```
 
- Add the class name to the desired images:

```
<img class="jsquareimage" data-size="32" data-centerx="left" src="1.jpg">
```


## Options 

On initialization you can pass the following global options:

```
{
    size: 64,           // Resize in pixels of image
    centerx: 'center',  // Align horizontally (left, center, right)
    centery: 'top',     // Align vertically (top, middle, bottom)
}
```
Or you can assign individual options per image tag using data attributes:

```
<img class="jsquareimage" data-size="32" data-centerx="right" src="1.jpg">
```


## References

For a more comprehensive plugin for cropping images visit this link:

[https://github.com/VuongN/jQuery-Fakecrop/](https://github.com/VuongN/jQuery-Fakecrop/)


## License 

These files are under GPL 3 lisence.

