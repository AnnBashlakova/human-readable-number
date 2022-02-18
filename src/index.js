module.exports = function toReadable (number) {
    const unit = ['zero','one','two','three','four','five','six', 'seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const twoNum = [' ','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const hundred = [' hundred'];
    let newStr = String(number);
    let massive = newStr.split('');
    console.log(twoNum[massive[0]-1]);
    if (number >= 0 && number <= 19) {
        return (unit[number]);
    } else if (number ===20) {
        return twoNum[1];
    } else if (massive.length === 2 && massive[1] == 0) {
        return twoNum[massive[0]-1];
    } else if (number >=21 && number <=99) {
        return twoNum[massive[0]-1]+twoNum[0]+unit[massive[1]];
    } else if (massive[1] == 1 && massive[2] == 0) {
        return unit[massive[0]] + hundred[0] +twoNum[0] +unit[10];
    } else if (massive[1] == 0 && massive[2] == 0) {
        return unit[massive[0]] + hundred[0];
    } else if (massive[1] !== 0 && massive[2] == 0) {
        return unit[massive[0]] + hundred[0]+ twoNum[0] + twoNum[massive[1]-1];
    } else if (massive[1] == 1 && massive[2] !== 0) {
        return unit[massive[0]] + hundred[0]+twoNum[0] +unit[1+massive[2]];
    } else if (massive[1] == 0 && massive[2] !== 0) {
        return unit[massive[0]] + hundred[0]+twoNum[0] + unit[massive[2]];
    } else if (massive[1] !== 0 && massive[2] !== 0) {
        return unit[massive[0]] + hundred[0]+twoNum[0] + twoNum[massive[1]-1]+twoNum[0]+unit[massive[2]] ;  
    } else if (99 < number && number <= 999) {
        return unit[massive[0]] + hundred[0]+ twoNum[0]+unit[massive[2]];
    } else if (109 < number && number <= 119) {
        return unit[massive[0]] + hundred[0]+twoNum[0] + unit[massive[1]+massive[2]];
    } else if (119 < number && massive[2]+ twoNum[0] == 0) {
        return  unit[massive[0]] + hundred[0]+ twoNum[0] + twoNum[massive[1]-1];
    } else if (119 < number && massive[2] !== 0) {
        return  unit[massive[0]] + hundred[0]+ twoNum[0] + twoNum[massive[1] - 1] + twoNum[0]+ unit[massive[2]];
    } 
};

// console.log(toReadable(900));

// function toReadable (number) {
//     const unit = ['zero','one','two','three','four','five','six', 'seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
//     const twoNum = [' ','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
//     const hundred = [' hundred'];
//     let newStr = String(number);
//     let massive = newStr.split('');
//     console.log(twoNum[massive[0]-1]);
//     if (number >= 0 && number <= 19) {
//         return (unit[number]);
//     } else if (number ===20) {
//         return twoNum[1];
//     } else if (massive.length === 2 && massive[1] == 0) {
//         return twoNum[massive[0]-1];
//     } else if (number >=21 && number <=99) {
//         return twoNum[massive[0]-1]+twoNum[0]+unit[massive[1]];
//     } else if (massive[1] == 1 && massive[2] == 0) {
//         return unit[massive[0]] + hundred[0] +twoNum[0] +unit[10];
//     } else if (massive[1] == 0 && massive[2] == 0) {
//         return unit[massive[0]] + hundred[0];
//     } else if (massive[1] !== 0 && massive[2] == 0) {
//         return unit[massive[0]] + hundred[0]+ twoNum[0] + twoNum[massive[1]-1];
//     } else if (massive[1] == 1 && massive[2] !== 0) {
//         return unit[massive[0]] + hundred[0]+twoNum[0] +unit[1+massive[2]];
//     } else if (massive[1] == 0 && massive[2] !== 0) {
//         return unit[massive[0]] + hundred[0]+twoNum[0] + unit[massive[2]];
//     } else if (massive[1] !== 0 && massive[2] !== 0) {
//         return unit[massive[0]] + hundred[0]+twoNum[0] + twoNum[massive[1]-1]+twoNum[0]+unit[massive[2]] ;  
//     } else if (99 < number && number <= 999) {
//         return unit[massive[0]] + hundred[0]+ twoNum[0]+unit[massive[2]];
//     } else if (109 < number && number <= 119) {
//         return unit[massive[0]] + hundred[0]+twoNum[0] + unit[massive[1]+massive[2]];
//     } else if (119 < number && massive[2]+ twoNum[0] == 0) {
//         return  unit[massive[0]] + hundred[0]+ twoNum[0] + twoNum[massive[1]-1];
//     } else if (119 < number && massive[2] !== 0) {
//         return  unit[massive[0]] + hundred[0]+ twoNum[0] + twoNum[massive[1] - 1] + twoNum[0]+ unit[massive[2]];
//     } 
// };







//   55) Should return 'six hundred' when 600 given:

//       AssertionError [ERR_ASSERTION]: 'six hundred  ' == 'six hundred'
//       + expected - actual

//       -six hundred  
//       +six hundred
      
//       at Context.<anonymous> (test.js:3609:10)
//       at processImmediate (internal/timers.js:439:21)

//   56) Should return 'six hundred twenty' when 620 given:

//       AssertionError [ERR_ASSERTION]: 'six hundred thirty' == 'six hundred twenty'
//       + expected - actual

//       -six hundred thirty
//       +six hundred twenty
      
//       at Context.<anonymous> (test.js:3729:10)
//       at processImmediate (internal/timers.js:439:21)

//   57) Should return 'six hundred thirty' when 630 given:

//       AssertionError [ERR_ASSERTION]: 'six hundred forty' == 'six hundred thirty'
//       + expected - actual

//       -six hundred forty
//       +six hundred thirty
      
//       at Context.<anonymous> (test.js:3789:10)
//       at processImmediate (internal/timers.js:439:21)

//   58) Should return 'six hundred forty' when 640 given:

//       AssertionError [ERR_ASSERTION]: 'six hundred fifty' == 'six hundred forty'
//       + expected - actual

//       -six hundred fifty
//       +six hundred forty
      
//       at Context.<anonymous> (test.js:3849:10)
//       at processImmediate (internal/timers.js:439:21)

//   59) Should return 'six hundred fifty' when 650 given:

//       AssertionError [ERR_ASSERTION]: 'six hundred sixty' == 'six hundred fifty'
//       + expected - actual

//       -six hundred sixty
//       +six hundred fifty
      
//       at Context.<anonymous> (test.js:3909:10)
//       at processImmediate (internal/timers.js:439:21)

//   60) Should return 'six hundred sixty' when 660 given:

//       AssertionError [ERR_ASSERTION]: 'six hundred seventy' == 'six hundred sixty'
//       + expected - actual

//       -six hundred seventy
//       +six hundred sixty
      
//       at Context.<anonymous> (test.js:3969:10)
//       at processImmediate (internal/timers.js:439:21)

//   61) Should return 'six hundred seventy' when 670 given:

//       AssertionError [ERR_ASSERTION]: 'six hundred eighty' == 'six hundred seventy'
//       + expected - actual

//       -six hundred eighty
//       +six hundred seventy
      
//       at Context.<anonymous> (test.js:4029:10)
//       at processImmediate (internal/timers.js:439:21)

//   62) Should return 'six hundred eighty' when 680 given:

//       AssertionError [ERR_ASSERTION]: 'six hundred ninety' == 'six hundred eighty'
//       + expected - actual

//       -six hundred ninety
//       +six hundred eighty
      
//       at Context.<anonymous> (test.js:4089:10)
//       at processImmediate (internal/timers.js:439:21)

//   63) Should return 'six hundred ninety' when 690 given:

//       AssertionError [ERR_ASSERTION]: 'six hundred undefined' == 'six hundred ninety'
//       + expected - actual

//       -six hundred undefined
//       +six hundred ninety
      
//       at Context.<anonymous> (test.js:4149:10)
//       at processImmediate (internal/timers.js:439:21)

//   64) Should return 'seven hundred' when 700 given:

//       AssertionError [ERR_ASSERTION]: 'seven hundred  ' == 'seven hundred'
//       + expected - actual

//       -seven hundred  
//       +seven hundred
      
//       at Context.<anonymous> (test.js:4209:10)
//       at processImmediate (internal/timers.js:439:21)

//   65) Should return 'seven hundred twenty' when 720 given:

//       AssertionError [ERR_ASSERTION]: 'seven hundred thirty' == 'seven hundred twenty'
//       + expected - actual

//       -seven hundred thirty
//       +seven hundred twenty
      
//       at Context.<anonymous> (test.js:4329:10)
//       at processImmediate (internal/timers.js:439:21)

//   66) Should return 'seven hundred thirty' when 730 given:

//       AssertionError [ERR_ASSERTION]: 'seven hundred forty' == 'seven hundred thirty'
//       + expected - actual

//       -seven hundred forty
//       +seven hundred thirty
      
//       at Context.<anonymous> (test.js:4389:10)
//       at processImmediate (internal/timers.js:439:21)

//   67) Should return 'seven hundred forty' when 740 given:

//       AssertionError [ERR_ASSERTION]: 'seven hundred fifty' == 'seven hundred forty'
//       + expected - actual

//       -seven hundred fifty
//       +seven hundred forty
      
//       at Context.<anonymous> (test.js:4449:10)
//       at processImmediate (internal/timers.js:439:21)

//   68) Should return 'seven hundred fifty' when 750 given:

//       AssertionError [ERR_ASSERTION]: 'seven hundred sixty' == 'seven hundred fifty'
//       + expected - actual

//       -seven hundred sixty
//       +seven hundred fifty
      
//       at Context.<anonymous> (test.js:4509:10)
//       at processImmediate (internal/timers.js:439:21)

//   69) Should return 'seven hundred sixty' when 760 given:

//       AssertionError [ERR_ASSERTION]: 'seven hundred seventy' == 'seven hundred sixty'
//       + expected - actual

//       -seven hundred seventy
//       +seven hundred sixty
      
//       at Context.<anonymous> (test.js:4569:10)
//       at processImmediate (internal/timers.js:439:21)

//   70) Should return 'seven hundred seventy' when 770 given:

//       AssertionError [ERR_ASSERTION]: 'seven hundred eighty' == 'seven hundred seventy'
//       + expected - actual

//       -seven hundred eighty
//       +seven hundred seventy
      
//       at Context.<anonymous> (test.js:4629:10)
//       at processImmediate (internal/timers.js:439:21)

//   71) Should return 'seven hundred eighty' when 780 given:

//       AssertionError [ERR_ASSERTION]: 'seven hundred ninety' == 'seven hundred eighty'
//       + expected - actual

//       -seven hundred ninety
//       +seven hundred eighty
      
//       at Context.<anonymous> (test.js:4689:10)
//       at processImmediate (internal/timers.js:439:21)

//   72) Should return 'seven hundred ninety' when 790 given:

//       AssertionError [ERR_ASSERTION]: 'seven hundred undefined' == 'seven hundred ninety'
//       + expected - actual

//       -seven hundred undefined
//       +seven hundred ninety
      
//       at Context.<anonymous> (test.js:4749:10)
//       at processImmediate (internal/timers.js:439:21)

//   73) Should return 'eight hundred' when 800 given:

//       AssertionError [ERR_ASSERTION]: 'eight hundred  ' == 'eight hundred'
//       + expected - actual

//       -eight hundred  
//       +eight hundred
      
//       at Context.<anonymous> (test.js:4809:10)
//       at processImmediate (internal/timers.js:439:21)

//   74) Should return 'eight hundred twenty' when 820 given:

//       AssertionError [ERR_ASSERTION]: 'eight hundred thirty' == 'eight hundred twenty'
//       + expected - actual

//       -eight hundred thirty
//       +eight hundred twenty
      
//       at Context.<anonymous> (test.js:4929:10)
//       at processImmediate (internal/timers.js:439:21)

//   75) Should return 'eight hundred thirty' when 830 given:

//       AssertionError [ERR_ASSERTION]: 'eight hundred forty' == 'eight hundred thirty'
//       + expected - actual

//       -eight hundred forty
//       +eight hundred thirty
      
//       at Context.<anonymous> (test.js:4989:10)
//       at processImmediate (internal/timers.js:439:21)

//   76) Should return 'eight hundred forty' when 840 given:

//       AssertionError [ERR_ASSERTION]: 'eight hundred fifty' == 'eight hundred forty'
//       + expected - actual

//       -eight hundred fifty
//       +eight hundred forty
      
//       at Context.<anonymous> (test.js:5049:10)
//       at processImmediate (internal/timers.js:439:21)

//   77) Should return 'eight hundred fifty' when 850 given:

//       AssertionError [ERR_ASSERTION]: 'eight hundred sixty' == 'eight hundred fifty'
//       + expected - actual

//       -eight hundred sixty
//       +eight hundred fifty
      
//       at Context.<anonymous> (test.js:5109:10)
//       at processImmediate (internal/timers.js:439:21)

//   78) Should return 'eight hundred sixty' when 860 given:

//       AssertionError [ERR_ASSERTION]: 'eight hundred seventy' == 'eight hundred sixty'
//       + expected - actual

//       -eight hundred seventy
//       +eight hundred sixty
      
//       at Context.<anonymous> (test.js:5169:10)
//       at processImmediate (internal/timers.js:439:21)

//   79) Should return 'eight hundred seventy' when 870 given:

//       AssertionError [ERR_ASSERTION]: 'eight hundred eighty' == 'eight hundred seventy'
//       + expected - actual

//       -eight hundred eighty
//       +eight hundred seventy
      
//       at Context.<anonymous> (test.js:5229:10)
//       at processImmediate (internal/timers.js:439:21)

//   80) Should return 'eight hundred eighty' when 880 given:

//       AssertionError [ERR_ASSERTION]: 'eight hundred ninety' == 'eight hundred eighty'
//       + expected - actual

//       -eight hundred ninety
//       +eight hundred eighty
      
//       at Context.<anonymous> (test.js:5289:10)
//       at processImmediate (internal/timers.js:439:21)

//   81) Should return 'eight hundred ninety' when 890 given:

//       AssertionError [ERR_ASSERTION]: 'eight hundred undefined' == 'eight hundred ninety'
//       + expected - actual

//       -eight hundred undefined
//       +eight hundred ninety
      
//       at Context.<anonymous> (test.js:5349:10)
//       at processImmediate (internal/timers.js:439:21)

//   82) Should return 'nine hundred' when 900 given:

//       AssertionError [ERR_ASSERTION]: 'nine hundred  ' == 'nine hundred'
//       + expected - actual

//       -nine hundred  
//       +nine hundred
      
//       at Context.<anonymous> (test.js:5409:10)
//       at processImmediate (internal/timers.js:439:21)

//   83) Should return 'nine hundred twenty' when 920 given:

//       AssertionError [ERR_ASSERTION]: 'nine hundred thirty' == 'nine hundred twenty'
//       + expected - actual

//       -nine hundred thirty
//       +nine hundred twenty
      
//       at Context.<anonymous> (test.js:5529:10)
//       at processImmediate (internal/timers.js:439:21)

//   84) Should return 'nine hundred thirty' when 930 given:

//       AssertionError [ERR_ASSERTION]: 'nine hundred forty' == 'nine hundred thirty'
//       + expected - actual

//       -nine hundred forty
//       +nine hundred thirty
      
//       at Context.<anonymous> (test.js:5589:10)
//       at processImmediate (internal/timers.js:439:21)

//   85) Should return 'nine hundred forty' when 940 given:

//       AssertionError [ERR_ASSERTION]: 'nine hundred fifty' == 'nine hundred forty'
//       + expected - actual

//       -nine hundred fifty
//       +nine hundred forty
      
//       at Context.<anonymous> (test.js:5649:10)
//       at processImmediate (internal/timers.js:439:21)

//   86) Should return 'nine hundred fifty' when 950 given:

//       AssertionError [ERR_ASSERTION]: 'nine hundred sixty' == 'nine hundred fifty'
//       + expected - actual

//       -nine hundred sixty
//       +nine hundred fifty
      
//       at Context.<anonymous> (test.js:5709:10)
//       at processImmediate (internal/timers.js:439:21)

//   87) Should return 'nine hundred sixty' when 960 given:

//       AssertionError [ERR_ASSERTION]: 'nine hundred seventy' == 'nine hundred sixty'
//       + expected - actual

//       -nine hundred seventy
//       +nine hundred sixty
      
//       at Context.<anonymous> (test.js:5769:10)
//       at processImmediate (internal/timers.js:439:21)

//   88) Should return 'nine hundred seventy' when 970 given:

//       AssertionError [ERR_ASSERTION]: 'nine hundred eighty' == 'nine hundred seventy'
//       + expected - actual

//       -nine hundred eighty
//       +nine hundred seventy
      
//       at Context.<anonymous> (test.js:5829:10)
//       at processImmediate (internal/timers.js:439:21)

//   89) Should return 'nine hundred eighty' when 980 given:

//       AssertionError [ERR_ASSERTION]: 'nine hundred ninety' == 'nine hundred eighty'
//       + expected - actual

//       -nine hundred ninety
//       +nine hundred eighty
      
//       at Context.<anonymous> (test.js:5889:10)
//       at processImmediate (internal/timers.js:439:21)

//   90) Should return 'nine hundred ninety' when 990 given:

//       AssertionError [ERR_ASSERTION]: 'nine hundred undefined' == 'nine hundred ninety'
//       + expected - actual

//       -nine hundred undefined
//       +nine hundred ninety