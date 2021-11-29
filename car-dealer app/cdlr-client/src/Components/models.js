import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  { db }  from '../FB/Firebase';
import firebase from 'firebase';
import { Container, makeStyles } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import bmw from '../images/logos/BMWlogo.png';
import merc from '../images/logos/mercedeslogo.png';
import audi from '../images/logos/audilogo.png';
import ferrari from '../images/logos/ferrarilogo.png';
import lamborghini from '../images/logos/lamborghinilogo.png';
import kia from '../images/logos/kialogo.png';
import jeep from '../images/logos/jeeplogo.png';
import nissan from '../images/logos/nissan-logo.png';
import maserati from '../images/logos/maserati.png';
import ford from '../images/logos/fordlogo.png';
import porsche from '../images/logos/porschelogo.png';
import lr from '../images/logos/landroverlogo.png';
import subaru from '../images/logos/subarulogo.png';
import vw from '../images/logos/vwlogo.png';

import bgvid from '../images/vid/senna.mp4'
import vidPoster from '../images/vid/sennaposter.png'

import particBg from '../images/others/modelback1.jpg'

const useStyles = makeStyles((theme) => {
  return {
   modelsContainer: {
     marginTop: '-610px'
   },
   modelsList: {
    marginTop: '120px',
    display: 'flex',
    padding: '3rem',
    paddingRight: '8rem',
    overflowX: 'scroll',
   },
   modelCard: {
    clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
    height: '200px',
    maxWidth: '230px',
    minWidth: '170px',
    //padding: '1rem',
    display: 'flex',
    marginLeft: '-1.8rem',
    background: 'black',
    flexDirection: 'column',
    position: 'relative',
    scrollSnapAlign: 'start',
    boxShadow: '-1rem 0 3rem #000',
    justifyContent: 'center',

   },
   modelCardMask: {
    clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
    height: '200px',
    maxWidth: '230px',
    minWidth: '170px',
    padding: '1px',
    paddingLeft: '35px',
    paddingTop: '4px',
    paddingBottom: '1px',
    paddingRight: '5px',
    display: 'flex',
    marginLeft: '-2.5rem',
    marginRight: '-2rem',
    background: 'grey',
    flexDirection: 'column',
    position: 'relative',
    scrollSnapAlign: 'start',
    margin: 0,
   },
   modelImg: {
     width: '150px',
     height: 'auto',
     alignSelf: 'center',
     justifySelf:'center',
     opacity: '0.5',
   },
   modelImgSM: {
    width: '120px',
    height: 'auto',
    alignSelf: 'center',
    justifySelf:'center',
    opacity: '0.5'
  },
  modelImgXM: {
    width: '90px',
    height: 'auto',
    alignSelf: 'center',
    justifySelf:'center',
    opacity: '0.5'
  },
  modelImgSF: {
    width: '120px',
    height: 'auto',
    alignSelf: 'center',
    justifySelf:'center',
  },
  modelImgL: {
    width: '180px',
    height: 'auto',
    alignSelf: 'center',
    justifySelf:'center',
    opacity: '0.5'
  },
  videoContainer: {
    scrollSnapAlign: 'end',
    marginLeft: '-250px',
    width: '120%',
    maxWidth: '120%',
    height: 'auto',
    backgroundAttachment: 'fixed',
    objectFit: 'cover',
  },
  bgVid: {
    width: '120%',
    maxWidth: '120%',
    height: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundAttachment: 'fixed',
    opacity: '0.6',
    marginLeft: '-250px',
    objectFit: 'cover',
  },
  modelsWrap: {
    textAlign: 'center',
    alignSelf: 'center',
    padding: '1rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginLeft: '-150px',
  },
  actualModelsText: {
    textDecoration: 'line-through',
    textTransform: 'uppercase',
    fontSize: '7rem',
    position: 'relative',
    whiteSpace: 'nowrap',
    letterSpacing: '0.2rem',
    display: 'flex',
    textAlign: 'center',
    marginTop: '-330px',
  },
  testLinks: {
    textAlign: 'center',
    zIndex: 20
  },
  vidTextWrap: {
    position: 'absolute',
    display: 'flex',
    height: '100%',
    // fontSize: '7.5rem',
    marginLeft: '300px',
    marginTop: '-1050px'
  },
  vidTextWrap2: {
    position: 'absolute',
    // fontSize: '7.5rem',
    display: 'flex',
    marginLeft: '600px',
    marginTop: '-900px'
  }
  }
})


