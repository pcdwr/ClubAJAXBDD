Feature:  Delete an exercise
          In order to remove an exercise
          As a public user
          I want to select the exercise and delete it

          Scenario: Delete an exercise
                    Given I browse to the application
                    When shown a list of exercises
                     And I select an exercise
                    Then I should be able to delete it
