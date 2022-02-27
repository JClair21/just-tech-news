const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//create our User model
class User extends Model {}

//define fields/columns and configuration
User.init({
    //TABLE COLUMN DEFINITIONS GO HERE  
    //define an id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        AllowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        //if allowNull is set to false, we can run our data through validators before creating the table data
        validate: {
            isEmail: true
        }
    },
    //define a password column
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            //this means the password must be at least four characters long
            len: [4]
        }
    }
}, {
    hooks: {
        //set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newuserData) {
            newUserData.password - await bcrypt.hash(newUserData.password, 10);
            return newUserData
        },
        //set up beforeUpdate lifecycle "hook" functionality
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
}, );
//TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

// //pass in our imported sequelize connection (the direct connection to our database)
// sequelize,
// //don't automatically create createAt/updatedAt timestamp fields
// timestamps: false,
//     //don't pluralize name of database table
//     freezeTableName: true,
//     //use underscores instead of camel-casing (i.e. 'comment_text' and not 'CommentText)
//     underscored: true,
//     //make it so our model name stays the lowercasae in the database
//     modelName: 'user'
// }
// );

module.exports = User;