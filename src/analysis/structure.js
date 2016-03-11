import t from 'tcomb'
import { Domain } from 'reactuate'

const Concept = t.struct({
    label: t.String,
    watsonId: t.String,
    score: t.Number,
    text_index: t.list(t.Number)    
}, Concept)

export default Concept
