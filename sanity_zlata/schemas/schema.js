// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import banner from './banner'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import food from './food'

export default createSchema({
 
  name: 'default',
 
  types: schemaTypes.concat([
    food,banner
  ]),
})
