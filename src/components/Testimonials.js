import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="title">Testimonials from our adventurers</h3>
      <hr/>
      <p className="quote">Wow! This camp made me realise how much I love yoga. After going on one of the hikes, I can safely say that trees are my favourite geographic feature, and my favourite word that starts with T.</p>
      <p className="author">- Colonel Von Ribbentrop</p>
      <p className="quote">I never understood why people cared so much about themselves. But then I went on one of these adventures. Now I can't understand people who <em>don't</em> care about themselves!</p>
      <p className="author">- David Jones</p>
      <p className="quote">If you want to understand the universe, head on one of these adventures. I mean, seriously. It's like, woah. You know? It's like that.</p>
      <p className="author">- Bill Shakespeare</p>
      <div className="testimonials__image"><img src="/images/testimonial-gus.jpg" alt="A happy Gus"/></div>
    </section>
  )
}

export default Testimonials
