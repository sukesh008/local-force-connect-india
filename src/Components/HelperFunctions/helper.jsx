
const alphabets=[...Array.from({length:26},(_,i)=>String.fromCharCode(65+i)),...Array.from({length:26},(_,i)=>String.fromCharCode(97+i))," "]
const number=[...Array.from({length:10},(_,i)=>String.fromCharCode(48+i))]
const validNumbers=["6","7","8","9"]
export const isAlphabet=(name)=>{
     return name.split('').every((data)=>alphabets.includes(data))
}

export const isNumber=(phone)=>{
   return phone.split('').every((data)=>number.includes(data))
}

export const isValidNumber=(phone)=>{
     return validNumbers.includes(phone[0])
}


