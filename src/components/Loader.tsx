import * as motion from "motion/react-client";

const MainLoader = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div>
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 5 }}
            className="text-white text-3xl"
          >
            T
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 10 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl"
          >
            O
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 20 }}
            transition={{ duration: 2 }}
            className="text-white text-3xl"
          >
            D
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 30 }}
            transition={{ duration: 3 }}
            className="text-white text-3xl"
          >
            O
          </motion.div>
        </div>
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 4 }}
          transition={{ duration: 1 }}
          className="text-secondary text-sm"
        >
          Create you task now!
        </motion.div>
      </div>
    </div>
  );
};

const SubmitLoader = () => {
  return (
    <div className="flex justify-center items-center p-2">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.1 }}
        className="bg-white size-1.5 rounded-full"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, 4, 2, 4, 0] }}
        transition={{ duration: 1 }}
        className="bg-white size-1.5 rounded-full"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, 8, 4, 8, 0] }}
        transition={{ duration: 1 }}
        className="bg-white size-1.5 rounded-full"
      />
    </div>
  );
};

export { MainLoader, SubmitLoader };
