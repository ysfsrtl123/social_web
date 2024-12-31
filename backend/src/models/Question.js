import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";


const Question = sequelize.define('Question',{
    title: {type: DataTypes.STRING, allowNull:false},
    userId: {type:DataTypes.INTEGER, allowNull:false},
    content: {type:DataTypes.TEXT, allowNull:false}
})