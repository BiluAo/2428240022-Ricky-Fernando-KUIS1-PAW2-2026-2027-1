import express from 'express'

import upload from '../config/upload.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'
import TiketKonserController from '../controllers/tiket_konser.controller.js'

const router = express.Router()

router.get('/welcome', WelcomeController.welcome)
router.post('/users', UserController.store)
router.post('/upload', upload.single('file'), UploadController.store)

router.get('/tiketkonser', TiketKonserController.index)
router.get('/tiketkonser/:id', TiketKonserController.show)
router.post('/tiketkonser', TiketKonserController.store)
router.put('/tiketkonser/:id', TiketKonserController.update)
router.delete('/tiketkonser/:id', TiketKonserController.destroy)

export default router
