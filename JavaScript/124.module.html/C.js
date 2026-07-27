


import { A_A } from "./A.js"
import { B_B } from "./B.js"


A_A()
B_B()

function C(){
    A_A()
    B_B()
    console.log("ccc")
}

export default C