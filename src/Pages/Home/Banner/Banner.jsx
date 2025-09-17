 import img1 from '../../../assets/images/banner/1.jpg'
 import img2 from '../../../assets/images/banner/2.jpg'
 import img3 from '../../../assets/images/banner/3.jpg'
 import img4 from '../../../assets/images/banner/4.jpg'
 import img5 from '../../../assets/images/banner/5.jpg'

const Banner = () => {
    return (
      <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src= {img1}
      className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full pl-5 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
       <div className=' text-amber-100 space-y-7 w-1/2 '>
        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing </h2>
        <p>There are many variation of passage of abailable but the majority have suffered altaration in some form</p>
       <div>
         <button className="btn btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
       </div>
       </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex  justify-end">
      <a href="#slide4" className="btn btn-circle mr-2">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src= {img2}
      className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full pl-5 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
       <div className=' text-amber-100 space-y-7 w-1/2 '>
        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing </h2>
        <p>There are many variation of passage of abailable but the majority have suffered altaration in some form</p>
       <div>
         <button className="btn btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
       </div>
       </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex  justify-end">
      <a href="#slide1" className="btn btn-circle mr-2">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src= {img3}
      className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full pl-5 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
       <div className=' text-amber-100 space-y-7 w-1/2 '>
        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing </h2>
        <p>There are many variation of passage of abailable but the majority have suffered altaration in some form</p>
       <div>
         <button className="btn btn-secondary mr-5">Discover More </button>
        <button className="btn btn-outline btn-secondary">Latest Poject </button>
       </div>
       </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex  justify-end">
      <a href="#slide2" className="btn btn-circle mr-2">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src= {img4}
      className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full pl-5 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
       <div className=' text-amber-100 space-y-7 w-1/2 '>
        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing </h2>
        <p>There are many variation of passage of abailable but the majority have suffered altaration in some form</p>
       <div>
         <button className="btn btn-secondary mr-5">Discover More </button>
        <button className="btn btn-outline btn-secondary">Latest Poject </button>
       </div>
       </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex  justify-end">
      <a href="#slide3" className="btn btn-circle mr-2">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
    );
};

export default Banner;