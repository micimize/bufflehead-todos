import { utils } from '../db'
import t from 'tcomb'
import { Domain } from 'reactuate'
import Concept from '../analysis/structure'

export const BaseProfile = t.struct({
    id: t.Number,
    fullName: t.String,
    title: t.String,
    summary: t.String,
    summary_concepts: t.maybe(t.list(Concept))
})

export const Profile = utils.Persistable( BaseProfile, 'Profile' )


export const serialize = utils.serializer(Profile, 'profile', ['id'])
