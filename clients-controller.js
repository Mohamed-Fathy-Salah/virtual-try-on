let clientsDB = [
    {
        id:0,
        name:"fathy",
        photo:"pic", // pic.jpg.enc
        poses:[
            {id:0},
            {id:1}
        ],
        measurements:{
            height:170,
            weight:80,
            chest:50,
            waist:40,
            hip:40,
            inseam:90,
            sholder:50
        },
        gender:"Male"
    },
];



// get client measurements by id
const getClientById = (req,res) => {
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId);
    if (client) {
        res.send(client);
    } else {
        res.status(404).send({error: "client Not Found"});
    }
};    

// get client measurements by id
const getMeasurementsById = (req,res) => {
    const clientId = parseInt(req.params.clientId); 
    const client = clientsDB.find((client) => client.id === clientId);
    if (client) {
        res.send(client.measurements);
    } else {
        res.status(404).send({error: "client Not Found" });
    }
};

// get client poses ids
const getAllPoses = (req,res) => {
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId);
    if (client) {
        res.send(client.poses.map((pose) => pose.id));
    } else {
        res.status(404).send({error: "client Not Found" });
    }
};

// get client photo by id
const getPhotoById = (req,res) => {
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId);
    if (client) {
        res.send(client.photo);
    } else {
        res.status(404).send({error: "client Not Found" });
    }
};

// get client gender by id
const getGenderById = (req,res) => {
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId); 
    if (client) {
        res.send(client.gender);
    } else {
        res.status(404).send({error: "client Not Found" });
    }
};



// add new client 
const createClientHandler = (req, res) => {

    const id = clientsDB.length + 1;
    clientsDB.push({ ...req.body, id });
    res.send({ id, ...req.body });
};


// update client 
const updateClientHandler = (req, res) => {

    const id = parseInt(req.params.id);
    const clientIndex = clientsDB.findIndex(
      (client) => client.id === id
     );
    if (clientIndex !== -1) {
        clientsDB[clientIndex] = {
         ...clientsDB[clientIndex],
         ...req.body,
        };
        res.send(clientsDB[clientIndex]);
    } else {
        res.status(404).send({ error: "NOTFOUND" });
    }
};

// delete client by id
const deleteClientById = (req,res) => {
    const clientId = parseInt(req.params.clientId);
    clientsDB = clientsDB.filter((client) => client.id !== clientId);
    res.send({ message: `client with id:${req.params.clientId} has been deleted successfully` });
}
   

// delete client poses
const deleteClientPoses = (req,res)=>{
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId)
    if(client){
        clientsDB[clientId].poses = null
        res.send('Poses have been deleted')
    }
}

// delete client photo
const deleteClientPhoto = (req,res)=>{
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId)
    if(client){
        clientsDB[clientId].photo = null;
        res.send('photo has been deleted');
    }
    
}

// delete client name
const deleteClientName = (req,res)=>{
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId)
    if(client){
        clientsDB[clientId].name = null;
        res.send('Name has been deleted');
    }
}


module.exports = {
    getClientById,
    getMeasurementsById,
    getAllPoses,
    getPhotoById,
    getGenderById,
    updateClientHandler, 
    createClientHandler,
    deleteClientById,
    deleteClientPoses,
    deleteClientPhoto,
    deleteClientName
};

