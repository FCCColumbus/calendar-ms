import { Router } from 'express'
import cors from 'cors'
import { corsOptions } from '../app'
import { getHomepage, getCalendarData } from '../controllers/mainController'
import { catchErrors } from '../handlers/errorHandlers'

const router = Router()

router.get('/', catchErrors(getHomepage))

//
// API
//

router.get('/api/calendar', cors(corsOptions), catchErrors(getCalendarData))

export default router
