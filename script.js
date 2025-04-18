function convertToRoman(num) {
  	let obj = {}
    obj.I  = 1
    obj.IV = 4
    obj.V  = 5
    obj.IX = 9
    obj.X  = 10
    obj.XL = 40
    obj.L  = 50
    obj.XC = 90
    obj.C  = 100
    obj.CD = 400
    obj.D  = 500
    obj.CM = 900
    obj.M  = 1000
    let s = ""
    while(num>0){
        if(num>=obj.M){
            s += 'M'
            num -= obj.M
            // console.log(s)
            continue
        }
        if(num>=obj.CM){
            s += 'CM'
            num -= obj.CM
            // console.log(s)
            continue
        }
        if(num>=obj.D){
            s += 'D'
            num -= obj.D
            // console.log(s)
            continue
        }
        if(num>=obj.CD){
            s += 'CD'
            num -= obj.CD
            // console.log(s)
            continue
        }
        if(num>=obj.C){
            s += 'C'
            num -= obj.C
            // console.log(s)
            continue
        }
        if(num>=obj.XC){
            s += 'XC'
            num -= obj.XC
            // console.log(s)
            continue
        }
        if(num>=obj.L){
            s += 'L'
            num -= obj.L
            // console.log(s)
            continue
        }
        if(num>=obj.XL){
            s += 'XL'
            num -= obj.XL
            // console.log(s)
            continue
        }
        if(num>=obj.X){
            s += 'X'
            num -= obj.X
            // console.log(s)
            continue
        }
        if(num>=obj.IX){
            s += 'IX'
            num -= obj.IX
            // console.log(s)
            continue
        }
        if(num>=obj.V){
            s += 'V'
            num -= obj.V
            // console.log(s)
            continue
        }
        if(num>=obj.IV){
            s += 'IV'
            num -= obj.IV
            // console.log(s)
            continue
        }
        if(num>=obj.I){
            s += 'I'
            num -= obj.I
            // console.log(s)
            continue
        }
    }
    return s

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
