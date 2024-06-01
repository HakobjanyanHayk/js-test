## Question/Answer of `Part 8`

Why the `isbn` is private and `availableCopies` is protected?

## `isbn` is private  because:
* Ensures ISBN cannot be altered after creation, maintaining data integrity.
* Encapsulation hides the details of the ISBN implementation from outside classes.
* Access is provided through a controlled public method `getISBN()`

## `availableCopies` is protected  because:
* Allows subclasses to manage the availability of copies, supporting inheritance.
* Restricts direct access from outside classes, maintaining control over how available copies are modified.