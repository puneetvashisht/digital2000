console.log('Testing JS')
    
    
    function reverse(){
        var str = document.getElementById('message').innerHTML;
        var reversedStr = str.split('').reverse().join('');
        console.log('Reversed String is '  + reversedStr);
        document.getElementById('message').innerHTML = reversedStr
    }