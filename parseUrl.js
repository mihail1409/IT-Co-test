function parseUrl(string){
    let url = new URL(string);
    return url
    //console.log(url.href)
}
let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo');
console.log( a.href == "http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" );
console.log( a.hash == "#foo" );
console.log( a.port == "8080" );
console.log( a.host == "sys.it-co.ru:8080" );
console.log( a.protocol == "http:" );
console.log( a.hostname == "sys.it-co.ru" );
console.log( a.pathname == "/do/any.php" );
console.log( a.origin == "http://sys.it-co.ru:8080" );

// console.log( a.href);
// console.log( a.hash);
// console.log( a.port);
// console.log( a.host);
// console.log( a.protocol);
// console.log( a.hostname);
// console.log( a.pathname);
// console.log( a.origin);