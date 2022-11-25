import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import castle from './assets/castle.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";


function Navbar2() {
    return(
      <div className="navbar text-white bg-base-200 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href='#homepage'>Home Page</a></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Sections
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                  <li><a>Summary</a></li>
                  <li><a>Our Opnion</a></li>
                  <li><a>Main Characters</a></li>
                  <li><a>Themes in the story</a></li>
                  <li><a>Conflicts in the story</a></li>
                  <li><a>Vocabulary</a></li>
                  <li><a>Location</a></li>
                  <li><a>Games</a></li>
                </ul>
              </li>
              <li><a>Closig and Group members</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl md:text-4xl font-bold">English Gw</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><a href='#homepage'>Home Page</a></li>
            <li tabIndex={0}>
              <a>
                Sections
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-200">
              <li><a>Summary</a></li>
                  <li><a>Our Opnion</a></li>
                  <li><a>Main Characters</a></li>
                  <li><a>Themes in the story</a></li>
                  <li><a>Conflicts in the story</a></li>
                  <li><a>Vocabulary</a></li>
                  <li><a>Location</a></li>
                  <li><a>Games</a></li>
              </ul>
            </li>
            <li><a href='#footer'>Closing and Group Members</a></li>
          </ul>
        </div>
        <div className='navbar-end'>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://static.thenounproject.com/png/2048463-200.png" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>

    )
}

function Hero() {
  return (
    <div id="homepage" className='px-32 py-24 min-h-screen' style={{ backgroundImage: `url("https://i.pinimg.com/originals/8c/c9/3c/8cc93ce6ebeecc582dda631776bde470.jpg")` }}>
      <div className='flex flex-row'>
        <div className='basis-1/2'>
            <h1 className='text-[60px] font-bold pb-8 pt-8'>The Murder At</h1>
            <h1 className='text-blue-900 font-bold text-[60px] testing'>Dunsinane</h1>
            <div className='pt-8'>
              <p className=''>
              <em>Would you kill so many people to secure your place as king of scotland?</em>
              </p>
            </div>
            <div className=' pt-8'>
             <a type='button' href="#summary" className='btn btn-outline rounded w-36 normal-case font-bold'>Explore</a>
            </div>
        </div>
      </div>
    </div>

  )

}


function Summary() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section  id="summary" data-aos="fade-up" className='min-h-screen bg-gradient-to-r from-black to-[#313236]' style={{backgroundImage: `url("https://images.hindustantimes.com/img/2021/09/21/550x309/the_tragedy_of_macbeth_1632231689954_1632231690100.png") backgroundsize: cover`}}> 
      <h1 className='text-center pt-10 pb-10 text-5xl'>Summary</h1>
        <p className='mx-auto w-3/5 indent-8  text-gray-400 text-2xl'>
        Macbeth and Banquo had defeated a rebel army who had wanted to attack the King Duncan of Scotland. While they were heading back to Scotland, they came across three witches. The witches greeted Macbeth as Thane of Glamis, Thane of Cawdor and the soon to be King of Scotland. The witches told Banquo that he would never be a King but his children would be. Macbeth became focussed on becoming the King of Scotland and realised that the only thing that stood in his way was King Duncan himself. Macbeth was a good man who was kindhearted and not able to intentionally hurt anyone without being coaxed. On the other hand, his wife was cruel and ruthless and easily planned how they would kill King Duncan so they would be King and Queen of Scotland. When the king stayed with the Macbeths at Dunsinane Castle, Macbeth reluctantly and fearfully killed King Duncan and his two guards. Duncan’s sons discovered his body and quickly left Scotland which made them suspects of the murder. Due to this, Macbeth was made King of Scotland.
        </p>
        <br/>
        <p className='mx-auto w-3/5 indent-8 text-gray-400 pb-10 text-2xl'>
        Macbeth continued to ensure that he would remain King by trying to destroy anything or anyone who would stand in his way. He ordered Banquo and his son Fleance to be assassinated. Fleance managed to survive but Banquo was killed. All the wrongdoings mentally tortured Macbeth and he was continuously haunted by Banquo’s ghost. Macbeth decided to revisit the three witches to demand answers to find out about his future. He left reassured that Macduff would not be able to harm him as the witches told him that no one born of a woman could harm him. Macduff fled to England to form an army with English and other Scottish Lords who hated Macbeth. Macduff’s castle was seized by Macbeth and his family and staff were killed. Lady Macbeth was haunted by the weight of all the murders which resulted in her sleepwalking, having nightmares and acting insane. Lady Macbeth passed away and Macbeth lost all his friends and respect of the kingdom. He no longer wanted to live and looked forward to dying where he would finally find peace of mind. The kingdom was attacked by Macduff and his army. Macbeth realised he had been tricked by the witches as Macduff told him he was ripped from his mother’s womb before her time. Mackbeth fought fearlessly but was beheaded by Macduff. 
        </p>
        <p className='mx-auto w-3/5 indent-8 pb-16 text-gray-400 text-2xl'>
        Macbeth was a man with a good heart who allowed himself to become greedy for the power of becoming the king. He had become merciless and was hated by everyone.  After his death, all peace was returned to Scotland and Malcolm became the new king.
        </p>
        <h2 className='text-center pb-10'>Do you think Macbeth was greedy for power after killing King Duncan so he could be king?</h2>
    </section>
  )
}

