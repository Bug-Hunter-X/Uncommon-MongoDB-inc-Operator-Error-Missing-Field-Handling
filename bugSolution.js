```javascript
//Correct usage of $inc operator with $setOnInsert
db.collection.updateOne({"_id":ObjectId("someId")},{
  $set:{
      counter: {
        $inc: 1
      }
  },
  $setOnInsert: {
    counter: 0
  }
});
```