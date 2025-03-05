Feature: Playwright site

    Scenario: Check get started link
        Given I am on the home page
        When I click on the link "Get started"
        Then I see in the title "Installation"