const modelsCont = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    // staggerChildren: 0.9,
    // staggerDirection: 1
  }
}

const modelItem = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 0.8,
    }
  }
}

const modelItem1 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 0.6,
    }
  }
}

const modelItem1img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 0.6,
    }
  }
}

const modelItem2 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 0.8,
    }
  },
  anim: {
    y: -20,
    x: -40,
    scale: 1.2,
    rotate: 360,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.2
    },
  },
}

const modelItem2img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 0.8,
    }
  }
}

const modelItem3 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 1,
    }
  },
  anim: {
    y: -20,
    x: -40,
    scale: 1.2,
    rotate: 360,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.2
    },
  },
}

const modelItem3img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 1,
    }
  }
}

const modelItem4 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 1.2,
    }
  },
  anim: {
    y: -20,
    x: -40,
    scale: 1.2,
    rotate: 360,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.2
    },
  },
}

const modelItem4img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.85,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 1.2,
    }
  }
}

const modelItem5 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 1.4,
    }
  },
  anim: {
    y: -20,
    x: -40,
    scale: 1.2,
    rotate: 360,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.2
    },
  },
}

const modelItem5img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 1.4,
    }
  }
}

const modelItem6 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 1.6,
    }
  },
  anim: {
    y: -20,
    x: -40,
    scale: 1.2,
    rotate: 360,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.2
    },
  },
}

const modelItem6img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 1.6,
    }
  }
}

const modelItem7 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 1.8,
    }
  },
  anim: {
    y: -20,
    x: -40,
    scale: 1.2,
    rotate: 360,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.2
    },
  },
}

const modelItem7img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 1.8,
    }
  }
}

const modelItem8 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 2,
    }
  },
  anim: {
    y: -20,
    x: -40,
    scale: 1.2,
    rotate: 360,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.2
    },
  },
}

const modelItem8img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 2,
    }
  }
}

const modelItem9 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 2.2,
    }
  },
  anim: {
    y: -20,
    x: -40,
    scale: 1.2,
    rotate: 360,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.2
    },
  },
}

const modelItem9img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 2.2,
    }
  }
}

const modelItem10 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 2.4,
    }
  },
  anim: {
    y: -20,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.1
    },
  }
}

const modelItem10img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 2.4,
    }
  }
}

const modelItem11 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 2.6,
    }
  },
  anim: {
    y: -20,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.1
    },
  }
}

const modelItem11img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 2.6,
    }
  }
}

const modelItem12 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 2.8,
    }
  },
  anim: {
    y: -20,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.1
    },
  }
}

const modelItem12img = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 0.5,
    y: 0,
    transition: {
      ease:  [.2, .01, -.05, .85],
      duration: 1.6,
      delay: 2.8,
    }
  }
}

const textCont = {
  show: {
    staggerChildren: 0.7,
    staggerDirection: 1
  }
}

const letter1= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 0
    }
  },
}
const letter2= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 0.2
    }
  },
}
const letter3= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 0.4
    }
  },
}
const letter4= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 0.6
    }
  },
}
const letter5= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 0.8
    }
  },
}
const letter6= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 1
    }
  },
}
const letter7= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 1.4
    }
  },
}
const letter8= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 1.6
    }
  },
}
const letter9= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 1.8
    }
  },
}
const letter10= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 2.0
    }
  },
}
const letter11= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 2.2
    }
  },
}
const letter12= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 2.4
    }
  },
}
const letter13= {
  hidden: {
    opacity: 0,
      x: 1400
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.9,
      delay: 2.6
    }
  },
}



const vidLetter1 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0
    }
  }
}

const vidLetter2 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.2
    }
  }
}

const vidLetter3 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 0.4
    }
  }
}

const vidLetter4 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 0.8
    }
  }
}

const vidLetter5 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 1.0
    }
  }
}

