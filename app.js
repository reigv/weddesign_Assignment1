/**
 * app.js
 * Problem Description:
 * 
 * Program to help manaage parking in the college campus.
 * Capabilities:
 * 1. Allow customers to purchase $$ ticket
 * 2. Generate report summrizing each parking lot and amount of parking fees colloected
 * 3. Customers successfully purchase if:
 *  a. they choose valid parking lot 
 *      (so there are 2 parking lots: A and B if chose C, then invalid)
 *  &&
 *  b. they are not already parked in that lot (example: if you are already parked in A, then you cannot park again in A)
 * 
 * 
 * STEPs:
 * In JavaScript,
 * 
 *  1. Create  a list (array) of parking lots (A and B)
 *      populate your data structure with the 2 lots using the value of choice
 * 
 * 2. functions for
 *  a. purchaseParking()
 *  b. printSummary()
 * 
 * 3. using data structure and func 
 *  a. attempt to add 3 license plates to parrking lot #1 (A).
 *      Ensure using variety of values for license plates and number of hours
 *      if suscessful, print the success message
 *  b. attempt to add 2 license plates to parking lot #2 (B)
 *      Ensure using variety of values for license plates and number of hours
 *      if suscessful, print the success message
 *  c. attempt to add dublicate license plate to parking lot #2 (B)
 *      Ensure using variety of values for license plates and number of hours
 *      if suscessful, print the success message
 *  d. attempt to add a license plate to an invalid parking lot (C) not existing
 *     output error message
 *  e. output a report 
 * 
 * 
 * ### Data Structure - Parking Lot
 * 
 * ---- a parking lot
 * ---- a car tht is parked in a parking lot
 * 
 * Parking Lot  ----  Properties -----
 * - name (A or B) --->> Short term or Long term example
 * - hourlyRate (number) --->> 2.5 for A and 1.5 for B
 * - feeCollected (number) --->> total amount of fees collected for that parking lot
 * - parkedCars (array) --->> list of cars parked in that lot. init as empty array (no cars parked)
 * 
 * Car ---- Properties -----
 * the parking lot must contain  alist of car parked 
 * - licensePlate (string) --->> unique identifier for the car
 * - hoursParked (number) --->> number of hours the car is parked (how many hours of parking did the customer purchase?)
 * - amountPaid (number) --->> amount paid for parking (calculated as hoursParked * hourlyRate of the parking lot)
 * 
 * 
 * function definitions:
 *    - puchaseParking(customerLicensePlate, requestedParkingLotName, numberOfHoues)
 *      - check if theres the same license plate -- if not display error message "Car with license plate XYZ is already parked in parking lot A"
 *     - check if the parking lot exists  -- if not display error message "Parking lot XYZ does not exist"
 *     - if pass:
 *        - add license plate to the parking lot's parkedCars list
 *       - calculate the amount paid for parking (hoursParked * hourlyRate of the parking lot)
 * 
 * Constraint in codeing
 * 
 *   - use only cstyle for loop (no while)
 *    - this for loop iterate through the array
 * 
 * 
 * Error messages:
 *          ERROR: Cannot park CIVIC808. Sports Stadium Parking Lot does not exist.
 *          ERROR: Cannot add CIVIC808. CIVIC808 is already parked in Garage Parking
 *  Sucess mesage:
 *          SUCCESS: License Plate AMG905 is parked in Short Term Lot for 3 hours.
 * 
 * 
 * *** Print Summary Report ***
 * printSummary() 
 *   - for each lot:
 *      - display the name
 *      - total numver of parked cars
 *      - the hourly rate 2 decimal point (.toFixed(2))
 *      - total fees collected 2 decimal point (.toFixed(2))
 *       - the list of cars parked --- each show license plate and hours parked
 * 
 * Sample output:
 *
 * 
 *  
SUCCESS: CHEVY61 parked in Short Term Parking for 3 hours. You paid: $15.00 
SUCCESS: FORD101 parked in Short Term Parking for 5 hours. You paid: $25.00 
SUCCESS: CIVIC808 parked in Garage Parking for 7 hours. You paid: $14.00 
SUCCESS: TESLA155 parked in Garage Parking for 1 hours. You paid: $2.00 
SUCCESS: FASTCAR722 parked in Garage Parking for 10 hours. You paid: $20.00 
ERROR: Cannot add CIVIC808. CIVIC808 is already parked in Garage Parking 
ERROR: Cannot park CIVIC808. Sports Stadium Parking Lot does not exist. 

---- REPORT FOR Short Term Parking ----- 
Number of parked cars: 2 
Hourly Rate: $5.00 
Total Fees Collected: $40.00 
Parked Cars List:  
License Plate CHEVY61, Hours Purchased: 3 
License Plate FORD101, Hours Purchased: 5
 */

const parkingLots_A = {
    name: "Short term",
    hourly_rate: 5.00,
    fees_collected: 0.0,
    parked_cars: []
}
const parkingLots_B = {
    name : "Garage",
    hourly_rate: 2.00,
    fees_collected: 0.0,
    parked_cars: []
}

const car_1 = {
    name: "CIVIC808",
    hours_parked: 7.0,
    amount_paid: 0.0
}
const car_2 = {
    name: "CHEVY61",
    hours_parked: 3.0,
    amount_paid: 0.0
}
const car_3 = {
    name: "FORD101",
    hours_parked: 5.0,
    amount_paid: 0.0
}
const car_4 = {
    name: "TESLA155",
    hours_parked: 1.0,
    amount_paid: 0.0
}
const car_5 = {
    name: "FASTCAR722",
    hours_parked: 10.0,
    amount_paid: 0.0
}



