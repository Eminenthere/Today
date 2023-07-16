import { LogoIcon } from '../assets/index'
import { LogoutSVG, PictureSVG, SettingSVG } from '../assets/dynamicSVG/index'
import '../styles/SidePanel.css'

const LeftPanel = () => {
  return (
    <footer>
      <img src={LogoIcon} alt='' />

      <div className='bottom-icon'>
        <PictureSVG />
        <SettingSVG />
        <LogoutSVG />
      </div>
    </footer>
  )
}

export default LeftPanel