function Opnion() {

  return (
    <section  data-aos="fade-up" className='min-h-screen bg-gradient-to-r from-black to-[#313236]'>
        <h1 className='text-center m-auto text-5xl'>What imagery is used sucessfully in the story?</h1>
        <p className='mx-auto mt-10 w-3/5 indent-8 text-gray-400 pb-10 text-2xl'>The first line on page 1 It was a day of mingled storm and sunshine, with dark scudding clouds and torrential burst of rain is a very good example of imagery . The descriptiveness makes me feel as if I was there actually seeing it. The author did an extremely good job with this sentence because it certainly made me want to read more into the book.</p>

    </section>
  )

}

function Cards() {
  return (
  <section  data-aos="fade-up" className='antialiased bg-gradient-to-r from-black to-[#313236] 0 p-6'>
  <h1 className='text-center'>Main Characters</h1>
  <div class="container mx-auto ">
    <div class="flex flex-wrap mx-auto">
    <div className="card w-96 bg-base-100 shadow-xl my-11 mx-auto p-0 rounded-2xl">
      <figure><img className="w-full transition duration-500 hover:scale-125 hover:bg-blue-600" src="https://cdn.discordapp.com/attachments/937139620368511029/1044026387029299310/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Macbeth</h2>
        <p>A gay and imaginative Scottish general who was told a prophecy of being king of Scotland. The prophecy drives Macbeth to commit acts that eventually drive him into his inevitable demise. </p>
      </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl my-11 mx-auto p-0 rounded-2xl">
      <figure><img className='w-full transition duration-500 hover:scale-125 hover:bg-blue-600' src="https://cdn.discordapp.com/attachments/937139620368511029/1044027269586374676/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Lady Macbeth</h2>
        <p>Macbeth’s wife, a deeply ambitious woman who lusts for power and position. She seems to be the stronger and more ruthless of the two, as she urges her husband to kill Duncan and seize the crown. After the bloodshed begins, however, Lady Macbeth falls victim to guilt and madness to an even greater degree than her husband. Her conscience affects her to such an extent that she eventually commits suicide.</p>
      </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl my-11 mx-auto p-0 rounded-2xl">
      <figure><img className='transition duration-500 hover:scale-125 hover:bg-blue-600' src="https://cdn.discordapp.com/attachments/937139620368511029/1044027645702180894/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">The Three witches</h2>
        <p>Three “black and midnight hags” who plot mischief against Macbeth using charms, spells, and prophecies. Their predictions prompt him to murder Duncan, to order the deaths of Banquo and his son, and to blindly believe in his own immortality. </p>
      </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl mx-11 p-0 rounded-2xl">
      <figure><img className="w-full transition duration-500 hover:scale-125 hover:bg-blue-600" src="https://cdn.discordapp.com/attachments/937139620368511029/1044034318122627072/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Banquo</h2>
        <p>A fellow Scottish general who is told a prophecy of his children being a line of kings and who is killed by assassins Macbeth sent to stop his prophecy from coming to fruition.</p>
      </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl my-11 mx-auto p-0 rounded-2xl">
      <figure><img className="w-full transition duration-500 hover:scale-125 hover:bg-blue-600" src="https://cdn.discordapp.com/attachments/937139620368511029/1044034025590894714/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Macduff</h2>
        <p>Macduff stands out from a large cast of secondary characters because of the particular harm that Macbeth does to him, and the revenge Macduff takes on Macbeth in turn.</p>
      </div>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl my-11 mx-auto p-0 rounded-2xl">
      <figure><img className="w-full transition duration-500 hover:scale-125 hover:bg-blue-600" src="https://cdn.discordapp.com/attachments/937139620368511029/1044091614022352896/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Ross</h2>
        <p> The second nobleman who is sent to Macbeth to inform him of his promotion to Thane of Cawdor </p>
      </div>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl my-11 mx-auto p-0 rounded-2xl">
      <figure><img className="w-full transition duration-500 hover:scale-125 hover:bg-blue-600" src="https://cdn.discordapp.com/attachments/937139620368511029/1044092347182501968/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Angus</h2>
        <p>One of the king's noblemen who is sent to inform Macbeth of his promotion to Thane of Cawdor </p>
      </div>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl my-11 mx-auto p-0 rounded-2xl">
      <figure><img className="w-full transition duration-500 hover:scale-125 hover:bg-blue-600" src="https://cdn.discordapp.com/attachments/937139620368511029/1044092985165492315/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Donaldbain</h2>
        <p>One of the Duncan’s sons who flees the country due to the death of his fater </p>
      </div>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl my-11 mx-auto p-0 rounded-2xl">
      <figure><img className="w-full transition duration-500 hover:scale-125 hover:bg-blue-600" src="https://cdn.discordapp.com/attachments/937139620368511029/1044093734293352488/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Fleance</h2>
        <p>The son of Banquo who escapes assassins sent by Macbeth </p>
      </div>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl my-11 mx-11 p-0 rounded-2xl">
      <figure><img className="w-full transition duration-500 hover:scale-125 hover:bg-blue-600" src="https://cdn.discordapp.com/attachments/937139620368511029/1044093114178084994/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Duncan</h2>
        <p>The king well respected and loved king who is killed in his sleep by Macbeth with the help of his wife </p>
      </div>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl my-11 mx-28 p-0 rounded-2xl">
      <figure><img className="w-full transition duration-500 hover:scale-125 hover:bg-blue-600" src="https://cdn.discordapp.com/attachments/937139620368511029/1044092790180687933/image.png" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Malcolm</h2>
        <span>Macduff stands out from a large cast of secondary characters because of the particular harm that Macbeth does to him, and the revenge Macduff takes on Macbeth in turn.</span>
      </div>
    </div>








    </div>
  </div>
  <h2 className='text-gray-400 text-center'>Who do you think is the most interesting character here and why?</h2>
  </section>
  )
}

