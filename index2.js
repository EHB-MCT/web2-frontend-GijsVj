const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:admin@cluster0.isk6q.mongodb.net/courseProject?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "courseProject";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "smartphones"
         const col = db.collection("smartphones");

         // Construct a document                                                                                                                                                              
         let smartphoneDocument = {
            brand:"Apple",
            type:"Iphone 13"
         };

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(smartphoneDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);