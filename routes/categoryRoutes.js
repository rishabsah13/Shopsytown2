import express from 'express'
import { isAdmin, requireSgnIn } from '../middlewares/authMiddleware.js'
import { categoryController, createCategoryController, dekleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js'


const router = express.Router()


router.post('/create-category', requireSgnIn, isAdmin, createCategoryController)

router.put('/update-category/:id', requireSgnIn, isAdmin, updateCategoryController)

router.get('/get-category', categoryController)

router.get('/single-category/:slug', singleCategoryController)


router.delete('/delete-category/:id', requireSgnIn, isAdmin, dekleteCategoryController)
export default router