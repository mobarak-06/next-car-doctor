import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNameObj = {
  servicesCollection: "services",
  userCollection: "test_user"
};

const dbConnect = (collectionName) => {
  const uri = process.env.MONGODB_URL;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collectionName);
};

export default dbConnect;
