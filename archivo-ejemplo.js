function matriz(n,m){
    var j=0;
    var i=0;
    while(i<n){
        while(j<m){
            console.log(i + ' ' + j);
            j++;
        }
        j=0;
        i++;
    }
}