function Themes() {
  
  return (
    <section  data-aos="fade-up" className='min-h-screen bg-gradient-to-r from-black to-[#313236]'>
        <h1 className='text-center m-auto'>Themes</h1>
  <div className="overflow-x-auto px-40 pt-10  m-auto">
  <table className="table w-full">
    {/*<!-- head -->*/}
    <thead>
      <tr>
        <th></th>
        <th>Theme</th>
        <th>Explanation</th>
      </tr>
    </thead>
    <tbody>
      {/*-- row 1 -->*/}
      <tr className="hover h-40 p-0">
        <th>1</th>
        <td>Ambition</td>
        <td>The theme of ambition is  seen in Macbeth's constant need to become the king and to remain the king without being overthrown by anyone. <br></br>This ambition caused him to become  very involved in his own desires and to lose consideration of other persons he cared about. This ambition led to his ultimate downfall.</td>
      </tr>
      {/*<!-- row 2 -->*/}
      <tr className="hover h-40">
        <th>2</th>
        <td>Bravery/Courage</td>
        <td>Macbeth displays extreme bravery when he fights for his country and wins and is awarded the title of Thane of Cawdor.

Macbeth is also courageous when he fearlessly fights <br></br>with Macduff at the very end of the story.</td>
      </tr>
      {/*<!-- row 3 -->*/}
      <tr className="hover h-40">
        <th>3</th>
        <td>Good versus evil</td>
        <td>In the beginning, Macbeth is a very good man who is loyal, trustworthy, responsible and honourable. He becomes evil as he is influenced by his wicked wife to kill King Duncan <br></br>. He is also influenced by the three witches who are evil and deceive him. Ultimately, Macbeth changes and becomes evil through deception, violence and greed.</td>
      </tr>

       {/*<!-- row 4 -->*/}
       <tr className='hover h-40'>
        <th>4</th>
        <td>Deception</td>
        <td> Lady Macbeth and Macbeth trick, lie and kill persons in order to become King and Queen of Scotland. King Duncan is deceived by his  trusted and loyal subject Macbeth. <br></br >He felt safe staying at Dunsinane Castle with the Macbeths who ultimately  killed him.  Macbeth is tricked by the witches who make him think that he is immortal and cannot be hurt by anyone <br></br>. This makes him feel  overconfident and he is eventually killed by Macduff.</td>
      </tr>
    </tbody>
  </table>
</div>
    </section>
  )

}



