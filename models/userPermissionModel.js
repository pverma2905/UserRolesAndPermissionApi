const mongoose = require("mongoose");
const userPermissionSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }, 
    permissons:[{
        permission_name:String,
        permission_value:[Number]  // 0=>create, 1=>read, 2=>update, 3=>delete
    }]
})

module.exports = mongoose.model('UserPermission', userpermissionSchema);