Feature:  Initial page should show a list of exercises
          In order to quickly see my exercises
          As a public user
          I want to see a list of my exercises on the first page

          Scenario: See exercise list
                    Given I browse to the application
                    When I see the first page
                    Then I should see a list of my exercises
