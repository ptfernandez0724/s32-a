const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    // data for our fields/properties to be included when creating a record
    // the true value defines if the field is required or not, and the second element in the array is the message that will be printed out in our terminal when the data is not present
    name: {
        type: String,
        required: [true, "Course is required"]
    },
    description : {
        type: String,
        required: [true, 'Description is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    // we will be applying the concept of referencing data to establish a relationship between our courses and users.
    enrollees: [
        {
            userId: {
                type: String,
                required: [true, 'Userid is required']
            },
            enrolledOn: {
                type: Date,
                default: new Date()
            }
        }
    ]
});

module.exports = mongoose.model("course", courseSchema);