import mycs from './my.module.css';
import React, { useState } from 'react';

var cnt=1;
function Tic_tok_toe() {
    
    const [btn1, setbtn1] = useState("")
    const [btn2, setbtn2] = useState("")
    const [btn3, setbtn3] = useState("")
    const [btn4, setbtn4] = useState("")
    const [btn5, setbtn5] = useState("")
    const [btn6, setbtn6] = useState("")
    const [btn7, setbtn7] = useState("")
    const [btn8, setbtn8] = useState("")
    const [btn9, setbtn9] = useState("")

    function tic1() {
        if (cnt % 2 == 0)
        {
            setbtn1("0")
        }
        else {
            setbtn1("x")
        }
        cnt++;
    }

    function tic2()
    {
        if (cnt % 2==0) {
            setbtn2("0")
        }
        else {
            setbtn2("x")
        }
        cnt++;
    }
    function tic3()
    {
        if (cnt % 2==0) {
            setbtn3("0")
        }
        else {
            setbtn3("x")
        }
        cnt++;
        
    }
    function tic4()
    {
        if (cnt % 2==0) {
            setbtn4("0")
        }
        else {
            setbtn4("x")
        }
        cnt++;
    }
    function tic5()
    {
        if (cnt % 2==0) {
            setbtn5("0")
        }
        else {
            setbtn5("x")
        }
        cnt++;
    }
    function tic6()
    {
        if (cnt % 2==0) {
            setbtn6("0")
        }
        else {
            setbtn6("x")
        }
        cnt++;
    }
    function tic7()
    {
        if (cnt % 2==0) {
            setbtn7("0")
        }
        else {
            setbtn7("x")
        }
        cnt++;
    }
    function tic8()
    {
        if (cnt % 2==0) {
            setbtn8("0")
        }
        else {
            setbtn8("x")
        }
        cnt++;
    }
    function tic9()
    {
        if (cnt % 2==0) {
            setbtn9("0")
        }
        else {
            setbtn9("x")
        }
        cnt++;
    }
        var b1={btn1};
        var b2={btn2};
        var b3={btn3};



    return (
        <center>
            <table style={{ marginTop: "150px" }}>
                <tr>
                    <td><input type={"button"} className={mycs.box} onClick={() => tic1()} value={btn1}></input></td>
                    <td><input type={"button"} className={mycs.box} onClick={() => tic2()} value={btn2}></input></td>
                    <td><input type={"button"} className={mycs.box} onClick={() => tic3()} value={btn3}></input></td>
                </tr>
                <tr>
                    <td><input type={"button"} className={mycs.box} onClick={() => tic4()} value={btn4}></input></td>
                    <td><input type={"button"} className={mycs.box} onClick={() => tic5()} value={btn5}></input></td>
                    <td><input type={"button"} className={mycs.box} onClick={() => tic6()} value={btn6}></input></td>
                </tr>
                <tr>
                    <td><input type={"button"} className={mycs.box} onClick={() => tic7()} value={btn7}></input></td>
                    <td><input type={"button"} className={mycs.box} onClick={() => tic8()} value={btn8}></input></td>
                    <td><input type={"button"} className={mycs.box} onClick={() => tic9()} value={btn9}></input></td>
                </tr>
            </table>
        </center>
    )
}
export default Tic_tok_toe;