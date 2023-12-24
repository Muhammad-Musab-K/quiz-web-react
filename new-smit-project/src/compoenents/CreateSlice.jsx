import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result:{
        scoring:0
    }
}
   
const CreateSlice=createSlice({
    name:"result",
    initialState,
    reducers:{
        IncreaseScore: (state, action) => {
            const score = action.payload;
            state.result.scoring += score;
          },
    }
})

export const {IncreaseScore}  = CreateSlice.actions
export default CreateSlice.reducer