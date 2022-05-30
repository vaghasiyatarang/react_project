import mycs from './my.module.css';
import { Button,Row,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
var xyz,num,nu,num1;

function Calc()
{

    const [abc,setabc] = useState("")


    const btn = (val) => {
        num = abc+val+"";
        setabc(num);

    }
    const back = () =>{

        var num = abc.slice(0,-1);
        setabc(num);
    }

    const clear = () =>{

        var num = " ";
        setabc(num);

    }
   
    const sum =(val) =>
    {
        xyz = val;
        num= "";
        nu = abc;
        setabc(num);
        
        
    }

    const eql =() =>
    {
        num1 = abc;
        if(xyz == '+'){

            var ans = parseInt(nu)+parseInt(num1);
        }
        if(xyz == '*'){

            var ans = parseInt(nu)*parseInt(num1);
        }
        if(xyz == '/'){

            var ans = parseInt(nu)/parseInt(num1);
        }
        if(xyz == '-'){

            var ans = parseInt(nu)-parseInt(num1);
        }


        setabc(ans);

    }
    return(
        <>
            <center>
            <table>
                <tr>
                    <td colspan="4" style={{padding:"2px",fontSize:"24px",fontWeight:"500"}}><input type="text" style={{backgroundColor:"white",color:"black",border:"1px solid white"}} readonly="" value={abc} ></input></td>
                </tr>
                <tr className={mycs.tabtr}>
                    <td align="center" colspan="2" className={mycs.tabdata}><input className={mycs.tabbtn} style={{color:"black"}} type="button" name="" value="Clear" onClick={ ()=> back()}></input></td>
                    <td align="center" className={mycs.tabdata}><input className={mycs.tabbtn} style={{color:"black"}}  type="button" name="" value="c" onClick={ ()=> clear()}></input></td>
                    <td align="center" className={mycs.tabdata}><input className={mycs.tabbtn}  type="button" name="" value="/" onClick={ ()=> sum('/')} ></input></td>
                    
                </tr>
                <tr>
                    <td align="center" className={mycs.tabdata} id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="7" onClick={ ()=> btn(7)}></input></td>
                    <td align="center" className={mycs.tabdata}id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="8" onClick={ ()=> btn(8)}></input></td>
                    <td align="center" className={mycs.tabdata}id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="9" onClick={ ()=> btn(9)}></input></td>
                    <td align="center" className={mycs.tabdata}><input className={mycs.tabbtn}  type="button" name="" value="*" onClick={ ()=> sum('*')}></input></td>
                </tr>
                <tr>
                    <td align="center" className={mycs.tabdata}id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="4" onClick={ ()=> btn(4)}></input></td>
                    <td align="center" className={mycs.tabdata}id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="5" onClick={ ()=> btn(5)}></input></td>
                    <td align="center" className={mycs.tabdata}id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="6" onClick={ ()=> btn(6)}></input></td>
                    <td align="center" className={mycs.tabdata}><input className={mycs.tabbtn}  type="button" name="" value="-" onClick={ ()=> sum('-')}></input></td>
                </tr>
                <tr>
                    <td align="center" className={mycs.tabdata}id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="1" onClick={ ()=> btn(1)}></input></td>
                    <td align="center" className={mycs.tabdata}id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="2" onClick={ ()=> btn(2)}></input></td>
                    <td align="center" className={mycs.tabdata}id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="3" onClick={ ()=> btn(3)}></input></td>
                    <td align="center" className={mycs.tabdata}><input className={mycs.tabbtn}  type="button" name="" value="+" onClick={ ()=> sum('+')}></input></td>
                </tr>
                <tr>
                    <td align="center" className={mycs.tabdata}id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="0" onClick={ ()=> btn(0)}></input></td>
                    <td align="center" className={mycs.tabdata}id={mycs.back}><input id={mycs.back} className={mycs.tabbtn}  type="button" name="" value="." onClick={ ()=> btn('.')}></input></td>
                    <td align="center" className={mycs.tabdata} colspan="2"><input  className={mycs.tabbtn} style={{color:"black"}} type="button" name="" value="=" onClick={() => eql()}></input></td>
                </tr>
            </table>
            
            </center>
            
               
        </>
    )

}
export default Calc;