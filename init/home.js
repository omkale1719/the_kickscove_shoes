const mongoose = require("mongoose");
const initdata = require("./home_data.js");
const Listing = require("../model/listing.js");

const mongo_URL = "mongodb+srv://omkale0107:KpQXxecPPRt7WAin@cluster0.9e6ps.mongodb.net/shoes_palace?retryWrites=true&w=majority"; // MongoDB Atlas URI लोड करा

// Connect to MongoDB
main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("Error found", err);
    });

async function main() {
    try {
        await mongoose.connect(mongo_URL, {
           
        });
        console.log("Connection successful");
    } catch (err) {
        console.log("Connection error", err);
    }
}

const initDB = async () => {
    try {
        console.log("Initializing database...");
        console.log("Data to be inserted:", initdata.data);

        // Delete existing data
        await Listing.deleteMany({});
        console.log("Existing data cleared.");

        // Insert new data
        await Listing.insertMany(initdata.data);
        console.log("Data was initialized successfully.");
    } catch (err) {
        console.log("Error while initializing data:", err);  // Log any errors
    }
};

// Initialize the database
initDB();
