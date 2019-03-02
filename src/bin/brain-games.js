#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('\nWelcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log(`Hi ${username}`);
