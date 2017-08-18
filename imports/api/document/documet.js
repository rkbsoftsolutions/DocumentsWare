import {Mongo} from 'meteor/mongo';
import {DocumentsSchema} from './documen.schema';


 class _document extends Mongo.Collection {
  insert(doc, cb) {
    doc.createdAt = new Date();
    doc.modifiedAt = new Date();
    return super.insert(doc, cb);
  }
}



 const Documents= new _document("dcocument");

 Documents.deny({
     insert(){ return  true},
     update() {return true},
     remove(){return true}
      });
    

  Documents.schema=DocumentsSchema;