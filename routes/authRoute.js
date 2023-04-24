import express from 'express'
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController } from '../controllers/authController.js'
import { isAdmin, requireSgnIn } from '../middlewares/authMiddleware.js'
const router = express.Router()


router.post('/register', registerController)
router.post('/login', loginController)
router.post("/forgot-password", forgotPasswordController)
router.get('/test', requireSgnIn, isAdmin, testController)
router.get('/user-auth', requireSgnIn, (req, res) => {
    res.status(200).send({ ok: true })
})

//admin

router.get('/admin-auth', requireSgnIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true })
})

router.put('/profile', requireSgnIn, updateProfileController)

router.get("/orders", requireSgnIn, getOrdersController);
router.get("/all-orders", requireSgnIn, isAdmin, getAllOrdersController);
router.put("/order-status/:orderId", requireSgnIn, isAdmin, orderStatusController)

export default router