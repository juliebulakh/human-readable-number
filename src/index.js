module.exports = function toReadable (number) {
  
        let allNumders={0:"zero", 1: "one", 2: "two", 3: "three", 4: "four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9: "nine",10:"ten",11:"eleven"}

        let d1="teen";
        let d2="ty";
        
        let obj=[["twelve","twenty"],["thir"+d1,"thir"+d2],["four"+d1,"forty"],["fif"+d1,"fif"+d2],["six"+d1,"six"+d2],["seven"+d1,"seven"+d2],
        ["eigh"+d1,"eigh"+d2],["nine"+d1,"nine"+d2]];
        
        for (let i=2;i<10;i++){
            allNumders[i+10]=obj[i-2][0];
            allNumders[i*10]=obj[i-2][1];
            for(j=1;j<10;j++){
                allNumders[i*10+j]=allNumders[i*10]+" "+ allNumders[j];}
        }
            for (i=1;i<10;i++){
                allNumders[i*100]=allNumders[i]+" "+"hundred";
                for(j=1;j<100;j++){
                    allNumders[i*100+j]=allNumders[i*100]+" "+allNumders[j];
                }
            }
           return allNumders[number] ;   
    }

