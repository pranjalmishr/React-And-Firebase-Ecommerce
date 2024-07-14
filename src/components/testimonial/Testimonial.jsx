/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://th.bing.com/th/id/OIP.7cKQyzlm2X-4Z44fzH3ArwAAAA?pid=ImgDet&w=202&h=202&c=7&dpr=1.1" />
                                <p className="leading-relaxed">Shopping on E Bharat E-commerce has been a breeze! The website is easy to use, offers a wide range of products, and ensures quick, reliable delivery. It's my go-to for hassle-free online shopping!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal </h2>
                              
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://th.bing.com/th/id/OIP.Jr76vnt-pbiFE4RNcKDevQHaIx?w=168&h=200&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                <p className="leading-relaxed">Shopping on E Bharat E-commerce has been a game-changer for me. The website's intuitive design makes finding what I need effortless, whether it's electronics, fashion, or home goods. Plus, their commitment to speedy delivery and excellent customer service ensures I always receive my orders on time and in perfect condition. E Bharat has definitely become my favorite online shopping destination!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sneha</h2>
                                
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://imgs.search.brave.com/1TTX88xSprLtixCtrbQ3ogZVNFhhMFzb5b6qP-pFbNY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Db29s/LU1vZGVsLU1hbi1Q/TkctSW1hZ2VzLnBu/Zw" />
                                <p className="leading-relaxed">"E Bharat E-commerce has revolutionized my shopping experience! With its vast selection, user-friendly interface, and prompt delivery, I can always count on finding exactly what I need quickly and effortlessly. It's the ultimate destination for convenient, stress-free online shopping!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Roy</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial