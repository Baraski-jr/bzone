
import React from 'react'

const CollectionCategoriesSkeleton: React.FC = () => {
    return (
        <section className="mt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[95%] gap-1 mx-auto">
                {/* left */}
                <div className="w-full h-[245px] md:h-[450px] skeleton"></div>
                {/* right */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-1">
                    {/* top */}
                    <div className="w-full h-[200px] md:h-[225px] skeleton"></div>
                    <div className="grid grid-cols-2 h-[200px] md:h-[225px] gap-1">
                        {/* left */}
                        <div className="w-full h-full skeleton"></div>
                        <div className="w-full h-full skeleton"></div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CollectionCategoriesSkeleton