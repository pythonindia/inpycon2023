import Image from 'next/image'
import mandala from '../../public/mandala.jpg'

export default function PyConIndia() {
    return (
        <div className="flex flex-row">
            <div className="basis-1/5">
                <div className="flex flex-col divide-y-10">
                    <div className="bg-white border-2 h-32 w-32 p-2 m-2">
                        <Image
                          src={mandala}
                          alt="mandala"
                        />
                    </div>
                    <div className="bg-white border-2 h-32 w-32 p-2 m-2">02</div>
                    <div className="bg-white border-2 h-32 w-32 p-2 m-2">03</div>
                    <div className="bg-white border-2 h-32 w-32 p-2 m-2">04</div>
                    <div className="bg-white border-2 h-32 w-32 p-2 m-2">
                        <Image
                          src={mandala}
                          alt="mandala"
                        />
                    </div>
                </div>
            </div>
            <div className="basis-3/5 self-center">Pycon India</div>
            <div className="basis-1/5">
                <div className="float-right flex flex-col divide-y-10">
                    <div className="bg-white border-2 h-32 w-32 p-2 m-2">
                        <Image
                          src={mandala}
                          alt="mandala"
                        />
                    </div>
                    <div className="bg-white border-2 h-32 w-32 p-2 m-2">02</div>
                    <div className="bg-white border-2 h-32 w-32 p-2 m-2">03</div>
                    <div className="bg-white border-2 h-32 w-32 p-2 m-2">04</div>
                    <div className="bg-white border-2 h-32 w-32 p-2 m-2">
                        <Image
                          src={mandala}
                          alt="mandala"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}