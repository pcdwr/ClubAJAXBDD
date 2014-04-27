Feature:  Create a new exercise in my collection
          In order to collect exercises
          As a public user
          I want to create a new exercise in my collection

          Scenario: Create a new exercise
                    Given I browse to the application
                    When I see the first page
                     And I click on the create exercise button
                    Then I can enter a new exercise
                     And I can save the exercise
