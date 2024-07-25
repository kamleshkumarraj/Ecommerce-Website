import Avatar from "react-avatar"


// eslint-disable-next-line react/prop-types
function RatingAndReview({product}) {
  return (
    <div id="reveies-rating" className="max-w-[138rem] mx-auto p-[2rem]">
            <h1 className="text-[2.4rem] font-[600] my-[4rem]">Rating And Reviews</h1>

            <div id="rating-box" className="w-[100%] rounded-[1rem] border-[.5px] border-[#0000012] p-[2rem]">
                
                {
                    // eslint-disable-next-line react/prop-types
                    product.reviews.map((review , idx) => {
                        return <div className="flex gap-[1rem] my-[1rem]" id='review-box' key={idx}>
                            <div id="avtar" className=""> <Avatar size='50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZtMck6pnOOmqzlKgAAeqp9WRTY8dTW5a0Q&s" round/> </div>
                            <div id="details">
                                <p className="text-[2rem] font-[600] " key={idx}>{review.reviewerName}</p>
                                <p className="text-[1.4rem]">{review.reviewerEmail}</p>
                                <p className="message my-[1rem] text-[1.8rem] font-[600]">{review.comment}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
  )
}

export default RatingAndReview
