






//1 ---

let num = 5;

while (true) {
    console.log(num);
    num++;
    if (num == 101) {
        break;
    }
}


//2 ----

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let x = 0; x < array1.length; x++) {
    const el1 = array1[x];
 if (el1>0 && el1<10)
 console.log(el1);
}


//3 ----

let array2 =  [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array2.length; i++) {
    const el2 = array2[i]; 
    if (el2 === 5) {
        break;
    }
     console.log('aris!:')
    
}

//4 

let array3 = [1, 2, 3, 4, 5];
 let sum = 0;
 for (let el3 of array3) {
    sum += el3;
 }
console.log(sum);

// 5

let array4 = [1, 2, 3, 4, 5];
let sum1 = 0;

for (let nn = 0; nn < array4.length; nn++) {
    sum1 += array4[nn];
}

let cc = sum1 / array4.length;

console.log(cc);


//6

let array5 = [1, 2, 3, 7, 6, 9]
for (let xx = 0; xx < array5.length; xx++) {
    const el4 = array5[xx];
        if(el4 === 7) {
            continue;
        }
        console.log(el4);
    
}




//7 



let user = {
    firstName: "giorgi",
    lastName: "smith",
    age: 25,  
    studentStatus: "active"
  };

  console.log(user.studentStatus);


//8 else if condition, last one must be else = saw w3school

let user2 = {
    name: 'Anna',
    age: 20,
    studentStatus:'active'
}

if (user2.age < 18 && user2.studentStatus== active) {
    console.log('Hello User');
} else if (user2.name == 'Levani') {
    console.log('Hello Levani');
} else if (user2.studentStatus=='active' || user2.age < 25 ) {
    console.log('Hello Anna');
}  else {
    console.log('error');
}




//9 promp function _ helped me--( this comments is for me )

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let m = 0; m < array6.length; m++) {
    if (array6[m] % 2 === 0) {
        console.log(array6[m]);
    }
}


//10 

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true} 
];

for (let u = 0; u < users.length; u++) {
    const names = users[u];
    if (names.status === true)
    {
        console.log(names);
    }
}




// 11 -- ვერ გავიგე


let array7 = [32, 14, 10, 'hello', null, '40', 50];




// 12 -- ვერ გავიგე

let array8 = [[2, -3, 5, 11], [1, -35, -11], [12, -36, -24]];
