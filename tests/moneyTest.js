import {formatCurrancy} from '../scrips/utils/money.js';

console.log('test suite: formatCurrancy');


console.log('converts cents into dollars');

if (formatCurrancy(2095)=== '20.95'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('works with 0');

if(formatCurrancy(0)=== '0.00'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('rounds up to the nearest cent');

if(formatCurrancy(2000.5) === '20.01'){
    console.log('passed');
}else{
    console.log('failed');
}

if(formatCurrancy(2000.4) === '20.00'){
    console.log('passed');
}else{
    console.log('failed');
}