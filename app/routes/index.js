import { Router } from 'express'
import { getHomepage, getCalendarData } from '../controllers/mainController'
import { catchErrors } from '../handlers/errorHandlers'

const router = Router()

router.get('/', catchErrors(getHomepage))

//
// API
//

router.get('/api/calendar', catchErrors(getCalendarData))

export default router
