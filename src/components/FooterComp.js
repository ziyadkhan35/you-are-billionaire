import React from 'react'

function FooterComp() {
  return (
    <>
        <div className="footer m-5">
            <span className='foot_head fs-2 fw-bold text-uppercase mb-2'>enjoy hd  and latest movies </span>
            <p className='text-start mt-4'>
                <p>Watch Movie - Watch Full HD Movie - Watch 2020 Movie - Watch 2021 Movie - Watch 2022 Movie - Watch Movie With Turkish Subtitles Watch the film</p>
                <p>Watching movies once meant waiting for summer cinemas to come to our neighborhood. During this wait, we would talk as a family about which movie is coming and we wouldn't even realize that we didn't even have the chance to choose! However, thanks to the advancing time and technology, we had the luxury of deciding not only the films we were looking for, but also the quality and sound characteristics of the films we were looking for. In other words, instead of watching movies on rough white screens, we can find the opportunity to watch 720p or 1080p even HD movies and even with bluray image and sound quality.</p>
                <p>Thanks to computers and even smart phones, which are now in almost everyone's home, our enjoyment of watching movies has become almost unlimited. By making only a few minor adjustments, whether from computers or smartphones, we have the opportunity to watch foreign movies not only with the option to watch movies with Turkish subtitles, but also with the option of Turkish dubbing.</p>
                <p>So, is this privilege that time brings us limited to this? Of course no! Because in addition to the option to watch movies with only Turkish subtitles or watch movies with Turkish dubbing, we also decide what kind of movies we can watch, unlike summer cinemas.</p>
            </p>
            <div className="social d-flex align-items-center justify-content-center">
                <span className='me-3'>Follow us | </span>
                <a href="/" className='social_link me-2'><i className="fa-brands fa-instagram"></i></a>
                <a href="/" className='social_link me-2'><i className="fa-brands fa-facebook"></i></a>
                <a href="/" className='social_link me-2'><i className="fa-brands fa-telegram"></i></a>
                <a href="/" className='social_link '><i className="fa-brands fa-twitter"></i></a>
            </div>
            <span className="rights mt-4 text-muted">© 2005-2023 GalaFilm.gf</span>
        </div>
    </>
  )
}

export default FooterComp