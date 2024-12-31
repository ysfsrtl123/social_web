import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";



const Answers = sequelize('Answers', {
    content: {type: DataTypes.TEXT, allowNull:false},
    questionId: {type: DataTypes.INTEGER, allowNull:false},
    userId: {type: DataTypes.INTEGER, allowNull:false}
})