
Feature: program Module

  Scenario:Navigating to the program module
    When Admin clicks the program menu from the header
    Then Admin should land on the program page

  Scenario:Verify Logout displayed in menu bar
    Then Admin should see Logout in menu bar

  Scenario:Verify heading in menu bar
    Then Admin should see the heading "LMS - Learning Management System"

  Scenario:Verify other page's name displayed in menu bar
    Then Admin should see the page names as in order "ProgramBatchClassLogout"

  Scenario:Verify sub menu displayed in program menu bar
    Then Admin should see sub menu in menu bar as "Add New Program"

  Scenario:Admin should see the Title as "Manage Program"
    Then Admin should see the title "Manage Program"

  Scenario:Admin should see a Delete button in left top is disabled
    Then Admin should see a Delete button in left top is disabled

  Scenario:Verify the Search button
    Then Admin should see Search bar with text as Search

  Scenario:Verify column header name of data table
    Then Admin should see data table with column header on the Manage Program Page as  "program name program description program status  edit / delete"

  Scenario:Verify checkbox default state beside Program Name column header
    Then Admin should see checkbox default state as unchecked beside Program Name column header

  Scenario:Verify Sort icon in manage program
    Then Admin should see the sort arrow icon beside to each column header except Edit and Delete

  Scenario Outline:Verify edit and delete icon in manage program
    Then Admin should see the "<Options>" in each rows
    Examples:
      | Options     |
      | Edit_Icon   |
      | Check_Box   |
      | Delete_Icon |


  #Add New Program Scenarios

  Scenario: Verify add New Program pop up window
    Then Admin should see pop up window for program details after clicking the Add New Program button

  Scenario: Verify title of the pop up window
    Then Admin should see the pop up window title as "Program Details" after clicking the Add New Program button


  Scenario Outline: Verify Add New Program functionalities
    Then Admin Adds new program and click on save button for the scenario "<scenario>" in program module
    Then Admin gets message for the scenario "<scenario>" for program Module

    Examples:
      | scenario               |
      | cancelwithValidData    |
      | closewithValidData     |
      | onlyMandatoryfields    |
      | withoutMandatoryfields |
      | verifyAddedProgram     |

  Scenario Outline: Scenario Outline name: Verify mandatory fields with red asterisk mark
    Then Admin should see the  mandatory fields "<Fields>" with asterisk mark in the pop Up window
    Examples:
      | Fields              |
      | Program Name        |
      | Program Description |
      | Program Status      |


  Scenario Outline: Validate the pop up window field Validation
    Then Admin see the entered text in the fields "<TextFiled>" in the add new program pop up window

    Examples:
      | TextFiled           |
      | Program Name        |
      | Program Description |
      | Program Status      |


  #Manage Program Sorting

  Scenario Outline: Manage Program - Sorting Program by Program Name/Program Description

    Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon "<ProgramHeader>"

    Examples:
      | ProgramHeader                     |
      | programName_AscendingOrder        |
      | programName_DecendingOrder        |
      | programDescription_AscendingOrder |
      | ProgramDescription_DecendingOrder |


  #Program Pagination

  Scenario Outline: Validating the text and pagination icon in the programPage
    Then Admin should see the below "<items>" pagination controls under the data table in the programPage

    Examples:
      | items            |
      | paginationText   |
      | firstPageIcon    |
      | previousPageIcon |
      | nextPageIcon     |
      | lastPageIcon     |



  #   Manage Program - Search bar

  Scenario Outline: Verify Admin is able to search results found for valid Program fields

    When Admin searches by valid program name,program description "<scenarioName>" in the Program module

    Examples:
      | scenarioName                |
      | searchBy_ValidProgramName   |
      | searchBy_ProgramDescription |
      | searchBy_InValidProgramName |
      | searchBy_PartialProgramName |


  ############################# Program Delete Scenarios##########################################

  Scenario: Validate row level delete icon in the program page
    When Admin clicks the delete icon in the program page
    Then Admin should see a alert open with heading Confirm along with YES and NO button for deletion in program

  Scenario: Click No on deletion window of a program
    When Admin clicks the delete icon in the program page
    And Admin clicks No option to delete on confirm page of program
    Then Admin can see the deletion alert disappears without deleting the program

  #Delete
  Scenario: Click Yes on deletion window of a program
    When Admin clicks the delete icon in the program page
    And Admin clicks Yes option to delete on confirm page of program
    Then Admin gets a message Successful program Deleted alert
    And Do not see that program in the data table

  Scenario: Validate Close(X) icon on Confirm Deletion alert
    When Admin clicks the delete icon in the program page
    And Admin clicks CLose X Icon on confirm page of program
    Then Admin can see the deletion alert disappears without deleting the program

  #Multiple Delete Scenarios
  Scenario: Validate Common Delete button enabled after clicking on any checkbox in program page
    When Admin clicks any checkbox in the data table of program
    Then Admin should see common delete option enabled under header Manage program

  Scenario: Validate multiple program delete button by selecting Single checkbox and clicking NO
    Given Admin clicks single checkbox in the data table and clicks Multi Delete icon in program page
    When Admin clicks No option to delete on confirm page of program
    Then Admin can see the deletion alert disappears without deleting the program

  ####Delete
  Scenario: Validate multiple program delete button by selecting Single checkbox and clicking YES
    Given Admin clicks single checkbox in the data table and clicks Multi Delete icon in program page
    When Admin clicks Yes option to delete on confirm page of program
    Then Admin gets a message Successful programs Deleted alert
    And Do not see that program in the data table

  # Multiple Program Delete
  Scenario: Validate multiple program deletion by selecting multiple check boxes and clicking NO
    Given Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in program page
    When Admin clicks No option to delete on confirm page of program
    Then Admin can see the deletion alert disappears without deleting the selected programs

  # # # Multiple Program Delete
  Scenario: Validate multiple program delete button by selecting multiple checkboxes and clicking YES
    Given Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in program page
    When Admin clicks Yes option to delete on confirm page of program
    Then Admin gets a message Successful programs Deleted alert
    And Do not see that programs in the data table

#########################################################  DELETE OVER ##########################################

