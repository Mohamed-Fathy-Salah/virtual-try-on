const mongoose = require('mongoose')

const poseSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter pose name']
    },
    theta: {
        type: [mongoose.Types.Decimal128], // 24(joints) * 3(xyz)
        required: [true, 'please enter theta parameters']
    },
})

module.exports = mongoose.model('Pose', poseSchema)
