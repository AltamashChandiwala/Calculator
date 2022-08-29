function print(value){
    // let value = document.getElementById('one').value;
    if(value == 1 || value == 2 || value == 3 || value == 4 || value == 5 || value == 6 || value == 7 || value == 8 || value == 9 || value == 0){
        let num = Number(value)
        document.getElementById('output').value += num //note to show value in textbox we use .value and for normal text we use innerHTML
    }
    else{
        document.getElementById('output').value += value
        }
    }

    function clrscr(){
        document.getElementById('output').value = ""
    }

    function delitem(){
        document.getElementById('output').value = document.getElementById('output').value.slice(0,-1)
    }
    function calc(){
        document.getElementById('output').value = eval(document.getElementById('output').value)
    }
    function changemode(){
        let mybody = document.getElementById('card')
        mybody.classList.toggle('darkcard')
        let textbox = document.getElementById('output')
        textbox.classList.toggle('darktextbox')
        let orange = document.getElementById('blue')
        orange.classList.toggle('orange')
        let orange1 = document.getElementById('blue1')
        orange1.classList.toggle('orange')
        let orange2 = document.getElementById('blue2')
        orange2.classList.toggle('orange')
        let orange3 = document.getElementById('blue3')
        orange3.classList.toggle('orange')
        let orange4 = document.getElementById('blue4')
        orange4.classList.toggle('orange')
        let dark1 = document.getElementById('dark1')
        dark1.classList.toggle('dark')
        let dark2 = document.getElementById('dark2')
        dark2.classList.toggle('dark')
        let dark3 = document.getElementById('dark3')
        dark3.classList.toggle('dark')
        let common1 = document.getElementById('common1')
        common1.classList.toggle('common')
        let common2 = document.getElementById('common2')
        common2.classList.toggle('common')
        let common3 = document.getElementById('common3')
        common3.classList.toggle('common')
        let common4 = document.getElementById('common4')
        common4.classList.toggle('common')
        let common5 = document.getElementById('common5')
        common5.classList.toggle('common')
        let common6 = document.getElementById('common6')
        common6.classList.toggle('common')
        let common7 = document.getElementById('common7')
        common7.classList.toggle('common')
        let common8 = document.getElementById('common8')
        common8.classList.toggle('common')
        let common9 = document.getElementById('common9')
        common9.classList.toggle('common')
        let common10 = document.getElementById('common10')
        common10.classList.toggle('common')
        let common11 = document.getElementById('common11')
        common11.classList.toggle('common')
        let bulb = document.getElementById('light')
        bulb.classList.toggle('sun')
    }