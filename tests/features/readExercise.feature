Feature:  View the details of an exercise
          In order to perform an exercise
          As a publi user
          I want to select the exercise and see the instructions

          Scenario: Read an exercise
                    Given I browse to the application
                    When shown a list of exercises
                     And I select an exercise
                    Then I should see the detailed instructions
