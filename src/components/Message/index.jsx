import React from 'react'
import style from './Message.module.css'


const Message = () => {
  return (
    <div className={style.message}>
        <div className={style.item_icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="27" viewBox="0 0 35 27" fill="none">
          <path d="M0 9.70945C0 4.34704 3.9427 0 8.80623 0H15.6813C20.5448 0 24.4875 4.34704 24.4875 9.70945C24.4875 15.0718 20.5448 19.419 15.6813 19.419H10.4946V24.1063C10.4946 24.1063 0 21.7626 0 9.70945Z" fill="#F4F5F6"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9082 21.0861C19.1742 22.4264 20.8933 23.25 22.7869 23.25H25.3619V26.9999C25.3619 26.9999 34.982 25.125 34.982 15.4825C34.982 11.1925 31.8279 7.71484 27.9371 7.71484H26.0046C26.1557 8.34759 26.2361 9.01186 26.2361 9.69696C26.2361 15.2845 22.6687 19.9534 17.9082 21.0861Z" fill="#F4F5F6"/>
          </svg>
        </div>
        <div className={style.item_group}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
            <path d="M3.6 7.13404C4.92375 7.13404 6 6.06765 6 4.75603C6 3.44441 4.92375 2.37801 3.6 2.37801C2.27625 2.37801 1.2 3.44441 1.2 4.75603C1.2 6.06765 2.27625 7.13404 3.6 7.13404ZM20.4 7.13404C21.7238 7.13404 22.8 6.06765 22.8 4.75603C22.8 3.44441 21.7238 2.37801 20.4 2.37801C19.0763 2.37801 18 3.44441 18 4.75603C18 6.06765 19.0763 7.13404 20.4 7.13404ZM21.6 8.32305H19.2C18.54 8.32305 17.9438 8.58686 17.5088 9.01416C19.02 9.83532 20.0925 11.3179 20.325 13.0791H22.8C23.4638 13.0791 24 12.5477 24 11.8901V10.7011C24 9.38944 22.9238 8.32305 21.6 8.32305ZM12 8.32305C14.3213 8.32305 16.2 6.46151 16.2 4.16153C16.2 1.86154 14.3213 0 12 0C9.67875 0 7.8 1.86154 7.8 4.16153C7.8 6.46151 9.67875 8.32305 12 8.32305ZM14.88 9.51206H14.5688C13.7888 9.88362 12.9225 10.1066 12 10.1066C11.0775 10.1066 10.215 9.88362 9.43125 9.51206H9.12C6.735 9.51206 4.8 11.4293 4.8 13.7925V14.8626C4.8 15.8472 5.60625 16.6461 6.6 16.6461H17.4C18.3938 16.6461 19.2 15.8472 19.2 14.8626V13.7925C19.2 11.4293 17.265 9.51206 14.88 9.51206ZM6.49125 9.01416C6.05625 8.58686 5.46 8.32305 4.8 8.32305H2.4C1.07625 8.32305 0 9.38944 0 10.7011V11.8901C0 12.5477 0.53625 13.0791 1.2 13.0791H3.67125C3.9075 11.3179 4.98 9.83532 6.49125 9.01416Z" fill="white"/>
          </svg>
        </div>
        <div className={style.message__users}>
          <div className={style.message__user}>
            <div className={style.message__img}>
              <img src="https://s3-alpha-sig.figma.com/img/90f7/c975/3095c0ea99b0690beda332283ffcf53b?Expires=1701648000&Signature=XvkRQPpPIz5xJQIdQsbD-piWFChiwucr7jBku50JdDOSRvJSnUwd4H0FhBdgFI7pqveTonz7yO-b3In7-x-6HjmPDl5Yj5H9rT-6I4eUcSagHDhiygdF1wcqkIQcAt3XxCSziGgeQsFJsxtdR~erEv2crh2X9VsQYOE-QjAfLXmvsFIdLer6xI2ULa08n45bE3XU8Wz~FhYdBiayk1st0dbpF~26D7Yew93OCBD-RdvOKYLt1AxaDGuQ6VgLEli79~mJAnhG4rH3-E4jFbv3DFEUBPZmTIEJururifJVwdsFrhHavoo916GBawVXJrRseIcsClpKbPMbx~7AFJd4fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className={style.message__count}>
              <span> 2</span>
            </div>
          </div>
          <div className={style.message__user}>
            <div className={style.message__img}>
              <img src="https://s3-alpha-sig.figma.com/img/4464/7bea/fc4295e728223189e354462f993a61db?Expires=1701648000&Signature=mI0SP8mI8tMQGMz7LxlQ6kbsgtcSwp4ws~6pyEg0KOxQrNnc6ClxmTmqiuoR~ZcLG6FQ7WEGNK4CTfXDcfqE8CXK2HghDswcBc3alAizCBS469u04Pmxda6LzgNekw6iu~2tTAB4aEgGTY86BZ-E~1Ai59bnLvAW3ZS8y8LeNf~mkzsYzsFZetMryXUx6EHb5NoB2jU3ejKnZPIp8bSCjeMJBXy3-15x0Gu5teVe3vCm4htG995~4MHA2o626LSJKN-Ee9VDdnKDdSPnSJweE3HaH0iH9~l5XXAJt7eUQpbCS65KRGfV41OwYdLqVaT-e9q3a0Bcbak3aZM8TnMa7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Message