Feature:  Update the details of a specific exercise
          In order to update an existing exercise
          As a public user
          I want to select an exercise and modify the details

          Scenario: Update an exercise
                    Given I browse to the application
                    When shown a list of exercises
                     And I select an exercise
                    Then I should be able to update the details
