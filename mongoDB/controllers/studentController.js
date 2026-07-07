//create controller

import Student from "../models/Student.js";
import mongoose from 'mongoose';

export const addStudent = async (req, res) => {
    const student = await Student.create(req.body);

    res.json({
        message: "Student added", student
    })
};