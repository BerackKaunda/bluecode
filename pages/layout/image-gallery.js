
import Link from 'next/link'
import Image from 'next/image'

const ImageGallery = () => {
    return (
        <div className='p-2 py-10 lg:py-28'>
            <div className="py-5 md:py-20 lg:px-10 grid md:grid-cols-4 gap-0 ">
            <div className="lg:grid justify-center hidden">
            <Image 
                className='' 
                src="/images/projects.png"
                alt=""
                width={100}
                height={100}
                layout='intrinsic'
                objectFit='cover'
                />
            </div>
            <div className="col-span-2">
            <h2 className='text-white text-center font-bold tracking-widest text-4xl md:text-7xl'>
                Recent Projects
                </h2>
            </div>
                
            <div className="lg:grid hidden justify-center ">
            <Image 
                className='' 
                src="/images/projects1.png"
                alt=""
                width={100}
                height={100}
                layout='intrinsic'
                objectFit='cover'
                />
            </div>
            </div>

            <div className='grid lg:grid-cols-2 gap-5 py-5 lg:px-20'>
                <div className=''>
                                        <img
                                        className='' 
                                        src="/images/landingpages/5.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='intrinsic'
                                        objectFit='cover'
                                        />
                                </div>
                                <div className=''>
                                        <img 
                                        className='' 
                                        src="/images/landingpages/3.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='intrinsic'
                                        objectFit='cover'
                                        />
                                </div>
                                <div className=''>
                                        <img  
                                        className='' 
                                        src="/images/landingpages/2.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='intrinsic'
                                        objectFit='cover'
                                        />
                                </div>
                                <div className=''>
                                        <img  
                                        className='' 
                                        src="/images/landingpages/4.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='intrinsic'
                                        objectFit='cover'
                                        />
                                </div>
                </div>

                <div className='md:py-10'>
        <h3 className='text-white text-start font-bold tracking-widest text-2xl md:text-5xl capitalize'>
            Design that speaks for you
        </h3>
    </div>
    <div className="grid md:grid-cols-3 gap-4 overflow-auto will-change py-2 p-2">
        <div className="grid md:grid-rows-2 md:grid-flow-row gap-4">
            <div className="md:col-span-1">
            <img className="rounded-md transition duration:300 hover:scale-105 hover:transition hover:duration-300" 
                src="/images/flyer/12.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <img  className="rounded-md transition duration:300 hover:scale-105 hover:transition hover:duration-300" 
                src="/images/flyer/11.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
        </div>

        <div className="grid md:grid-rows-3 md:grid-flow-row gap-4">
            <div className="row-span-2 col-span-2">
            <img className="rounded-md transition duration:300 hover:scale-105 hover:transition hover:duration-300" 
                src="/images/flyer/7.png"  
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            
            
            <div className="grid">
            <img className="rounded-md transition duration:300 hover:scale-105 hover:transition hover:duration-300" 
                src="/images/graphics/6.png"
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            
            <div className="md:col-span-1">
            <img  className="rounded-md transition duration:300 hover:scale-105 hover:transition hover:duration-300" 
                src="/images/graphics/4.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
        </div>

        
        <div className="grid md:grid-rows-2 md:grid-flow-row gap-4">
            <div className="md:col-span-1">
            <img  className="rounded-md transition duration:300 hover:scale-105 hover:transition hover:duration-300" 
                src="/images/flyer/4.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <img className="rounded-md transition duration:300 hover:scale-105 hover:transition hover:duration-300" 
                src="/images/flyer/9.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
        </div>
            </div>



        </div>    
        
    );
}
export default ImageGallery;