import { Router } from 'express'
import auth from './auth'
import signup from './signup'

import region from './region'

import country from './country'

import location from './location'

import department from './department'

import employee from './employee'

import job from './job'

import task from './task'

const router = Router()

router.use('/auth', auth)
router.use('/signup', signup)

router.use('/region', region)

router.use('/country', country)

router.use('/location', location)

router.use('/department', department)

router.use('/employee', employee)

router.use('/job', job)

router.use('/task', task)

export default router
