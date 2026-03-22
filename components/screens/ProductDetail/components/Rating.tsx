import React from 'react';
import { Star, MessageCircle, ThumbsUp, CheckCircle2 } from 'lucide-react';

const ratings = {
  average: 4.8,
  total: 124,
  distribution: [
    { stars: 5, percentage: 75, count: 93 },
    { stars: 4, percentage: 15, count: 18 },
    { stars: 3, percentage: 5, count: 6 },
    { stars: 2, percentage: 3, count: 4 },
    { stars: 1, percentage: 2, count: 3 },
  ]
};

const reviews = [
  {
    id: 1,
    user: "Alex Johnson",
    date: "October 12, 2026",
    rating: 5,
    title: "Excellent quality and fit!",
    comment: "I absolutely love this product. The material feels premium and the golden accents really make it stand out. It fits perfectly true to size.",
    likes: 12,
    verified: true,
  },
  {
    id: 2,
    user: "Sarah Michaels",
    date: "September 28, 2026",
    rating: 4,
    title: "Very good, but slightly expensive",
    comment: "The overall look is stunning. It definitely feels like a luxury item. My only gripe is the price tag, but given the quality, it's justifiable.",
    likes: 5,
    verified: true,
  },
  {
    id: 3,
    user: "Michael Scott",
    date: "September 15, 2026",
    rating: 5,
    title: "Best purchase of the year",
    comment: "The aesthetic is just what I was looking for. Black and gold is such a timeless combination. Highly recommend to anyone on the fence.",
    likes: 24,
    verified: true,
  }
];

export default function Rating() {
  const renderStars = (rating: number, size = 16) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={size}
        className={`${
          i < Math.floor(rating)
            ? "fill-primary text-primary"
            : "text-muted"
        }`}
      />
    ));
  };

  return (
    <div className="w-full mt-16 md:mt-24 border-t border-border pt-12">
      <div className="flex flex-col mb-12">
        <h2 className="text-2xl text-primary tracking-tight text-foreground uppercase mb-2">Customer Reviews</h2>
        <p className="text-muted-foreground">Read what our customers are saying about this product.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
        {/* Rating Overview */}
        <div className="flex flex-col md:flex-row lg:flex-col gap-8 lg:gap-10 w-full lg:w-1/3">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-6xl text-primary text-foreground">{ratings.average}</span>
                <div className="flex flex-col">
                  <div className="flex mb-1">
                    {renderStars(ratings.average, 20)}
                  </div>
                  <span className="text-sm text-muted-foreground">{ratings.total} Reviews</span>
                </div>
              </div>
            </div>

            {/* Distribution */}
            <div className="flex flex-col flex-1 space-y-2.5 w-full">
              {ratings.distribution.map((bar) => (
                <div key={bar.stars} className="flex items-center gap-4">
                  <span className="text-sm w-12 text-foreground font-medium flex items-center gap-1">
                    {bar.stars} <Star size={12} className="fill-muted text-muted"/>
                  </span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${bar.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-10 text-right">
                    {bar.percentage}%
                  </span>
                </div>
              ))}
            </div>
            
            <button className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm rounded-md hover:opacity-90 transition shadow-sm">
              Write a Review
            </button>
        </div>

        {/* Reviews List */}
        <div className="flex flex-col space-y-6 w-full lg:w-2/3">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col p-6 rounded-2xl bg-white border border-border/50 shadow-sm hover:border-primary/50 text-black transition-colors duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-lg">{review.user}</h3>
                    {review.verified && (
                      <span className="flex items-center text-[10px] text-primary uppercase font-bold tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                        <CheckCircle2 size={10} className="mr-1" /> Verified
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex">
                  {renderStars(review.rating, 14)}
                </div>
              </div>
              
              <h4 className="font-medium text-foreground mb-2 text-md">{review.title}</h4>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-6 mt-auto">
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                  <ThumbsUp size={14} />
                  <span>Helpful ({review.likes})</span>
                </button>
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                  <MessageCircle size={14} />
                  <span>Reply</span>
                </button>
              </div>
            </div>
          ))}
          
          <div className="pt-4 flex justify-center lg:justify-start">
            <button className="px-6 py-2.5 bg-transparent border border-border text-foreground font-medium rounded-full hover:bg-secondary hover:text-foreground transition-all duration-300 text-sm">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
