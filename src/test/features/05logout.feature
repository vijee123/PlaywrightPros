#Author: Tohfatul SDET126
@logout
Feature: Logout Validation

Background:
    Given Admin is logged into the application


Scenario: Verify logout function
    Given Admin is in home page
    When Admin clicks on the logout in the menu bar
    Then Admin should be redirected to login page

Scenario: Verify back button function 
    Given Admin is logged out of the application
    And Admin is in login page
    When Admin clicks  browser back button
    Then Admin should receive error message