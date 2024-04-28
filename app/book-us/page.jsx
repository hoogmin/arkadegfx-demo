"use client"

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookUsPage = () => {

    const bookingSubmitHandler = () => {
        toast.success("Booking request sent!");
        const confirmText = document.getElementById("confirmText");
        confirmText.classList.remove("hidden");
    }

    return (
        <div className="overflow-x-hidden max-w-[100%] flex flex-col justify-center items-center w-[100vw] h-[100vh] mx-auto bg-[url('/img/bookus_bg.jpg')] bg-center px-8 pt-6 pb-8">
            <div className="mb-4">
                <label 
                className="block text-white text-sm font-bold mb-2 drop-shadow-md" 
                htmlFor="name">
                    Name
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline" 
                id="name"
                placeholder="Your Name"
                type="text" />
            </div>
            <div className="mb-4">
                <label 
                className="block text-white text-sm font-bold mb-2 drop-shadow-md" 
                htmlFor="email">
                    Email
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline" 
                id="email"
                placeholder="person@example.com"
                type="email" />
            </div>
            <div className="mb-4">
                <label 
                className="block text-white text-sm font-bold mb-2 drop-shadow-md" 
                htmlFor="message">
                    Booking Message
                </label>
                <textarea 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline"
                placeholder="I would like to book for Saturday at 3:30 PM..."
                name="message" 
                id="message" 
                cols="30" 
                rows="10">
                </textarea>
            </div>
            <div className="flex flex-col items-center justify-between">
                <button 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={bookingSubmitHandler}>
                    Submit
                </button>
                <p className="hidden text-green-400 text-bold drop-shadow-md bg-gray-500 mt-3 rounded p-2" id="confirmText">
                    Sent! An Email from us will confirm your booking.
                </p>
                <ToastContainer/>
            </div>
        </div>
    )
}

export default BookUsPage;