import React from 'react'
import { HeaderSocials } from './HeaderSocials'
import './header.css'
import {RxDoubleArrowDown} from 'react-icons/rx'

export const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <div className="header__container-right">
          <h5>Hello I'm</h5>
          <h1>Grace</h1>
          <h5 className='text-light'>A Frontend Developer</h5>
          <div className="CTA">
            <a href="#portfolio" className="btn">My works</a>
            <a href="#contact" className="btn btn-primary">Let's talk</a>
          </div>
        <HeaderSocials/>
        </div>

        <div >
        <svg width="342" height="225" viewBox="0 0 342 225" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="coding 1" clip-path="url(#clip0_2_4)">
          <g id="plant">
          <path id="Vector" d="M52.1707 192.253C44.5763 199.028 42.424 210.949 42.424 210.949C42.424 210.949 52.5846 211.885 60.1791 205.11C67.7735 198.335 69.9258 186.414 69.9258 186.414C69.9258 186.414 59.7652 185.478 52.1707 192.253Z" fill="#F1F1F1"/>
          <path id="Vector_2" d="M55.3343 195.434C51.6843 205.895 42.5431 211.286 42.5431 211.286C42.5431 211.286 39.3196 199.716 42.9695 189.255C46.6195 178.794 55.7607 173.403 55.7607 173.403C55.7607 173.403 58.9842 184.973 55.3343 195.434Z" fill="#F1F1F1"/>
          </g>
          <g id="steam">
          <path id="Vector_3" d="M273.833 165.193C273.026 158.688 272.813 152.097 273.197 145.537L273.833 134.679C270.33 143.022 271.121 154.002 273.833 165.193Z" fill="#CACACA"/>
          <path id="Vector_4" d="M276.565 167.009C276.176 163.127 276.074 159.212 276.259 155.309L276.565 148.846C274.879 153.812 275.26 160.348 276.565 167.009Z" fill="#CACACA"/>
          </g>
          <path id="Vector_5" d="M288.707 175.002V178.634C288.706 178.923 288.609 179.199 288.439 179.403C288.268 179.607 288.038 179.723 287.796 179.724H286.279C286.239 179.724 286.199 179.733 286.162 179.751C286.126 179.77 286.092 179.796 286.064 179.83C286.036 179.864 286.013 179.904 285.998 179.948C285.983 179.992 285.975 180.04 285.975 180.087V209.874C285.974 210.163 285.878 210.439 285.707 210.643C285.537 210.847 285.306 210.963 285.065 210.964H266.55C266.308 210.964 266.077 210.849 265.906 210.645C265.735 210.44 265.639 210.163 265.639 209.874V180.087C265.639 179.991 265.607 179.899 265.55 179.831C265.493 179.763 265.416 179.724 265.335 179.724H263.514C263.273 179.724 263.041 179.609 262.871 179.405C262.7 179.2 262.604 178.923 262.604 178.634V175.002C262.604 174.859 262.627 174.717 262.673 174.584C262.718 174.452 262.785 174.332 262.87 174.231C262.955 174.129 263.055 174.049 263.166 173.994C263.276 173.94 263.395 173.912 263.514 173.912H287.796C288.038 173.913 288.269 174.028 288.44 174.232C288.61 174.436 288.706 174.713 288.707 175.002Z" fill="#F2F2F2"/>
          <path id="Vector_6" d="M286.003 180.487H265.666V181.577H286.003V180.487Z" fill="#E6E6E6"/>
          <path id="Vector_7" d="M285.975 196.523C279.17 199.893 272.291 199.93 265.335 196.523V188.845C272.032 186.154 279.279 186.154 285.975 188.845V196.523Z" fill="#E6E6E6"/>
          <g id="body">
          <path id="Vector_8" d="M231.146 130.868C230.2 124.058 229.224 117.117 226.579 110.982C224.841 106.964 222.082 103.134 218.363 102.34C217.63 102.262 216.91 102.062 216.223 101.747C215.133 101.119 200.488 91.1131 198.16 89.3704C196.162 87.8743 193.007 85.1043 191.416 85.1043C189.815 85.0622 183.679 86.7715 159.726 84.5307C159.726 84.5307 153.146 87.6346 148.055 91.3985C147.977 91.3376 123.194 107.265 122.263 107.223C120.5 107.134 118.861 108.485 117.85 110.187C116.839 111.888 116.365 113.995 115.869 116.031C121.282 130.458 126.235 144.904 131.648 159.331C131.902 159.874 132.036 160.485 132.04 161.108C131.931 161.754 131.701 162.361 131.366 162.885C128.711 167.988 128.796 174.408 129.086 180.406C129.376 186.405 129.735 192.741 127.495 198.117C126.886 199.594 126.093 200.945 125.514 202.421C124.157 205.764 123.667 216.457 124.459 220.049L223.763 223.454C221.628 216.43 231.146 130.868 231.146 130.868Z" fill="#6C63FF"/>
          <path id="Path 1421" d="M107.285 159.97C107.087 161.686 107.067 163.424 107.226 165.145L108.649 189.608C108.783 191.913 108.914 194.213 109.095 196.513C109.436 200.976 109.947 205.404 110.58 209.826C110.594 210.453 110.816 211.049 111.196 211.481C111.577 211.913 112.086 212.147 112.61 212.131C118.875 213.718 125.349 213.654 131.743 213.222C141.5 212.57 166.462 211.337 167.987 208.966C169.512 206.595 168.624 202.76 166.635 200.843C164.646 198.926 131.705 194.252 131.705 194.252C132.027 191.199 132.998 188.324 133.919 185.426C135.573 180.286 137.119 174.976 137.148 169.47C137.178 163.963 135.444 158.173 131.675 155.018C128.575 152.428 124.583 151.948 120.804 152.055C118.056 152.149 113.306 151.361 110.795 152.647C108.808 153.695 107.656 157.642 107.285 159.97Z" fill="#FBBEBE"/>
          <path id="Path 1430" d="M115.582 116.47C115.1 117.075 114.726 117.791 114.483 118.575C110.48 129.373 108.115 140.938 107.5 152.728C107.511 153.303 107.4 153.872 107.178 154.382C106.959 154.721 106.715 155.037 106.45 155.324C106.218 155.653 106.043 156.032 105.934 156.442C105.825 156.851 105.785 157.283 105.815 157.711C105.846 158.139 105.946 158.556 106.111 158.937C106.276 159.319 106.502 159.658 106.777 159.935C106.822 159.981 106.868 160.024 106.915 160.066C107.733 158.226 109.689 157.624 111.428 157.464C119.753 156.676 127.885 161.311 136.236 160.962C135.647 158.525 134.799 156.184 134.319 153.719C132.194 142.771 137.493 130.851 134.244 120.306C133.595 118.196 132.511 116.121 130.802 115.197C130.095 114.855 129.355 114.621 128.599 114.498C126.489 114.042 122.288 112.092 120.248 112.874C119.495 113.165 119.198 114.012 118.574 114.525C117.626 115.249 116.368 115.516 115.582 116.47Z" fill="#6C63FF"/>
          <path id="Path 1421_2" d="M231.205 152.647C228.694 151.361 223.944 152.149 221.195 152.055C217.417 151.948 213.425 152.428 210.325 155.018C206.555 158.173 204.822 163.963 204.852 169.47C204.881 174.976 206.427 180.286 208.081 185.426C209.002 188.324 209.973 191.199 210.295 194.252C210.295 194.252 177.353 198.926 175.365 200.843C173.376 202.76 172.488 206.595 174.013 208.966C175.538 211.337 223.125 213.718 229.39 212.131C229.914 212.147 230.423 211.913 230.804 211.481C231.184 211.049 231.406 210.453 231.42 209.826C232.053 205.404 232.564 200.976 232.905 196.513C233.086 194.213 233.217 191.913 233.351 189.608L234.774 165.145C234.933 163.424 234.913 161.686 234.715 159.97C234.344 157.642 233.192 153.695 231.205 152.647Z" fill="#FBBEBE"/>
          <path id="Path 1430_2" d="M223.426 114.525C222.802 114.012 222.505 113.165 221.752 112.875C219.712 112.092 215.511 114.042 213.401 114.499C212.645 114.621 211.905 114.855 211.198 115.197C209.489 116.121 208.405 118.196 207.756 120.306C204.507 130.851 209.806 142.771 207.681 153.719C207.201 156.184 206.353 158.525 205.764 160.962C214.115 161.311 222.247 156.676 230.572 157.464C232.311 157.624 234.267 158.226 235.085 160.066C235.132 160.024 235.178 159.981 235.223 159.935C235.498 159.658 235.724 159.319 235.889 158.937C236.054 158.556 236.154 158.139 236.185 157.711C236.215 157.283 236.175 156.852 236.066 156.442C235.957 156.033 235.782 155.653 235.55 155.324C235.285 155.037 235.041 154.721 234.822 154.382C234.6 153.872 234.489 153.303 234.5 152.728C233.885 140.938 231.52 129.373 227.517 118.575C227.274 117.791 226.9 117.075 226.418 116.47C225.632 115.516 224.374 115.249 223.426 114.525Z" fill="#6C63FF"/>
          </g>
          <path id="Vector_9" d="M163.841 213.3C167.941 213.3 171.265 209.322 171.265 204.415C171.265 199.508 167.941 195.53 163.841 195.53C159.741 195.53 156.417 199.508 156.417 204.415C156.417 209.322 159.741 213.3 163.841 213.3Z" fill="#FBBEBE"/>
          <path id="Vector_10" d="M180.28 213.3C184.38 213.3 187.704 209.322 187.704 204.415C187.704 199.508 184.38 195.53 180.28 195.53C176.18 195.53 172.856 199.508 172.856 204.415C172.856 209.322 176.18 213.3 180.28 213.3Z" fill="#FBBEBE"/>
          <path id="Vector_11" d="M226.106 224.436H124.112C122.922 224.434 121.78 223.867 120.938 222.859C120.096 221.852 119.622 220.485 119.621 219.06V145.008C119.622 143.582 120.096 142.216 120.938 141.209C121.78 140.201 122.922 139.634 124.112 139.632H226.106C227.297 139.634 228.438 140.201 229.28 141.209C230.122 142.216 230.596 143.582 230.597 145.008V219.06C230.596 220.485 230.122 221.852 229.28 222.859C228.438 223.867 227.297 224.434 226.106 224.436Z" fill="#3F3D56"/>
          <path id="Ellipse 263" d="M174.862 185.59C176.503 185.59 177.834 183.998 177.834 182.034C177.834 180.07 176.503 178.477 174.862 178.477C173.221 178.477 171.89 180.07 171.89 182.034C171.89 183.998 173.221 185.59 174.862 185.59Z" fill="white"/>
          <path id="Vector_12" d="M342 209.499H0V222.076H20.2289V225H321.779V222.076H342V209.499Z" fill="#F1F1F1"/>
          <g id="head">
          <path id="Ellipse 276" d="M171.988 79.1351C187.179 79.1351 199.494 64.3968 199.494 46.2162C199.494 28.0355 187.179 13.2973 171.988 13.2973C156.796 13.2973 144.482 28.0355 144.482 46.2162C144.482 64.3968 156.796 79.1351 171.988 79.1351Z" fill="#FEB8B8"/>
          <path id="Path 1461" d="M197.679 17.8165C193.566 9.82446 187.129 3.93546 179.606 1.28308L176.229 4.2322V0.402848C174.423 0.0719107 172.594 -0.0555758 170.767 0.0220651L167.854 3.17682V0.284163C163.541 0.925664 159.385 2.62982 155.649 5.28918C151.913 7.94854 148.679 11.5054 146.149 15.7355C139.822 26.6512 138.754 41.8372 144.977 52.8404C146.685 46.5576 148.758 40.6625 150.467 34.3803C151.809 34.5993 153.17 34.6072 154.514 34.4038L156.593 28.6001L157.173 34.1582C163.615 33.4867 173.17 32.0119 179.276 30.6607L178.682 26.3967L182.235 29.9398C184.106 29.4245 185.217 28.9568 185.125 28.5995C189.667 37.3625 195.226 42.9593 199.767 51.7222C201.492 39.366 203.477 29.0919 197.679 17.8165Z" fill="#2F2E41"/>
          <path id="Vector_13" d="M146.694 58.4857C142.274 58.4857 138.691 53.8494 138.691 48.1303V42.9526C138.691 37.2335 142.274 32.5973 146.694 32.5973L146.694 58.4857Z" fill="#6C63FF"/>
          <path id="Vector_14" d="M197.772 32.5973C202.191 32.5973 205.774 37.2336 205.774 42.9526V48.1303C205.774 53.8494 202.191 58.4857 197.772 58.4857V32.5973Z" fill="#6C63FF"/>
          <circle id="Ellipse 277" cx="158.5" cy="45.5" r="5.5" fill="#D9D9D9"/>
          <path id="Vector_15" d="M201.965 43.7663H200.696C200.696 22.9293 187.595 5.97715 171.492 5.97715C155.39 5.97715 142.289 22.9293 142.289 43.7663H141.019C141.019 22.0233 154.689 4.33416 171.492 4.33416C188.295 4.33417 201.965 22.0233 201.965 43.7663Z" fill="#6C63FF"/>
          <ellipse id="Ellipse 281" cx="172.5" cy="64" rx="10.5" ry="2" fill="#C96565"/>
          <circle id="Ellipse 278" cx="183.5" cy="43.5" r="5.5" fill="#D9D9D9"/>
          </g>
          <g id="eyes">
          <circle id="Ellipse 279" cx="159.5" cy="49.5" r="1.5" fill="#131111"/>
          <circle id="Ellipse 280" cx="184.5" cy="47.5" r="1.5" fill="#131111"/>
          </g>
          </g>
          <defs>
          <clipPath id="clip0_2_4">
          <rect width="342" height="225" fill="white"/>
          </clipPath>
          </defs>
          </svg>

        </div>

        <a href="#contact" className='scroll__down'><RxDoubleArrowDown/></a>
        <div className="blob"></div>
      </div>
    </header>
  )
}
