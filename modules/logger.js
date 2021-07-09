
// stuff

const fs = require('fs')
let date_ob = new Date();

module.exports = {
    save: function save(logged, file){

        let date = ("0" + date_ob.getDate()).slice(-2);

        // current month
        
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        
        // current year

        let year = date_ob.getFullYear();
        
        // current hours

        let hours = date_ob.getHours();
        
        // current minutes
        let minutes = date_ob.getMinutes();
        
        // current seconds

        let seconds = date_ob.getSeconds();

            const stuff = 
`
V

${logged} 
(at ${year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds})

V
`
        fs.appendFile(`${file}`, stuff, (err) => {
            if (err) throw err;
        });
        console.log(`logged \n ${stuff} \n in ${file}`)
    }
}