import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice (
{
name : 'search',
initialState :{

},
reducers :{
    cacheResults: (state,action) => {
       // {"ip" : ["iphone", "iphone11"]}
       // state = {...action.payload, ...state}; //merging state and action.payload
          state = Object.assign(state,action.payload)
    },
},

});



export const {cacheResults}= searchSlice.actions;
export default searchSlice.reducer;

//using redux here we are building the cache , for api call 
//because when we type a full word in searchbar , and when we click backspace api call happens again for iph , ip , i which is alreafy done while typing 


//cache :
//time complexity to search in array = O(n)
//[i,ip,iph,ipho,iphon]
//Array.indexOf () , time complexity of this is 'order of n'O(n)
//{
//    i:
//    ip:
//    iph:
//    ipho:
//    iphon:
//}   // but the time complexity , search in a object is O(1) , which is far better than O(n).

// new map() - is a function is more  optimized for searching inside the object 