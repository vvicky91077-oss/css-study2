function A1(){
    a_common()
    console.log("A1")
}

function A2(){
    a_common()

    console.log("A2")
}

function a_common(){
    console.log("a_common")

}

function test(){
    console.log("a test")
}


function A_A(){
    console.log("a_a")
}



export{
    A1,
    A2,
    test,
    A_A
}