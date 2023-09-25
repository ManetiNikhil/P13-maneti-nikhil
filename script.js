function drawTriangle(triangleSize ) {
    
    for(let i=0;i<=triangleSize; i++){
        let astericks='';
        for(let j=0; j<i; j++){
            astericks+="*";

        }console.log(astericks);
    }

}
drawTriangle(4);
