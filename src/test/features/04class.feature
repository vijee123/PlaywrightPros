@parallel
Feature: Validate class page functionality

  Background:
    When Admin clicks the Class Navigation bar in the Header

  #Validating Class Page
  Scenario: Validating the class manage page
    Then Admin should land on the Manage class page

  Scenario: Validating the Header in the Manage class page
    Then Admin should see the Manage Class Header

  Scenario: Validating Search bar in class page
    Then Admin should see the Search bar in the Manage Class page

  # Validating table Headers in class page
  Scenario Outline: Scenario Outline name: Validating the data table headers in the class page
    Then Admin should see the datatable heading like "<header>"

    Examples:
      | header            |
      | Batch Name        |
      | Class Topic       |
      | Class Description |
      | Status            |
      | Class Date        |
      | Staff Name        |

  # Validating Pagination Icons, sortIcons, Delete Button and Footer message in Class Page
  Scenario Outline: Validating the text and pagination icon in the classpage
    Then Admin should see the below "<items>" pagination controls under the data table

    Examples:
      | items            |
      | paginationText   |
      | pageNumber       |
      | firstPageIcon    |
      | previousPageIcon |
      | nextPageIcon     |
      | lastPageIcon     |

  Scenario: Validate the sort icon of all the field in datatable
    Then Admin should see the sort icon in all the fields of the datatable

  Scenario: Validating the Delete button under the Manage class page
    Then Admin should see the Delete button under the Manage class page header.

  Scenario: Validate the footer message at bottom of manage class page
    Then Admin should see footer message Total no of classes at the bottom of the Manage class page

  #Add New Class with valid and Invalid data
  Scenario Outline: Create a class with valid and invalid inputs
    When Admin clicks the Add New Class button and enters the details of "<scenario>" in the Create Class form
    And Admin clicks the Save button
    Then Admin should see the valid "<message>"

    Examples:
      | scenario          | message            |
      | validClass        | success            |
      | withoutStatus     | statusErrorMsg     |
      | withoutStaffName  | staffNameErrorMsg  |
      | withoutClassDate  | classDateErrorMsg  |
      | withoutClassTopic | classTopicErrorMsg |
      | withoutBatchName  | batchNameErrorMsg  |
      | withoutClassDesc  | success            |
      | withoutComments   | success            |
      | withoutNotes      | success            |
      | withoutRec        | success            |
      | emptyForm         | allErrorMsg        |

  #Validate Class window pop-up and their fields name and text boxes
  Scenario Outline: Validate Class Details Popup window
    When Admin clicks a add new class under the class menu bar
    Then Admin should see a popup open for class details with empty form along with SAVE and CANCEL button and Close(X) Icon

  Scenario Outline: Validate input fields and their text boxes in Class details form
    When Admin clicks a add new class under the class menu bar
    Then Admin should see the below input fields "<fieldNameAndBox>" and their text boxes in the class details form

    Examples:
      | fieldNameAndBox  |
      | BatchName        |
      | ClassTopic       |
      | ClassDescription |
      | Status           |
      | ClassDates       |
      | Class No         |
      | StaffName        |
      | Comments         |
      | Notes            |
      | Recording        |

  Scenario: Check no classes value added when selecting class dates
    Given Admin is on the Class Popup window
    When Admin selects class date in date picker
    Then Admin should see no of class value is added automatically

  Scenario: Check weekend dates are disabled in calendar
    Given Admin is on the Class Popup window
    When Admin clicks date picker
    Then Admin should see weekends dates are disabled to select

  Scenario Outline: Validate Cancel/Close(X) icon on class Details form
    Given Admin clicks the Add New Class button and enters the details of "<scenario>" in the Create Class form
    When Admin clicks Cancel button OR Close Icon "<Icon>"
    Then Class Details popup window should be closed without saving

    Examples:
      | scenario   | Icon      |
      | validClass | CancelBtn |
      | validClass | CloseIcon |

  # Edit Class scenarios
  Scenario: Validate row level edit icon of a existing class
    When Admin clicks on the edit icon in the class page
    Then check that a new pop up with class details appears

  Scenario: Validate Class Topic is disabled while editing existing Class
    When Admin clicks on the edit icon in the class page
    Then Admin should see class topic field is disabled

  Scenario: Validate batchName is disabled while editing existing Class
    When Admin clicks on the edit icon in the class page
    Then Admin should see batch name field is disabled


  #Delete Class Scenarios
  Scenario: Validate row level delete icon in the class page
    When Admin clicks the delete icon in the class page
    Then Admin should see a alert open with heading Confirm along with YES and NO button for deletion

  Scenario: Click No on deletion window of a class
    When Admin clicks the delete icon in the class page
    And Admin clicks No option to delete on confirm page of class
    Then Admin can see the deletion alert disappears without deleting the class

  ##Delete
  Scenario: Click Yes on deletion window of a class
    When Admin clicks the delete icon in the class page
    And Admin clicks Yes option to delete on confirm page of class
    Then Admin gets a message Successful Class Deleted alert
    And Do not see that Class in the data table
  
  Scenario: Validate Close(X) icon on Confirm Deletion alert
    When Admin clicks the delete icon in the class page
    And Admin clicks CLose X Icon on confirm page of class
    Then Admin can see the deletion alert disappears without deleting the class

  # #Multiple Delete Scenarios
  Scenario: Validate Common Delete button enabled after clicking on any checkbox in class page
    When Admin clicks any checkbox in the data table
    Then Admin should see common delete option enabled under header Manage class

  Scenario: Validate multiple class delete button by selecting Single checkbox and clicking NO
    Given Admin clicks single checkbox in the data table and clicks Multi Delete icon in class page
    When Admin clicks No option to delete on confirm page of class
    Then Admin can see the deletion alert disappears without deleting the class

  # ####Delete
  Scenario: Validate multiple class delete button by selecting Single checkbox and clicking YES
    Given Admin clicks single checkbox in the data table and clicks Multi Delete icon in class page
    When Admin clicks Yes option to delete on confirm page of class
    Then Admin gets a message Successful Classes Deleted alert
    And Do not see that Class in the data table
  
  Scenario: Validate multiple class deletion by selecting multiple check boxes and clicking NO
    Given Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in class page
    When Admin clicks No option to delete on confirm page of class
    Then Admin can see the deletion alert disappears without deleting the selected classes

  # # Delete
  # # Scenario: Validate multiple class delete button by selecting multiple checkboxes and clicking YES
  # #   Given Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in class page
  # #   When Admin clicks Yes option to delete on confirm page of class
  # #   Then Admin gets a message Successful Classes Deleted alert
  # #   And Do not see that Classes in the data table


  #Manage Class Sorting

  Scenario Outline: Manage Class - Sorting Class by Class Topic/Batch Name/Program Name/ Class Description / Staff Name and Class Dates
    Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "<ClassHeader>"

    Examples:
      | ClassHeader                      |
      | batchName_AscendingOrder         |
      | batchName_DescendingOrder        |
      | classTopic_AscendingOrder        |
      | classTopic_DecendingOrder        |
      | ClassDescription_AscendingOrder  |
      | ClassDescription_DescendingOrder |
      | staffName_AscendingOrder         |
      | staffName_DecendingOrder         |
   

      # # Search class scenarios
  Scenario Outline: Scenario Outline name: Search class by Batch Name, Class topic, Class Description and by Staff Name
    When Admin searches by below scenario "<scenarioName>" in the Class module
    Examples:
      | scenarioName              |
      | searchBy_batchName        |
      | searchBy_classTopic       |
      | searchBy_ClassDescription |
      | searchBy_staffName        |
