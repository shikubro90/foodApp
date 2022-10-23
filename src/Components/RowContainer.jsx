import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";

const RowContainer = ({ flag, data, scrollValue, setIsLoading}) => {
  useEffect(() => {
    setIsLoading(false)
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);


  const rowContainer = useRef();

  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 items-center flex gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              className="w-275 min-h-[220px] min-w-[275px] md:w-300 md:min-w-[300px] my-12 px-4 py-2  backdrop-blur-lg bg-cardOverlay rounded-lg drop-shadow-lg hover:drop-shadow-2xl flex flex-col items-center justify-evenly relative"
            >
              <div className="w-full flex items-center justify-between">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={item.imageURL}
                  alt=""
                  className="w-40 -mt-8 drop-shadow-2xl"
                />
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
              <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Calories {item.calories}
                </p>
                <div className="flex item-center gap-8">
                  <p className="text-lg text-textColor font-semibold">
                    <span className="text-sm text-red-500">$</span> {item.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })
        }
    </div>
  );
};

export default RowContainer;
