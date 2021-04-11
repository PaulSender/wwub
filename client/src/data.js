// File to hold hard coded data for dropdown menues
import _ from 'lodash'
var options = ['t-shirts', 'sweatshirts', 'jackets', 'pants', 'shorts', 'long sleeve shirt'] 
var arr = []
options.forEach(option => {
     arr.push({key: option, text: _.startCase(option), value: option})
})
options = arr
export {options}

