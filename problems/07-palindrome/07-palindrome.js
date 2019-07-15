/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    
        let strLen = someStr.length;
        someStr = someStr.toLocaleLowerCase();
      
        if (strLen === 0 || strLen === 1) {
          return true;
        }
        if (someStr[0] === someStr[strLen - 1]) {
          return isPalindrome(someStr.slice(1, strLen - 1) );
        }  
        return false;
      }
      console.log(isPalindrome('a'));
      
