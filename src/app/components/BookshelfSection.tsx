"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  spineColor: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "/books/alchemist/cover.jpg",
    spineColor: "bg-[url('/books/alchemist/spine.jpg')] bg-cover bg-center",
  },
  {
    id: 2,
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    cover: "/books/narnia/cover.jpg",
    spineColor: "bg-[url('/books/narnia/spine.jpg')] bg-cover bg-center",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    cover: "/books/rich/cover.jpg",
    spineColor: "bg-[url('/books/rich/spine.jpg')] bg-cover bg-center",
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "/books/mockingbird/cover.jpg",
    spineColor: "bg-[url('/books/mockingbird/spine.jpg')] bg-cover bg-center",
  },
  {
    id: 5,
    title: "Abar tora Kipte Ho",
    author: "Anisul Haque",
    cover: "/books/kipte/cover.jpg",
    spineColor: "bg-[url('/books/kipte/spine.jpg')] bg-cover bg-center",
  },
  {
    id: 6,
    title: "The Let them theory",
    author: "Mel Robbins",
    cover: "/books/let/cover.jpg",
    spineColor: "bg-[url('/books/let/spine.jpg')] bg-cover bg-center",
  },
  {
    id: 7,
    title: "The 5 AM Club",
    author: "Robin Sharma",
    cover: "/books/5am/cover.jpg",
    spineColor: "bg-[url('/books/5am/spine.jpg')] bg-cover bg-center",
  },
];

const BookshelfSection = () => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 overflow-x-clip">
      <div className="max-w-6xl w-full">
        
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-3xl md:text-4xl" style={{ color: '#DEB34B', fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600 }}>
            handpicked my Favorite Books
          </p>
        </motion.div>

        {/* Bookshelf */}
        <div className="relative">

          {/* Books Container */}
          <motion.div
            className="flex justify-center items-end gap-1 pb-0 perspective-1000" 
            style={{ perspective: "2000px", marginTop: "0" }} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }} 
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                variants={{
                  hidden: { y: -100, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 14
                    }
                  }
                }}
                style={{
                  zIndex: hoveredBook === book.id ? 50 : 10 - index,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="relative transition-all duration-500 ease-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      hoveredBook === book.id
                        ? "translateZ(100px) translateY(-40px) rotateY(-25deg)"
                        : "translateZ(0) translateY(0) rotateY(0)",
                  }}
                  onMouseEnter={() => setHoveredBook(book.id)}
                  onMouseLeave={() => setHoveredBook(null)}
                >
                  {/* Book Spine */}
                  <div
                    className={`relative w-12 h-80 bg-gradient-to-r ${book.spineColor} rounded-sm shadow-xl cursor-none transition-all duration-500`}
                    style={{
                      opacity: hoveredBook === book.id ? 0 : 1,
                      transform: hoveredBook === book.id ? "rotateY(90deg)" : "rotateY(0)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 rounded-sm" />

                    {/* Spine Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                    </div>

                    {/* Spine Details */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                  </div>

                  {/* Book Cover Hover View */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500"
                    style={{
                      width: "240px",
                      height: "360px",
                      opacity: hoveredBook === book.id ? 1 : 0,
                      transform:
                        hoveredBook === book.id
                          ? "translateZ(0px) rotateY(0deg) scale(1)"
                          : "translateZ(-50px) rotateY(-90deg) scale(0.8)",
                      transformStyle: "preserve-3d",
                      pointerEvents: hoveredBook === book.id ? "auto" : "none",
                    }}
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                      <Image
                        src={book.cover}
                        alt={`${book.title} by ${book.author}`}
                        className="w-full h-full object-cover"
                        fill
                        sizes="(max-width: 600px) 100vw, 240px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30" />

                      {/* Book Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4">
                        <h3 className="text-white font-bold text-lg mb-1">
                          {book.title}
                        </h3>
                        <p className="text-white/80 text-sm">{book.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Shelf */}
          <motion.div 
            className="relative bg-gradient-to-b from-shelf-wood to-shelf-wood/90 h-6 rounded-lg shadow-2xl"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BookshelfSection;