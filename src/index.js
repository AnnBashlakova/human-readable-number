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




