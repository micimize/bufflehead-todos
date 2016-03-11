import { Domain } from 'reactuate'
import multer from 'multer'
import * as utils from './utils'

const domain = new Domain('categories')
domain.routes = {
    '/import': {
        methods: ['post'],
        handlers: [
            multer().single('file'),
            (req, res, next) => {
                var test = utils.importCategoriesFromXls(req.file.buffer)
                res.send('ok')
            }
        ]
    }
}
export default domain
