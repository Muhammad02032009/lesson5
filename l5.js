// //task1
// function fed(n1,n2,n3,n4)
// {
//     let s1=n1*100;
//     let s2=n3*100;
//     let plus1=s1+n2
//     let plus2=s2+n4
//     let javob=Math.floor((plus2/100)/(plus1/100))
//     return javob
// }
// console.log(fed(1,70,3,80));





//task2

// //task3
// function oyanda(num)
// {
//     if (num%2==0){console.log(num+2 ,num-2)}
    
//     else {console.log(num+1,num-1)}
// }
// console.log(oyanda(3));




// //task4
// function butun(num)
// {
//     if (num%2==0 && num>0){return num-2}
//     else if (num%2!=0 && num>0){return num+1}
//     else return 10
// }
// console.log(butun(0));



// //task5
// function umum(n1,n2)
// {
//     for(let i=1;i<=n1*n2;i++)
//     {
//         if (i%n1==0 && i%n2==0){return i}
//     }
// }
// console.log(umum(4,6));



// //task6
// function per(num)
// {
//     d=0
//     for(let i=1;i<num;i++)
//     {
//         if (num%i==0)
//         {
//             d+=i
//         }
//     }
//     if (d==num)
//     {
//         return true
//     }
//     return false
// }
// console.log(per(32));




// //task7
// function ben(num)
// {
//     for (let i=num;i>0;i=Math.floor(i/10))
//     {
//         if (i%10==Math.floor(i/10%10)){return false}
//     }
//     return true
// }
// console.log(ben(1234));



// //task8
// function prime(num)
// {
//     for(let i=2;i<num;i++)
//     {
//         if (num%i==0){return false}
    
//     }
//     return true
// }
// function number(n1,n2)
// {
//     cnt=0;
//     for (let i=n1;i<=n2;i++)
//     {
//         if(prime(i)){
//             cnt+=i   
//         }
//     } return cnt 
// }
// console.log(number(10,50));




// //task10
// function facts(num)
// {
//     let cnt=1
//     let f=" "
//     for (let i=1;i<=num;i++)
//     {
//         cnt*=i;
//     }
//     for (let j=cnt;j>0;j=Math.floor(j/10))
//     {
//         let s=j%10
//         f+=s
//     }
//     return f;
    
// }
// console.log(facts(4));
