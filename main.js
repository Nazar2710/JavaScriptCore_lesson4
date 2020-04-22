//task1
var n = 5.4;
if (n%1>0){console.log(`число дробове`);}
else if (n%1==0 && n%2==0){console.log(`парне число`);}
else if (n%1==0 && n%2==1){console.log(`не парне число`);}

//task2
var number =10;
var n1=8.5;
var n2=10.45;
var s1,s2;
if (n1!=n2){
if (n1>number){s1='+';}
else if (n1<number){s1='-';}   
if (n2>number){s2='+';}
else if (n2<number){s2='-';}
    do{if (s1=='+')n1+=0.001;
  else if(s1=='-'){n1-=0.001;}
  if (n1==n2){console.log(`одинакова відстань`);}
       else if (n1==number){console.log(`n1 ближче до number`);}
    else if (n2==number){console.log(`n2 ближче до number`);}      
  }while(n1!=number||n2!=number);
}
else if(n1==n2){console.log(`одинакова відстань`);}
else if (n1==number){console.log(`n1 ближче до number`);}
else  if (n2==number){console.log(`n2 ближче до number`);}

//task3
for(var i=1000;i<10000;i+=3){console.log(i);}

//task4
for(var i=0,j=1;i<55;i++,j+=2){console.log(j);}

//task5
var a=1,b=25,c=7,x;
if (a!=0){
var dec = b*b-4*a*c;
if (dec==0){x=(b/(2*a))*-1;console.log(`x=${x}`);}
else if (dec<0){console.log(`не має кореня`);}
else if (dec>0){x=(b*(-1)+Math.sqrt(dec))/(2*a);console.log(`x1=${x}`);x=(b*(-1)-Math.sqrt(dec))/(2*a);console.log(`x2=${x}`);}
}
else if(a==0){x=c/b;console.log(`x=${x}`);}

//task6
for(vari=90;i>=0;i-=5){console.log(i);}

//task7
for(var i=0,j=2;i<20;i++,j*=2){console.log(j);}


