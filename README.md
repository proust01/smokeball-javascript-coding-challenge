# Smokeball JavaScript Coding Challenge Completion

## Task Overview

This document provides the solution to the Smokeball JavaScript Coding Challenge. The task was to implement a function that fetches quotes from multiple URLs and handles the responses appropriately.

## Solution Implementation

The solution to the coding challenge can be found in the file `src/get-arnie-quotes.js`.

### Key Implementation Details:
- The function fetches quotes from an array of provided URLs asynchronously.
- It checks the HTTP status of each response:
  - If the status is `200`, it returns the quote.
  - If the status is not `200`, it returns a failure message.
- The function uses `async`/`await` for asynchronous operations and `Promise.all()` to handle multiple requests concurrently.
