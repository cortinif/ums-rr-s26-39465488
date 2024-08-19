import { createPortal } from "react-dom";
import { motion } from "framer-motion";

// const hiddenAnimationState = { opacity: 0, y: 30 };

export default function Modal({ title, children, onClose }) {
	return createPortal(
		<>
			<div className="backdrop" onClick={onClose} />
			<motion.dialog
				variants={{
					hidden: { opacity: 0, y: 30 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate="visible"
				exit="hidden"
				// initial={hiddenAnimationState}
				// animate={{ opacity: 1, y: 0 }}
				// exit={hiddenAnimationState}
				// transition={{ type: "spring", duration: 0.8, bounce: 1 }}
				style={{ "overflow-x": "hidden" }}
				open
				className="modal"
			>
				<h2>{title}</h2>
				{children}
			</motion.dialog>
		</>,
		document.getElementById("modal")
	);
}
