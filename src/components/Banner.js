
 const Banner = () => {
    return (
      <>
<section class="relative bg-[url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80)] bg-cover bg-center bg-no-repeat h-screen">
  <div class="absolute inset-0 bg-black opacity-40"></div>

  <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
        Build Your
        <strong class="block font-extrabold text-rose-700">
          Ultimate PC 
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
      Create your dream PC with the latest components and accessories.
            Experience top-notch performance and innovation like never before.
      </p>

      <div class="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
        <a
          href="#"
          class="block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
        >
         Start Building
        </a>

        <a
          href="#"
          class="block rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

      </>
    )
}


/* 
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> 
*/


export default Banner;