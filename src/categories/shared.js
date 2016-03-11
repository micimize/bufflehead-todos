import { utils } from '../db'
import t from 'tcomb'
import { Domain } from 'reactuate'
import Concept from '../analysis/structure'

export const Category = utils.Persistable(
    t.struct({
        title: t.String,
        levels: t.String,
        description: t.String,
        description_concepts: t.list(Concept)
    }),
    'Category'
)

export const serialize = utils.serializer(Category, 'category', ['title'])
