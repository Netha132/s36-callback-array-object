import React, { useEffect, useRef } from 'react'

function ArrayObjects() {

    let movieDetails={
        movieName:"Business Man",
        directorName:"Puri Jagannadh",
        writtenBy:"Puri Jagannadh",
        producedBy:"R.R.Venkat",
        hero:"Mahesh Babu",
        heroine:"Kajal Agarwal",
        villain:"Prakash raj",
        musicBy:"S.Thaman"
    }

    let movie=["Salaar","Prashanth Neel","Prabhas","Pruthviraj Sukumaran","Shruthi Hasan","22/12/2023"]
    //=================callback==========================
    let callBackParaRef=useRef();
    

    let calculateResult=(telMarks,hinMarks,engMarks,matMarks,sciMarks,socMarks,passFn,failfn)=>{

        let passMarks=35;
        if(telMarks>=passMarks&&hinMarks>=passMarks&&engMarks>=passMarks&&matMarks>=passMarks&&sciMarks>=passMarks&&socMarks>=passMarks){
            // console.log("pass")
            // spanRef.current.innerHTML="pass";
            passFn()
        }
        else{
            // console.log("fail")
            // spanRef.current.innerHTML="fail";
            failfn();
        }

       
    }
    
    
    // useEffect( () => {
    //     calculateResult(88,98,79,89,99,99,()=>{
    //         spanRef.current.innerHTML="passFn";
    //     },()=>{
    //         spanRef.current.innerHTML="failFn";
    //     });
    // },[])

     //=================================================================================================


                //==Creating objects=============================


    
                let objectParaResult=useRef();
                let objectDestructuringParaResult=useRef();
                let objectSpreadOperatorParaResult=useRef();


        let objectOnclick=(resultRef)=>{
           
             resultRef.current.innerHTML=`Student Name:${movieDetails.movieName}<br>
                                        Directed By:${movieDetails.directorName}<br>
                                        Written By:${movieDetails.writtenBy}<br>
                                        Produced By:${movieDetails.producedBy}<br>
                                        Hero:${movieDetails.hero}<br>
                                        Heroine:${movieDetails.heroine}<br>
                                        Villain:${movieDetails.villain}<br>
                                        Music By:${movieDetails.musicBy}`;
        }

      

        //======Destructuring an object==========

        
        let objectDestructuring=(resultRef)=>{
            let movieDetails={
                movieName:"Business Man",
                directorName:"Puri Jagannadh",
                writtenBy:"Puri Jagannadh",
                producedBy:"R.R.Venkat",
                hero:"Mahesh Babu",
                heroine:"Kajal Agarwal",
                villain:"Prakash raj",
                musicBy:"S.Thaman"
            }
            let {movieName,writtenBy,hero}=movieDetails;
          resultRef.current.innerHTML=`MovieName:${movieName}<br>  WrittenBy:${writtenBy} <br> Hero:${hero}`


            //===2nd Way of destructuring===================================================


          let {directorName:dName,heroine:actress,villain:actor}=movieDetails;
          resultRef.current.innerHTML=`Director Name:${dName} <br> Heroine:${actress} <br> Villain:${actor}`
        }



        //==============Spread operatiors of Object=================
        let objectSpreadOperator=(resultRef)=>{
            let updatedMovieDetails={...movieDetails}

            updatedMovieDetails.movieName="Pokiri";
            updatedMovieDetails.heroine="Ilyana";
            

            resultRef.current.innerHTML=`Movie Name:${updatedMovieDetails.movieName}<br>
                                        Director:${updatedMovieDetails.directorName} <br>
                                        Hero:${updatedMovieDetails.hero}<br>
                                        Heroine:${updatedMovieDetails.heroine}<br>
                                        Villain:${updatedMovieDetails.villain}`
            console.log(updatedMovieDetails);
        }
     




        //==========creating an Array===========================

        let arrayParaResult=useRef();

        let arrayOnclick=(arrayResultRef)=>{
           

            arrayResultRef.current.innerHTML=`Movie Name:${movie[0]} <br> Director Name:${movie[1]} <br> Starring:${movie[2]},${movie[3]} ,${movie[4]} <br> Release Date:${movie[5]}`;
            console.log(movie);

            let movieName=movie[0];
            console.log(movieName);
        
        }

        //==========Destructureing an Array=========================

        let arrayDestructuringResult=useRef();

        

        let arrayDestructuring=(arrayResultRef)=>{
            let movie=["Salaar","Prashanth Neel","Prabhas","Pruthviraj Sukumaran","Shruthi Hasan","22/12/2023"];

            let [movieName,directorName,starHero,hero,heroine,releaseDate]=movie;
            arrayResultRef.current.innerHTML= `
            Movie Name: ${movieName}<br>
            Directed By: ${directorName}<br>
            Starring: ${starHero}, ${hero}, ${heroine}<br>
            Release Date: ${releaseDate}`
            console.log(movieName,starHero);
    
        }
        //   arraySpreadOperator


        let arraySpreadOperatorPara=useRef();

        let arraySpreadOperator=(arrayResultRef)=>{
            let newMovie=[...movie]
            newMovie[0]="Bahubali";
            newMovie[1]="S.S. Rajamouli";
            newMovie[2]="Prabhas";
            newMovie[3]="Anushka";
            newMovie[4]="Raana";
            newMovie[5]="M.M. Keeravani";
            newMovie[6]="RamyaKrishna & Thamanna"


            arrayResultRef.current.innerHTML=`<strong>  MovieName:${newMovie[0]} </strong><br>
                                           <strong>  Directed By:${newMovie[1]} </strong><br> 
                                          <strong>  Hero:${newMovie[2]}</strong> <br>
                                           <strong>  Heroine:${newMovie[3]} </strong><br>
                                           <strong>  Villain:${newMovie[4]} </strong><br>
                                           <strong>  Music:${newMovie[5]} </strong><br> 
                                           <strong>  Co-Actor:${newMovie[6]}</strong>`

            console.log(newMovie);
        }


  return (
    
    <div>
      <p ref={callBackParaRef}></p>

      <button type='button' onClick={()=>{
          calculateResult(88,98,87,89,99,99,()=>{
                    callBackParaRef.current.innerHTML="passFn";
                    console.log("Pass")
                },()=>{
                    callBackParaRef.current.innerHTML="failFn";
                    console.log("Fail");
                });
              
               
      }}>Call Back</button>


      <button type='button' onClick={()=>{
            objectOnclick(objectParaResult);
        }}>Objects</button>

        <button type='button' onClick={()=>{
            objectDestructuring(objectDestructuringParaResult);
        }}>Object Destructuring</button>

        <button type='button' onClick={()=>{
            objectSpreadOperator(objectSpreadOperatorParaResult);
        }}>Object SpreadOperator</button>


        <p ref={objectParaResult}></p>
        <p ref={objectDestructuringParaResult}></p>
        <p ref={objectSpreadOperatorParaResult}></p>



{/* ===============Array============================== */}
        <button type='button'onClick={()=>{
            arrayOnclick(arrayParaResult);
        }}>Array</button>

        <button type='button' onClick={()=>{
            arrayDestructuring(arrayParaResult);
        }}>Array Destructuring</button>

        <button type='button' onClick={()=>{
                arraySpreadOperator(arraySpreadOperatorPara);
        }}>Array SpreadOperator</button>

        <p ref={arrayParaResult}></p>
        <p ref={arrayDestructuringResult}></p>
        <p ref={arraySpreadOperatorPara}></p>
    </div>
  )
}

export default ArrayObjects
