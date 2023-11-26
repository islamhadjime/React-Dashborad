import React from 'react'
import style from './Persions.module.css'


const Persions = () => {
  return (
    <div className={style.persions}>
      <div className={style.profil}>
        <img src="https://s3-alpha-sig.figma.com/img/0715/ef89/ce606ec0ad03260b2ec3e883ec37d6b5?Expires=1701648000&Signature=TrRntNSjn1HaB8trXbSDryM3CQ3srzGvdt9e78wVfxt34rpvRYy-sufQBjQsEHK8bibXQDaYuLQlEsCGpg3VBd58gCxutaKg3lIKf24hMuhKDSoFAGN7EAm9nVVmEDUYvuKNLdALfmFPhil95SHRdtA~frmQyvrdUKDFv-FVZmmftG0LXSXK3h-us9xXKB86fVXR-oHtAusT6qCPvRHbaKTn3MzvtKXuzYpP8rI4IXlTNkt6eNu2z4jkX03fMyEGYWaAAD9LUmum~HxxuRrEml9fWw8K36gxe6PLyVdUMRTe9~yV-hSU5HN8g-~zx3hhgY0bnzU39e2qWmTFIZ8zMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </div>
      <div className={style.add}>
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="22" viewBox="0 0 29 22" fill="none">
          <path d="M4.35 9.42857C5.94953 9.42857 7.25 8.0192 7.25 6.28571C7.25 4.55223 5.94953 3.14286 4.35 3.14286C2.75047 3.14286 1.45 4.55223 1.45 6.28571C1.45 8.0192 2.75047 9.42857 4.35 9.42857ZM24.65 9.42857C26.2495 9.42857 27.55 8.0192 27.55 6.28571C27.55 4.55223 26.2495 3.14286 24.65 3.14286C23.0505 3.14286 21.75 4.55223 21.75 6.28571C21.75 8.0192 23.0505 9.42857 24.65 9.42857ZM26.1 11H23.2C22.4025 11 21.682 11.3487 21.1564 11.9134C22.9825 12.9987 24.2784 14.958 24.5594 17.2857H27.55C28.352 17.2857 29 16.5835 29 15.7143V14.1429C29 12.4094 27.6995 11 26.1 11ZM14.5 11C17.3048 11 19.575 8.53973 19.575 5.5C19.575 2.46027 17.3048 0 14.5 0C11.6952 0 9.425 2.46027 9.425 5.5C9.425 8.53973 11.6952 11 14.5 11ZM17.98 12.5714H17.6039C16.6614 13.0625 15.6147 13.3571 14.5 13.3571C13.3853 13.3571 12.3431 13.0625 11.3961 12.5714H11.02C8.13813 12.5714 5.8 15.1054 5.8 18.2286V19.6429C5.8 20.9442 6.77422 22 7.975 22H21.025C22.2258 22 23.2 20.9442 23.2 19.6429V18.2286C23.2 15.1054 20.8619 12.5714 17.98 12.5714ZM7.84359 11.9134C7.31797 11.3487 6.5975 11 5.8 11H2.9C1.30047 11 0 12.4094 0 14.1429V15.7143C0 16.5835 0.647969 17.2857 1.45 17.2857H4.43609C4.72156 14.958 6.0175 12.9987 7.84359 11.9134Z" fill="white" />
        </svg>
      </div>
      <div className={style.lister}>
        <div className={style.user}>
          <div className={style.user_img}>
            <img src="https://s3-alpha-sig.figma.com/img/0fca/4169/a7425a65753d834a927b11cd3ee2a29c?Expires=1701648000&Signature=iqBC1TUnOldNnmWEs6Ij4KxOV3dnAqDBLR5B9Cez6CSgOVrQqUSRACdzzL4qqiGyk3jWsGmP0PNsW6cDapi09qqot3jQ9B1g0-5-MvZdFlUT1Ve5BsYX756Eukfp5OHURReXpwj6NxSWQWLstohc63Y~~8FBOoOep-GuWRZFIQoKW-FhREB02HADErn8hGNI0CN7Hr5w5denatwwsZg7emsxpF2aifLtNwRSclQ2HqtIAjdh81KaduKp5snefs00Cg34E2N2inHMvh62Bhf3mVYMsIkrGqahbB0IMnEMMduBFKgFZ2huG~ri8v8kKJwfLBQi49OHrw~xyEkT8L4~Iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
            
          <div className={style.status}>
            in Game
          </div>
          <div class={style.circle+' '+ style.circle__activ}></div>
        </div>
        <div className={style.user}>
          <div className={style.user_img}>
            <img src="https://s3-alpha-sig.figma.com/img/3fd2/6a9c/46fce46672a7811e4e5a7a0aaeab0274?Expires=1701648000&Signature=aeOvhA7KVNxSCvZ-Zxm8wA~2TLNbR-j3r81DKV7bEzoluD5NCghdQmdJFVJyVujMwmyE3rvKkqQvtf0hfdq-ZHBYIJA2yQGo3leVnzBBTdSHcjPYp3bSC~QN-O3u0lnjZ3PV-mwtH-n6P59TYAZyU2IlFQfKyKwcVBfnWh9wElkP1KOIrh~Wg1L6iKPku63kS7ikdJpLyssgQ~OLJYHOnmZCA0KtipHI9Nw1Y~-6kv0uUy5eRzu9I6OEBqWZ7X-XwZzs584NsIRy83iQKNm3vSOL4ax74xcc7h9ylVduOzkp2Yh51KUVdVycdCqYBfG-y4tenRqTXwf3lPJgjmvGLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
            
          <div className={style.status}>
            in Game
          </div>
          <div class={style.circle+' '+ style.circle__activ}></div>
        </div>
        <div className={style.user}>
          <div className={style.user_img}>
            <img src="https://s3-alpha-sig.figma.com/img/1549/1edb/2be9afde04ef99a049bb72612d20ad6a?Expires=1701648000&Signature=H5lIMpWVK6sEw30MR7T0Co3s54wV~gM1McVCxV7iyaR0k0f9Fd52XrKTTdcaVrhbkBp27KAzPD5UHKycrMus-T96L0n89zTs8gcEH8lQKTKHreGN0AD3EDSnUYS7z5D9HxBJMnAJRRajC2iPamm-OofABldHLbZz2OmcpK~XWm6Y4VAa6gtPAUeA8rihg9TjwSB3AhFaaTjo0HoIfJFjnTlO5RaFkriAbOU43B1B1F3BVT-JPmIQko9xqbWQKjaw7AZzFxw8ehFry7TNgi87gWimiIvWIrgRXmg6qPPyHyOyD~D-wbfUoCJtTEw1KlTVUKsWZa9urF4ZyI9Orv6uiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
          <div class={style.circle}></div>
        </div>
        <div className={style.user}>
          <div className={style.user_img}>
            <img src="https://s3-alpha-sig.figma.com/img/92ed/24d4/427fb157c455eda7559d13ea7b415b09?Expires=1701648000&Signature=hFfakEGrMGqdV69iCIkdCQnvpbMgUkq8EpGlaZOZZuK4t0BsGcLqhv6cYx0mXoezvciMUafxtvT9QvbAMjNCAWY6OIj~bJIgjyaxN1FYhATovUfanv5AsPbYhaN1T4zRy2CfnQBrasvLYNc3qUqkLECF6WrHfxHrXjHa63JbzyNhs6G4d9cLH~KmONmYXaHnLtVP73n6DgvM2sMpxTpAi-m6TAPKsH53FYjhZyFj0rnKdmdFYx3VgIXKH59lewNvoYS94GGvxy0BcgPej5ga2Rc7c04L8-p3G-q6WbaCZEsoLNy7rnK4vda82bvQn5H3zCSY1AITnCM6lToCSnXtSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
          <div class={style.circle}></div>
        </div>
        <div className={style.user}>
          <div className={style.user_img}>
            <img src="https://s3-alpha-sig.figma.com/img/7c0c/fdb3/b47632793c3a52e74fede28182a52e4f?Expires=1701648000&Signature=ZLrxXp8Q-vQwWVKhG8hGrY0RnkA8I1wpcBAL5X-gIYFs-zHy4Pm69mHRegodhxJXP5vnyO13hHImjyetWFkO~PLhexJ00s4YwLO2r8sx2HOZvPAJqV~1jjjGhqh0tGGAi9L2Fv-ALdp~DPW8n7~9ebdgrUfmd~pWsuuRmG4LZcF9OYVtWHyuRD1KC4Rbhkzy16FYpKX65zjLLFOJCYzsQw4zh9XHf9hmBxcS5kVJDDN4~RoLxiBd85zVVbt4qdphFTSjkwVgKo0YWAK3NdfQQMbSlM~oi8wHf-8uCcA6P1Lz~Z0lWcRo80D1gIdbexqfM9242yGZqIzeyD2rmH0joA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
          <div class={style.circle}></div>
        </div>
      </div>
    </div>
  )
}

export default Persions