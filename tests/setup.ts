import { connect, connection } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

// Initialize MongoDB in-memory server for testing
const mongoServer = new MongoMemoryServer();

const setupDatabase = async () => {
    const uri = await mongoServer.getUri();
    await connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

// Close the database connection after tests
const teardownDatabase = async () => {
    await connection.dropDatabase();
    await connection.close();
    await mongoServer.stop();
};

// Export setup and teardown functions for use in tests
export { setupDatabase, teardownDatabase };