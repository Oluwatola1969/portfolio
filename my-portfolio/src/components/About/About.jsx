import React from 'react'
// import AboutMe from '../../Assets/img-timnik.jpg'
import './about.css'
import cv from '../../Assets/Oluwatola_Senbadejo_CV.pdf'
import {DiCss3}from 'react-icons/di'
import {BsBootstrapFill}from 'react-icons/bs'
import {TbBrandNextjs}from 'react-icons/tb'
import {FaReact}from 'react-icons/fa'
import {AiFillHtml5}from 'react-icons/ai'
import {BsPatchCheckFill}from 'react-icons/bs'
import {FaNpm}from 'react-icons/fa'
import {BsGithub}from 'react-icons/bs'

export const About = () => {
  return (
    <section id='about' className='about__section'>
      <h5>Who I am</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__img">
          {/* <img src={AboutMe} alt="about-me" /> */}
          <svg width="452" height="380" viewBox="0 0 452 380" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="about__img">
<g id="coding 1" clip-path="url(#clip0_17_3)">
<path id="Vector" d="M225.148 115.863C245.878 121.877 272.937 128.044 277.367 141.304C281.64 154.565 263.284 174.918 251.891 194.037C240.498 213.156 236.067 231.042 224.515 249.391C212.964 267.893 194.292 286.858 177.202 284.854C159.954 282.695 144.288 259.567 123.875 243.994C103.304 228.421 77.9857 220.403 65.01 203.442C52.0344 186.328 51.2432 160.115 65.1683 144.697C79.0934 129.432 107.576 124.806 128.306 118.947C149.193 113.088 162.327 105.841 176.252 105.07C190.019 104.299 204.419 110.004 225.148 115.863Z" fill="#1F1F38"/>
<g id="plant">
<path id="Vector_2" d="M109.171 291.253C101.576 298.028 99.424 309.949 99.424 309.949C99.424 309.949 109.585 310.885 117.179 304.11C124.773 297.335 126.926 285.414 126.926 285.414C126.926 285.414 116.765 284.478 109.171 291.253Z" fill="#F1F1F1"/>
<path id="Vector_3" d="M112.334 294.434C108.684 304.895 99.5431 310.286 99.5431 310.286C99.5431 310.286 96.3196 298.716 99.9695 288.255C103.62 277.794 112.761 272.403 112.761 272.403C112.761 272.403 115.984 283.973 112.334 294.434Z" fill="#F1F1F1"/>
</g>
<g id="steam">
<path id="Vector_4" d="M330.833 264.193C330.026 257.688 329.813 251.097 330.197 244.537L330.833 233.679C327.33 242.022 328.121 253.002 330.833 264.193Z" fill="#6C63FF"/>
<path id="Vector_5" d="M333.565 266.009C333.176 262.127 333.074 258.212 333.259 254.309L333.565 247.846C331.879 252.812 332.26 259.348 333.565 266.009Z" fill="#6C63FF"/>
</g>
<path id="Vector_6" d="M345.707 274.002V277.634C345.706 277.923 345.609 278.199 345.439 278.403C345.268 278.607 345.038 278.723 344.796 278.724H343.279C343.239 278.724 343.199 278.733 343.162 278.751C343.126 278.77 343.092 278.796 343.064 278.83C343.036 278.864 343.013 278.904 342.998 278.948C342.983 278.992 342.975 279.04 342.975 279.087V308.874C342.974 309.163 342.878 309.439 342.707 309.643C342.537 309.847 342.306 309.963 342.065 309.964H323.55C323.308 309.964 323.077 309.849 322.906 309.645C322.735 309.44 322.639 309.163 322.639 308.874V279.087C322.639 278.991 322.607 278.899 322.55 278.831C322.493 278.763 322.416 278.724 322.335 278.724H320.514C320.273 278.724 320.041 278.609 319.871 278.405C319.7 278.2 319.604 277.923 319.604 277.634V274.002C319.604 273.859 319.627 273.717 319.673 273.584C319.718 273.452 319.785 273.332 319.87 273.231C319.955 273.129 320.055 273.049 320.166 272.994C320.276 272.94 320.395 272.912 320.514 272.912H344.796C345.038 272.913 345.269 273.028 345.44 273.232C345.61 273.436 345.706 273.713 345.707 274.002Z" fill="#F2F2F2"/>
<path id="Vector_7" d="M343.003 279.487H322.666V280.577H343.003V279.487Z" fill="#E6E6E6"/>
<path id="Vector_8" d="M342.975 295.523C336.17 298.893 329.291 298.93 322.335 295.523V287.845C329.032 285.154 336.279 285.154 342.975 287.845V295.523Z" fill="#E6E6E6"/>
<g id="body">
<path id="Vector_9" d="M288.146 229.868C287.2 223.058 286.224 216.117 283.579 209.982C281.841 205.964 279.082 202.134 275.363 201.34C274.63 201.262 273.91 201.062 273.223 200.747C272.133 200.119 257.488 190.113 255.16 188.37C253.162 186.874 250.007 184.104 248.416 184.104C246.815 184.062 240.679 185.771 216.726 183.531C216.726 183.531 210.146 186.635 205.055 190.398C204.977 190.338 180.194 206.265 179.263 206.223C177.5 206.134 175.861 207.485 174.85 209.187C173.839 210.888 173.365 212.995 172.869 215.031C178.282 229.458 183.235 243.904 188.648 258.331C188.902 258.874 189.036 259.485 189.04 260.108C188.931 260.754 188.701 261.361 188.366 261.885C185.711 266.988 185.796 273.408 186.086 279.406C186.376 285.405 186.735 291.741 184.495 297.117C183.886 298.594 183.093 299.945 182.514 301.421C181.157 304.764 180.667 315.457 181.459 319.049L280.763 322.454C278.628 315.43 288.146 229.868 288.146 229.868Z" fill="#6C63FF"/>
<path id="Path 1421" d="M164.285 258.97C164.087 260.686 164.067 262.424 164.226 264.145L165.649 288.608C165.783 290.913 165.914 293.213 166.095 295.513C166.436 299.976 166.947 304.404 167.58 308.826C167.594 309.453 167.816 310.049 168.196 310.481C168.577 310.913 169.086 311.147 169.61 311.131C175.875 312.718 182.349 312.654 188.743 312.222C198.5 311.57 223.462 310.337 224.987 307.966C226.512 305.595 225.624 301.76 223.635 299.843C221.646 297.926 188.705 293.252 188.705 293.252C189.027 290.199 189.998 287.324 190.919 284.426C192.573 279.286 194.119 273.976 194.148 268.47C194.178 262.963 192.444 257.173 188.675 254.018C185.575 251.428 181.583 250.948 177.804 251.055C175.056 251.149 170.306 250.361 167.795 251.647C165.808 252.695 164.656 256.642 164.285 258.97Z" fill="#FBBEBE"/>
<path id="Path 1430" d="M172.582 215.47C172.1 216.075 171.726 216.791 171.483 217.575C167.48 228.373 165.115 239.938 164.5 251.728C164.511 252.303 164.4 252.872 164.178 253.382C163.959 253.721 163.715 254.037 163.45 254.324C163.218 254.653 163.043 255.032 162.934 255.442C162.825 255.851 162.785 256.283 162.815 256.711C162.846 257.139 162.946 257.556 163.111 257.937C163.276 258.319 163.502 258.658 163.777 258.935C163.822 258.981 163.868 259.024 163.915 259.066C164.733 257.226 166.689 256.624 168.428 256.464C176.753 255.676 184.885 260.311 193.236 259.962C192.647 257.525 191.799 255.184 191.319 252.719C189.194 241.771 194.493 229.851 191.244 219.306C190.595 217.196 189.511 215.121 187.802 214.197C187.095 213.855 186.355 213.621 185.599 213.498C183.489 213.042 179.288 211.092 177.248 211.874C176.495 212.165 176.198 213.012 175.574 213.525C174.626 214.249 173.368 214.516 172.582 215.47Z" fill="#6C63FF"/>
<path id="Path 1421_2" d="M288.205 251.647C285.694 250.361 280.944 251.149 278.195 251.055C274.417 250.948 270.425 251.428 267.325 254.018C263.555 257.173 261.822 262.963 261.852 268.47C261.881 273.976 263.427 279.286 265.081 284.426C266.002 287.324 266.973 290.199 267.295 293.252C267.295 293.252 234.353 297.926 232.365 299.843C230.376 301.76 229.488 305.595 231.013 307.966C232.538 310.337 280.125 312.718 286.39 311.131C286.914 311.147 287.423 310.913 287.804 310.481C288.184 310.049 288.406 309.453 288.42 308.826C289.053 304.404 289.564 299.976 289.905 295.513C290.086 293.213 290.217 290.913 290.351 288.608L291.774 264.145C291.933 262.424 291.913 260.686 291.715 258.97C291.344 256.642 290.192 252.695 288.205 251.647Z" fill="#FBBEBE"/>
<path id="Path 1430_2" d="M280.426 213.525C279.802 213.012 279.505 212.165 278.752 211.875C276.712 211.092 272.511 213.042 270.401 213.499C269.645 213.621 268.905 213.855 268.198 214.197C266.489 215.121 265.405 217.196 264.756 219.306C261.507 229.851 266.806 241.771 264.681 252.719C264.201 255.184 263.353 257.525 262.764 259.962C271.115 260.311 279.247 255.676 287.572 256.464C289.311 256.624 291.267 257.226 292.085 259.066C292.132 259.024 292.178 258.981 292.223 258.935C292.498 258.658 292.724 258.319 292.889 257.937C293.054 257.556 293.154 257.139 293.185 256.711C293.215 256.283 293.175 255.852 293.066 255.442C292.957 255.033 292.782 254.653 292.55 254.324C292.285 254.037 292.041 253.721 291.822 253.382C291.6 252.872 291.489 252.303 291.5 251.728C290.885 239.938 288.52 228.373 284.517 217.575C284.274 216.791 283.9 216.075 283.418 215.47C282.632 214.516 281.374 214.249 280.426 213.525Z" fill="#6C63FF"/>
</g>
<path id="Vector_10" d="M220.841 312.3C224.941 312.3 228.265 308.322 228.265 303.415C228.265 298.508 224.941 294.53 220.841 294.53C216.741 294.53 213.417 298.508 213.417 303.415C213.417 308.322 216.741 312.3 220.841 312.3Z" fill="#FBBEBE"/>
<path id="Vector_11" d="M237.28 312.3C241.38 312.3 244.704 308.322 244.704 303.415C244.704 298.508 241.38 294.53 237.28 294.53C233.18 294.53 229.856 298.508 229.856 303.415C229.856 308.322 233.18 312.3 237.28 312.3Z" fill="#FBBEBE"/>
<path id="Vector_12" d="M283.106 323.436H181.112C179.922 323.434 178.78 322.867 177.938 321.859C177.096 320.852 176.622 319.485 176.621 318.06V244.008C176.622 242.582 177.096 241.216 177.938 240.209C178.78 239.201 179.922 238.634 181.112 238.632H283.106C284.297 238.634 285.438 239.201 286.28 240.209C287.122 241.216 287.596 242.582 287.597 244.008V318.06C287.596 319.485 287.122 320.852 286.28 321.859C285.438 322.867 284.297 323.434 283.106 323.436Z" fill="#3F3D56"/>
<path id="Ellipse 263" d="M231.862 284.59C233.503 284.59 234.834 282.998 234.834 281.034C234.834 279.07 233.503 277.477 231.862 277.477C230.221 277.477 228.89 279.07 228.89 281.034C228.89 282.998 230.221 284.59 231.862 284.59Z" fill="white"/>
<path id="Vector_13" d="M399 308.499H57V321.076H77.2289V324H378.779V321.076H399V308.499Z" fill="#F1F1F1"/>
<g id="head">
<path id="Ellipse 276" d="M228.988 178.135C244.179 178.135 256.494 163.397 256.494 145.216C256.494 127.036 244.179 112.297 228.988 112.297C213.796 112.297 201.482 127.036 201.482 145.216C201.482 163.397 213.796 178.135 228.988 178.135Z" fill="#FEB8B8"/>
<path id="Path 1461" d="M254.679 116.816C250.566 108.824 244.129 102.935 236.606 100.283L233.229 103.232V99.4028C231.423 99.0719 229.594 98.9444 227.767 99.0221L224.854 102.177V99.2842C220.541 99.9257 216.385 101.63 212.649 104.289C208.913 106.949 205.679 110.505 203.149 114.736C196.822 125.651 195.754 140.837 201.977 151.84C203.685 145.558 205.758 139.663 207.467 133.38C208.809 133.599 210.17 133.607 211.514 133.404L213.593 127.6L214.173 133.158C220.615 132.487 230.17 131.012 236.276 129.661L235.682 125.397L239.235 128.94C241.106 128.425 242.217 127.957 242.125 127.599C246.667 136.362 252.226 141.959 256.767 150.722C258.492 138.366 260.477 128.092 254.679 116.816Z" fill="#2F2E41"/>
<path id="Vector_14" d="M203.694 157.486C199.274 157.486 195.691 152.849 195.691 147.13V141.953C195.691 136.234 199.274 131.597 203.694 131.597L203.694 157.486Z" fill="#6C63FF"/>
<path id="Vector_15" d="M254.772 131.597C259.191 131.597 262.774 136.234 262.774 141.953V147.13C262.774 152.849 259.191 157.486 254.772 157.486V131.597Z" fill="#6C63FF"/>
<circle id="Ellipse 277" cx="215.5" cy="144.5" r="5.5" fill="#D9D9D9"/>
<path id="Vector_16" d="M258.965 142.766H257.696C257.696 121.929 244.595 104.977 228.492 104.977C212.39 104.977 199.289 121.929 199.289 142.766H198.019C198.019 121.023 211.689 103.334 228.492 103.334C245.295 103.334 258.965 121.023 258.965 142.766Z" fill="#6C63FF"/>
<ellipse id="Ellipse 281" cx="229.5" cy="163" rx="10.5" ry="2" fill="#C96565"/>
<circle id="Ellipse 278" cx="240.5" cy="142.5" r="5.5" fill="#D9D9D9"/>
</g>
<g id="eyes">
<circle id="Ellipse 279" cx="215.5" cy="145.5" r="1.5" fill="#131111"/>
<circle id="Ellipse 280" cx="240.5" cy="143.5" r="1.5" fill="#131111"/>
<circle id="Ellipse 282" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 214 146)" fill="#D9D9D9"/>
<circle id="Ellipse 283" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 239 144)" fill="#D9D9D9"/>
</g>
</g>
<g id="frame">
<g id="left-s">
<line id="Line 9" x1="37.5" y1="6.55671e-08" x2="37.5" y2="336" stroke="#6C63FF" stroke-width="3"/>
<line id="Line 8" y1="342.5" x2="406" y2="342.5" stroke="#6C63FF" stroke-width="3"/>
<line id="Line 11" x1="46" y1="34.5" x2="452" y2="34.5" stroke="#6C63FF" stroke-width="3"/>
<line id="Line 7" x1="414.5" y1="44" x2="414.5" y2="380" stroke="#6C63FF" stroke-width="3"/>
</g>
<g id="down-s">
<line id="Line 10" x1="44.5001" y1="6.55671e-08" x2="44.5" y2="336" stroke="white" stroke-width="3"/>
<line id="Line 2" y1="334.5" x2="406" y2="334.5" stroke="white" stroke-width="3"/>
<line id="Line 12" x1="46" y1="42.5" x2="452" y2="42.5" stroke="white" stroke-width="3"/>
<line id="Line 6" x1="407.5" y1="44" x2="407.5" y2="380" stroke="white" stroke-width="3"/>
</g>
<g id="up-s">
</g>
<g id="right-s">
</g>
</g>
</g>
<defs>
<clipPath id="clip0_17_3">
<rect width="342" height="225" fill="white" transform="translate(57 99)"/>
</clipPath>
</defs>
</svg>

        </div>

        <div className="about__content">
              <h2>Frontend developer </h2>
              <div className="about__skills">
                <div className="about__skills-content">
                  <BsPatchCheckFill className='skill-bullet'/> 
                  <span>Experience working with HTML, CSS and JavaScript to create reponsive, user-friendly web pages</span>
                </div>
                 <div className="about__skills-content">
                  <BsPatchCheckFill className='skill-bullet'/> 
                  <span> Worked with frameworks like React and NextJs to build complex web applications that require a dynamic and interactive user experience.</span>
                </div>
                <div className="about__skills-content">
                  <BsPatchCheckFill className='skill-bullet'/> 
                  <span> Familiar with Git and version control to manage code changes, collaborate with other developers, and maintain code quality.</span>
                </div>
              </div>
              <div className="skill__icons">
                <div className="skill__desc"><AiFillHtml5 className='skill__icon'/> <small>HTML</small></div>
                <div className="skill__desc"><DiCss3 className='skill__icon'/> <small>CSS-3</small></div>
                <div className="skill__desc"><BsBootstrapFill className='skill__icon'/><small>Bootstrap</small></div>
                <div className="skill__desc"><FaReact className='skill__icon'/><small>ReactJs</small></div>
                <div className="skill__desc"><TbBrandNextjs className='skill__icon'/><small>NextJs</small></div>
                <div className="skill__desc"><FaNpm className='skill__icon'/><small>npm</small></div>
                <div className="skill__desc"><BsGithub className='skill__icon'/><small>github</small></div>
              </div>
              <a href={cv} className="btn about__btn" download>Download CV</a>
        </div>
      </div>
    </section>
  )
}
