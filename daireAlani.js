// daireAlani.js

const yaricap = process.argv[2];

if (!yaricap || isNaN(yaricap)) {
    console.log("Lütfen geçerli bir yarıçap değeri girin.");
} else {
    const alan = Math.PI * Math.pow(yaricap, 2);
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan.toFixed(2)}`);
}
