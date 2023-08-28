import getElementRandomArray from "../utils/getRandomElementArray"


const BtnQuote = ({setQuote,phrases,setNumberBg,numberBg}) => {

    
    const handleRandomPhrase = () =>{
        let newNumberBackground = getElementRandomArray([1,2,3,4])
        setQuote(getElementRandomArray(phrases)) 

        if(numberBg !== newNumberBackground){
          setNumberBg(newNumberBackground)
        }else if(numberBg === newNumberBackground && newNumberBackground === 4){
          newNumberBackground -= 2
          setNumberBg(newNumberBackground)
        }else{
          newNumberBackground +=1
          setNumberBg(newNumberBackground)
        }
      
    }

  return (
    <button className="container__btn" onClick={handleRandomPhrase} >Nueva frase🍀</button>
  )
}

export default BtnQuote