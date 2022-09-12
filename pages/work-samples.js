import Link from 'next/link'
import Image from 'next/image'
import { SiReact, SiFigma, SiTailwindcss, SiNodedotjs, SiWordpress, SiPhp, SiMysql  } from "react-icons/si"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';


const WorkSamples = () => {
    return (
        <div className=' py-20'>
            <div className=" bg-black flex flex-col justify-center items-center py-10">
            <div className="grid grid-cols-4 gap-2">
                <div>
                </div>
                <div className="grid col-span-2">
                    <div className="flex flex-col justify-center items-center py-10">   
                    <h2 className='text-white text-center font-bold tracking-widest text-lg md:text-7xl capitalize'>
                    What we usually do
                    </h2>
                    <p className='text-white '>
                    No matter the industry you're in, or the asset you need, we can design it for you.

                    </p>
                    </div>
                </div>
                <div>
                </div>

            </div>
        </div>

        <div className=" py-20">
            <div>
                        <h3 className='text-white text-start font-bold tracking-widest text-lg md:text-4xl capitalize'>
                            Landing Pages
                        </h3>
            </div>
                <div className='grid grid-cols-2 gap-5 py-5 px-20'>
                <div className=''>
                                        <Image 
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
                                        <Image 
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
                                        <Image 
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
                                        <Image 
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
        </div>

        <div className='pt-20'>
            <h3 className='text-white text-start font-bold tracking-widest text-lg md:text-4xl capitalize'>
                Design that speaks for you
            </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 overflow-auto will-change py-5">
        <div className="grid md:grid-rows-2 md:grid-flow-row gap-4">
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery3.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery5.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
        </div>

        <div className="grid md:grid-rows-2 md:grid-flow-row gap-4">
            <div className="row-span-3 col-span-2">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery2.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            
            
            <div className="grid">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery2.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            
            
            <div className="grid">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery2.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery2.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery2.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
        </div>

        
        <div className="grid md:grid-rows-2 md:grid-flow-row gap-4">
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery3.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery5.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
        </div>
            </div>


        {/* case study section starts */}
        <div className='pt-20 md:pt-28'>
            <div className="">
            <h3 className='text-white text-start font-bold tracking-widest text-lg md:text-4xl capitalize'>
                Modern and Elegant Websites
            </h3>
            </div>

            <Splide tag="div"
                    options={ {
                        rewind: true,
                        gap   : '1rem',
                        perPage: 1,
                        padding: 1
                    } }
                    aria-label="casestudies"
                    >
                    <SplideSlide>
                        <Link href="">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/website/3.png"
                                alt=""
                                width={1200}
                                height={600}
                                layout='responsive'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/website/4.png"
                                alt=""
                                width={1200}
                                height={600}
                                layout='responsive'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/website/5.png"
                                alt=""
                                width={1200}
                                height={600}
                                layout='responsive'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/website/6.png"
                                alt=""
                                width={1200}
                                height={600}
                                layout='responsive'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/website/7.png" 
                                alt=""
                                width={1200}
                                height={600}
                                layout='responsive'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/website/8.png" 
                                alt=""
                                width={1200}
                                height={600}
                                layout='responsive'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/website/9.png"  
                                alt=""
                                width={1200}
                                height={600}
                                layout='responsive'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/website/10.png"  
                                alt=""
                                width={1200}
                                height={600}
                                layout='responsive'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>


                    <SplideSlide>
                    <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/website/11.png"  
                                alt=""
                                width={1200}
                                height={600}
                                layout='responsive'
                                />
                        </div>
                            </a>
                    </Link>                        
                    </SplideSlide>
                    <SplideSlide>
                    <Link href="">
                        <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/newb.svg" 
                                alt=""
                                width={1200}
                                height={600}
                                layout='responsive'
                                />
                        </div>
                        </a>
                    </Link>                        
                    </SplideSlide>
            </Splide>

        </div>
        {/* case study section ends */}

{/* Social Media Posts */}

        <div className='pt-20'>
                    <h3 className='text-white text-start font-bold tracking-widest text-lg md:text-4xl capitalize'>
                        Social Media Grapics: Create a Brand
                    </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4 overflow-auto will-change py-5">
            <div className="grid">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/flyer/1.svg" 
                alt=""
                width={400} height= {700}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="grid md:grid-rows-3 md:grid-flow-row gap-4">
            <div className="row-span-3 col-span-2">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/flyer/2.png"  
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/flyer/3.png"  
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/flyer/4.png"   
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            </div>
            <div className="grid">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/flyer/5.png"  
                alt=""
                width={400} height= {700}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
        </div>


        <div>
        <div className="">
                    <h3 className='text-white text-start font-bold tracking-widest text-lg md:text-4xl capitalize'>
                        Brand Flyers and Banners
                    </h3>
                    </div>
                <div className='grid grid-cols-2 gap-2 py-20'>
                <div className=''>
                                        <Image 
                                        className='rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300' 
                                        src="/images/graphics/7.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='responsive'
                                        />
                                </div>
                                <div className=''>
                                        <Image 
                                        className='rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300' 
                                        src="/images/graphics/4.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='responsive'
                                        />
                                </div>
                                <div className=''>
                                        <Image 
                                        className='rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300' 
                                        src="/images/graphics/8.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='responsive'
                                        />
                                </div>
                                <div className=''>
                                        <Image 
                                        className='rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300' 
                                        src="/images/graphics/5.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='responsive'
                                        />
                                </div>
                </div>
        </div>


                {/* case study section starts */}
                <div className='pt-20 md:pt-28'>
            <div className="">
            <h3 className='text-white text-start font-bold tracking-widest text-lg md:text-4xl capitalize'>
                Brand Flyers and Banners
            </h3>
            </div>

            <Splide tag="div"
                    options={ {
                        rewind: true,
                        gap   : '1rem',
                        perPage: 3,
                        padding: 1
                    } }
                    aria-label="casestudies"
                    >
                    <SplideSlide>
                        <Link href="">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/graphics/1.png"
                                alt=""
                                width={500}
                                height={500}
                                layout='fixed'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/graphics/4.png"
                                alt=""
                                width={500}
                                height={500}
                                layout='fixed'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/graphics/5.png"
                                alt=""
                                width={500}
                                height={500}
                                layout='fixed'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/graphics/6.png"
                                alt=""
                                width={500}
                                height={500}
                                layout='fixed'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/graphics/7.png" 
                                alt=""
                                width={500}
                                height={500}
                                layout='fixed'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/graphics/8.png" 
                                alt=""
                                width={500}
                                height={500}
                                layout='fixed'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/graphics/9.png"  
                                alt=""
                                width={500}
                                height={500}
                                layout='fixed'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>

                    <SplideSlide>
                        <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/graphics/10.png"  
                                alt=""
                                width={500}
                                height={500}
                                layout='fixed'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>


                    <SplideSlide>
                    <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/graphics/11.png"  
                                alt=""
                                width={500}
                                height={500}
                                layout='fixed'
                                />
                        </div>
                            </a>
                    </Link>                        
                    </SplideSlide>
                    <SplideSlide>
                    <Link href="">
                        <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/graphics/12.png" 
                                alt=""
                                width={500}
                                height={500}
                                layout='fixed'
                                />
                        </div>
                        </a>
                    </Link>                        
                    </SplideSlide>
            </Splide>

        </div>
        {/* case study section ends */}
        </div>    
        
    );
}
export default WorkSamples;