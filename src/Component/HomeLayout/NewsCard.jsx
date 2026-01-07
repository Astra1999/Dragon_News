import React from 'react';
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {

    // const {author,title,image_url} = news

    // const {name, published_date, img} = author

    const {
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
        tags,
    } = news;


    return (
        // <div>
        //     <div className='bg-base-300 py-3 my-3'>
        //        <div className='flex gap-4'>
        //         <figure>
        //             <img className='rounded-full h-10 w-10' src={img} alt="Author_image" />
        //         </figure>
        //         <div className='items-center'>
        //             <h1 className='font-bold text-sm'>{name}</h1>
        //             <p className='text-accent text-[12px]'>{published_date}</p>
        //         </div>

        //        </div>
        //     </div>
        //     <h2 className='font-bold'>{title}</h2>
        //     <img src={image_url} alt="" />
        // </div>



        <div className="card bg-base-100 shadow-md ">
            {/* Author Header */}
            <div className="flex items-center justify-between p-4 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-sm">{author?.name}</h4>
                        <p className="text-xs text-gray-500">
                            {new Date(author?.published_date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Thumbnail */}
            <figure>
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="object-cover"
                />
            </figure>

            {/* Content */}
            <div className="card-body">
                <h2 className="card-title text-lg leading-snug">{title}</h2>

                <p className="text-sm text-gray-600">
                    {details.slice(0, 150)}...
                    <span className="text-primary cursor-pointer font-medium">
                        {" "}Read More
                    </span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-outline text-xs"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={`text-sm ${i < rating.number ? "text-orange-400" : "text-gray-300"
                                    }`}
                            />
                        ))}
                        <span className="text-sm ml-1 font-medium">
                            {rating.number}
                        </span>
                        {rating.badge && (
                            <span className="badge badge-warning badge-sm ml-2 capitalize">
                                {rating.badge}
                            </span>
                        )}
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default NewsCard;