const express = require("express");
const router = express();
const permissionController = require('../controllers/admin/permissionController');
const { permissionAddValidator } = require('../helpers/adminValidator')

// router.post("/add-permission", permissionController.addPermission) ;
router.post("/add-permission",permissionAddValidator, permissionController.addPermission) ;
router.post("/get-permission",permissionAddValidator, permissionController.getPermission) ;
router.post("/update-permission",permissionAddValidator, permissionController.updatePermission) ;
router.post("/delete-permission",permissionAddValidator, permissionController.deletePermission) ;

module.exports = router;