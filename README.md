# Uncommon MongoDB $inc Operator Error: Missing Field Handling

This repository demonstrates a subtle but important issue when using the `$inc` operator in MongoDB's `updateOne` method.  The `$inc` operator is designed to increment a numeric field, but it behaves unexpectedly if the field is missing.  The error is that it doesn't automatically create the field if it's absent.

## Problem
The provided `bug.js` file showcases the incorrect usage. It attempts to increment a counter, but if the counter field is missing in the document, the update operation fails to create the counter field and increment it.

## Solution
The `bugSolution.js` file provides a correct implementation. It utilizes the `$setOnInsert` operator alongside `$inc` to ensure that the counter field is created and initialized to 0 if it's missing before incrementing.