const vidLetter6 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 1.2
    }
  }
}

const vidLetter7 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 1.6
    }
  }
}

const vidLetter8 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 1.7
    }
  }
}

const vidLetter9 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 1.8
    }
  }
}

const vidLetter10 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 1.9
    }
  }
}

const vidLetter11 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 2.0
    }
  }
}

const vidLetter12 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 2.1
    }
  }
}

const vidLetter13 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 2.2
    }
  }
}

const vidLetter14 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 2.3
    }
  }
}

const vidLetter15 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 2.4
    }
  }
}

const vidLetter16 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 2.5
    }
  }
}

const vidLetter17 = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.2, .01, -.05, .85],
      duration: 1,
      delay: 2.6
    }
  }
}

const modelsListAnim =  {
  init: {
    y: 0,
    x: 0,
  },
  anim: {
    y: -20,
    x: -40,
    scale: 1.2,
    rotate: 360,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.2
    },
  },
}

const Models = () => {

    const [models, setModels] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const classes = useStyles();

// useAnimation hook
    const controls = useAnimation();
    const controlsVid = useAnimation();


// video section

const [vidRef, inViewVid] = useInView({
  triggerOnce: true,
})

    useEffect(() => {
      if (inViewVid) {
        controlsVid.start('show');
        console.log('in view vid');
      }
      if (!inViewVid) {
        controlsVid.start('hidden');
      }
    }, [controlsVid, inViewVid]);  
  

// particularize section
const [ref, inView] = useInView({
  triggerOnce: true,
});

useEffect(() => {
  if (inView) {
    controls.start('show');
    console.log('in view');
  }
  if (!inView) {
    controls.start('hidden');
  }
}, [controls, inView]);

    useEffect(() => {
        const dataList = [];
        const ref = db
        .collection("newVehicle")
        .onSnapshot((querySnapshot) => {
         querySnapshot.forEach((doc) => {
        dataList.push(doc.data());
      })
      setModels(dataList);
      setLoading(false);
    })
    return () => ref();
    }, [loading]);

    
  
    
    console.log(models);



    return (<motion.div className="outerContainer">

      <div className={classes.videoContainer}>

      <video className={classes.bgVid} src={bgvid} muted="muted" preload="metadata"  loop="loop" autoplay="autoplay" webkit-playsinline="webkit-playsinline" playsinline="playsinline" data-object-fit="cover"></video>
      </div>
      <motion.div className={classes.vidTextWrap} initial="hidden" animate={controlsVid}>
      <motion.span className="mainTextVid" variants={vidLetter1} ref={vidRef}>B</motion.span>
      <motion.span className="mainTextVid" variants={vidLetter2} ref={vidRef}>e</motion.span>
      <motion.span className="mainTextVid" variants={vidLetter3} ref={vidRef}>y</motion.span>
      <motion.span className="mainTextVid" variants={vidLetter4} ref={vidRef}>o</motion.span>
      <motion.span className="mainTextVid" variants={vidLetter5} ref={vidRef}>n</motion.span>
      <motion.span className="mainTextVid" variants={vidLetter6} ref={vidRef}>d</motion.span>
      </motion.div>

      <motion.div className={classes.vidTextWrap2} initial="hidden" animate={controlsVid}>
      <motion.span className="mainTextVid2" variants={vidLetter7} ref={vidRef}>e</motion.span>
      <motion.span className="mainTextVid2" variants={vidLetter8} ref={vidRef}>x</motion.span>
      <motion.span className="mainTextVid2" variants={vidLetter9} ref={vidRef}>p</motion.span>
      <motion.span className="mainTextVid2" variants={vidLetter10} ref={vidRef}>e</motion.span>
      <motion.span className="mainTextVid2" variants={vidLetter11} ref={vidRef}>c</motion.span>
      <motion.span className="mainTextVid2" variants={vidLetter12} ref={vidRef}>t</motion.span>
      <motion.span className="mainTextVid2" variants={vidLetter13} ref={vidRef}>a</motion.span>
      <motion.span className="mainTextVid2" variants={vidLetter14} ref={vidRef}>t</motion.span>
      <motion.span className="mainTextVid2" variants={vidLetter15} ref={vidRef}>i</motion.span>
      <motion.span className="mainTextVid2" variants={vidLetter16} ref={vidRef}>o</motion.span>
      <motion.span className="mainTextVid2" variants={vidLetter17} ref={vidRef}>n</motion.span>
      </motion.div>
      
      {/* <h1 className="mainTextVid2">Expectation</h1> */}

      <div className="subTextWrap">
      <h2 className="vidText">Experience prestige, luxury and safety</h2>
      <h2 className="vidText">High quality deals from the global market</h2>
      <h2 id="lastTextChild" className="vidText">Stay classy</h2>
      </div>

      <Link to="" className="vidBtn">
          Go for a ride
      </Link>

 

      <div id="modelsWrap">

        <motion.div className={classes.modelsWrap} variants={textCont}initial="initial" animate={controls}>

        <motion.span className={classes.actualModelsText} variants={letter1} ref={ref}>p</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter2} ref={ref}>a</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter3} ref={ref}>r</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter4} ref={ref}>t</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter5} ref={ref}>i</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter6} ref={ref}>c</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter7} ref={ref}>u</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter8} ref={ref}>l</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter9} ref={ref}>a</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter10} ref={ref}>r</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter11} ref={ref}>i</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter12} ref={ref}>Z</motion.span>
        <motion.span className={classes.actualModelsText} variants={letter13} ref={ref}>e</motion.span>

        </motion.div>


    <div id="modelsContainer" className={classes.modelsContainer}>
    <motion.section className={classes.modelsList} variants={modelsCont} initial="hidden" animate={controls}>

      <motion.article 
      className={classes.modelCardMask} 
      variants={modelItem2} ref={ref} initial={modelsListAnim.init} whileHover={modelsListAnim.anim}>
        <Link to="/vehicles/particular/BMW">
        <motion.article id="modelBMW" className={classes.modelCard}>
          <motion.img className={classes.modelImgSM} src={bmw} alt="" variants={modelItem1img} ref={ref} />
        </motion.article>
        </Link>

         </motion.article>

        <motion.article 
           className={classes.modelCardMask} 
          variants={modelItem2}  ref={ref}  initial={modelsListAnim.init} whileHover={modelsListAnim.anim}>
              <Link to="/vehicles/particular/Mercedes">
              <motion.article id="modelMerc" className={classes.modelCard}>
              <motion.img className={classes.modelImg} src={merc} alt="" variants={modelItem2img} ref={ref} />
             </motion.article>
              </Link>
        </motion.article>

        <motion.article 
          id="modelAudi" 
          className={classes.modelCardMask} 
          variants={modelItem3}  initial={modelsListAnim.init} ref={ref} whileHover={modelsListAnim.anim}>
              <Link to="/vehicles/particular/Audi">
             <motion.article className={classes.modelCard}>
             <motion.img className={classes.modelImg} src={audi} alt=""
               variants={modelItem3img} ref={ref} />
             </motion.article>
              </Link>
             </motion.article>

      <motion.article 
      id="modelFerrari" 
      className={classes.modelCardMask} 
      variants={modelItem4}  initial={modelsListAnim.init} ref={ref} whileHover={modelsListAnim.anim} >
        <Link to="/vehicles/particular/Ferrari">
        <motion.article id="modelFerrari" className={classes.modelCard}>
          <motion.img className={classes.modelImgSF} src={ferrari} alt="" variants={modelItem4img} ref={ref} />
        </motion.article>
        </Link>
      </motion.article>

      <motion.article 
      id="modelNissan" 
      className={classes.modelCardMask} 
      variants={modelItem5}  initial={modelsListAnim.init} ref={ref} whileHover={modelsListAnim.anim}>
        <Link to="/vehicles/particular/Nissan">
        <motion.article className={classes.modelCard}>
          <motion.img className={classes.modelImgSM} src={nissan} alt="" variants={modelItem5img} ref={ref} />
        </motion.article>
        </Link>

      </motion.article>

      <motion.article 
      id="modelJeep" 
      className={classes.modelCardMask}
      variants={modelItem6} initial={modelsListAnim.init} ref={ref} whileHover={modelsListAnim.anim}>
        <Link to="/vehicles/particular/Jeep">
        <motion.article className={classes.modelCard}>
          <motion.img className={classes.modelImgL} src={jeep} alt="" variants={modelItem6img} ref={ref}/>
        </motion.article>
        </Link>
      </motion.article>

      <motion.article 
      id="modelKia" 
      className={classes.modelCardMask} 
      variants={modelItem7} initial={modelsListAnim.init} ref={ref} whileHover={modelsListAnim.anim}>
        <Link to="/vehicles/particular/KIA">
        <motion.article className={classes.modelCard}>
          <motion.img className={classes.modelImg} src={kia} alt="" variants={modelItem7img} ref={ref} />
        </motion.article>
        </Link>
      </motion.article>

      <motion.article id="modelFord" className={classes.modelCardMask} variants={modelItem8} initial={modelsListAnim.init} ref={ref} whileHover={modelsListAnim.anim}  >
      <Link to="/vehicles/particular/Ford">
        <motion.article className={classes.modelCard}>
          <motion.img className={classes.modelImgL} src={ford} alt="" variants={modelItem8img} ref={ref}/>
        </motion.article>
      </Link>
      </motion.article>

      <motion.article 
      id="modelLandRover" 
      className={classes.modelCardMask} 
      variants={modelItem9} initial={modelsListAnim.init} ref={ref} whileHover={modelsListAnim.anim}>
        <Link to="/vehicles/particular/LandRover">
        <motion.article className={classes.modelCard}>
          <motion.img className={classes.modelImgL} src={lr} alt="" variants={modelItem9img} ref={ref} />
        </motion.article>
      </Link>
      </motion.article>

      <motion.article 
      id="modelPorsche" 
      className={classes.modelCardMask} 
      variants={modelItem10} 
      initial={modelsListAnim.init} ref={ref} whileHover={modelsListAnim.anim} >
      <Link to="/vehicles/particular/Porsche">
        <motion.article id="modelPorsche" className={classes.modelCard}>
          <motion.img className={classes.modelImgXM} src={porsche} alt="" variants={modelItem10img} ref={ref} />
        </motion.article>
      </Link>
      </motion.article>

      <motion.article 
      id="modelLamborghini" 
      className={classes.modelCardMask} 
      variants={modelItem11} initial={modelsListAnim.init} ref={ref} whileHover={modelsListAnim.anim}>
      <Link to="/vehicles/particular/Lamborghini">
        <motion.article id="modelLamborghini" className={classes.modelCard}>
          <motion.img className={classes.modelImg} src={lamborghini} alt="" variants={modelItem11img} ref={ref} />
        </motion.article>
      </Link>
      </motion.article>

      <motion.article 
      id="modelMaserati" 
      className={classes.modelCardMask}
      variants={modelItem12} initial={modelsListAnim.init} whileHover={modelsListAnim.anim}>
      <Link to="/vehicles/particular/Maserati">
         <motion.article id="modelMaserati" className={classes.modelCard}>
          <motion.img className={classes.modelImgXM} src={maserati} alt="" variants={modelItem12img}/>
        </motion.article>
      </Link>
      </motion.article>

      <motion.article 
      id="modelVW" 
      className={classes.modelCardMask} 
      variants={modelItem12} initial={modelsListAnim.init} whileHover={modelsListAnim.anim}
     >
        <Link to="/vehicles/particular/VolksWagen">
        <motion.article id="modelVW" className={classes.modelCard}>
          <motion.img className={classes.modelImg} src={vw} alt=""  />
        </motion.article>
        </Link>
      </motion.article>

      <motion.article 
      id="modelSubaru" 
      className={classes.modelCardMask}
      variants={modelItem12} initial={modelsListAnim.init} whileHover={modelsListAnim.anim}
      >
        <Link to="/vehicles/particular/Subaru">
        <motion.article id="modelSubaru" className={classes.modelCard}>
          <motion.img className={classes.modelImgL} src={subaru} alt="" />
        </motion.article>
        </Link>
      </motion.article>

    </motion.section>
    </div>
    </div>
    </motion.div>);
}
 
export default Models;
