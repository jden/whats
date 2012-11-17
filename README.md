# whats
locates a module's readme and prints it to stdio

## Installation

    npm install -g whats

## Usage

    whats [moduleName] {options}

        Options:
        -a, --all, -r, --readme    Show full readme

## Example

    $ whats crdt
    crdt by dominictarr <dominic.tarr@gmail.com>
    Commutative Replicated Data Types for easy distributed/collaborative apps
    38 revisions since 0.0.0 (202 days ago) latest 3.1.4 (15 days ago)
    #CRDT - Commutative Replicated Data Types
    a CRDT is a data type designed so that opperations on it commute - give the same result
    indepent of the order in which they are applied.
    CRDTs give you eventual consistency for free. it is not necessary to track concurrent changes
    and use complicated merge algorithms. this module is useful for collaborative/distributed/peer2peer (same things)
    ... run `whats crdt -r` to see full readme

## License
Copyright (c) 2012 Jason Denizac <jason@denizac.org>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.