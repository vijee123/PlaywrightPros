@parallel
Feature: Validate class page functionality

  Scenario: Validating the class manage page
    When Admin clicks the Class Navigation bar in the Header
    Then Admin should land on the Manage class page

  Scenario: Validating the Header in the Manage class page
    When Admin clicks the Class Navigation bar in the Header
    Then Admin should see the Manage Class Header

  Scenario: Validating Search bar in class page
    When Admin clicks the Class Navigation bar in the Header
    Then Admin should see the Search bar in the Manage Class page


  Scenario Outline: Scenario Outline name: Validating the data table headers in the class page
    When Admin clicks the Class Navigation bar in the Header
    Then Admin should see the datatable heading like "<header>"

    Examples:
      | header            |
      | Batch Name        |
      | Class Topic       |
      | Class Description |
      | Status            |
      | Class Date        |
      | Staff Name        |

  Scenario Outline: Validating the text and pagination icon in the classpage
    When Admin clicks the Class Navigation bar in the Header
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
    When Admin clicks the Class Navigation bar in the Header
    Then Admin should see the sort icon in all the fields of the datatable

