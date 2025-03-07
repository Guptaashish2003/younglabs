
const greet = (req, res) => {
//   from the request object, get the name query parameter
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({message:"Name is required."})
        }
        return res.status(200).json({message:`Hello ${name}! Welcome to Younglabs.`,success:true})
    } catch (error) {
        console.log({error:error})
        return res.status(400).json({error:"Invalid request"})
        
    }

}

module.exports = greet;