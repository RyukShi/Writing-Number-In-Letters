const DIX = 10;
const VINGT = DIX * 2;
const CENTS = Math.pow(10, 2);
const MILLE = Math.pow(10, 3);
const MILLION = Math.pow(10, 6);
const MILLIARD = Math.pow(10, 9);

const NUMBERS = {
    fr: [
        'zéro', 'un', 'deux', 'trois', 'quatre',
        'cinq', 'six', 'sept', 'huit', 'neuf',
        'dix', 'onze', 'douze', 'treize', 'quatorze',
        'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'
    ],
    en: [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ]
};

const TENS = {
    fr: [
        'vingt', 'trente', 'quarante', 'cinquante', 'soixante',
        'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'
    ],
    en: [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety'
    ]
};

const MINUS = {
    fr: 'moins ',
    en: 'minus '
};

const POINT = {
    fr: 'virgule ',
    en: 'point '
};

export default {
    DIX, VINGT, CENTS, MILLE, MILLION, MILLIARD,
    NUMBERS, TENS, MINUS, POINT
}
