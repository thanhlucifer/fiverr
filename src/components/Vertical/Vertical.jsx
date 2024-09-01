import React from 'react'

const VerticalItem = [
    {
        id: 1,
        title: 'Valorant coaching'
    },
    {
        id: 2,
        title: 'League of Legends coaching'
    },
    {
        id: 3,
        title: 'Fortnite coaching'
    },
    {
        id: 4,
        title: 'Roblox coaching'
    },
    {
        id: 5,
        title: 'Spell casting'
    },
    {
        id: 6,
        title: 'Rocket League coaching'
    },
    {
        id: 7,
        title: 'Online math tutoring'
    },
    {
        id: 8,
        title: 'Call of Duty coaching'
    },
    {
        id: 9,
        title: 'Dota coaching'
    },
    {
        id: 10,
        title: 'Minecraft coaching'
    },
    {
        id: 11,
        title: 'Custom workout plan'
    },
    {
        id: 12,
        title: 'Rainbow Six Siege coaching'
    },
    {
        id: 13,
        title: 'Psychic reading'
    },
    {
        id: 14,
        title: 'Apex Legends coaching'
    },
    {
        id: 15,
        title: 'Online language tutoring'
    },
    {
        id: 16,
        title: 'Super Smash coaching'
    },
    {
        id: 17,
        title: 'Meal plan consultant'
    },
    {
        id: 18,
        title: 'World of Warcraft coaching'
    },
    {
        id: 19,
        title: 'Online science tutoring'
    },
    {
        id: 20,
        title: 'Rust coaching'
    },
    {
        id: 21,
        title: 'FiFa coaching'
    },
    {
        id: 22,
        title: 'Reiki distance healing'
    },
    {
        id: 23,
        title: 'PUBG coaching'
    },
    {
        id: 24,
        title: 'Online chess coaching'
    },
    {
        id: 25,
        title: 'GTA coaching'    
    }

]

const Vertical = () => {
  return (
    <div>
        <h3 className='text-2xl font-semibold mt-[38px] text-center text-[#404145]'>You might be interested in Personal Growth & Hobbies</h3>
        <ul className='flex mt-[48px] items-center justify-center flex-wrap'>
            {VerticalItem.map((item) => (
                <li key={item.id} className='bg-[#EFEFF0] flex rounded-[999px] vertical-related-link'>
                    <a className='text-[#74767e] font-semibold text-sm'>{item.title}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Vertical