import PyIcon from './favicon.ico'
import Image from 'next/image'
export default function Banner() {
    return (
        <div className="uppercase text-6xl font-bold text-zinc-900 sm:text-6xl">
            <div className="container">
                <div className="text-right mr-2">
                    <span className="tracking-wide">py</span>
                    <span className="text-yellow-300 tracking-wide">con</span>
                </div>
                <div>20</div>
                <div className="text-right mr-2 tracking-wide justify-between flex flex-row">
                    <div className='flex-col cen-flex'>
                        <Image
                        className='h-10 w-10'
                              src={PyIcon}
                              alt="PyIcon"
                        />
                    </div>
                    <div className='flex-col'>India</div>
                </div>
                <div className='text-py-green'>23</div>
            </div>
        </div>
    ) 
}