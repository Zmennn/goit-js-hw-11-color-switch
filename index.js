const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startButton: document.querySelector('[data - action="start"]'),
    stopButton: document.querySelector('[data - action="stop"]'),
    allScreen: document.querySelector('body')
}