//Notes: Test Case masuk ke automation script dalam bentuk komen

///<reference types="Cypress"/>
///<reference types="cypress-xpath"/>

describe('Review our product form', () => {
    beforeEach(() => {
      cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
    });
    it.only('Verify user able to submit form with valid data ', () => {
        //Fill in the "Full name" field with a valid name.
        cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').type('Angelina Jolie');
        //The field should have value 'Angelina Jolie'
        cy.should('have.value', 'Angelina Jolie');
        //Fill in the "Phone Number" field with a valid phone number.
        cy.xpath('//*[@id="question-list"]/div[2]/div[2]/div/span/input').type("087679212109");
        //The phone number field should have value as inputed
        cy.should('have.value', '087679212109');
        //Select an option for the question about affordability (Affordable, Expensive, Other).
        cy.get('input[type="radio"]').check('Affordable').should('be.checked');
        cy.get('input[type="radio"]').check('Expensive').should('be.checked');
        cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/span/input').type('Quite expensive').should('be.checked');
        //Rate the services with 5 stars.
        cy.get('span[aria-label="5 Star"]').click();
        //Stars should be checked
        cy.should('have.attr', 'aria-checked', 'true');
        //Enter a valid date in the "Review date" field.
        cy.get('#DatePicker0-label').click()
        cy.get('button[aria-label="5, June, 2024"]').click();
        //Click on the "Submit" button.
        cy.get('button[data-automation-id="submitButton"]').click();
        cy.contains('Your response was submitted.').should('be.visible');
      });

    it.only('Verify error message display when required fields Full Name is left empty', () => {
        //Fill in the "Full name" field with a valid name.
        cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').type('Angelina Jolie');
        //The field should have value 'Angelina Jolie'
        cy.should('have.value', 'Angelina Jolie');
        //Fill in the "Phone Number" field with a valid phone number.
        cy.xpath('//*[@id="question-list"]/div[2]/div[2]/div/span/input').type("087679212109");
        //The phone number field should have value as inputed
        cy.should('have.value', '087679212109');
        //Select an option for the question about affordability (Affordable, Expensive, Other).
        cy.get('input[type="radio"]').check('Affordable').should('be.checked');
        cy.get('input[type="radio"]').check('Expensive').should('be.checked');
        cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/span/input').type('Quite expensive').should('be.checked');
        //Rate the services with 5 stars.
        cy.get('span[aria-label="5 Star"]').click();
        //Stars should be checked
        cy.should('have.attr', 'aria-checked', 'true');
        //Field review date is left empty
        //Click on the "Submit" button.
        cy.get('button[data-automation-id="submitButton"]').click();
        //Warning message should be displayed on the empty fields
        cy.get('div[data-automation-id="validationError"]').should('be.visible').and('contain', 'This question is required');
    });

    it.only('Verify error message display when required fields phone number is left empty', () => {
      //Fill in the "Full name" field with a valid name.
      cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').type('Angelina Jolie');
      //The field should have value 'Angelina Jolie'
      cy.should('have.value', 'Angelina Jolie');
      //Field "Phone Number" is left empty
      //Select an option for the question about affordability (Affordable, Expensive, Other).
      cy.get('input[type="radio"]').check('Affordable').should('be.checked');
      cy.get('input[type="radio"]').check('Expensive').should('be.checked');
      cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/span/input').type('Quite expensive').should('be.checked');
      //Rate the services with 5 stars.
      cy.get('span[aria-label="5 Star"]').click();
      //Stars should be checked
      cy.should('have.attr', 'aria-checked', 'true');
      //Enter a valid date in the "Review date" field.
      cy.get('#DatePicker0-label').click()
      cy.get('button[aria-label="5, June, 2024"]').click();
      //Click on the "Submit" button.
      cy.get('button[data-automation-id="submitButton"]').click();
      //Warning message should be displayed on the empty fields
      cy.get('div[data-automation-id="validationError"]').should('be.visible').and('contain', 'This question is required');
    });

    it.only('Verify error message display when required fields affordability is left empty', () => {
    //Fill in the "Full name" field with a valid name.
    cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').type('Angelina Jolie');
    //The field should have value 'Angelina Jolie'
    cy.should('have.value', 'Angelina Jolie');
    //Fill in the "Phone Number" field with a valid phone number.
    cy.xpath('//*[@id="question-list"]/div[2]/div[2]/div/span/input').type("087679212109");
    //The phone number field should have value as inputed
    cy.should('have.value', '087679212109');
    //Fields affordabilty is left empty
    //Rate the services with 5 stars.
    cy.get('span[aria-label="5 Star"]').click();
    //Stars should be checked
    cy.should('have.attr', 'aria-checked', 'true');
    //Enter a valid date in the "Review date" field.
    cy.get('#DatePicker0-label').click()
    cy.get('button[aria-label="5, June, 2024"]').click();
    //Click on the "Submit" button.
    cy.get('button[data-automation-id="submitButton"]').click();
    //Warning message should be displayed on the empty fields
    cy.get('div[data-automation-id="validationError"]').should('be.visible').and('contain', 'This question is required');
    });

    it.only('Verify error message display when required fields rates is left empty', () => {
  //Fill in the "Full name" field with a valid name.
  cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').type('Angelina Jolie');
  //The field should have value 'Angelina Jolie'
  cy.should('have.value', 'Angelina Jolie');
  //Fill in the "Phone Number" field with a valid phone number.
  cy.xpath('//*[@id="question-list"]/div[2]/div[2]/div/span/input').type("087679212109");
  //The phone number field should have value as inputed
  cy.should('have.value', '087679212109');
  //Select an option for the question about affordability (Affordable, Expensive, Other).
  cy.get('input[type="radio"]').check('Affordable').should('be.checked');
  cy.get('input[type="radio"]').check('Expensive').should('be.checked');
  cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/span/input').type('Quite expensive').should('be.checked');
  //Field rates is left empty
  //Enter a valid date in the "Review date" field.
  cy.get('#DatePicker0-label').click()
  cy.get('button[aria-label="5, June, 2024"]').click();
  //Click on the "Submit" button.
  cy.get('button[data-automation-id="submitButton"]').click();
  //Warning message should be displayed on the empty fields
  cy.get('div[data-automation-id="validationError"]').should('be.visible').and('contain', 'This question is required');
    });

    it.only('Verify error message display when required fields review date is left empty', () => {
      //Full name is left empty by user
      //Fill in the "Phone Number" field with a valid phone number.
      cy.xpath('//*[@id="question-list"]/div[2]/div[2]/div/span/input').type("087679212109");
      //The phone number field should have value as inputed
      cy.should('have.value', '087679212109');
      //Select an option for the question about affordability (Affordable, Expensive, Other).
      cy.get('input[type="radio"]').check('Affordable').should('be.checked');
      cy.get('input[type="radio"]').check('Expensive').should('be.checked');
      cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/span/input').type('Quite expensive').should('be.checked');
      //Rate the services with 5 stars.
      cy.get('span[aria-label="5 Star"]').click();
      //Stars should be checked
      cy.should('have.attr', 'aria-checked', 'true');
      //Enter a valid date in the "Review date" field.
      cy.get('#DatePicker0-label').click()
      cy.get('button[aria-label="5, June, 2024"]').click();
      //Click on the "Submit" button.
      cy.get('button[data-automation-id="submitButton"]').click();
      //Warning message should be displayed on the empty fields
      cy.get('div[data-automation-id="validationError"]').should('be.visible').and('contain', 'This question is required');
    });

    it.only('Verify user able to clear the form', () => {
        //Fill in the "Full name" field with a valid name.
        cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').type("Angelina Jolie")
        .should('have.value', 'Angelina Jolie');
        //Fill in the "Phone Number" field with a valid phone number.
        cy.xpath('//*[@id="question-list"]/div[2]/div[2]/div/span/input').type("087679212109")
        .should('have.value', '087679212109');
        //Select an option for the question about affordability (Affordable, Expensive, Other).
        cy.get('input[type="radio"]').check('Affordable').should('be.checked');
        cy.get('input[type="radio"]').check('Expensive').should('be.checked');
        cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/span/input').type('Quite expensive').should('be.checked');
        //Rate the services with 5 stars.
        cy.get('span[aria-label="5 Star"]').click()
        .should('have.attr', 'aria-checked', 'true');
        //Enter a valid date in the "Review date" field.
        cy.get('#DatePicker0-label').click()
        cy.get('button[aria-label="5, June, 2024"]').click();
        cy.wait(1000);
        //Click overflow menu button 
        cy.get('button[aria-label="More options"]').click();
        //Select clear form options
        cy.contains("Clear Form").click()
        cy.wait(1000) 
        //Click clear form pop up
        cy.get('button[aria-label="Clear Form"]').click();
         // Assert that all fields are empty
        cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').should('have.value', '');
        cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').should('have.value', '');
        cy.get('span[aria-label="5 Star"]').should('have.value', '');
        cy.get('#DatePicker0-label').should('have.value', '');
    });

    it.only('Verify user able to submit form with long data ', () => {
        // Generate long data
        const longName = 'abcd'.repeat(50); // 50 characters long string for the name field
        const longPhone = '1'.repeat(15); // 15 digits long string for the phone number field
        //Fill in the "Full name" field with long name.
        cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').type(longName)
        .should('have.value', longName);
        //Fill in the "Phone Number" field with long phone number.
        cy.xpath('//*[@id="question-list"]/div[2]/div[2]/div/span/input').type(longPhone)
        .should('have.value', longPhone);
        //Select an option for the question about affordability (Affordable, Expensive, Other).
        cy.get('input[type="radio"]').check('Affordable').should('be.checked');
        cy.get('input[type="radio"]').check('Expensive').should('be.checked');
        cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/span/input').type('Quite expensive').should('be.checked');
        //Rate the services with 5 stars.
        cy.get('span[aria-label="5 Star"]').click()
        .should('have.attr', 'aria-checked', 'true');
       //Enter a valid date in the "Review date" field.
       cy.get('#DatePicker0-label').click()
       cy.get('button[aria-label="5, June, 2024"]').click();
       //Click on the "Submit" button.
       cy.get('button[data-automation-id="submitButton"]').click();
       cy.wait(2000)
       cy.contains('Your response was submitted.').should('be.visible');
    });

    it.only('Verify user able to submit another response', () => {
       //Fill in the "Full name" field with a valid name.
       cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').type('Angelina Jolie');
       //The field should have value 'Angelina Jolie'
       cy.should('have.value', 'Angelina Jolie');
        //Fill in the "Phone Number" field with a valid phone number.
        cy.xpath('//*[@id="question-list"]/div[2]/div[2]/div/span/input').type("087679212109")
        .should('have.value', '087679212109');
        //Select an option for the question about affordability (Affordable, Expensive, Other).
        cy.get('input[type="radio"]').check('Affordable').should('be.checked');
        cy.get('input[type="radio"]').check('Expensive').should('be.checked');
        cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/span/input').type('Quite expensive').should('be.checked');
        //Rate the services with 5 stars.
        cy.get('span[aria-label="5 Star"]').click()
        .should('have.attr', 'aria-checked', 'true');
        //Enter a valid date in the "Review date" field.
        cy.get('#DatePicker0-label').click()
        cy.get('button[aria-label="5, June, 2024"]').click();
        //Click on the "Submit" button.
        cy.get('button[data-automation-id="submitButton"]').click();
        cy.wait(1000)
        cy.contains('Your response was submitted.').should('be.visible');
        //Click submit another response
        cy.get('span[data-automation-id="submitAnother"]').click()
        cy.wait(1000)
        //User should be redirected to the form page
        cy.get('#FormTitleId_titleAriaId > div > span').should('contains.text', 'Review our product');
    });

    //This should be for improvement. Phone number cant contains character or alphabatic. But currently user can input those two 
    it('Verify phone number field contains only integer', () => {
        //Fill in the "Full name" field with a valid name.
        cy.xpath('//*[@id="question-list"]/div[1]/div[2]/div/span/input').type("Angelina Jolie")
        .should('have.value', 'Angelina Jolie');
        //Fill in the "Phone Number" field with an invalid phone number.
        cy.xpath('//*[@id="question-list"]/div[2]/div[2]/div/span/input').type("as6as791222109")
        //should show validation error for non-integer input
        .invoke('val').should('match', /^[0-9]*$/);
        //Select an option for the question about affordability (Affordable, Expensive, Other).
        cy.get('input[type="radio"]').check('Affordable').should('be.checked');
        cy.get('input[type="radio"]').check('Expensive').should('be.checked');
        cy.xpath('//*[@id="question-list"]/div[3]/div[2]/div/div[2]/label/span/input').type('Quite expensive').should('be.checked');
        //Rate the services with 5 stars.
        cy.get('span[aria-label="5 Star"]').click()
        .should('have.attr', 'aria-checked', 'true');
        //Enter a valid date in the "Review date" field.
        cy.get('#DatePicker0-label').click()
        cy.get('button[aria-label="5, June, 2024"]').click();
        //Click on the "Submit" button.
        cy.get('button[data-automation-id="submitButton"]').click();
        cy.wait(1000)
        cy.contains('Your response was submitted.').should('be.visible');
    });

});