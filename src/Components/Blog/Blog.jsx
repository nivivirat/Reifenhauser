
import './Blog.css';
import img from "./images/Image.svg"
import testimonials from "./testimonials.json";
import Slider from "./slider";
import rimg from "./images/R.svg";

import img3 from "./images/Image (1).svg"


function Blog() {
 
  



  return (
    <div className="App">
     <div className="lg:hidden flex-row flex gap-1 ml-3 mt-3">
                    <p className="text-[#999999]">Home-</p>
                    <p className="text-primary font-semibold"> Article View</p>
                </div>
    <p className="text-xl bn">
    Article View
</p>
 <p className="text-2xl mt-8 nm ew"><strong>
 Manish Mehta: Sustainable and tricky materials work well with CI flexo</strong>
 </p>
 <p className="text-2xs mt-8 kl ew">
 Manish Mehta, managing director, Reifenhäuser India talks about how gravure and CI flexo are competing in terms of space, speed, cost and more. He highlights the benefits of CI flexo trade shops which is scaling up the industry
 </p>
 <p className="text-xs mt-4 kk ew">
 23 Oct 2017 | 6 Mins read - By Abhay Avadhani
 </p>
 <img className ="wwe" src={rimg} alt ="image"></img>
<center><img className="ima h-96 w-120"  src={img3} alt="image"></img></center>
<p className="text-xl mt-8 nnm ew"><strong>
Abhay Avadhani (AA): How is flexo competing with gravure on things like speed to market, sustainability?Manish Mehta (MM):
</strong></p>

 <p className="text-2xs  mt-8 kkl ew">
 With the help of flexo trade shops, a plate can be made available in less than four hours. Delivery in 24 hrs is quite normal in the flexo market. Whereas, a gravure cylinder would take at least four days to be delivered from the manufacturer to the converter. In most cases, if it is a matter of urgency then the brand owner either has to approach a converter who has a cylinder-making facility or move to flexo. It is much easier to manage promotions, minor changes and corrections in the job with flexo than gravure.
 </p>
 <p className="text-xl mt-8 nnm ew"><strong>
 AA: Converters believe that, the finer the line screen, the better the image. In order to achieve high LPI, the press speed can be reduced, and does that not lead to a drop in efficiency?MM:
</strong></p>

 <p className="text-2xs mt-8 kkl ew">
 For sure, higher the line screen, the better would be the printed image. However, most of the flexo converters are still working with 120 to 150 LPI and some have now progressed to 175 LPI.
If the flexo machine has got the right precision in control, then the speed of the press need not be reduced. This can result in a high quality print, but also a longer life of the dot. We already have customers working with higher screens running at very high speeds for mid to long runs in reverse printing as well.
 </p>
 <img className ="we" src={rimg} alt ="image"></img>
 <p className="text-xl mt-8 nnm ew"><strong>
 AA: In the aspect of effectiveness, inventory and cost of gravure cylinders is high as compared to flexo, and the space taken by 10-15 jobs of gravure = space taken by 100 jobs of flexo. What is your take on this?
</strong></p>

 <p className="text-2xs mt-8 kkl ew">
 It is quite common that mid-sized gravure converters have amassed a large number of cylinders that they “may” be reused year after year. As a result, the consumption of space eventually turns out to be quite huge, and sometimes it is good enough to even accommodate high-speed gravure lines. Flexo plates on the other hand are thin and can be stored vertically as well with automated storage systems, which can be really optimised to store hundreds of jobs.
Today, gravure converters seldom value the space and hence, there has not been a calculation as to what kind of cost is really being incurred for storing these cylinders. The moment this is factored in, a lot of perceptions will change in the market.

 </p>
 <p className="text-xl mt-8 nnm ew"><strong>
 AA: There are trade shops in every major city who have flexo expertise. To what extent has the trade shop benefitted the CI flexo movement in India?MM:
</strong></p>

 <p className="text-2xs mt-8 kkl ew">
 One of the hurdles in the flexo growth story, was the non-availability of good plate-making solutions and trade shops, where flexo jobs could be well defined - or even gravure jobs could be converted to flexo. India has always been predominantly a gravure market. With increase in trade shops and fantastic developments in plate-making technology, flexo and gravure stand together on a comparable dias. This has led to an increase in print quality. Additionally, flexo still continues to be the best solution for printing on thinner materials as well as extensible and tricky materials which are not so easy to control on the gravure press.
 </p>
 <p className="text-xl mt-8 nnm ew"><strong>
 AA: How much process control is required to get the expected performance out of the plate even though it's integrated with CI flexo?MM:
</strong></p>

 <p className="text-2xs mt-8 kkl ew">
 A good plate and a good machine will always go hand in hand. While plate-making solutions today are so advanced that one can get a good plate, the same cannot be said for the CI flexo presses. Even in the case of flexo machines which have advanced technologies, it is still not an easy deliverable for all.
We feel pressure control and the consistency in controlling it plays a huge role not only in terms of print quality, but in the life of the plate as well. The precision and control of the relevant components such as the CI drum, mandrills and sleeves, which has a role to play in maximising plate quality and plate performance, is also critical.
 </p>
 <p className="text-xl mt-8 nnm ew"><strong>
 AA: How can flexo become more popular with the implementation of EPR and single-use plastics ban?MM:
</strong></p>

 <p className="text-2xs mt-8 kkl ew">
 I am not sure if it is right to link flexo printing with EPR or single use plastics. Flexo does offer the possibility to work with thinner materials, mono materials , materials of the same family etc. But materials like BOPP have traditionally been printed with gravure and quite successfully at that . However , Flexo does increase the scope of materials like MDO Pe & PE/PE laminates which could play a very strong role in replacing other laminates which are not possible to recycle, of course depending on the applications. This will definitely go a long way in assisting in the EPR. Furthermore, generation of waste and the carbon footprint itself is definitely less with the flexo process.
On the other side Flexo printing technology as well as machines can use water based as well as EB cured ink on mono material laminate to complete recyclability as well as gain big mileage on carbon footprint.
 </p>
 <p className="text-xl mt-8 nnm ew"><strong>
 AA: How does screening impact the converters and what is the best technology out there?MM:
</strong></p>

 <p className="text-2xs mt-8 kkl ew">
 Today quite a number of trade shops as well as the plate suppliers are introducing different kinds of dots and different combinations of screens . Add to that a stronger dot with a longer life , the combination of AM and FM screens and higher LPI , is actually making it difficult to distinguish if the job has been printed by gravure or flexo, unless seen minutely with a magnifying glass. Of late, there is a lot of traction for hybrid dot screens introduced by some trades shops, but as we see in the market, most work with combinations best suitable for the job/motif to be printed.
 </p>
 <p className="text-2xl mt-8 jk">Related Blogs</p>
 <div className="w-screen fg md:text-xs text-2xs">
 <Slider options={{ align: "center" }}>
        {testimonials.map((testimonial, i) => (
          <div key={i} className="flex-[0_0_90%] md:flex-[0_0_23%]">
            <div className="h-96 py-4 px-4 bg-white shadow-lg rounded-lg my-20">
              <div className="flex justify-center md:justify-end -mt-16">
                <div style={{ height: '30vh', width: '100%' }}>
                <img
                    className="object-cover border-2 border-indigo-500 w-full h-full"
                    src={testimonial.imgSrc}
                     alt={testimonial.title}
                  />
                </div>
              </div>
              <div>
                <div className="asdf"></div>
                <h3 className="mt-2 text-gray-600 kkk za">
                  <strong>{testimonial.title}</strong>
                </h3>
                <h5 className="mt-2 text-gray-600 kkk za">{testimonial.author}</h5>
                <h5 className="mt-2 text-gray-600 kkk a">{testimonial.name}</h5>
                <h5 className="mt-2 text-gray-600 kkk aa">
                  <em>{testimonial.position}</em>
                </h5>
                <h5 className="text-gray-600 kkk aaa">{testimonial.date}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default Blog;
