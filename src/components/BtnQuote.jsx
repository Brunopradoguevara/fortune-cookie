import getElementRandomArray from "../utils/getRandomElementArray"


const BtnQuote = ({setQuote,phrases,setNumberBg,numberBg}) => {

    
    const handleRandomPhrase = () =>{
        console.log("El valor de numerRandom es: " + numberBg)
        let newNumberBackground = getElementRandomArray([1,2,3,4])
        console.log("Nuevo bg: " + newNumberBackground)
        setQuote(getElementRandomArray(phrases)) 

        if(numberBg !== newNumberBackground){
          setNumberBg(newNumberBackground)
        }else if(numberBg === newNumberBackground && newNumberBackground === 4){
          newNumberBackground -= 2
          console.log("Se resto 2")
          setNumberBg(newNumberBackground)
        }else{
          newNumberBackground +=1
          console.log("se sumo 1")
          setNumberBg(newNumberBackground)
        }
      
        console.log("fin del proceso")
    }

  return (
    <button className="container__btn" onClick={handleRandomPhrase} >Other phrase🍀</button>
  )
}

export default BtnQuote