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
            <div className='flex flex-col justify-around items-center mt-3'>
                <div className='flex flex-row justify-center items-center mb-5 font-sans'>
                    <input type="text" className='px-3 w-[230px] h-[35px] rounded-md border border-[#D5D4D8] mr-2' name='topText' onChange={handleChange} value={meme.topText}/>
                    <input type="text" className='px-3 w-[230px] h-[35px] rounded-md border border-[#D5D4D8] ml-2' name='bottomText' onChange={handleChange} value={meme.bottomText}/>
                </div>
                <button className='cursor-pointer bg-gradient-to-r from-[#672280] to-[#A626D3] w-[477px] h-[40px] rounded-md text-white font-Karla' onClick={randomMeme}>Get a new meme image 🖼</button>
                <div className='relative w-[477px] h-[350px] rounded-sm mt-5 drop-shadow-lg' style={style}>
                    <h2 className="text-3xl font-['Impact'] drop-shadow-lg uppercase tracking-[1px] w-[80%] -translate-x-[50%] text-center absolute text-white left-1/2 top-4">{meme.topText}</h2>
                    <h2 className="text-3xl font-['Impact'] drop-shadow-lg uppercase tracking-[1px] w-[80%] -translate-x-[50%] text-center absolute text-white left-1/2 bottom-7">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}