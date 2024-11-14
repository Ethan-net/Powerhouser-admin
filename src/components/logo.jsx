import logo from '../../src/assets/icon/powerlogo.png'
import '../App.css'
import '../index.css'

export default function Logo() {
  return (
    <div className='flex gap-3 mx-auto my-10 justify-center '>
        <img className='animate-ping flex w-6' src={logo} alt="" />
      <h1 className='logotitle font-bold'>Powerhouse </h1>
    </div>
  )
}
