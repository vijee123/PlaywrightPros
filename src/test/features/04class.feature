@parallel
Feature: Validate class page functionality

  Background:
    When Admin clicks the Class Navigation bar in the Header

    # Scenario: Validating the class manage page
    #   Then Admin should land on the Manage class page

    # Scenario: Validating the Header in the Manage class page
    #  Then Admin should see the Manage Class Header

    # Scenario: Validating Search bar in class page
    #   Then Admin should see the Search bar in the Manage Class page


    # Scenario Outline: Scenario Outline name: Validating the data table headers in the class page
    #   Then Admin should see the datatable heading like "<header>"

    #   Examples:
    #     | header            |
    #     | Batch Name        |
    #     | Class Topic       |
    #     | Class Description |
    #     | Status            |
    #     | Class Date        |
    #     | Staff Name        |

    # Scenario Outline: Validating the text and pagination icon in the classpage
    #   Then Admin should see the below "<items>" pagination controls under the data table

    #   Examples:
    #     | items            |
    #     | paginationText   |
    #     | pageNumber       |
    #     | firstPageIcon    |
    #     | previousPageIcon |
    #     | nextPageIcon     |
    #     | lastPageIcon     |

    # Scenario: Validate the sort icon of all the field in datatable
    #  Then Admin should see the sort icon in all the fields of the datatable

    # Scenario: Validating the Delete button under the Manage class page
    #    Then Admin should see the Delete button under the Manage class page header.

    # Scenario: Validate the footer message at bottom of manage class page
    #    Then Admin should see footer message Total no of classes at the bottom of the Manage class page

    # Scenario Outline: Create a class with valid and invalid inputs
    #   When Admin clicks the Add New Class button and enters the details of "<scenario>" in the Create Class form
    #   And Admin clicks the Save button
    #   Then Admin should see the valid "<message>"

    #   Examples:
    #     | scenario          | message            |
    #     | validClass        | success            |
  #       | withoutStatus     | statusErrorMsg     |
  #       | withoutStaffName  | staffNameErrorMsg  |
  #       | withoutClassDate  | classDateErrorMsg  |
  #       | withoutClassTopic | classTopicErrorMsg |
  #       | withoutBatchName  | batchNameErrorMsg  |
  #       | withoutClassDesc  | success            |
  #       | withoutComments   | success            |
  #       | withoutNotes      | success            |
  #       | withoutRec        | success            |


  # Scenario Outline: Validate Class Details Popup window
  #   When Admin clicks a add new class under the class menu bar
  #   Then Admin should see a popup open for class details with empty form along with SAVE and CANCEL button and Close(X) Icon

  # Scenario Outline: Validate input fields and their text boxes in Class details form
  #   When Admin clicks a add new class under the class menu bar
  #   Then Admin should see the below input fields "<fieldNameAndBox>" and their text boxes in the class details form

  #   Examples:
  #     | fieldNameAndBox  |
  #     | BatchName        |
  #     | ClassTopic       |
  #     | ClassDescription |
  #     | Status           |
  #     | ClassDates       |
  #     | Class No         |
  #     | StaffName        |
  #     | Comments         |
  #     | Notes            |
  #     | Recording        |

Scenario: Check no classes value added when selecting class dates
   Given Admin is on the Class Popup window
   When Admin selects class date in date picker
   Then Admin should see no of class value is added automatically



   

