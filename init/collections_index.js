const mongoose = require("mongoose");
const initdata = require("./collections_data.js");
const collections = require("../model/collections.js");


const mongo_URL = "mongodb+srv://omkale0107:KpQXxecPPRt7WAin@cluster0.9e6ps.mongodb.net/shoes_palace?retryWrites=true&w=majority"; // MongoDB Atlas URI लोड करा

console.log("MongoDB URI:", mongo_URL); // URI तपासा

// Connect to MongoDB Atlas
async function main() {
    try {
        if (!mongo_URL) {
            throw new Error("MongoDB URI is missing or undefined.");
        }
        await mongoose.connect(mongo_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // ३० सेकंदांच्या टाइमआउटसाठी
        });
        console.log("Connection successful");
        await initDB();  // कनेक्शन सफल झाल्यावर डेटाबेस सुरू करा
    } catch (err) {
        console.log("Connection error:", err);
    }
}

main(); // कनेक्शन सुरू करा

const initDB = async () => {
    try {
        console.log("Initializing database...");
        console.log("Data to be inserted:", initdata.data);

        // Existing data साफ करा
        await collections.deleteMany({});
        console.log("Existing data cleared.");

        // नवीन डेटा घाला
        await collections.insertMany(initdata.data);
        console.log("Data was initialized successfully.");
    } catch (err) {
        console.log("Error while initializing data:", err);  // एरर लॉग करा
    }
};
