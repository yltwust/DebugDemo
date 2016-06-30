var CCLog = function(data){
    if(console.log){
        console.log(data);
        //$("#log").html(data);
    }
    if(uexWindow.log){
        uexWindow.log(data);
        //$("#log").html(data);
    }
}