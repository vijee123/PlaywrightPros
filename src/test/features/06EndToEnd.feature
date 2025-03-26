Feature: Checking the chaining between different Modules

Scenario: To test whether we are able to pass data between modules for chaining
Given Admin creates a new Program for chaining
And Admin creates a new batch with the created Program
Then Admin should be able to create a new class with the newly created batch 