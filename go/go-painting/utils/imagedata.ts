const glob = require('glob');
const fs = require('fs');

 __dirname = "../public/galleryitems";
 

 export const getImageData = async () => {
     const getImages = async () => {
          return new Promise<Array<string>>((resolve) => {
               glob(__dirname + '/**/*.+(png|jpg|webp)', {}, (err: Error, files: Array<string>) => {
                         if (err) {
                              throw new Error("No images found");
                         }
                         else {
                              resolve(files);
                         }
                    })
               })
     }

     const images: Array<string> = await getImages().then((results: Array<string>) => {
          return results;
      })
      const allImages = await Promise.all(images).then(
           (res) => {
                return res;
           }
      )
      return {allImages}
}

getImageData();