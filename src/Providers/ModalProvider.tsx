"use client";
import React, { createContext, useContext, ReactNode } from "react";
// import { Modal } from "antd";

interface ModalContextType {
	name: string;
}

export const ModalContext = createContext<ModalContextType | null>({
	name: "Modal",
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ModalContext.Provider value={{ name: "Modal" }}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = (): ModalContextType => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};
