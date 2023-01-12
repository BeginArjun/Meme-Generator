import React from 'react'
export default function Meme(){
    const [allMeme,setAllMeme]=React.useState([])
    React.useEffect(() => {
        async function fetchData(){
            const res=await fetch('https://api.imgflip.com/get_memes')
            const data=await res.json()
            setAllMeme(data.data.memes)
        }
        fetchData()
    }, [])
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        imgUrl:'https://i.imgflip.com/30b1gx.jpg',
        imgAlt:'Drake Hotline Bling'
    })
    function randomMeme(){
        const randomNum=Math.floor(Math.random() * allMeme.length)
        const currMeme=allMeme[randomNum]
        setMeme(prevState=>({
            ...prevState,
            imgUrl:currMeme.url,
            imgAlt:currMeme.name
        }))
    }

    function handleChange(event){
        const {name,value}=event.target
        setMeme(prevState=>({
            ...prevState,
            [name]:value
        }))
    }

    const [style,setStyle]=React.useState({})
    React.useEffect(()=>{
        setStyle({
            backgroundImage:`url(${meme.imgUrl})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            backgroundPosition:'center'
        })
    },[meme.imgUrl])

    return (
        <main>
            <div className='flex flex-col justify-around items-center mt-3 sm:justify-center'>
                <div className='box-border flex flex-row justify-center items-center mb-5 font-sans sm:w-60 sm:flex-col sm:gap-3 md:w-64 md:flex-col md:gap-4'>
                    <input type="text" className='px-3 w-[230px] h-[35px] rounded-md border border-[#D5D4D8]' name='topText' onChange={handleChange} value={meme.topText} placeholder='Top Text'/>
                    <input type="text" className='px-3 w-[230px] h-[35px] rounded-md border border-[#D5D4D8]' name='bottomText' onChange={handleChange} value={meme.bottomText} placeholder='Bottom Text'/>
                </div>
                <button className='cursor-pointer bg-gradient-to-r from-[#672280] to-[#A626D3] w-[477px] sm:w-96 h-[40px] sm:h-16 rounded-md text-white font-Karla' onClick={randomMeme}>Get a new meme image 🖼</button>
                <div className='relative w-[477px] h-[350px] rounded-sm mt-5 drop-shadow-lg' style={style}>
                    <h2 className="text-3xl font-['Impact'] drop-shadow-lg uppercase tracking-[1px] w-[80%] -translate-x-[50%] text-center absolute text-white left-1/2 top-5">{meme.topText}</h2>
                    <h2 className="text-3xl font-['Impact'] drop-shadow-lg uppercase tracking-[1px] w-[80%] -translate-x-[50%] text-center absolute text-white left-1/2 bottom-7">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}