// centimeter to meter
function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;
}
const centimeter = 200;
const getMeter = centimeterToMeter(centimeter);
console.log(centimeter,'centimeter =',getMeter,'meter');