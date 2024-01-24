const isPalindrome = (myStr) => {
    const myStrRev = myStr.split("").reverse().join("");
    const result = myStr === myStrRev;
    return result;
}
isPalindrome();