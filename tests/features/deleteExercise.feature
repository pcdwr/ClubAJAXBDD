Feature:  Delete an exercise
          In order to remove an exercise
          As a public user
          I want to select the exercise and delete it

          Scenario: Delete an exercise
                    Given a list of exercises
                    When I select an exercise
                    Then I should be able to delete it
