Feature: Validate Batch page functionality

Background:
Given Admin logged into the application successfully and in home page
  
  # Scenario: Validating the batch manage page
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should land on the Manage batch page

  # Scenario: Validating Title in Batch Page
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should see the "LMS - Learning Management System" Title

  # Scenario: Validating heading in the Batch Page
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should see the "Manage Batch" Heading

  # Scenario: Validating disabled Delete Icon under the header in the Batch Page
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should see the disabled Delete Icon under the header

  # Scenario: Validating pagination in the Batch Page
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should see the enabled pagination controls under the data table

  # Scenario: Validating edit icon in each data rows
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should see the edit icon in each row

  # Scenario: validating delete icon in each data rows
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should see the delete icon in each row

  # Scenario: validating checkbox in each data rows
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should see the checkbox in each row

  # Scenario Outline: Scenario Outline name: Validating Datatable headers
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should see the datatable header "<headers>" 
  #    Examples:
  #   |headers|
  #   |Batch Name|
  #   |Batch Description|
  #   |Batch Status|
  #   |No Of Classes|
  #   |Program Name|
  #   |Edit / Delete|

  # Scenario: Validating "Checkbox" in the Datatable header row
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should see the checkbox  in the datatable header row

  # Scenario: Validating "sort icon" next to all the datatable header
  #  When Admin clicks the Batch Navigation bar in the Header	
  #  Then Admin should see the sort icon next to all Datatable headers

  Scenario Outline: Validating input data only for mandatory fields
   When Admin enters the input with "<scenario>" and clicks save button
   Then Admin should get a valid message "<message>" for this "<scenario>"
   Examples:
   |scenario|message|
   |AllValid_BatchInputData|success|
