/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" */

function domainName(url) {
  let cleanURL = url;
  // Check if starts with "http://" or "https://" and delete it
  if (url.indexOf("http://") === 0) {
    cleanURL = url.slice(7);
  } else if (url.indexOf("https://") === 0) {
    cleanURL = url.slice(8);
  }
  // Check if it has "www." and delete it
  if (cleanURL.indexOf("www.") === 0) {
    cleanURL = cleanURL.slice(4);
  }
  // The split method returns an array. The first element should be the domain name
  const domainName = cleanURL.split(".")[0];
  console.log(domainName);
  return domainName;
}

let url = "https://www.cnet.com";
domainName(url);
