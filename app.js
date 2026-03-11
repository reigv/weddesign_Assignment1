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
 */