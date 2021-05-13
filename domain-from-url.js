function domainName(url) {
  //your code here
  let newArr = url
    .split(/http+s?:[/][/]/g)
    .join("")
    .split(/www./g)
    .join("")
    .split(".");
  return newArr[0];
}

domainName("http://googles.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("https://youtube.com");
