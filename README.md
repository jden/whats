# whats
locates a module's readme and prints it to stdio

## Installation

    npm install -g whats

## Usage

    whats [moduleName] {options}

        Options:
        -a, --all, -r, --readme    Show full readme

## Example

    $ whats taters
    taters by shtylman <shtylman@gmail.com>
    super hash powers for express view rendering
    3 revisions since 0.0.0 (2 days ago) latest 0.0.2 (2 days ago)
    # taters
    taters is an automatic resource hashing middleware for [express](http://expressjs.com/);
    ```javascript
    var express = require('express');
    var taters = require('taters');
    ... run `whats taters -r` to see full readme

## License
Copyright (c) 2012 Jason Denizac <jason@denizac.org>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.