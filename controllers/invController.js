const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}


/* ***************************
 *  Build inventory by inventory Id view
 * ************************** */


invCont.buildByInventoryId = async function (req, res, next) {
  const inventory_id = req.params.inventoryId  
  const vehicle = await invModel.getVehicleById(inventory_id);
  
  const vehicleHTML = utilities.wrapVehicleHTML(vehicle);
  let nav = await utilities.getNav();

  res.render("./inventory/detail", {
    title: `${vehicle.inv_make} ${vehicle.inv_model}`,
    nav,
    vehicleHTML,
  })
}


module.exports = invCont;
