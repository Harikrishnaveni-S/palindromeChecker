function isPalindrome() {
    const inputValue = document.getElementById("value").value.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const result = document.getElementById("result")
    const arrVal = inputValue.split("")
    let revArr = arrVal.reverse().join("")
    console.log(arrVal)
    console.log(revArr)
    if (revArr === inputValue) {
        result.innerHTML = "Given Value is a Palindrome"
    }

    else {
        result.innerHTML = "Given Value is not a Palindrome"

    }
}