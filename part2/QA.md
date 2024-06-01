## Question/Answer of `Part 2`

# Why `TypeScript`'s `type` keyword is used instead of `interface`?

## Type
* `type` can represent union types, intersection types, and more complex type compositions that `interfaces` cannot.
* `type` can alias primitive types, tuples, and other non-object types.
* `type` can be used to create more flexible and expressive type definitions, especially for complex types.
* 
## Interface
* Interfaces support declaration merging, which means that multiple declarations of the same interface will be merged into a single interface. This is particularly useful for extending existing types in a modular way.
* Interfaces can extend other interfaces and classes, allowing for a structured way to build complex type hierarchies.