import mongoose from 'mongoose';

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-kth4vkh-shard-00-00.e6pldoe.mongodb.net:27017,ac-kth4vkh-shard-00-01.e6pldoe.mongodb.net:27017,ac-kth4vkh-shard-00-02.e6pldoe.mongodb.net:27017/?ssl=true&replicaSet=atlas-lzsz90-shard-0&authSource=admin&retryWrites=true&w=majority`
    // const URL =`mongodb://${username}:${password}@ac-uc4a0ej-shard-00-00.vplcwlc.mongodb.net:27017,ac-uc4a0ej-shard-00-01.vplcwlc.mongodb.net:27017,ac-uc4a0ej-shard-00-02.vplcwlc.mongodb.net:27017/?ssl=true&replicaSet=atlas-9d2r6q-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error:', error.message);
    }

};

// mongodb://<username>:<password>@ac-kth4vkh-shard-00-00.e6pldoe.mongodb.net:27017,ac-kth4vkh-shard-00-01.e6pldoe.mongodb.net:27017,ac-kth4vkh-shard-00-02.e6pldoe.mongodb.net:27017/?ssl=true&replicaSet=atlas-lzsz90-shard-0&authSource=admin&retryWrites=true&w=majority