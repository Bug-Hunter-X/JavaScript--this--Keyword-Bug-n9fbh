# JavaScript 'this' Keyword Bug

This repository demonstrates a common JavaScript bug related to the `this` keyword.  The `this` keyword's value depends on how a function is called, leading to unexpected results if not handled correctly.  The bug and its solution are explained in detail in the files below.

**bug.js**: Contains the buggy code showing unexpected 'this' behavior.

**bugSolution.js**: Provides a solution using `bind()` to explicitly set the context of 'this'.