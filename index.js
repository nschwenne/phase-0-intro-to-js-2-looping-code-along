const name = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'suprise';


function writeCards(name, event) {
    let newArray = []; 
    for (let i = 0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
     
    }

    return newArray
}



function countDown(x){
while (x >= 0) {
  console.log(x--);
}
}
 countDown(10)
