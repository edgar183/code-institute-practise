import pymongo
import os

MONGODB_URI = os.getenv("MONGO_URL")
DBS_NAME = "myFirstMDB"
COLLECTION_NAME = "myFirstMDB"

def mongo_connect(url):
    try:
        conn = pymongo.MongoClient(url)
        print("Mongo is connected!")
        return conn
    except pymongo.errors.ConnectionFailure as e:
        print("Could not connect to MongoDB: %s") % e
        
conn = mongo_connect(MONGODB_URI)

coll = conn[DBS_NAME][COLLECTION_NAME]
new_doc = [{'first':'ed','last':'peskaitis','dob':'01/01/1999','hair_color':'blond','occupation':'gamer','nationality':'american'},{'first':'jhon','last':'jhonson','dob':'01/01/1999','hair_color':'blond','occupation':'kiter','nationality':'latvain'}]
coll.insert_many(new_doc)
documents = coll.find()

for doc in documents:
    print(doc)