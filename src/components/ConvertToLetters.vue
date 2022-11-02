<script setup>
import { ref, computed } from 'vue'
import constants from '../plugins/constants'

const number = ref(null)
const numberInLetters = ref('')
const language = ref('fr')
/* for debugging purposes */
const verbose = true;
/* for random number generation */
const MIN = -100
const MAX = 100

const LANGUAGES = [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
]

const showConvertButton = computed(() => {
    return number.value !== null && number.value !== ''
})

const getRndInteger = () => {
    /* return a random integer between min and max included both */
    number.value = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
}

const separation = (number) => {

    if (typeof number === 'number') {
        /* convert number to string */
        number = number.toString()
    }

    if (number.indexOf('e') > 1) {
        /* number is in scientific notation */
        console.log('number is in scientific notation')
        /* TODO */
        return [null, null]
    }

    if (number.indexOf('.') >= 1) {
        number = number.split('.');
        if (number[1].length === 0) {
            return [parseInt(number[0]), null];
        } else {
            return [parseInt(number[0]), parseInt(number[1])];
        }
    } else if (number.indexOf(',') >= 1) {
        number = number.split(',');
        if (number[1].length === 0) {
            return [parseInt(number[0]), null];
        } else {
            return [parseInt(number[0]), parseInt(number[1])];
        }
    } else {
        return [parseInt(number), null];
    }
}

const convertToLetters = (number, language) => {

    /* separation of integer and decimal parts */
    var [integer, decimal] = separation(number);

    if (verbose)
        console.log(`integer: ${integer} decimal: ${decimal}`);

    var result = '';

    /* if number is negative */
    if (integer < 0) {
        result += constants.MINUS[language];
        integer = Math.abs(integer);
    }

    /* if number is between 0 and 19 */
    if (integer >= 0 && integer <= 19) {
        result += constants.NUMBERS[language][integer];
        if (decimal !== null) {
            result += ' ' + constants.POINT[language] + decimal.toString();
        }
    } else {
        /* TODO */
    }

    numberInLetters.value = result;
}
</script>

<template>
    <h1>Writing Number In Letters</h1>
    <p>Enter a number and get it written in letters</p>
    <select v-model="language">
        <option v-for="l in LANGUAGES" :value="l.value">{{ l.label }}</option>
    </select>
    <button @click="getRndInteger()">Random Number</button>
    <input type="number" step="5" v-model="number" placeholder="Enter a number" />
    <button v-show="showConvertButton" @click="convertToLetters(number, language)">Write number</button>
    <p>{{ numberInLetters }}</p>
</template>
