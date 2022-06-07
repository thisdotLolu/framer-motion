import React from "react";
import { Link } from "react-router-dom";
import { motion,AnimatePresence } from "framer-motion";





const backDropVariants={
    visible:{
        opacity:1
    },
    hidden:{
        opacity:0
    }
}
const modalVariants={
    hidden:{
        y:'-100vh',
        opacity: 0
    },
    visible:{
        y:'200px',
        opacity: 1,
        transition:{delay:0.5}
    }

}
const Modal=({showModal,setShowModal})=>{
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal&&(
                <motion.div className="backdrop"
                variants={backDropVariants}
                animate='visible'
                initial='hidden'
                exit='hidden'
                >
                    <motion.div className="modal"
                    variants={modalVariants}
                    initial='hidden'
                    animate='visible'
                    >
                        <p>want to make another pizza?</p>
                        <Link to='/'>
                            <button>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;