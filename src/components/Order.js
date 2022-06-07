import React from 'react';
import { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';



const containerVariants={
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity: 1,
    x:0,
    transition:{
      type:'spring',
      mass:0.3,
      damping:8,
      when:'beforeChildren',
      staggerChildren:0.4
    }
  },
  exit:{
    x:'-100vw',
    transition: {
      ease:'easeInOut'
    }
  }
}

const childrenVariants={
  hidden:{
    opacity: 0,
  },
  visible:{
    opacity: 1,
  }
}

const Order = ({ pizza,setShowModal }) => {
  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true)
    },5000)
  },[setShowModal])
  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    >
      <motion.h2>Thank you for your order :)</motion.h2>
      <motion.p
      variants={childrenVariants}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
      variants={childrenVariants}
      >
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;