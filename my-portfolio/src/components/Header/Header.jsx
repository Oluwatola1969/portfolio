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
          <h1>Oluwatola</h1>
          <h5 className='text-light'>A Frontend Software Developer</h5>
          <div className="CTA">
            <a href="#portfolio" className="btn">My works</a>
            <a href="#contact" className="btn btn-primary">Let's talk</a>
          </div>
        <HeaderSocials/>
        </div>

        <div className='header__img'>
        <svg width="600" height="600" viewBox="0 0 941 1104" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="header__img">
<g id="header_img">
<g id="blob">
<path id="Vector" d="M621.647 349.968C684.599 374.808 771.904 389.712 791.203 437.184C810.961 484.104 762.714 563.592 741.577 656.88C720.44 750.168 725.954 857.808 686.897 886.512C647.839 915.216 564.67 866.088 482.879 863.88C400.628 862.224 319.756 907.488 254.507 888.72C188.798 870.504 138.254 788.256 111.143 694.968C83.573 601.68 79.4375 497.352 121.252 432.768C163.067 367.632 250.831 341.688 318.378 317.952C385.924 294.768 433.712 274.344 476.905 282.072C520.098 289.248 558.696 324.576 621.647 349.968Z" fill="#0063e5"/>
</g>
</g>
<g id="hello 1" clip-path="url(#clip0_7_96)">
<line id="Line 2" x1="709.499" y1="535.962" x2="710.499" y2="548.962" stroke="#FFB6B6"/>
<line id="Line 1" x1="694.5" y1="538" x2="694.5" y2="550" stroke="#FFB6B6"/>
<path id="Vector_2" d="M807.316 646.325H282.215C279.985 646.325 277.847 647.295 276.271 649.02C274.694 650.746 273.808 653.087 273.808 655.527C273.808 657.968 274.694 660.309 276.271 662.035C277.847 663.76 279.985 664.73 282.215 664.73H297.089V884.88C297.089 887.321 297.974 889.661 299.551 891.387C301.128 893.113 303.266 894.082 305.496 894.082C307.725 894.082 309.863 893.113 311.44 891.387C313.017 889.661 313.902 887.321 313.902 884.88L314.03 664.73H735.477L774.336 884.88C774.336 887.321 775.222 889.661 776.798 891.387C778.375 893.113 780.513 894.082 782.743 894.082C784.972 894.082 787.111 893.113 788.687 891.387C790.264 889.661 791.149 887.321 791.149 884.88L793.595 664.73H807.316C809.546 664.73 811.684 663.76 813.261 662.035C814.837 660.309 815.723 657.968 815.723 655.527C815.723 653.087 814.837 650.746 813.261 649.02C811.684 647.295 809.546 646.325 807.316 646.325Z" fill="#CCCCCC"/>
<path id="Vector_3" d="M555.123 500.6H459.275C459.203 500.6 459.133 500.569 459.082 500.513C459.03 500.458 459.001 500.382 459 500.303C458.999 500.223 459.027 500.147 459.078 500.09C459.129 500.033 459.198 500.001 459.27 500H555.123C555.195 500.001 555.264 500.033 555.315 500.089C555.365 500.145 555.394 500.221 555.394 500.3C555.394 500.379 555.365 500.455 555.315 500.511C555.264 500.567 555.195 500.599 555.123 500.6Z" fill="#CCCCCC"/>
<path id="Vector_4" d="M552.123 499.6H456.275C456.203 499.6 456.133 499.569 456.082 499.513C456.03 499.458 456.001 499.382 456 499.303C455.999 499.223 456.027 499.147 456.078 499.09C456.129 499.033 456.198 499.001 456.27 499H552.123C552.195 499.001 552.264 499.033 552.315 499.089C552.365 499.145 552.394 499.221 552.394 499.3C552.394 499.379 552.365 499.455 552.315 499.511C552.264 499.567 552.195 499.599 552.123 499.6Z" fill="#CCCCCC"/>
<path id="Vector_5" d="M460.179 784.222V750.244C460.179 748.742 459.634 747.302 458.664 746.24C457.693 745.178 456.378 744.581 455.006 744.581H337.31C335.938 744.581 334.623 745.178 333.652 746.24C332.682 747.302 332.137 748.742 332.137 750.244V784.222H460.179Z" fill="#CCCCCC"/>
<path id="Vector_6" d="M460.179 796.964H332.137V840.852H460.179V796.964Z" fill="#CCCCCC"/>
<path id="Vector_7" d="M332.137 853.594V887.572C332.137 889.074 332.682 890.515 333.652 891.577C334.623 892.639 335.938 893.235 337.31 893.235H455.006C456.378 893.235 457.693 892.639 458.664 891.577C459.634 890.515 460.179 889.074 460.179 887.572V853.594H332.137Z" fill="#CCCCCC"/>
<path id="Vector_8" d="M395.511 770.065C397.654 770.065 399.391 768.163 399.391 765.817C399.391 763.472 397.654 761.57 395.511 761.57C393.368 761.57 391.631 763.472 391.631 765.817C391.631 768.163 393.368 770.065 395.511 770.065Z" fill="white"/>
<path id="Vector_9" d="M395.511 826.695C397.654 826.695 399.391 824.793 399.391 822.448C399.391 820.102 397.654 818.2 395.511 818.2C393.368 818.2 391.631 820.102 391.631 822.448C391.631 824.793 393.368 826.695 395.511 826.695Z" fill="white"/>
<path id="Vector_10" d="M395.719 882.126C397.862 882.126 399.599 880.224 399.599 877.879C399.599 875.533 397.862 873.631 395.719 873.631C393.576 873.631 391.839 875.533 391.839 877.879C391.839 880.224 393.576 882.126 395.719 882.126Z" fill="white"/>
<path id="Vector_11" d="M445.662 705.839V744.809H356.47C351.751 744.985 347.161 743.103 343.71 739.576C340.258 736.05 338.227 731.167 338.062 726.002C337.898 720.837 339.614 715.811 342.833 712.03C346.053 708.25 350.511 706.023 355.23 705.839C355.643 705.823 356.056 705.823 356.47 705.839H445.662Z" fill="#F2F2F2"/>
<path id="Vector_12" d="M447.853 744.509C447.853 744.906 447.709 745.288 447.452 745.569C447.195 745.85 446.847 746.008 446.484 746.008H354.881C349.907 746.009 345.136 743.848 341.618 740C338.099 736.151 336.121 730.931 336.118 725.486C336.115 720.041 338.087 714.818 341.602 710.965C345.116 707.112 349.885 704.945 354.859 704.94H446.484C446.664 704.939 446.842 704.978 447.009 705.053C447.176 705.128 447.327 705.238 447.454 705.377C447.582 705.517 447.683 705.682 447.752 705.864C447.821 706.046 447.857 706.241 447.857 706.439C447.857 706.636 447.821 706.831 447.752 707.013C447.683 707.195 447.582 707.361 447.454 707.5C447.327 707.639 447.176 707.749 447.009 707.824C446.842 707.9 446.664 707.938 446.484 707.937H354.881C350.636 707.944 346.567 709.794 343.567 713.082C340.567 716.37 338.882 720.827 338.882 725.474C338.882 730.121 340.567 734.578 343.567 737.866C346.567 741.154 350.636 743.004 354.881 743.01H446.484C446.847 743.01 447.195 743.168 447.452 743.449C447.709 743.73 447.853 744.112 447.853 744.509Z" fill="#3F3D56"/>
<path id="Vector_13" d="M445.662 714.832H349.815C349.742 714.832 349.673 714.801 349.621 714.746C349.57 714.69 349.54 714.614 349.54 714.535C349.539 714.456 349.567 714.379 349.618 714.323C349.668 714.266 349.737 714.234 349.81 714.233H445.662C445.734 714.233 445.803 714.265 445.854 714.321C445.905 714.378 445.933 714.453 445.933 714.532C445.933 714.611 445.905 714.687 445.854 714.743C445.803 714.799 445.734 714.831 445.662 714.832Z" fill="#CCCCCC"/>
<path id="Vector_14" d="M445.662 722.027H349.815C349.742 722.027 349.673 721.996 349.621 721.94C349.57 721.885 349.54 721.809 349.54 721.73C349.539 721.65 349.567 721.574 349.618 721.517C349.668 721.461 349.737 721.428 349.81 721.427H445.662C445.734 721.428 445.803 721.46 445.854 721.516C445.905 721.572 445.933 721.648 445.933 721.727C445.933 721.806 445.905 721.882 445.854 721.938C445.803 721.994 445.734 722.026 445.662 722.027Z" fill="#CCCCCC"/>
<path id="Vector_15" d="M445.662 729.221H349.815C349.742 729.221 349.673 729.19 349.621 729.135C349.57 729.079 349.54 729.003 349.54 728.924C349.539 728.845 349.567 728.768 349.618 728.712C349.668 728.655 349.737 728.622 349.81 728.621H445.662C445.734 728.622 445.803 728.654 445.854 728.71C445.905 728.766 445.933 728.842 445.933 728.921C445.933 729 445.905 729.076 445.854 729.132C445.803 729.188 445.734 729.22 445.662 729.221Z" fill="#CCCCCC"/>
<path id="Vector_16" d="M445.662 736.415H349.815C349.742 736.416 349.673 736.385 349.621 736.329C349.57 736.273 349.54 736.198 349.54 736.118C349.539 736.039 349.567 735.963 349.618 735.906C349.668 735.849 349.737 735.817 349.81 735.816H445.662C445.734 735.817 445.803 735.848 445.854 735.905C445.905 735.961 445.933 736.037 445.933 736.116C445.933 736.194 445.905 736.27 445.854 736.326C445.803 736.383 445.734 736.414 445.662 736.415Z" fill="#CCCCCC"/>
<g id="big_leaf">
<path id="Vector_17" d="M97.2786 771.527C102.511 773.541 108.129 774.045 113.592 772.992C119.054 771.938 124.177 769.363 128.466 765.514C139.389 755.478 142.814 738.943 145.601 723.633C148.348 708.539 151.096 693.444 153.843 678.35L136.587 691.356C124.177 700.71 111.488 710.363 102.895 723.911C94.303 737.459 90.5524 755.954 97.4561 770.614" fill="#E6E6E6"/>
<path id="Vector_18" d="M98.7537 826.352C97.0072 812.426 95.2113 798.321 96.4364 784.246C97.5244 771.746 101.008 759.536 108.101 749.525C111.866 744.222 116.447 739.677 121.639 736.097C122.993 735.162 124.239 737.51 122.891 738.441C113.908 744.656 106.96 753.832 103.049 764.648C98.7291 776.675 98.0354 789.786 98.7799 802.562C99.23 810.289 100.184 817.965 101.146 825.631C101.221 825.977 101.174 826.342 101.013 826.652C100.852 826.962 100.59 827.194 100.279 827.3C99.9622 827.394 99.6242 827.347 99.3386 827.169C99.053 826.992 98.8428 826.698 98.7537 826.352Z" fill="#F2F2F2"/>
</g>
<g id="small_leaf">
<path id="Vector_19" d="M115.576 801.71C117.82 805.443 120.905 808.481 124.533 810.531C128.161 812.581 132.211 813.574 136.291 813.413C146.777 812.868 155.519 804.857 163.389 797.251L186.665 774.754L171.26 773.947C160.182 773.367 148.817 772.826 138.265 776.565C127.714 780.305 117.982 789.305 116.052 801.261" fill="#E6E6E6"/>
<path id="Vector_20" d="M93.8178 834.358C102.224 818.075 111.975 799.979 129.398 794.195C134.243 792.593 139.322 792.019 144.364 792.504C145.953 792.654 145.556 795.335 143.97 795.185C135.519 794.417 127.085 796.86 120.087 802.102C113.353 807.119 108.11 814.095 103.672 821.492C100.954 826.023 98.5189 830.747 96.0835 835.464C95.3053 836.971 93.0304 835.883 93.8178 834.358Z" fill="#F2F2F2"/>
</g>
<path id="Vector_21" d="M80.3482 851.496C80.6315 847.904 81.8098 844.465 83.755 841.555C85.7001 838.645 88.3374 836.374 91.3797 834.991V825.578H105.803V835.288C108.695 836.739 111.185 839.003 113.017 841.851C114.85 844.698 115.959 848.026 116.234 851.496L119.625 894.651H76.9567L80.3482 851.496Z" fill="#F2F2F2"/>
<path id="Vector_22" d="M570.851 645.44L566.56 643.463L563.617 619.918H524.421L521.231 643.367L517.392 645.467C517.208 645.568 517.061 645.734 516.974 645.937C516.887 646.141 516.865 646.37 516.913 646.589C516.96 646.808 517.073 647.003 517.234 647.142C517.395 647.282 517.594 647.358 517.8 647.358H570.497C570.708 647.358 570.912 647.278 571.075 647.132C571.237 646.986 571.349 646.783 571.391 646.557C571.432 646.332 571.401 646.097 571.303 645.893C571.205 645.69 571.045 645.53 570.851 645.44Z" fill="#E6E6E6"/>
<path id="Vector_23" d="M640.505 623.051H447.963C446.953 623.048 445.985 622.607 445.271 621.824C444.558 621.042 444.157 619.981 444.157 618.875V589.155H644.311V618.875C644.311 619.981 643.91 621.042 643.197 621.824C642.483 622.607 641.515 623.048 640.505 623.051Z" fill="#CCCCCC"/>
<path id="Vector_24" d="M644.512 603.201H443.982V476.034C443.983 474.699 444.468 473.42 445.33 472.476C446.192 471.532 447.361 471.001 448.58 471H639.914C641.133 471.001 642.302 471.532 643.164 472.476C644.026 473.42 644.511 474.699 644.512 476.034L644.512 603.201Z" fill="#3F3D56"/>
<path id="Vector_25" d="M632.535 593.971H455.958C455.018 593.97 454.117 593.561 453.453 592.834C452.788 592.106 452.414 591.12 452.413 590.091V484.11C452.414 483.082 452.788 482.095 453.453 481.368C454.117 480.64 455.018 480.231 455.958 480.23H632.535C633.475 480.231 634.376 480.64 635.041 481.368C635.706 482.095 636.079 483.082 636.08 484.11V590.091C636.079 591.12 635.706 592.106 635.041 592.834C634.376 593.561 633.475 593.97 632.535 593.971Z" fill="white"/>
<g id="arm1">
<path id="Vector_26" d="M586.028 631.367C587.168 630.214 588.525 629.349 590.003 628.832C591.482 628.316 593.046 628.161 594.585 628.377C596.124 628.594 597.601 629.178 598.912 630.087C600.223 630.996 601.336 632.209 602.172 633.64L626.057 628.992L632.177 644.191L598.364 650.236C596.075 651.615 593.403 652.027 590.855 651.393C588.307 650.76 586.06 649.125 584.539 646.799C583.018 644.473 582.33 641.618 582.604 638.773C582.879 635.929 584.097 633.294 586.028 631.367Z" fill="#FFB6B6"/>
<path id="Vector_27" d="M608.141 650.773L633.04 650.434L636.192 650.387L686.852 649.688C686.852 649.688 700.608 635.322 712.587 620.531L710.908 607.237C709.271 594.191 703.358 582.24 694.272 573.61C677.116 586.159 667.166 610.998 667.166 610.998L635.755 619.222L632.613 620.044L613.096 625.149L608.141 650.773Z" fill="#F2F2F2"/>
</g>
<path id="Vector_28" d="M735.605 732.48H689.126C689.126 734.66 638.319 736.43 638.319 736.43C637.199 737.354 636.177 738.413 635.275 739.589C632.562 743.13 631.08 747.606 631.089 752.227V755.386C631.091 760.623 632.992 765.644 636.374 769.347C639.757 773.049 644.344 775.13 649.128 775.132H735.605C740.388 775.128 744.974 773.046 748.356 769.344C751.738 765.642 753.64 760.622 753.644 755.386V752.227C753.637 746.992 751.735 741.974 748.353 738.272C744.972 734.571 740.387 732.488 735.605 732.48Z" fill="#E4E4E4"/>
<path id="Vector_29" d="M701.806 774.348H683.045V892.883H701.806V774.348Z" fill="#E4E4E4"/>
<path id="Vector_30" d="M629.65 892.162C629.65 894.38 658.079 893.02 693.147 893.02C728.216 893.02 756.644 894.38 756.644 892.162C756.644 889.943 728.216 872.347 693.147 872.347C658.079 872.347 629.65 889.943 629.65 892.162Z" fill="#E4E4E4"/>
<path id="Vector_31" d="M617.048 878.618L603.085 878.617L596.443 819.665L617.05 819.666L617.048 878.618Z" fill="#FFB6B6"/>
<path id="Vector_32" d="M620.608 893.433L575.588 893.431V892.808C575.588 887.72 577.435 882.842 580.721 879.245C584.007 875.647 588.464 873.626 593.111 873.626H593.112L620.609 873.627L620.608 893.433Z" fill="#2F2E41"/>
<path id="Vector_33" d="M575.781 878.618L561.819 878.617L555.176 819.665L575.783 819.666L575.781 878.618Z" fill="#FFB6B6"/>
<path id="Vector_34" d="M579.342 893.433L534.321 893.431V892.808C534.321 887.72 536.168 882.842 539.454 879.245C542.74 875.647 547.197 873.626 551.844 873.626H551.845L579.342 873.627L579.342 893.433Z" fill="#2F2E41"/>
<path id="Vector_35" d="M700.852 539.226C714.26 539.226 725.129 527.329 725.129 512.652C725.129 497.976 714.26 486.078 700.852 486.078C687.445 486.078 676.576 497.976 676.576 512.652C676.576 527.329 687.445 539.226 700.852 539.226Z" fill="#FFB6B6"/>
<path id="Vector_36" d="M740.144 694.728C740.144 694.728 748.289 741.877 717.297 747.881C686.304 753.885 641.566 758.105 641.566 758.105L621.475 860.711L594.484 858.074C594.484 858.074 598.074 734.559 606.901 724.895C615.729 715.232 671.525 686.298 671.525 686.298L740.144 694.728Z" fill="#2F2E41"/>
<path id="Vector_37" d="M679.613 674.968L666.058 689.853C666.058 689.853 568.186 707.11 564.41 731.854C558.71 769.213 551.977 850.452 551.977 850.452L581.403 848.036L592.942 755.689L640.024 743.966L693.591 712.011L679.613 674.968Z" fill="#2F2E41"/>
<path id="Vector_38" d="M724.213 496.789C721.817 491.84 718.772 481.976 713.935 480.146C711.249 479.171 708.473 478.524 705.657 478.216L697.435 481.677L701.91 477.868C701.038 477.811 700.168 477.765 699.298 477.729L693.75 480.064L696.588 477.648C691.417 477.59 686.079 478.178 682.071 481.624C678.655 484.562 675.271 495.692 674.723 500.409C674.138 504.922 674.343 509.516 675.327 513.945L676.731 515.407C677.223 514.174 677.592 512.886 677.834 511.567C678.337 509.102 679.305 506.778 680.674 504.745C682.043 502.711 683.785 501.012 685.787 499.756L685.863 499.709C688.22 498.257 691.078 498.324 693.78 498.431L706.613 498.936C709.7 499.058 713.025 499.271 715.432 501.391C716.962 502.955 718.164 504.863 718.958 506.983C720.154 509.625 722.491 519.592 722.491 519.592C722.491 519.592 723.813 517.711 724.447 519.111C725.464 515.457 726.082 511.685 726.288 507.873C726.49 504.044 725.775 500.223 724.213 496.789Z" fill="#2F2E41"/>
<g id="arm">
<g id="hand">
<path id="Vector_39" d="M809.122 524.322C807.574 524.434 806.066 524.916 804.706 525.734C803.346 526.552 802.167 527.687 801.251 529.059C800.335 530.43 799.704 532.004 799.404 533.671C799.104 535.338 799.142 537.056 799.514 538.706L779.992 554.469L785.85 569.792L813.133 547.107C815.623 546.239 817.735 544.401 819.069 541.942C820.403 539.482 820.867 536.573 820.373 533.765C819.878 530.956 818.46 528.444 816.387 526.703C814.313 524.963 811.728 524.116 809.122 524.322Z" fill="#FFB6B6"/>
</g>
<path id="Vector_40" d="M805.98 556.503L757 614C757 614 733.636 607.799 715.536 598.908L707.405 571.569C705.516 565.227 704.711 558.559 705.028 551.897C730.119 544.588 759.305 571.784 759.305 571.784L795.938 540.373L805.98 556.503Z" fill="#F2F2F2"/>
</g>
<path id="Vector_41" d="M691.785 699.123C683.053 695.821 674.025 692.408 664.286 691.126L663.868 691.071L663.983 690.627C674.064 651.882 671.548 627.096 666.608 589.866C665.557 581.835 666.907 573.648 670.457 566.526C674.006 559.404 679.564 553.729 686.301 550.349L686.361 550.32L714.174 548.385L714.238 548.381L734.466 554.893C737.376 555.837 739.923 557.799 741.717 560.479C743.511 563.159 744.452 566.408 744.398 569.73C744.179 581.974 744.643 595.644 745.135 610.117C746.239 642.585 747.381 676.158 740.904 697.942L740.87 698.056L740.783 698.13C734.829 703.439 727.369 706.307 719.69 706.241C710.61 706.241 701.345 702.738 691.785 699.123Z" fill="#F2F2F2"/>
<path id="Vector_42" d="M893.707 896H1.29335C0.950337 896 0.621371 895.851 0.37882 895.585C0.13627 895.32 0 894.96 0 894.584C0 894.209 0.13627 893.849 0.37882 893.583C0.621371 893.318 0.950337 893.168 1.29335 893.168H893.707C894.05 893.168 894.379 893.318 894.621 893.583C894.864 893.849 895 894.209 895 894.584C895 894.96 894.864 895.32 894.621 895.585C894.379 895.851 894.05 896 893.707 896Z" fill="#CCCCCC"/>
<path id="Vector_43" d="M568.123 562.6H472.275C472.203 562.6 472.133 562.569 472.082 562.513C472.03 562.458 472.001 562.382 472 562.302C471.999 562.223 472.027 562.147 472.078 562.09C472.129 562.033 472.198 562.001 472.27 562H568.123C568.195 562.001 568.264 562.033 568.315 562.089C568.365 562.145 568.394 562.221 568.394 562.3C568.394 562.379 568.365 562.455 568.315 562.511C568.264 562.567 568.195 562.599 568.123 562.6Z" fill="#CCCCCC"/>
<path id="Vector_44" d="M568.123 569.794H472.275C472.203 569.794 472.133 569.763 472.082 569.708C472.03 569.652 472.001 569.576 472 569.497C471.999 569.418 472.027 569.341 472.078 569.285C472.129 569.228 472.198 569.195 472.27 569.194H568.123C568.195 569.195 568.264 569.227 568.315 569.283C568.365 569.339 568.394 569.415 568.394 569.494C568.394 569.573 568.365 569.649 568.315 569.705C568.264 569.761 568.195 569.793 568.123 569.794Z" fill="#CCCCCC"/>
<path id="Vector_45" d="M568.123 576.988H472.275C472.203 576.989 472.133 576.958 472.082 576.902C472.03 576.846 472.001 576.771 472 576.691C471.999 576.612 472.027 576.536 472.078 576.479C472.129 576.422 472.198 576.39 472.27 576.389H568.123C568.195 576.39 568.264 576.422 568.315 576.478C568.365 576.534 568.394 576.61 568.394 576.689C568.394 576.768 568.365 576.843 568.315 576.899C568.264 576.956 568.195 576.988 568.123 576.988Z" fill="#CCCCCC"/>
<path id="Vector_46" d="M632.535 593.971H455.958C455.018 593.97 454.117 593.561 453.453 592.834C452.788 592.106 452.414 591.12 452.413 590.091V484.11C452.414 483.082 452.788 482.095 453.453 481.368C454.117 480.64 455.018 480.231 455.958 480.23H632.535C633.475 480.231 634.376 480.64 635.041 481.368C635.706 482.095 636.079 483.082 636.08 484.11V590.091C636.079 591.12 635.706 592.106 635.041 592.834C634.376 593.561 633.475 593.97 632.535 593.971Z" fill="white"/>
<circle id="Ellipse 2" cx="615.5" cy="581.5" r="2.5" fill="#141351"/>
<circle id="Ellipse 3" cx="625.5" cy="581.5" r="2.5" fill="#1E1E1E"/>
<circle id="Ellipse 4" cx="595.5" cy="581.5" r="2.5" fill="#CB1E1E"/>
<circle id="Ellipse 7" cx="368.5" cy="725.5" r="2.5" fill="#CB1E1E"/>
<circle id="Ellipse 5" cx="605.5" cy="581.5" r="2.5" fill="#1BD923"/>
<circle id="Ellipse 6" cx="356.5" cy="725.5" r="2.5" fill="#1BD923"/>
<path id="Vector_47" d="M571.123 564.6H475.275C475.203 564.6 475.133 564.569 475.082 564.513C475.03 564.458 475.001 564.382 475 564.302C474.999 564.223 475.027 564.147 475.078 564.09C475.129 564.033 475.198 564.001 475.27 564H571.123C571.195 564.001 571.264 564.033 571.315 564.089C571.365 564.145 571.394 564.221 571.394 564.3C571.394 564.379 571.365 564.455 571.315 564.511C571.264 564.567 571.195 564.599 571.123 564.6Z" fill="#CCCCCC"/>
<path id="Vector_48" d="M571.123 571.794H475.275C475.203 571.794 475.133 571.763 475.082 571.708C475.03 571.652 475.001 571.576 475 571.497C474.999 571.418 475.027 571.341 475.078 571.285C475.129 571.228 475.198 571.195 475.27 571.194H571.123C571.195 571.195 571.264 571.227 571.315 571.283C571.365 571.339 571.394 571.415 571.394 571.494C571.394 571.573 571.365 571.649 571.315 571.705C571.264 571.761 571.195 571.793 571.123 571.794Z" fill="#CCCCCC"/>
<path id="Vector_49" d="M571.123 578.988H475.275C475.203 578.989 475.133 578.958 475.082 578.902C475.03 578.846 475.001 578.771 475 578.691C474.999 578.612 475.027 578.536 475.078 578.479C475.129 578.422 475.198 578.39 475.27 578.389H571.123C571.195 578.39 571.264 578.422 571.315 578.478C571.365 578.534 571.394 578.61 571.394 578.689C571.394 578.768 571.365 578.843 571.315 578.899C571.264 578.956 571.195 578.988 571.123 578.988Z" fill="#CCCCCC"/>
<path id="Vector_50" d="M571.123 524.6H475.275C475.203 524.6 475.133 524.569 475.082 524.513C475.03 524.458 475.001 524.382 475 524.302C474.999 524.223 475.027 524.147 475.078 524.09C475.129 524.033 475.198 524.001 475.27 524H571.123C571.195 524.001 571.264 524.033 571.315 524.089C571.365 524.145 571.394 524.221 571.394 524.3C571.394 524.379 571.365 524.455 571.315 524.511C571.264 524.567 571.195 524.599 571.123 524.6Z" fill="#CCCCCC"/>
<path id="Vector_51" d="M571.123 531.794H475.275C475.203 531.794 475.133 531.763 475.082 531.708C475.03 531.652 475.001 531.576 475 531.497C474.999 531.418 475.027 531.341 475.078 531.285C475.129 531.228 475.198 531.195 475.27 531.194H571.123C571.195 531.195 571.264 531.227 571.315 531.283C571.365 531.339 571.394 531.415 571.394 531.494C571.394 531.573 571.365 531.649 571.315 531.705C571.264 531.761 571.195 531.793 571.123 531.794Z" fill="#CCCCCC"/>
<path id="Vector_52" d="M571.123 538.988H475.275C475.203 538.989 475.133 538.958 475.082 538.902C475.03 538.846 475.001 538.771 475 538.691C474.999 538.612 475.027 538.536 475.078 538.479C475.129 538.422 475.198 538.39 475.27 538.389H571.123C571.195 538.39 571.264 538.422 571.315 538.478C571.365 538.534 571.394 538.61 571.394 538.689C571.394 538.768 571.365 538.843 571.315 538.899C571.264 538.956 571.195 538.988 571.123 538.988Z" fill="#CCCCCC"/>
<path id="Vector_53" d="M571.123 501.6H475.275C475.203 501.6 475.133 501.569 475.082 501.513C475.03 501.458 475.001 501.382 475 501.302C474.999 501.223 475.027 501.147 475.078 501.09C475.129 501.033 475.198 501.001 475.27 501H571.123C571.195 501.001 571.264 501.033 571.315 501.089C571.365 501.145 571.394 501.221 571.394 501.3C571.394 501.379 571.365 501.455 571.315 501.511C571.264 501.567 571.195 501.599 571.123 501.6Z" fill="#CCCCCC"/>
<path id="Vector_54" d="M571.123 508.794H475.275C475.203 508.794 475.133 508.763 475.082 508.708C475.03 508.652 475.001 508.576 475 508.497C474.999 508.418 475.027 508.341 475.078 508.285C475.129 508.228 475.198 508.195 475.27 508.194H571.123C571.195 508.195 571.264 508.227 571.315 508.283C571.365 508.339 571.394 508.415 571.394 508.494C571.394 508.573 571.365 508.649 571.315 508.705C571.264 508.761 571.195 508.793 571.123 508.794Z" fill="#CCCCCC"/>
<path id="Vector_55" d="M571.123 515.988H475.275C475.203 515.989 475.133 515.958 475.082 515.902C475.03 515.846 475.001 515.771 475 515.691C474.999 515.612 475.027 515.536 475.078 515.479C475.129 515.422 475.198 515.39 475.27 515.389H571.123C571.195 515.39 571.264 515.422 571.315 515.478C571.365 515.534 571.394 515.61 571.394 515.689C571.394 515.768 571.365 515.843 571.315 515.899C571.264 515.956 571.195 515.988 571.123 515.988Z" fill="#CCCCCC"/>
<circle id="Ellipse 1" cx="627.5" cy="501.5" r="4.5" fill="#D9D9D9"/>
<circle id="Ellipse 8" cx="689" cy="511" r="2" fill="#D9D9D9"/>
<circle id="Ellipse 9" cx="707" cy="511" r="2" fill="#D9D9D9"/>
<ellipse id="Ellipse 10" cx="699.5" cy="526" rx="3.5" ry="1" fill="#D9D9D9"/>
<g id="eyes">
<circle id="Ellipse 11" cx="689" cy="511" r="1" fill="#1E1E1E"/>
<circle id="Ellipse 12" cx="707" cy="511" r="1" fill="#1E1E1E"/>
</g>
<rect id="Rectangle 1" x="695" y="538" width="15" height="12" fill="#FFB6B6"/>
<ellipse id="Ellipse 13" cx="703" cy="549.5" rx="9" ry="2.5" fill="#FFB6B6"/>
</g>
</g>
<defs>
<clipPath id="clip0_7_96">
<rect width="895" height="425" fill="white" transform="translate(0 471)"/>
</clipPath>
</defs>
</svg>

        </div>

        <a href="#contact" className='scroll__down'><RxDoubleArrowDown/></a>

      </div>
    </header>
  )
}
