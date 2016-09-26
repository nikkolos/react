import { combineReducers } from 'redux'
import products from './products'
import basket from './basket'
import sections from './sections'

export default combineReducers({
    products,
    basket,
    sections
})