// top card in smaller screens

import { FunctionComponent, FC, memo, useState } from 'react';
import { motion, useMotionValue } from "framer-motion";


interface LeftCardProps {
    pointOfInterest?: number;
    isSelected: boolean,
}

interface TitleProps {
    title: string
}

const Title: FC<TitleProps> = ({
    title 
}) => {
    return (
        <div>
            <span className='card-title'>{title}</span>
        </div>
    )
}

const Overlay: FC<LeftCardProps> = ({
    isSelected
}) => (
    <div>

    </div>
)

const dismissDragDistance: number = 150;
 
const LeftCard = memo(({
    pointOfInterest = 0,
    isSelected
}: LeftCardProps) => {

    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);
    const [isOpened, setIsOpened] = useState<number>(0);

    const checkTapToDismiss = () => {

    }

    const checkDragToDismiss = () => {
        y.get() > dismissDragDistance && setIsOpened(0);
    }

    const checkZIndex = () => {

    }

    return (
    <div className='card-item'>
    <Overlay isSelected={isSelected}/>
    <motion.div className={`left-card-container ${isSelected && "open"}`} style={{ zIndex, y }} drag={isSelected ? "y" : false} onDrag={checkDragToDismiss} onUpdate={checkZIndex} layout>
        <motion.article className="left-card" initial={false} animate={ isSelected ? {x: -20, y: -20} : {x: -pointOfInterest, y: 0 }}>
            <Title title='Painting'/>
        </motion.article>
    </motion.div>
    </div>
    );
}
);

 
export default memo(LeftCard);