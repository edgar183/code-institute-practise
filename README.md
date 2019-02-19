# MongoDb 

### Download and install MongoDB client 4.0.6 for Atlas
    wget -q https://git.io/fh7vV -O /tmp/setupmongodb.sh && source /tmp/setupmongodb.sh
    
### Connect to the Mongo Database on Atlas
### NOTE: REPLACE THE `<dbuser>` & `<dbname>` WITH YOUR OWN PERSONAL
### VALUES (WITHOUT THE ANGULAR BRACKETS)
    mongo "mongodb+srv://myfirstcluster-fsmjm.mongodb.net/<dbname>" --username <dbuser>
    
    // Show all collections in the current DB
        show collections

    // Use the `myFirstMDB` collection and store a reference to it in a
    // variable called `coll`
    
         coll = db.myFirstMDB;
    
    // Find all of the documents in the collection
    
        coll.find()

    // Find all records that have a gender of `f`
    
        coll.find({gender: 'f'})

    // Find all records that have a gender of `f` and a
    // nationality of `english`
    
        coll.find({gender: 'f', nationality: 'english'})

    // Find all records that have a gender of `f` and a
    // nationality of `american` or `irish`
    
        coll.find({gender: 'f', $or: [{nationality: 'american'}, {nationality: 'irish'}]})

    // Find all records that have a gender of `f` and a
    // nationality of `american` or `irish` and sort them in an
    // ascending according to the nationality
    
        coll.find({gender: 'f', $or: [{nationality: 'american'}, {nationality: 'irish'}]}).sort({nationality: 1})
        
        
    // Update the first matching record
    
        coll.update({nationality: 'irish'}, {$set: {hair_colour: 'blue'}})

    // Update all matching records
    
        coll.update({nationality: 'irish'}, {$set: {hair_colour: 'purple'}},{multi:true})

    // Delete a record that has a `first` of `kate` and a `last` of `bush`
    
        coll.remove({first: 'kate', last: 'bush'})
        
    sudo pip3 install dnspython  
    sudo pip3 install pymongo
    mongodb+srv://admin:<PASSWORD>@myfirstcluster-g27jl.mongodb.net/test?retryWrites=true