import {SimpleSchema} from 'meteor/aldeed:simple-schema'

const DocumentsSchema=new SimpleSchema({
  '_id': {type: String, regEx: SimpleSchema.RegEx.Id},
  'userId': {type: String, regEx: SimpleSchema.RegEx.Id},
  'createdAt': {type: Date},
  'modifiedAt': {type: Date},
   "name":{type:String }


})

export default DocumentsSchema;