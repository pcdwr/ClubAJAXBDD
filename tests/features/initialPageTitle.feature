Feature:  Initial page title should be 'My Exercises'
          In order to brand our application
          As a public user
          I want to see a page title of 'My Exercises'

          Scenario: Browse to application
                    Given I browse to the application
                    When I see the first page
                    Then I should see a title of 'My Exercises'
