# What is this?

This is an example for working with legacy code that I use in teaching.

The code is a JavaScript version of the example that Brett Schuchert has used in talks about working with legacy code.

* Watch him work with the C# version: <http://vimeo.com/34484105>
    * Get the code [here](https://github.com/alexbepple/CurrencyConversion-CSharp-MSTest).
* See "[A story about too much power](http://schuchert.wikispaces.com/JMockIt.AStoryAboutTooMuchPower)" for a written treatment of the Java version of this example.

The tags of this repo contain different stages of the example. _master_ is most likely not where you want to start.

* `alpha` The legacy code we start out with.
* `beta` Now we have an edge-to-edge integration test.
* `gamma` Now we have an integration test that, however, avoids accessing the network and is thus much faster and more reliable.

You can get at the tags using `git checkout <tag>`.


# Start hacking

There is nothing to install. The example is self contained.

[site/index.html](site/index.html) is the intended entry point for the user.

Run the Jasmine tests through a `SpecRunner.html`.


# Credits

Thanks to Brett Schuchert for this prolific example – and for generally publishing everything on [his wiki](http://schuchert.wikispaces.com/) under the [Creative Commons Attribution-ShareAlike license](http://creativecommons.org/licenses/by-sa/2.5/).


# License

This material is published under the same [CC BY-SA 2.5](http://www.typemock.com/isolator-product-page) license as Brett’s talk.

