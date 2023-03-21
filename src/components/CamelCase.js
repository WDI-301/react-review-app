import React from 'react'

const CamelCase = (props) => {
    const camelCaser = () => {
        let str = props.inputString
        let result = '';
        let firstWord = true;
        for (let index = 0; index < str.length; index++) {
            const element = str[index];
            if (str[index] === ' ' ) {
                index++
                firstWord = false
                result += str[index].toUpperCase()
            } else {
                if (firstWord && index===0 && element === element.toUpperCase()) {
                    result += element.toLowerCase()
                } else {
                    result += element
                }
            }
            
        }
        props.setInputString(result)
    }
     const camelCaserToo = () => {
        let inputArr = props.inputString.split(' ')
        console.log(inputArr);
        let newArr = [];
        newArr.push(inputArr[0].toLowerCase())
        for (let index = 1; index < inputArr.length; index++) {
            let element = inputArr[index];
            element = element.split('')
            element[0] = element[0].toUpperCase()
            element = element.join('')
            newArr.push(element)
        }
        console.log('!@-------newArr-------@!')
        console.log(newArr)
        props.setInputString(newArr.join(''))

     }

  return (

    <button onClick={camelCaserToo}>camelCase {props.name}</button>

  )
}

export default CamelCase