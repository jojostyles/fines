const mongoose = require('mongoose');
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

module.exports.TestDbHelper = class TestDbHelper {
    constructor(){
        this.db =  null;
        this.server = new MongoMemoryServer();
        this.connection = null;
    }

    /**
     * Start the server
     */
    async start(){
        const url = await this.server.getConnectionString();
        this.connection = await mongoose.createConnection(
            url,
            {useNewUrlParser: true, useUnifiedTopology: true}
        );
        this.db = this.connection.db;
    }

    /**
     * Clean up database
     */
    async cleanup() {
        const collections = await this.db.listCollections().toArray();
        return Promise.all(
            collections
                .map(({ name }) => name)
                .map(collection => this.db.collection(collection).drop())
        );
    }

    /**
     * Stop the database and close the connection.
     */
    stop(){
        this.connection.close();
        return this.server.stop();
    }

    /**
     * Insert a document to a collection and return the document
     * @param {string} collectionName 
     * @param {Object} document 
     */
    async createDoc(collectionName, document) {
        const { ops } = await this.db
            .collection(collectionName)
            .insertOne(document);
        return ops[0];
    }

    /**
     * 
     * @param {string} collectionName
     * @param {number} id 
     */
    async deleteDoc(collectionName, id){
        await this.db.collection(collectionName).deleteOne(id);
    }

};
