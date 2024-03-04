import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchAllProducts = createAsyncThunk("/products",async()=>{
    try {
        const result = await axios.get("http://localhost:5173/data.json")
        return result.data
        
    } catch (error) {
        console.log(error)
    }
})

export const search = createAsyncThunk("/search",async(querry)=>{
    try {
        let result =  await axios.get("http://localhost:5173/data.json")
        let filtred = result.data.filter(e=>e.productName.toLowerCase().includes(querry.toLowerCase()))
        return filtred
    } catch (error) {
        console.log(error)
    }
})


export const productSlice = createSlice({
    name:"products",
    initialState : {
        products : [],
        product : {}
    },
    reducers : {},
    extraReducers(builder){
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{state.products = action.payload})
        builder.addCase(search.fulfilled,(state,action)=>{state.products = action.payload})
    }
})

export default productSlice.reducer