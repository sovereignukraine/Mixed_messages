//Foresight project
let container = {
    when: ['Tomorrow', 'The day after tomorrow', 'On the weekend', 'Next week', 'Next month', 'Next year'],
    cond: ['you will have', 'will be', 'you will got', 'you will lose', 'you will not have'],
    what: ['big luck', 'small problems', 'tragedy', 'fantastic progress in your work', 'super profit', 'some shity thing']
};

function foresight (obj){
    let phrase = [];
    //chosing random word or phrase out of each arr in obj
    for(let key in obj){
        phrase.push(obj[key][Math.floor(Math.random()*obj[key].length)])
    }
    console.log(`${phrase.join(' ')}.`);
}

foresight(container);