function B1(){
    a_common()
    console.log("B1")
}

function B2(){
    a_common()

    console.log("B2")
}

function b_common(){
    console.log("b_common")

}

function test(){
    console.log("b test")
}

function B_B(){
    console.log("b_b")
}

export{
    B1,
    B2,
    test,
    B_B

}