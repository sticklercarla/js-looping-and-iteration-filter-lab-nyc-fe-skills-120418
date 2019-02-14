// Code your solution in this 
const findMatching = (drivers, name) => {
  return drivers.filter(driver => (driver.toLowerCase() === name.toLowerCase()))
}