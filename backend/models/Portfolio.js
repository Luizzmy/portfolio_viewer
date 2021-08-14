const {Schema, model} =require ('mongoose')

const portfolioSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    fileName:String,
    header:[Schema.Types.Mixed],
    CSVData:[Schema.Types.Mixed],
    
},{
    timestamps:true
});

module.exports=model ('Portfolio', portfolioSchema)