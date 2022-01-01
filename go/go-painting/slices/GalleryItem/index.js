import React from 'react'
import { PrismicProvider, PrismicText } from '@prismicio/react'

const GalleryItem = ({ slice }) => (
  <section>
    <div>
    { 
    slice?.items?.map((item, i) =>
     <img src={item['gallery-image'].url} alt={item['gallery-image'].alt} />
    )}
  </div>
  <div>
    { 
    slice?.items?.map((item, i) => 
    <PrismicText field={item['gallery-tags']}
    />
    )}
  </div>
  </section>

)

export default GalleryItem