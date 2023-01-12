import React from 'react'
class Header extends React.Component{
    render(){
        return(
            <div className='h-[64px] flex flex-row justify-around items-center w-screen p-[20px] bg-gradient-to-r from-[#672280] to-[#A626D3]'>
                <div className='flex flex-row justify-between items-center gap-5 absolute left-4'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png'
                    className='w-[31.31px] h-[26.22px]' alt='logo'></img>
                    <p className='font-bold text-white text-xl leading-6 tracking-[-0.1em] font-Karla'>Meme Generator</p>
                </div>
                <p className='text-white font-semibold text-sm text-right leading-4 absolute right-6 font-Inter'>React Course - Project 3</p>
            </div>
        )
    }
}
export default Header