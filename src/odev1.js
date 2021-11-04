function asalMi(sayi){
    let a = 0;
    for(let j=2;j<=sayi/2;j++){
        if(sayi%j==0){
            a++;
        }
    }
    if(a==0){
        return sayi;
    }
}

function findPrime(...numbers){
    
    for(let i=0;i<numbers.length;i++){
        let n = asalMi(numbers[i])
        if(n!=undefined){
            console.log(n+" sayısı asaldır")
        }     
    }
}

findPrime(2,3,4,5,11,21,33,31,100,101)

function arkadas(sayi){
    let total = 0;
    for(let j=1;j<=sayi/2;j++){
        if(sayi%j==0){
            total += j;
        }
    }
    return total;
}

function arkadasMi(sayi1,sayi2){
    if(arkadas(sayi2)==sayi1 && arkadas(sayi1)==sayi2){
        console.log(sayi1+" ve "+ sayi2+" Arkadaş sayılar")
    }else{
        console.log("Arkadaş değiller.")
    }
}

arkadasMi(1184 ,1210)

function mukemmel(sayi){
    let total = 0;
    for(let i=1;i<=sayi;i++){
        if(sayi%i==0){
            total += i;
        }
    }
    if(total/sayi==2){
        console.log(sayi + " sayısı Mükemmel")
    }
}

for(let i=1;i<=1000;i++){
    mukemmel(i)
}
let list = new Array()
for(let i=1;i<=1000;i++){
    let n = asalMi(i);
   
    if(n != undefined){
        list.push(n)
    }
}

console.log("1000'e kadar asal sayılar : " + list)
