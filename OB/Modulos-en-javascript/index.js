import {suma , multiplica} from './controller.js'
import chalk from 'chalk';

var sum1 = suma(1,2);
var sum2 = suma (4,5);
console.log(chalk.green.bold(multiplica(sum1,sum2)))