import donate from "../../css/donate.css";

export default function Donate() {
    return `
      <div class="donationBody">
      <h1 class="donationH1">Make a Gift to Wilderness Wild</h1>
      
      <h3 class="donation-info-title">Your Donation Information</h3>
        <div class="donationContainer">
          <div class="donorInformationSection>
              <div class="donationActionButtons">
            
                  <div class="radioBtns">
                  <h4>Select Amount</h4>
                  <input type="radio" class="donationAmtRadioBtn" id="donationFormBtn500">
                  <label for="donationFormBtn500">$500</label>
                  <input type="radio" class="donationAmtRadioBtn" id="donationFormBtn250">
                  <label for="donationFormBtn250">$250</label>
                  <input type="radio" class="donationAmtRadioBtn" id="donationFormBtn100">
                  <label for="donationFormBtn100">$100</label>
                  <input type="radio" class="donationAmtRadioBtn" id="donationFormBtn50">
                  <label for="donationFormBtn50">$50</label>
                  <input type="radio" class="donationAmtRadioBtn" id="donationFormBtn25">
                  <label for="donationFormBtn2500">$25</label><br>
                  <label for="donationFormBtnOther">Other</label><br>
                  <input type="text" class="donationAmtRadioBtn" id="donationFormBtnOther">
                  <h4 class="tax-donation-message">Your gift is 100% tax-deductible</h4>                 
                  </div>                                 
              </div>
                
              <form class="donationActionForm">
                <h4 class="donatorInfo">Name</h4>


                  <div class="donationFormNameFields">
                  <label for="f__Name">First Name </label><br>
                  <input type="text" id="fName" class="donationFormItem"><br>
                  <label for="l__Name">Last Name </label><br>
                  <input type="text" id="lName" class="donationFormItem"><br>
                  </div>
                <h4 class="donatorInfo">Address</h4>
                  <div class="donationFormAddressFields">
                  <label for="street__addr">Street Address</label><br>
                  <input type="text" id="stAddress" class="donationFormItem"><br>
                  <label for="city">City</label><br>
                  <input type="text" id="city" class="donationFormItem"><br>
                  </div><br>     

                  <div class="donationFormStateAndZip">
                  <label for="state">State</label><br>
                  <select id="state__dropdown" name="stateDropdown" class="donationFormItem">
                    <option selected value>Please Select</option>
                    <option value="alabama">Alabama</option>
                    <option value="alaska">Alaska</option>
                    <option value="arizona">Arizona</option>
                    <option value="arkansas">Arkansas</option>
                    <option value="california">California</option>              
                    <option value="colorado">Colorado</option>             
                    <option value="connecticut">Connecticut</option>          
                    <option value="delaware">Delaware</option>
                    <option value="district of columbia>District of Columbia</option>
                    <option value="florida">Florida</option>
                    <option value="georgia">Georgia</option>
                    <option value="hawaii">Hawaii</option>
                    <option value="idaho">Idaho</option>
                    <option value="indiana">Indiana</option>             
                    <option value="iowa">Iowa</option>          
                    <option value="kansas">Kansas</option>
                    <option value="kentucky">Kentucky</option>
                    <option value="louisana">Louisana</option>
                    <option value="maine">Maine</option>
                    <option value="maryland">Maryland</option>
                    <option value="massachusetts">Massachusetts</option>
                    <option value="michigan">Michigan</option>
                    <option value="minnesota">Minnesota</option>              
                    <option value="mississippi">Mississippi</option>             
                    <option value="missouri">Missouri</option>          
                    <option value="montana">Montana</option>
                    <option value="nebraska">Nebraska</option>              
                    <option value="nevada">Nevada</option>             
                    <option value="new hampshire">New Hampshire</option>          
                    <option value=new jersey"">New Jersey</option>
                    <option value="new mexico">New Mexico</option>              
                    <option value="new york">New York</option>             
                    <option value="north carolina">North Carolina</option>          
                    <option value="north dakota">North Dakota</option>
                    <option value="ohio">Ohio</option>
                    <option value="oklahoma">Oklahoma</option>              
                    <option value="oregon">Oregon</option>             
                    <option value="pennsylvania">Pennsylvania</option>          
                    <option value="rhode island">Rhode Island</option>
                    <option value="south carolina">South Carolina</option>
                    <option value="south dakota">South Dakota</option>              
                    <option value="tennessee">Tennessee</option>             
                    <option value="texas">Texas</option>          
                    <option value="utah">Utah</option>
                    <option value="vermont">Vermont</option>
                    <option value="virginia">Virginia</option>              
                    <option value="washington">Washington</option>             
                    <option value="west virginia">West Virginia</option>          
                    <option value="wisconsin">Wisconsin</option>
                    <option value="wyoming">Wyoming</option>               
                  </select><br>
                  <label for="zip">Zip Code</label><br>
                  <input type="text" id="zipCode" class="donationFormItem">
                  </div>
          
                  <h4 class="donatorInfo">Other Contact Info</h4>
                  <label for="email">Email</label><br>
                  <input type="text" id="email" class="donationFormItem"><br>
                  <small>example@example.com</small><p>
                  


                  <div class="publicationInfo">
                  <br><label for="howName">How would you like your name to appear in publications?</label><br>
                  <input type="text" id="prefName" class="donationFormItem"><br>
                    <div class="anonymousCheckbox">
                    <input type="checkbox" id="anonName" class="donationFormItem"><br>
                    <label for="anonName">I wish to remain anonymous</label><br>
                    </div>
                    <div class="investmentCheckbox">
                    <input type="checkbox" id="contactInvest" class="donationFormItem"><br>
                    <label for="contactInvest">Please contact us about investment opportunities with Wilderness Wild</label><br>
                    </div>
                  </div>

                  <h4 class="donatorInfo">Gift Designation</h4>
                  <select id="designation__dropdown" name="designationDropdown" class="donationFormItem">
                    <option selected value>Select One</option>
                    <option value="app maintenance">App Maintenance and Development</option>
                    <option value="education programs">Education Programs for Survival Guide Courses</option>          
                    <option value="event organizer">Event Organizer of Survival Guide</option>
                  </select><br>
                  </div>

                  <div class="creditCardSection">
                    <h4 class="donatorInfo">Credit Card Information</h4>
                    <label for="f__Name_CC">First Name</label><br>
                    <input type="text" id="fNameCC" class="donationFormItem"><br>
                    <label for="l__Name_CC">Last Name</label><br>
                    <input type="text" id="lNameCC" class="donationFormItem"><br>
                    <label for="cc__number">Credit Card Number</label><br>
                    <input type="text" id="ccNumber" class="donationFormItem"><br>
                    <label for="cvv__number">CVV Number</label><br>
                    <input type="text" id="cvvNumber" class="donationFormItem"><br>
                    <select id="expiration__dropdown" name="expirationDropdown" class="donationFormItem">
                      <option selected value>Select Expiration Month</option>
                      <option value="january">January</option>
                      <option value="februry">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                    </select><br>
                    <label for="expiration__year">Expiration Year</label><br>
                    <input type="text" id="expNumber" class="donationFormItem"><br>

                    <h4 class="donatorInfo">Billing Address</h4>
                    <label for="addressCC">Street Address</label><br>
                    <input type="text" id="addressCC" class="donationFormItem"><br>
                    <label for="cityCC">City</label><br>
                    <input type="text" id="cityCC" class="donationFormItem"><br>
                    <label for="stateCC">State</label><br>
                    <input type="text" id="stateCC" class="donationFormItem"><br>
                    <label for="zipCC">Zip Code</label><br>
                    <input type="text" id="zipCC" class="donationFormItem"><br>
                    <input type="submit" value="Proceed to Checkout">
                  </div>
                </form>
              </div>
            </div>
        `;
  }