function Conflict() {
  return (
        <section data-aos="fade-up" className='min-h-screen bg-gradient-to-r from-black to-[#313236]' style={{backgroundImage: `url("https://images.hindustantimes.com/img/2021/09/21/550x309/the_tragedy_of_macbeth_1632231689954_1632231690100.png") backgroundsize: cover`}}> 
          <h1 className='text-center pt-10 pb-10 text-5xl m-auto'>Conflics in the story</h1>
            <p className='mx-auto w-3/5 indent-8 m-auto text-gray-400 text-2xl'>
            The main conflict of the story is how the prophecy told by the 3 witches corrupts Macbeth and causes him to make questionable choices that lead to his death (man vs supernatural/unknown). 
            </p>
            <br/>
            <p className='mx-auto w-3/5 indent-8 text-gray-400 pb-10 text-2xl'>
            Other conflicts include the betrayal of Banquo and the Duncan (man vs man), Macbeths fight against his conscience (man vs self), Macbeth having men kill Macduff's family (man vs man)
            </p>
          <h1 className='text-center pt-10 pb-10 text-5xl m-auto'>What is the purpose of the story</h1>
          <p className='mx-auto w-3/5 indent-8 text-gray-400 pb-10 text-2xl'>The main purpose of the story is to say that a man's ambition and greed may have many consequences that will haunt you for the rest of your lives</p>
          <h1 className='text-center pt-10 pb-10 text-5xl m-auto'>What are some symbols in this story?</h1>
          <h3 className='text-center pt-10 pb-10 text-3xl m-auto'>Blood</h3>
          <p  className='mx-auto w-3/5 indent-8 text-gray-400 pb-10 text-2xl'>Macbeth is rife with blood, beginning with the opening combat between the Scots and the Norwegian invaders. Once Macbeth and Lady Macbeth begin their deadly trip, blood begins to signify their guilt, and they begin to believe that their crimes have soiled them in a way that cannot be wiped away. "Will all the huge Neptune's ocean clean this blood from my hand?" Even though his wife scolds him and claims that a little water will do the trick, Macbeth weeps after killing Duncan. Later, when she travels through the hallways of their castle at the end of the play, she learns to experience his frightened sense of being tainted. Blood represents the perpetual feeling of guilt.</p>
          <h3 className='text-center pt-10 pb-10 text-3xl m-auto'>Weather</h3>
          <p  className='mx-auto w-3/5 indent-8 text-gray-400 pb-10 text-2xl'>Macbeth's macabre murder spree is followed by a series of abnormal happenings in the natural sphere. These disruptions of the natural order mirror corruption in the moral and political systems, from the thunder and lightning that follow the witches' apparition to the violent storms that rage on the night of Duncan's death.</p>
          <h2 className='text-center text-gray-400 pb-10'>Do you think the story served another purpose?</h2>
        </section>
      )
}


function Vocab() {
  
  return (
    <section  data-aos="fade-up" className='min-h-screen bg-gradient-to-r from-black to-[#313236] pb-10'>
        <h1 className='text-center m-auto text-5xl'>Vocabulary</h1>
  <div className="overflow-x-auto px-40 pt-10  m-auto">
  <table className="table w-full">
    {/*<!-- head -->*/}
    <thead>
      <tr>
        <th></th>
        <th>Word</th>
        <th>Defintion</th>
      </tr>
    </thead>
    <tbody>
      {/*-- row 1 -->*/}
      <tr className="hover h-40 p-0">
        <th>1</th>
        <td>Torrential</td>
        <td>(of rain) falling rapidly and in copious quantities.</td>
      </tr>
      {/*<!-- row 2 -->*/}
      <tr className="hover h-40">
        <th>2</th>
        <td>Brandish</td>
        <td>wave or flourish (something, especially a weapon) as a threat or in anger or excitement.</td>
      </tr>
      {/*<!-- row 3 -->*/}
      <tr className="hover h-40">
        <th>3</th>
        <td>Desolate</td>
        <td>(of a place) uninhabited and giving an impression of bleak emptiness.</td>
      </tr>

       {/*<!-- row 4 -->*/}
       <tr className='hover h-40'>
        <th>4</th>
        <td>Moor</td>
        <td>a tract of open uncultivated upland, typically covered with heather.</td>
      </tr>

        {/*<!-- row 5 -->*/}
        <tr className='hover h-40'>
        <th>5</th>
        <td>Brooding</td>
        <td>engaged in or showing deep thought about something that makes one sad, angry, or worried.</td>
      </tr>
    </tbody>
  </table>
</div>
    </section>
  )

}


