import React from 'react'
import style from './Search.module.css'

const Search = () => {
  return (
    <div className={style.search}>
      <h2>Hi,<span>Mathias</span></h2>
      <div className={style.search__wrapper}>
        <div className={style.search_input}>
          <input type="text" placeholder='Search anything...' />
          <div className={style.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#BABABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 22L20 20" stroke="#BABABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className={style.notifon}>
          <div className={style.notifon__item}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 6.43994V9.76994" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M15.3299 18.8198C15.3299 20.6498 13.8299 22.1498 11.9999 22.1498C11.0899 22.1498 10.2499 21.7698 9.64992 21.1698C9.04992 20.5698 8.66992 19.7298 8.66992 18.8198" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
            </svg>
          </div>
          <div className={style.notifon__item}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
              <path d="M1.97738 9.84C2.0176 9.3388 2.24513 8.87115 2.61465 8.53017C2.98417 8.18918 3.46857 7.9999 3.97138 8H16.0294C16.5322 7.9999 17.0166 8.18918 17.3861 8.53017C17.7556 8.87115 17.9832 9.3388 18.0234 9.84L18.8264 19.84C18.8485 20.1152 18.8133 20.392 18.7232 20.6529C18.6331 20.9139 18.4899 21.1533 18.3027 21.3562C18.1155 21.5591 17.8883 21.7211 17.6354 21.8319C17.3825 21.9427 17.1095 21.9999 16.8334 22H3.16738C2.8913 21.9999 2.61823 21.9427 2.36536 21.8319C2.11249 21.7211 1.88529 21.5591 1.69808 21.3562C1.51086 21.1533 1.36768 20.9139 1.27755 20.6529C1.18742 20.392 1.15229 20.1152 1.17438 19.84L1.97738 9.84V9.84Z" stroke="white" stroke-width="2.17" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 11V6C14 4.93913 13.5786 3.92172 12.8284 3.17157C12.0783 2.42143 11.0609 2 10 2C8.93913 2 7.92172 2.42143 7.17157 3.17157C6.42143 3.92172 6 4.93913 6 6V11" stroke="white" stroke-width="2.17" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
