Feature: Validate Batch page functionality

  Background:
    Given Admin logged into the application successfully and in home page

  Scenario: Validating the batch manage page
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should land on the Manage batch page

  Scenario: Validating Title in Batch Page
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should see the "LMS - Learning Management System" Title

  Scenario: Validating heading in the Batch Page
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should see the "Manage Batch" Heading

  Scenario: Validating disabled Delete Icon under the header in the Batch Page
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should see the disabled Delete Icon under the header

  Scenario: Validating pagination in the Batch Page
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should see the enabled pagination controls under the data table

  Scenario: Validating edit icon in each data rows
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should see the edit icon in each row

  Scenario: validating delete icon in each data rows
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should see the delete icon in each row

  Scenario: validating checkbox in each data rows
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should see the checkbox in each row

  Scenario Outline: Scenario Outline name: Validating Datatable headers
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should see the datatable header "<headers>"
    Examples:
      | headers           |
      | Batch Name        |
      | Batch Description |
      | Batch Status      |
      | No Of Classes     |
      | Program Name      |
      | Edit / Delete     |

  Scenario: Validating "Checkbox" in the Datatable header row
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should see the checkbox  in the datatable header row

  Scenario: Validating "sort icon" next to all the datatable header
    When Admin clicks the Batch Navigation bar in the Header
    Then Admin should see the sort icon next to all Datatable headers

  Scenario Outline: Validating input data only for mandatory fields
    Given   Admin is on the Batch Details Pop Up WIndow
    When Admin enters the input with "<scenario>" and clicks save button
    Then Admin should get a valid message "<message>" for this "<scenario>"
    Examples:
      | scenario                           | message                                         |
      | ValidInput_BatchData               | success                                         |
      | InvalidInput_AlphabetsInBatchID    | This field accept only numbers and max 5 count. |
      | InvalidInput_BatchEmptyDescription | Batch Description is required.                  |
      | InvalidInput_BatchEmptyProgramName | Program Name is required.                       |
      | InvalidInput_BatchEmptyBatchID     | Batch Name is required.                         |
      | InvalidInput_BatchEmptyStatus      | Status is required.                             |
      | InvalidInput_BatchEmptyNoOfClasses | Number of classes is required                   |

  Scenario: Validating cancel button in pop up window
    Given   Admin is on the Batch Details Pop Up WIndow
    When Admin enters the valid data to all the mandatory fields and click cancel button
    Then Admin can see the batch details popup closes without creating any batch

  Scenario: validate close icon on the batch details pop up
    Given Admin is on the Batch Details Pop Up WIndow
    When Admin clicks on the close icon
    Then batch details pop up closes

  Scenario Outline: Validating all the fields exist in pop up
    Given Admin is on the Batch Details Pop Up WIndow
    When Admin checks all the fields are enabled
    Then The pop up should include the fields "<field>" as type "<type>"
    Examples:
      | field            | type          |
      | batchName        | text          |
      | batchNoOfClasses | number        |
      | batchDescription | text          |
      | programName      | text          |
      | batchStatus      | p-radiobutton |

  Scenario: Validating batchname prefix selected program name
    Given Admin is on the Batch Details Pop Up WIndow
    When Admin selects program name present in the dropdown
    Then Admin should see selected program name in the batch name prefix box

  Scenario: Validating batch name prefix box is not editable
    Given Admin is on the Batch Details Pop Up WIndow
    When Admin enters alphabets in batch name prefix box
    Then Admin should see empty text box

  Scenario: Validating Edit icon feature in any row
    Given Admin is on the Batch page
    When Admin clicks the edit icon
    Then Admin should see the Batch details pop up window

  Scenario: Validate program name  value is disabled to edit
    Given Admin is on the Batch page
    When Admin clicks the edit icon
    Then Admin should see Program name value field is disabled for editing

  Scenario: Validate batch name  value is disabled to edit
    Given Admin is on the Batch page
    When Admin clicks the edit icon
    Then Admin should see batch name value field is disabled for editing

  Scenario: Validate editing description and No. of classes fields with invalid data in the pop up
    Given Admin is on the Batch Details Page
    When Admin Updates any fields with invalid data "Invalid_EditErrorMsg" and click save button
    Then Admin should get a error message under the respective field

  Scenario: validate save button in Edit Batch details pop up
    Given Admin is on the Batch Details Page
    When Admin enters the valid data "ValidInput_EditSaveBtn" to all the mandatory fields and click save button
    Then Admin should get a successful message for editing the batch

  Scenario: validate cancel button in Batch details pop up
    Given Admin is on the Batch Details Page
    When Admin enters the valid data "ValidInput_EditCancelBtn" to all the mandatory fields and click cancel button
    Then Admin can see the batch details popup closes without editing the batch

  Scenario: validate delete Icon on any row
    Given Admin is on the Batch page
    When Admin clicks the delete Icon on any row
    Then Admin should see the confirm alert box with yes and no button

  Scenario: Validate yes button on the confirm alert box
    Given Admin is on the batch confirm popup page
    When Admin clicks on the delete icon and click yes button
    Then Admin should see the successful message and the batch should be deleted

  Scenario: validate no button on the confirm alert box
    Given Admin is on the batch confirm popup page
    When Admin clicks on the delete icon and click no button
    Then Admin should see the alert box closed and the batch is not deleted

  Scenario: validate close Icon on the alert box
    Given Admin is on the batch confirm popup page
    When Admin clicks on the delete close icon
    Then Admin should see the alert box closed

  Scenario: Validate single row delete with checkbox
    Given Admin is on the batch page
    When Admin clicks on the delete icon under the Manage batch header
    Then The respective row in the table should be deleted

  Scenario: Validate multiple row delete with checkbox
    Given Admin is on the batch page
    When Admin clicks more than one delete icons under the Manage batch header
    Then The respective row in the table should be deleted

  ##SearchBox

  Scenario Outline: validate search box functionality
    Given Admin is on the batch page
    When Admin enters the batch name "<searchText>" in the search text box
    Then Admin should see the filtered batches "<searchText>" in the data table
    Examples:
      | searchText |
      | Name       |
      | abc        |

  ###Pagination
Scenario Outline: Batch Page Pagination
Then Admin navigated to the respective pages when he clicks the "<pages>" link on the data table in batch module
  Examples:
      | pages    |
      | next     |
      | previous |
      | first    |
      | last     |


  Scenario: Validate logout option in the header is visible and enabled from the batch page
    Given Admin is on the batch page
    When Admin clicks on the logout button
    Then Admin should see the Login screen Page