function Location() {

  return(
    <section data-aos="fade-up" className='min-h-screen bg-gradient-to-r from-black to-[#313236] m-auto'>
      <h1 className='text-center m-auto text-5xl p-10'>Location</h1>
      <div className='relative w-1/2 m-auto h-96'>
      <iframe src="https://maps.google.com/maps?q=Dunisnane&t=&z=13&ie=UTF8&iwloc=&output=embed" class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
      </div>
    </section>
  )

}

function Games() {
  return(
    <section data-aos="fade-up" className='min-h-screen bg-gradient-to-r from-black to-[#313236] m-auto'>
      <div className="flex flex-col items-center"> 
      <h1 className=' m-auto text-5xl'>Game Time!!!</h1>
      <span className='mx-auto w-3/5 indent-8 text-gray-400 pt-10 text-2xl text-center'>No other way that close our presentation off without a gameshow quiz</span>
      <a type='button' href='https://wordwall.net/resource/38507899' className='btn btn-outline rounded w-36 normal-case font-bold gap-7 mt-10'>
        Game
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet" className='h-4 w-4'>
          

          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M3395 4734 c-45 -23 -66 -45 -86 -89 -22 -46 -23 -75 -8 -130 9 -33
          58 -87 277 -308 l266 -267 -942 -943 c-929 -929 -942 -943 -942 -982 0 -37 8
          -47 183 -223 100 -101 193 -188 206 -193 15 -6 35 -6 55 1 21 7 332 311 966
          945 l935 935 260 -259 c143 -142 275 -267 294 -276 25 -12 51 -16 92 -13 70 5
          122 41 150 102 18 39 19 80 19 806 0 726 -1 767 -19 806 -10 23 -36 54 -57 70
          l-37 29 -791 3 c-703 2 -794 0 -821 -14z"/>
          <path d="M730 4384 c-201 -31 -330 -91 -468 -219 -108 -99 -189 -230 -234
          -377 l-23 -73 -3 -1294 c-3 -1422 -4 -1390 57 -1540 89 -220 282 -398 516
          -479 l80 -27 1320 -3 c1444 -3 1397 -5 1538 55 228 97 396 282 478 528 23 69
          23 74 27 627 l3 558 -25 25 c-24 24 -30 25 -156 25 -126 0 -132 -1 -155 -25
          l-25 -24 0 -473 c0 -264 -5 -504 -10 -543 -28 -194 -184 -354 -376 -385 -83
          -14 -2439 -13 -2524 1 -166 26 -305 144 -361 307 -18 53 -19 104 -19 1326 0
          1348 -1 1306 45 1397 46 90 148 182 242 221 l58 23 1077 5 1078 5 27 27 c25
          26 28 35 31 125 2 57 -1 116 -8 141 -20 77 51 72 -1122 71 -574 -1 -1054 -3
          -1068 -5z"/>
          </g>
          </svg>

      </a>
      </div>
      <div class="relative">
      <img src="https://cdn.discordapp.com/attachments/937139620368511029/1044208394254417982/unknown.png" className='w-1/5 absolute bottom-0 right-0'></img>
</div>
    </section>
  )
}


function Footer() {

  return (
    <footer id="footer" data-aos="fade-up" className="footer p-10 bg-base-200 text-base-content">
      <div>
        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
        <p>Group Members<br/>For our English Group</p>
      </div> 
      <div>
        <a className="link link-hover">Amari Cross</a> 
        <a className="link link-hover">Caleb Tayler-Brown</a> 
        <a className="link link-hover">Nicolai Banton</a> 
        <a className="link link-hover">Rahim Downes</a>
      </div> 
      <div>
        <a className="link link-hover">Cameron Dawes</a> 
        <a className="link link-hover">Richard Nieta</a> 
        <a className="link link-hover">Liam Page</a> 
        <a className="link link-hover">Mikhail king</a>
      </div> 
    </footer>
  )

}


function App() {

  return (
    <div className="">
      <Navbar2/>
      <Hero/>
      <Summary/>
      <Opnion/>
      <Cards/>
      <Themes/>
      <Conflict/>
      <Vocab/>
      <Location/>
      <Games/>
      <Footer/>
    </div>
  )
}

export default App
