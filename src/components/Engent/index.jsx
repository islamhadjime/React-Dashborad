import React from 'react'
import style from './Engent.module.css'

const Engent = () => {
  return (
    <div className={style.engent}>
      <div className={style.header}>
        <h2>Last downloads</h2>
        <p>See More</p>
      </div>
      <div className={style.content}>
        <div className={style.item}>
          <div className={style.img}>
            <img src="https://s3-alpha-sig.figma.com/img/56a3/27ed/f20efd162e13ab68b0a2360a93a91ac3?Expires=1701648000&Signature=BRBzxZ28MbniVzQfr6PxonOt5t2XmvL~cfHchpwj~a2gyF5RUPf512mXMq1yA1wt8xoeXvqq9NBsUNl6BxUtCoYtQPuliqqEwOmt0oLleqr6LRCKIIYBhzpjgKMXnOkmlwsl~tZKN7HVzbwnWfhDY4YfWaiAjFq92ui6KN7s8ssltK4nR0ZIdNLu~DNAf2dbm2qV6iIZD2PeW25ukUd1-RaQHzixUtB5CkFVF8LxhjztbP4wjExrbNMG2gjZ8VFmlgrDKDo-31j4X42xwRVw48u1VSCqlpLRBWK67Sym0Ni49gxrXT6HFn~mS-xfxRnICQI0gcfbL9~llmnY-Zi~Mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
          <div className={style.text}>
            <h3>Warzone II</h3>
            <a href="">
              Action Simulator
            </a>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.detail}>
            <h3>1 hour 14 min.</h3>
            <p>324Mb For 19 Gb</p>
          </div>
          <div className={style.progent}>
            <div className={style.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M5 15.0002L5 10.5502C5 5.02523 8.9125 2.76274 13.7 5.52524L17.5625 7.75024L21.425 9.97523C26.2125 12.7377 26.2125 17.2627 21.425 20.0252L17.5625 22.2502L13.7 24.4752C8.9125 27.2377 5 24.9752 5 19.4502L5 15.0002Z" fill="white"/>
              </svg>
            </div>
            <div className={style.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M31.749 31.7515L18.2494 18.2518" stroke="#FF3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31.7487 18.2518L18.249 31.7515" stroke="#FF3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Engent