import React from 'react'
import style from './Cards.module.css'

const urlImage1 = "https://s3-alpha-sig.figma.com/img/17de/c2bf/71bd6ed68b3b5107770c9c917398a286?Expires=1701648000&Signature=XtjbRG0LSw9fFBJOIulJnEftWVSJYQqirnAdXx7EK~qdwvn69lAg~5ra8DedP5MUhkBWoH~gntiU27M76ThTfNsU5Hf9~98VqstfHevZaGtBB~vRP74CvgPBTXcEgbKksGSa9AIGpGQ~NXMZzuMr2fxp06b~SlHTdSWtuakt4Q~mUwHt9uVAFU8MZ77eCclczJ5GF29c59BChMSG~1PePjyk2g4HQ1CarCpRxbqDKXGsu-bmWjf5i3is9sZ-jS0LEGyyDQfp~1E7MDn~QZDfl2NxY1f8pRnQEuaWOwUtBBvcXy6VFG~s3SUduUJUrK9JWu43Zc7JyblNwnMq7xwMbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const urlImage2 = 'https://s3-alpha-sig.figma.com/img/4464/7bea/fc4295e728223189e354462f993a61db?Expires=1701648000&Signature=mI0SP8mI8tMQGMz7LxlQ6kbsgtcSwp4ws~6pyEg0KOxQrNnc6ClxmTmqiuoR~ZcLG6FQ7WEGNK4CTfXDcfqE8CXK2HghDswcBc3alAizCBS469u04Pmxda6LzgNekw6iu~2tTAB4aEgGTY86BZ-E~1Ai59bnLvAW3ZS8y8LeNf~mkzsYzsFZetMryXUx6EHb5NoB2jU3ejKnZPIp8bSCjeMJBXy3-15x0Gu5teVe3vCm4htG995~4MHA2o626LSJKN-Ee9VDdnKDdSPnSJweE3HaH0iH9~l5XXAJt7eUQpbCS65KRGfV41OwYdLqVaT-e9q3a0Bcbak3aZM8TnMa7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
const urlImage3 = 'https://s3-alpha-sig.figma.com/img/0715/ef89/ce606ec0ad03260b2ec3e883ec37d6b5?Expires=1701648000&Signature=TrRntNSjn1HaB8trXbSDryM3CQ3srzGvdt9e78wVfxt34rpvRYy-sufQBjQsEHK8bibXQDaYuLQlEsCGpg3VBd58gCxutaKg3lIKf24hMuhKDSoFAGN7EAm9nVVmEDUYvuKNLdALfmFPhil95SHRdtA~frmQyvrdUKDFv-FVZmmftG0LXSXK3h-us9xXKB86fVXR-oHtAusT6qCPvRHbaKTn3MzvtKXuzYpP8rI4IXlTNkt6eNu2z4jkX03fMyEGYWaAAD9LUmum~HxxuRrEml9fWw8K36gxe6PLyVdUMRTe9~yV-hSU5HN8g-~zx3hhgY0bnzU39e2qWmTFIZ8zMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

const Cards = () => {
  return (
    <div className={style.listerCards}>
      <div className={style.lister}>
       <a  href="#" className={style.cards} style={{background:`url(${urlImage1}) center center / cover no-repeat`}}>
          <div className={style.top}>
            <div className={style.play}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6.00494 15.6438L6.23783 11.1999C6.52699 5.68251 10.5525 3.62787 15.1889 6.63715L18.9297 9.06124L22.6704 11.4853C27.3068 14.4946 27.07 19.0134 22.1444 21.5216L18.1708 23.5414L14.1971 25.5612C9.27161 28.0693 5.48288 25.6052 5.77204 20.0877L6.00494 15.6438Z" fill="white"/>
              </svg>
            </div>
            <div className={style.shop}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                <path d="M10.4294 10.9527L10.4929 9.74185C10.6401 6.93321 13.044 4.2929 15.8664 4.17796C19.2288 4.02873 21.9119 6.81046 21.7399 10.0935L21.6496 11.8161" stroke="#3DBDA7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.3643 28.9387L18.8541 29.3312C23.8722 29.5942 24.8763 27.6315 25.2666 25.1986L26.5954 17.758C27.092 14.7298 26.3484 12.1999 21.0182 11.9206L11.0319 11.3972C5.70174 11.1179 4.69776 13.5562 4.87517 16.6197L5.41886 24.1584C5.55278 26.6188 6.34622 28.6757 11.3643 28.9387Z" fill="#3DBDA7"/>
                <path d="M20.1275 16.8806L20.1388 16.8812" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.3883 16.4226L11.3995 16.4232" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div className={style.content}>
            <h2>Deep walker</h2>
            <p>
              The game uses an original soundtrack 
              written in Fl Studio, models assembled 
              in Blender and the wonderful engine.
            </p>
          </div>
        </a>
        <a  href="#"  className={style.cards} style={{background:`url(${urlImage2}) center center / cover no-repeat`}}>
          <div className={style.content}>
            <h2>Deep walker</h2>
          </div>
        </a>
        <a  href="#"  className={style.cards} style={{background:`url(${urlImage3}) center center / cover no-repeat`}}>
          <div className={style.content}>
            <h2>Deep walker</h2>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Cards