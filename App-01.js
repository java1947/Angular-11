/*
String -> collection of character called as string
""(doubleQuotes), ''(singleQuotes) , ``(backtick Operator)
`` (backtick operator) also called ad template literal.
template literal introduced in "ES6"
template literal used to "define the paragraphs"
*/



console.log("Check valid Variable and print");
var name=`Bhagwati`;
var id=101;
console.log(name +" "+ (id));
var wish=`welcome to ${name}`;
console.log(wish);
console.log("add:: "+(id+10));
console.log(name + ++ id); 

var course="JAVA RTP";
var tranner=' ashok';

console.log("\n\t"+course+tranner);
var a=10;
var b=20;
var c;

console.log(c);
c=a+b;
console.log(c);
console.log(a+b);
c=a+55;
console.log(c);
c+=22;
console.log(c);

var t_name='employee';
var sla=43000;
var sql_query=`select * from ${t_name} where emp_sal>${sla}`;
console.log(sql_query);

var u_name='system';
var u_pass="manager";
var id=1010;
var query=`select * from emp where userNm= ${u_name},userPS=${u_pass},and id=${id}`;
console.log("SQL_QUERY= "+query);

console.log('----------------------------------');
var $data;
console.log($data);
console.log("==================================");

var s_name='ANGULAR11';
var s_code=07;
console.log(`subject= ${s_name} and Code=${s_code}`);
//OP: subject= ANGULAR11 and Code=7

//why code=07 not come only 7 print, how to print 07
console.log(`..................................`);

var _a1;
console.log(_a1);
var _b1=20;
console.log(_b1);
if(_b1==20){
    console.log('OK');
}else{
    console.log("NO");
}

//== (value)
//===(value and datatype)
console.log(10==10); //true
console.log(20===20); //true
console.log(20=="TWO"); //false
console.log(2==="three");//false
console.log("A"=="A");//true

//===(value and datatype)
console.log("*************************")
var s=3;
var s1=3;
console.log(3==s);//true
console.log(s===s1);//true
console.log(s==s1);//true
console.log('B'=='C');//false
console.log('B'==='C');//false
console.log('B'===s);//false
console.log('B'==s1);//false






