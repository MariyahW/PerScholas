export function getPrice(response){
    let data = response.data.data;
    let tag1= document.createElement('h4');
    tag1.innerHTML=`The current price of ${coin.id.toUpperCase()}: ${data.priceUsd}`;
   return tag1;
}
export function getChange(response){
    let data = response.data.data;
    let tag2= document.createElement('h4');
    tag2.innerHTML=`${coin.id.toUpperCase()} 24hr Change: ${data.priceChange}`;
   return tag2;
}
export function getSymbol(response){
    let data = response.data.data;
    let tag3= document.createElement('h4');
    tag3.innerHTML=` ${coin.id.toUpperCase()} symbol: ${data.symbol}`;
   return tag3;
}


