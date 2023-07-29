import { Close } from '@mui/icons-material';
import {useState} from 'react'

function Announce() {
    const[announceStyle,setAnnounceStyle]=useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center');

    const handleClose =()=>{
        setAnnounceStyle(announceStyle + " hidden");
    }

  return (
    <div className={announceStyle}>
        {/* ' can be replaced with &apos;, &lsquo;, &#39; or &rsquo; */}
      <h2>Hurry up it&apos;s  40% off now</h2>
      <Close className='cursor-pointer ' onClick={handleClose} />
    </div>
  )
}

export default Announce;
